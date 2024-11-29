import { useEffect, useState, useCallback } from "react";
import { ScrollView } from "react-native";
import { useFocusEffect, useNavigation } from "@react-navigation/core";
import StorageService from "@/services/storage.service";
const LogOutScreen = () => {
  const navigator = useNavigation();
  const [hasNavigated, setHasNavigated] = useState(false);

  useEffect(() => {
    if (hasNavigated) {
      StorageService.delete("token");
      navigator.navigate("Welcome");
    }
  }, [hasNavigated]);

  useFocusEffect(
    useCallback(() => {
      setHasNavigated(true);
    }, [])
  );
  return <ScrollView></ScrollView>;
};
export default LogOutScreen;
