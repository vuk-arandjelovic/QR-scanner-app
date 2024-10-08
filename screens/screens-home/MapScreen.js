import { StyleSheet, Text, ScrollView, View } from "react-native";
import { SelectList } from "react-native-dropdown-select-list";
import React, { useEffect, useState } from "react";
import MapView, { Callout } from "react-native-maps";
import { Marker } from "react-native-maps";
import apiExporter from "../../API/apiExporter";

const api = apiExporter;

const MapScreen = () => {
  const [selected, setSelected] = useState("");
  const [markers, setMarkers] = useState([]);
  const [rawData, setRawData] = useState([]);
  const [listBoxData, setListBoxData] = useState([]);
  const [rawDataCopy, setRawDataCopy] = useState([]);

  const mock = [
    {
      naziv: "1056774-Prodavnica br. 0107",
      grad: "Београд-Нови Београд",
      pib: 106884584,
      y: 20.389,
      adresa: "ЗЕМУНСКА 2   ",
      id: 1,
      x: 44.8299,
    },
    {
      naziv: "1229306-IDEA 597",
      grad: "Београд-Нови Београд",
      pib: 101670560,
      y: 20.3814,
      adresa: "ЈУРИЈА ГАГАРИНА 177   ",
      id: 2,
      x: 44.8012,
    },
    {
      naziv: "1107247-LILI",
      grad: "Београд-Вождовац",
      pib: 100218528,
      y: 20.482,
      adresa: "ВОЈВОДЕ СТЕПЕ 246   ",
      id: 3,
      x: 44.7722,
    },
    {
      naziv: "1099856-PJ SPORT VISION MEGASTORE",
      grad: "Београд-Нови Београд",
      pib: 100139481,
      y: 20.4082,
      adresa: "ЈУРИЈА ГАГАРИНА 16   ",
      id: 4,
      x: 44.8009,
    },
    {
      naziv: "1029312-Maloprodaja 38",
      grad: "Београд-Нови Београд",
      pib: 104457054,
      y: 20.4021,
      adresa: "ОМЛАДИНСКИХ БРИГАДА 33А   ",
      id: 5,
      x: 44.8106,
    },
    {
      naziv: "1115718-S.T.R. BLOK SHOP",
      grad: "Београд-Нови Београд",
      pib: 106774370,
      y: 20.3974,
      adresa: "ЈУРИЈА ГАГАРИНА 28   ",
      id: 6,
      x: 44.803,
    },
    {
      naziv: "1159749-Reserved SC BEO Beograd",
      grad: "Београд-Звездара",
      pib: 109839118,
      y: 20.5011,
      adresa: "ВОЈИСЛАВА ИЛИЋА 141   ",
      id: 7,
      x: 44.7864,
    },
    {
      naziv: "1027176-Veropoulos 5",
      grad: "Београд-Вождовац",
      pib: 100065309,
      y: 20.4784,
      adresa: "ВОЈВОДЕ СТЕПЕ 249   ",
      id: 8,
      x: 44.771,
    },
    {
      naziv: "1256801-VAPEMANIA 3",
      grad: "Београд-Звездара",
      pib: 106851710,
      y: 20.501,
      adresa: "ВОЈИСЛАВА ИЛИЋА 141   ",
      id: 9,
      x: 44.7864,
    },
    {
      naziv: "1111662-IDEA 333",
      grad: "Београд-Стари Град",
      pib: 101670560,
      y: 20.4612,
      adresa: "КРАЉА МИЛАНА 28   ",
      id: 10,
      x: 44.8097,
    },
  ];

  // Ucitavanje prodavnica sa API-ja i punjenje lista
  useEffect(() => {
    // // API poziv
    // api.getProdavnicaAll().then((res) => {
    //   // Podatci za debugging
    //   setRawData(res);

    //   // Ciscenje lista
    //   setListBoxData([]);
    //   setMarkers([]);

    //   // Obrada dobijenih prodavnica
    //   res.forEach((element) => {
    //     var listBoxObject = {};
    //     var markersObject = {};

    //     // Objekat za DropDown listu prodavnica
    //     listBoxObject["key"] = element["id"].toString();
    //     listBoxObject["value"] = element["naziv"];
    //     listBoxData.push(listBoxObject);

    //     // Objekat za marker na mapi
    //     markersObject["latitude"] = element["x"];
    //     markersObject["longitude"] = element["y"];
    //     markersObject["naziv"] = element["naziv"].toString();
    //     markersObject["grad"] = element["grad"].toString();
    //     markersObject["adresa"] = element["adresa"].toString();
    //     markers.push(markersObject);
    //   });

    //   // Pozivanje set metoda da bi se izazvalo ponovno crtanje
    //   setListBoxData(listBoxData);
    //   setMarkers(markers);
    // });
    setRawData(mock);
    setRawDataCopy(mock);
    setListBoxData([]);
    setMarkers([]);

    mock.forEach((element) => {
      var listBoxObject = {};
      var markersObject = {};

      listBoxObject["key"] = element["id"].toString();
      listBoxObject["value"] = element["naziv"].slice(8);
      listBoxObject["pib"] = element["pib"];
      if (listBoxData.find((pib) => pib.pib === element["pib"])) {
      } else {
        listBoxData.push(listBoxObject);
      }

      markersObject["latitude"] = element["x"];
      markersObject["longitude"] = element["y"];
      markersObject["naziv"] = element["naziv"].toString();
      markersObject["grad"] = element["grad"].toString();
      markersObject["adresa"] = element["adresa"].toString();
      markersObject["pib"] = element["pib"];
      markers.push(markersObject);
    });

    setListBoxData(listBoxData);
    setMarkers(markers);
  }, []);

  const handleSelect = () => {
    setRawDataCopy(
      rawDataCopy.map((item) => {
        item.pib === selected.pib;
      })
    );
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <MapView
        style={styles.map}
        initialRegion={{
          latitude: 44.78825,
          longitude: 20.4324,
          latitudeDelta: 0.0922,
          longitudeDelta: 0.0421,
        }}
      >
        {markers &&
          markers.map((marker, index) => (
            <Marker
              key={index}
              coordinate={{
                latitude: marker["latitude"],
                longitude: marker["longitude"],
              }}
            >
              <Callout tooltip>
                <View
                  style={{
                    backgroundColor: "white",
                    borderColor: "black",
                    borderRadius: 5,
                    padding: 20,
                  }}
                >
                  <Text style={{ fontWeight: "bold" }}>{marker["naziv"]}</Text>
                  <Text style={{ marginTop: 10 }}>
                    {marker["grad"] + "\n" + marker["adresa"]}
                  </Text>
                </View>
              </Callout>
            </Marker>
          ))}
      </MapView>
      <View style={styles.selectBox}>
        <Text style={styles.selectHeader}>Izaberi Firmu:</Text>
        <SelectList
          boxStyles={styles.selectList}
          dropdownItemStyles={styles.selectListItem}
          dropdownStyles={styles.selectListDropdown}
          setSelected={(val) => setSelected(val)}
          data={listBoxData}
          save="value"
          onSelect={handleSelect}
        />
      </View>
      <View style={styles.dataBox}>
        {!rawDataCopy?.length ? (
          <Text style={{ textAlign: "center" }}>No Data</Text>
        ) : (
          rawDataCopy?.map((item, index) => {
            return (
              <View key={index} style={styles.dataItem}>
                <Text style={styles.dataText}>Naziv: {item?.naziv}</Text>
                <Text style={styles.dataText}>Grad: {item?.grad}</Text>
                <Text style={styles.dataText}>Adresa: {item?.adresa}</Text>
                <Text style={styles.dataText}>PIB: {item?.pib}</Text>
              </View>
            );
          })
        )}
      </View>
    </ScrollView>
  );
};

