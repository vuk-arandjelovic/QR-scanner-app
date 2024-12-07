import React, { useEffect } from "react";
import { View, Animated, StyleSheet } from "react-native";

const ScannerAnimation = ({
  isScanning = true,
  containerHeight = 300,
  scanLineColor = "#0782F9",
  scanLineHeight = 2,
  scanLineWidth = "100%",
  duration = 2000, // Full animation cycle duration in ms
  style,
}) => {
  const animationLine = new Animated.Value(0);

  useEffect(() => {
    if (isScanning) {
      startAnimation();
    }
    // Cleanup animation when component unmounts
    return () => {
      animationLine.setValue(0);
      // Optional: You might want to stop the animation here
    };
  }, [isScanning]);

  const startAnimation = () => {
    Animated.loop(
      Animated.sequence([
        // Move down
        Animated.timing(animationLine, {
          toValue: 1,
          duration: duration / 2,
          useNativeDriver: true,
        }),
        // Move back up
        Animated.timing(animationLine, {
          toValue: 0,
          duration: duration / 2,
          useNativeDriver: true,
        }),
      ])
    ).start();
  };

  return (
    <View style={[styles.container, { height: containerHeight }, style]}>
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
                  outputRange: [0, containerHeight],
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
    width: "100%",
    overflow: "hidden",
  },
  scanLine: {
    position: "absolute",
    left: 0,
  },
});

export default ScannerAnimation;
