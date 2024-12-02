export const CONFIG = {
  name: "QRScanner__",
  api: {
    // core: "http://192.168.1.2:3001/api",
    core: process.env.EXPO_PUBLIC_API_URL,
    refreshTime: 5 * 60 * 1000, // 5 minutes
  },
};
