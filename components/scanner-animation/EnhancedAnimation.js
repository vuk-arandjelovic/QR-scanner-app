import React, { useEffect } from "react";
import { View, Animated, StyleSheet } from "react-native";

const ScannerFrame = ({
  isScanning = true,
  size = 280, // Frame size
  borderWidth = 3,
  borderColor = "#0782F9",
  cornerWidth = 20, // Width of corner brackets
  cornerLength = 30, // Length of corner brackets
  scanLineColor = "#0782F9",
  scanLineHeight = 2,
  scanLineWidth = "85%",
  duration = 2000,
  style,
}) => {
  const animationLine = new Animated.Value(0);

  useEffect(() => {
    if (isScanning) {
      startAnimation();
    }
    return () => {
      animationLine.setValue(0);
    };
  }, [isScanning]);

  const startAnimation = () => {
    Animated.loop(
      Animated.sequence([
        Animated.timing(animationLine, {
          toValue: 1,
          duration: duration / 2,
          useNativeDriver: true,
        }),
        Animated.timing(animationLine, {
          toValue: 0,
          duration: duration / 2,
          useNativeDriver: true,
        }),
      ])
    ).start();
  };

  // Corner component for reusability
  const Corner = ({ style }) => (
    <View style={[styles.corner, { borderColor }, style]}>
      <View
        style={[
          styles.cornerBorder,
          {
            width: cornerLength,
            height: borderWidth,
            backgroundColor: borderColor,
          },
        ]}
      />
      <View
        style={[
          styles.cornerBorder,
          {
            width: borderWidth,
            height: cornerLength,
            backgroundColor: borderColor,
          },
        ]}
      />
    </View>
  );

  return (
    <View style={[styles.container, { width: size, height: size }, style]}>
      {/* Corners */}
      <Corner style={styles.topLeft} />
      <Corner style={styles.topRight} />
      <Corner style={styles.bottomLeft} />
      <Corner style={styles.bottomRight} />

      {/* Scanning line */}
      <Animated.View
        style={[
          styles.scanLine,
          {
            width: scanLineWidth,
            height: scanLineHeight,
            backgroundColor: scanLineColor,
            transform: [
              {
                translateY: animationLine.interpolate({
                  inputRange: [0, 1],
                  outputRange: [0, size - scanLineHeight],
                }),
              },
            ],
          },
        ]}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    position: "relative",
    justifyContent: "center",
    alignItems: "center",
  },
  corner: {
    position: "absolute",
    width: 30,
    height: 30,
  },
  cornerBorder: {
    position: "absolute",
  },
  topLeft: {
    top: 0,
    left: 0,
  },
  topRight: {
    top: 0,
    right: 0,
    transform: [{ rotate: "90deg" }],
  },
  bottomLeft: {
    bottom: 0,
    left: 0,
    transform: [{ rotate: "-90deg" }],
  },
  bottomRight: {
    bottom: 0,
    right: 0,
    transform: [{ rotate: "180deg" }],
  },
  scanLine: {
    position: "absolute",
    left: "7.5%", // Centers the line when width is 85%
  },
});

export default ScannerFrame;