export default MapScreen;

const styles = StyleSheet.create({
  container: {
    width: "100%",
    justifyContent: "center",
    alignItems: "flex-start",
  },
  map: {
    width: "100%",
    aspectRatio: 1,
  },
  selectBox: {
    width: "100%",
    padding: 20,
  },
  selectHeader: {
    fontSize: 20,
    textAlign: "left",
    width: "100%",
    marginBottom: 5,
  },
  selectList: {
    width: "100%",
    borderColor: "#0782F9",
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
  selectListItem: {
    borderColor: "#0782F9",
    borderBottomWidth: 1,
  },
  selectListDropdown: {
    backgroundColor: "#fff",
    borderColor: "#0782F9",
    borderWidth: 1,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.27,
    shadowRadius: 4.65,
    elevation: 6,
  },
  dataBox: {
    width: "100%",
    padding: 20,
    paddingTop: 0,
  },
  dataItem: {
    width: "100%",
    // borderColor: "#0782F9",
    backgroundColor: "#fff",
    // borderWidth: 1,
    borderRadius: 10,
    padding: 15,
    marginBottom: 10,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.27,
    shadowRadius: 4.65,
    elevation: 6,
  },
  dataText: {
    fontWeight: "600",
    marginBottom: 8,
    borderBottomWidth: 1,
    borderBottomColor: "#0782F9",
  },
});
