import React, { useState, useEffect } from "react";
import {
  Text,
  View,
  StyleSheet,
  Button,
  Animated,
  TouchableOpacity,
  Image,
} from "react-native";
import { BarCodeScanner } from "expo-barcode-scanner";

const ScannerScreen = () => {
  const [hasPermission, setHasPermission] = useState(null);
  const [scanned, setScanned] = useState(false);
  const [animationLineHeight, setAnimationLineHeight] = useState(0);
  const [focusLineAnimation, setFocusLineAnimation] = useState(
    new Animated.Value(0)
  );
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
    const getBarCodeScannerPermissions = async () => {
      const { status } = await BarCodeScanner.requestPermissionsAsync();
      setHasPermission(status === "granted");
    };

    getBarCodeScannerPermissions();

    animateLine();
  }, []);

  const handleBarCodeScanned = ({ type, data }) => {
    setScanned(true);
    alert(`Bar code with type ${type} and data ${data} has been scanned!`);
  };

  if (hasPermission === null) {
    return <Text>Requesting for camera permission</Text>;
  }
  if (hasPermission === false) {
    return <Text>No access to camera</Text>;
  }

  const handleBack = () => {
    alert("back button pressed");
  };

  return (
    <View style={styles.container}>
      <BarCodeScanner
        onBarCodeScanned={scanned ? undefined : handleBarCodeScanned}
        style={StyleSheet.absoluteFillObject}
      />
      <View style={styles.overlay}>
        <View style={styles.unfocusedContainer}></View>
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
