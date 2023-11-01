import {
  StyleSheet,
  Text,
  ScrollView,
  View,
  Image,
  TouchableOpacity,
} from "react-native";
import React, { useEffect, useState } from "react";
import apiExporter from "../../API/apiExporter";
import { FlipInEasyX } from "react-native-reanimated";
const api = apiExporter;

const QueryScreen = () => {
  const [rawData, setRawData] = useState([]);

  useEffect(() => {
    // api
    //   .getAppVersion()
    //   // api.getProdavnicaAll()
    //   .then((res) => {
    //     setRawData([res]);
    //   });
  }, []);

  const handleFilter = () => {
    alert("triggered filter");
  };
  const handleDetails = (id) => {};

  return (
    // <View>
    //   <Text>QueryScreen</Text>
    //   {/* <Text>{rawData[0].map((item)=>{
    //     // console.log(item)
    //     // console.log(item['naziv'])
    //     return `${item['naziv']}
    //   })}
    //   </Text> */}
    //   <Text>
    //     {rawData.map((item) => {
    //       return item["required_version="];
    //     })}
    //   </Text>
    // </View>
    <ScrollView style={styles.container}>
      <View style={styles.header}>
        <Text style={{ fontSize: 30 }}>Skenirani Racuni:</Text>
        <TouchableOpacity style={styles.filter} onPress={handleFilter}>
          <Image
            style={styles.filterIcon}
            source={require("../../assets/filter_icon.png")}
          />
        </TouchableOpacity>
      </View>
      <View style={styles.content}>
        {/* map */}
        <TouchableOpacity style={styles.contentItem}>
          <View>
            <Text style={{ fontSize: 25 }}>Maxi Delhaize</Text>
            <Text>30.11.2023</Text>
          </View>
          <Text style={{ fontSize: 20 }}>2.342,00 RSD</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.contentItem}>
          <View>
            <Text style={{ fontSize: 25 }}>Maxi Delhaize</Text>
            <Text>30.11.2023</Text>
          </View>
          <Text style={{ fontSize: 20 }}>2.342,00 RSD</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.contentItem}>
          <View>
            <Text style={{ fontSize: 25 }}>Maxi Delhaize</Text>
            <Text>30.11.2023</Text>
          </View>
          <Text style={{ fontSize: 20 }}>2.342,00 RSD</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
};

export default QueryScreen;

const styles = StyleSheet.create({
  container: {
    width: "100%",
    // justifyContent: "center",
    // alignItems: "flex-start",
    marginTop: 20,
  },
  header: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingBottom: 10,
    borderBottomColor: "#0782F9",
    borderBottomWidth: 2,
    marginHorizontal: 20,
  },
  filter: {
    borderRadius: 10,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.27,
    shadowRadius: 4.65,
    elevation: 6,
  },
  filterIcon: {
    aspectRatio: 1 / 1,
    height: 40,
    padding: 10,
    backgroundColor: "#fff",
    borderRadius: 10,
  },
  content: {
    paddingVertical: 10,
    paddingHorizontal: 20,
  },
  contentItem: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 10,
    padding: 10,
    borderRadius: 10,
    // borderColor: "#000",
    // borderWidth: 2,
    backgroundColor: "#fff",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.27,
    shadowRadius: 4.65,
    elevation: 6,
  },
});
