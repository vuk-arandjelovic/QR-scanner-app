import React, { useState, useEffect, useRef } from "react";
import {
  Text,
  View,
  StyleSheet,
  Animated,
  TouchableOpacity,
  Image,
  Dimensions,
} from "react-native";
import { useNavigation } from "@react-navigation/core";
import { Camera, CameraView } from "expo-camera";
import ScrapeService from "@/services/scrape.service";
import Toast from "react-native-root-toast";
import AntDesign from "@expo/vector-icons/AntDesign";

const ScannerScreen = () => {
  const navigator = useNavigation();
  const [hasPermission, setHasPermission] = useState(null);
  const [scanned, setScanned] = useState(false);
  const [animationLineHeight, setAnimationLineHeight] = useState(0);
  const [focusLineAnimation, setFocusLineAnimation] = useState(
    new Animated.Value(0)
  );
  const lastScanRef = useRef("");
  const scanTimeoutRef = useRef(null);
  const toastOffset = useRef(80);

  const SCREEN_WIDTH = Dimensions.get("window").width;
  const TOAST_WIDTH = SCREEN_WIDTH * 0.9;

  const showToast = (message, type = "info") => {
    const backgroundColor =
      type === "success" ? "#28a745" : type === "error" ? "#dc3545" : "#17a2b8";

    const toast = Toast.show(message, {
      duration: Toast.durations.SHORT,
      position: toastOffset.current,
      shadow: true,
      animation: true,
      hideOnPress: true,
      backgroundColor,
      containerStyle: {
        width: TOAST_WIDTH,
        padding: 15,
        borderRadius: 8,
      },
    });

    toastOffset.current += 60;
    setTimeout(() => {
      toastOffset.current -= 60;
    }, Toast.durations.SHORT);

    return toast;
  };
  const animateLine = () => {
    Animated.sequence([
      Animated.timing(focusLineAnimation, {
        toValue: 1,
        duration: 1000,
        useNativeDriver: true,
      }),
      Animated.timing(focusLineAnimation, {
        toValue: 0,
        duration: 1000,
        useNativeDriver: true,
      }),
    ]).start(animateLine);
  };

  useEffect(() => {
    const getCameraPermissions = async () => {
      const { status } = await Camera.requestCameraPermissionsAsync();
      setHasPermission(status === "granted");
    };

    getCameraPermissions();

    animateLine();

    return () => {
      if (scanTimeoutRef.current) {
        clearTimeout(scanTimeoutRef.current);
      }
    };
  }, []);

  const handleBarcodeScanned = async ({ type, data }) => {
    if (data === lastScanRef.current) {
      return;
    }
    lastScanRef.current = data;
    setScanned(true);
    showToast("Processing bill...", "info");

    try {
      const res = await ScrapeService.scrape(data);
      console.log(res);
      if (res.error) {
        showToast(res.error, "error");
      } else {
        showToast("Bill processed successfully", "success");

        handleBack();
      }
    } catch (error) {
      showToast(error, "error");
    }

    scanTimeoutRef.current = setTimeout(() => {
      lastScanRef.current = "";
    }, 1000);
  };

  if (hasPermission === null) {
    return <Text>Requesting for camera permission</Text>;
  }
  if (hasPermission === false) {
    return <Text>No access to camera</Text>;
  }

  const handleBack = () => {
    navigator.navigate("Home");
  };

  return (
    <View style={styles.container}>
      <CameraView
        onBarcodeScanned={scanned ? undefined : handleBarcodeScanned}
        barcodeScannerSettings={{
          barcodeTypes: ["qr"],
        }}
        style={StyleSheet.absoluteFillObject}
      />
      <View style={styles.overlay}>
        <View style={styles.unfocusedContainer}>
          <TouchableOpacity onPress={handleBack} style={styles.backButton}>
            <AntDesign name="back" size={34} color="white" />
          </TouchableOpacity>
        </View>
        <View style={styles.middleContainer}>
          <View style={styles.unfocusedContainer}></View>
          <View
            onLayout={(e) =>
              setAnimationLineHeight(e.nativeEvent.layout.height)
            }
            style={styles.focusedContainer}
          >
            {!scanned && (
              <Animated.View
                style={[
                  styles.animationLineStyle,
                  {
                    transform: [
                      {
                        translateY: focusLineAnimation.interpolate({
                          inputRange: [0, 1],
                          outputRange: [0, animationLineHeight],
                        }),
                      },
                    ],
                  },
                ]}
              />
            )}
            {scanned && (
              <TouchableOpacity
                onPress={() => setScanned(false)}
                style={styles.rescanIconContainer}
              >
                <Image
                  source={require("../../assets/rescan.png")}
                  style={{ width: 50, height: 50 }}
                />
              </TouchableOpacity>
            )}
          </View>
          <View style={styles.unfocusedContainer}></View>
        </View>
        <View style={styles.unfocusedContainer}></View>
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    position: "relative",
  },
  overlay: {
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
  },
  unfocusedContainer: {
    flex: 1,
    backgroundColor: "rgba(0,0,0,0.7)",
  },
  middleContainer: {
    flexDirection: "row",
    flex: 1.5,
  },
  focusedContainer: {
    flex: 6,
  },
  animationLineStyle: {
    height: 2,
    width: "100%",
    backgroundColor: "#0782F9",
  },
  rescanIconContainer: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  backButton: {
    position: "absolute",
    top: 50,
    left: 20,
  },
});
export default ScannerScreen;

// STARI KOD, RADI ALI NEMA ANIMACIJE - NEDOVRSEN ZBOG DUGMICA
//   return (
//     <View style={styles.container}>
//       <BarCodeScanner
//         onBarCodeScanned={scanned ? undefined : handleBarCodeScanned}
//         style={styles.camera}
//       >
//       <Button title={'Tap to go back'} style={styles.buttonBack} onPress={handleBack}/>
//       </BarCodeScanner>
//       {scanned && <Button title={'Tap to Scan Again'} style={styles.buttonScan} onPress={() => setScanned(false)} />}
//     </View>
//   );
// }

// export default ScannerScreen;

// const styles = StyleSheet.create({
//   container: {
//     position:'relative',
//     justifyContent: 'center',
//     alignItems: 'center',
//     width:"100%",
//     height:"100%",
//     // paddingBottom:80,
//   },
//   camera:{
//     // ...StyleSheet.absoluteFillObject,
//     position:'absolute',
//     width:"100%",
//     height:"100%",
//     backgroundColor: 'transparent',
//     justifyContent:"flex-end"
//   },
//   buttonScan:{
//     position:'absolute',
//     width: "100%",
//     borderWidth: 2,
//     borderColor: "red",
//   },
//   buttonBack:{
//     position: 'relative',
//     width: "100%",
//   },
// });
