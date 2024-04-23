import {
  StyleSheet,
  Text,
  ScrollView,
  View,
  Image,
  Modal,
  TouchableOpacity,
} from "react-native";
import React, { useEffect, useState } from "react";
import apiExporter from "../../API/apiExporter";
const api = apiExporter;

const ReceiptScreen = () => {
  const [rawData, setRawData] = useState([]);
  const [selectedItem, setSelectedItem] = useState(null);
  const [isModalVisible, setIsModalVisible] = useState(false);

  useEffect(() => {
    // api.getRacunAll().then((res) => {
    //   setRawData(res);
    // });
    setRawData(mock);
  }, []);

  const handleFilter = () => {
    console.log(rawData);
    alert("triggered filter");
  };
  const handleDetails = (item) => {
    setSelectedItem(item);
    setIsModalVisible(true);
    console.log(item);
  };

  const closeModal = () => {
    setIsModalVisible(false);
  };
  return (
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
        {rawData.map((item, index) => (
          <TouchableOpacity
            style={styles.contentItem}
            key={index}
            onPress={() => handleDetails(item)}
          >
            <View>
              <Text style={{ fontSize: 25 }}>{item?.firma}</Text>
              <Text>{item?.pfrVreme}</Text>
            </View>
            <Text style={{ fontSize: 20 }}>{item?.ukupanIznos}</Text>
          </TouchableOpacity>
        ))}
      </View>
      <Modal visible={isModalVisible} animationType="fade" transparent={true}>
        <View
          style={{
            backgroundColor: "#00000080",
            width: "100%",
            height: "100%",
          }}
        >
          <View style={styles.modalContainer}>
            <Text style={styles.modalHeader}>Details</Text>
            <TouchableOpacity style={styles.closeButton} onPress={closeModal}>
              <Text style={styles.closeButtonText}>Close</Text>
            </TouchableOpacity>
            {selectedItem && (
              <View style={styles.modalContent}>
                <Text>{selectedItem?.prodavnica?.naziv}</Text>
                <Text>{selectedItem?.pfrVreme}</Text>
              </View>
            )}
          </View>
        </View>
      </Modal>
    </ScrollView>
  );
};

export default ReceiptScreen;

const styles = StyleSheet.create({
  container: {
    width: "100%",
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
  modalContainer: {
    top: 90,
    height: "75%",
    width: "90%",
    alignSelf: "center",
    // justifyContent: "center",
    alignItems: "center",
    borderRadius: 10,
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
  modalHeader: {
    fontSize: 24,
    fontWeight: "bold",
    margin: 15,
  },
  closeButton: {
    position: "absolute",
    top: 20,
    right: 20,
  },
  closeButtonText: {
    fontSize: 18,
    color: "#007AFF",
  },
  modalContent: {
    padding: 20,
  },
});

const mock = [
  {
    "id": "661f0080ab196a030eb3a134",
    "userId": "660f73255eb7e010e59d00b1",
    "url":
      "https://suf.purs.gov.rs/v/?vl=A1ZIR0ZMTU0zVkhHRkxNTTO6AQIAjvgBACzdUAAAAAAAAAABh4XMVxAAAABJ%2BZW%2BaikggNYx%2Bs7b2Gga71ziLliErrQSjQaBJJ2bYESiayjR2NPT1hlJ5bw4HB2WBdaA9tVHaJBhGoJ13Ny2imEsd6H68OSOFeapXafrVLhSGLq7zljIvqpSLX4K7kj4t2NLdhyt6QJDlAW%2FffLGb8MdXLx3l2p10x3xsIUsyksr63ElefTEx232CI1tBHOfMydxZboRNhZdvhrZujKTPGy7Y7Oym1kqk%2BPYE1usdYIB6lfl%2BXVTqd6UqxFRLjGW3WjMIx2LsykXZAc0GOyaZ5%2FpEqFBDh2eU7jNa0Ufi8yhhfudfRks54AHmfyA8%2FRmEI2q%2FxfQ5j3oTmKFgVDmnD6%2BBn9cVuED7JOZrddG0f1GRKIHLmXCN1%2F2zqerkYUmZA8o1iRFzJJIBc5pAIHtve9CVPE7UYD6Tu8N1ZsFGcwavjUMozRpuvYBh0Me7SoUYEZbMT87H6pX8eNfaGaz7TVUqmEFpgGNErZQcxZfdcL1S83bOSNlk%2FccSK1RPoxOklCZopMcohNRWj9K0kPCn5gOgWyAYMJv96KcvEQAlJNt1WdJhXnXzcnOmU7SPykde84oPRwiYYPA9G7Ez2fAGtKrNnTGcxDw03W9%2FRHYK7AwC8O%2BNXPnO77hpwsP6eDC1bWuxfQkU7jV%2BLBOQdz2wpxCoK%2F%2FRHsaO7jLO%2Bk4C3c%2BhALY4z7CyHSv3n4486I%3D",
    "pib": "106884584",
    "firma": "LIDL SRBIJA",
    "prodavnica": "1056774-Prodavnica br. 0107",
    "adresa": "ЗЕМУНСКА 2",
    "grad": "Београд-Нови Београд",
    "kasir": "19",
    "esir": "625/12.08.09.60",
    "artikli": [
      {
        "naziv": "Beli čips Paprika/KOM (Ђ)",
        "kolicina": 1,
        "cena": 164.99,
      },
      {
        "naziv": "Beli čips Paprika/KOM (Ђ)",
        "kolicina": 1,
        "cena": 164.99,
      },
      {
        "naziv": "Cola/KOM (Ђ)",
        "kolicina": 1,
        "cena": 54.99,
      },
      {
        "naziv": "Energetsko piće Moji/KOM (Ђ)",
        "kolicina": 1,
        "cena": 49.99,
      },
      {
        "naziv": "Semenke suncokreta/KOM (Ђ)",
        "kolicina": 1,
        "cena": 94.99,
      },
    ],
    "ukupanIznos": 529.95,
    "porez": 88.33,
    "pfrVreme": "15.04.2023. 18:42:54",
    "pfrBrojRacuna": "VHGFLMM3-VHGFLMM3-13151",
    "brojacRacuna": "129166/131514ПП",
  },
  {
    "id": "661f008fab196a030eb3a162",
    "userId": "660f73255eb7e010e59d00b1",
    "url":
      "https://suf.purs.gov.rs/v/?vl=AzQ4NlNYVzVSNDg2U1hXNVJncAAAtlsAAGCHJQcAAAAAAAABh1fdD7AAAABfOiweW45bU3oOwlmaImSaWyMwE%2FWw%2FziQYpQTX0Vctlr8OG7yo%2FaSPKIcggCUOuvkD3dvTA8rSqys8xnvbnvD%2BrIB0WD4RrIEhbgAJcnWlv%2BsfKjqovn8XYz5dd9Y%2FCegTXANuN%2BPJ%2Fxoi6rni%2FUZANvFiiVendoZjpHFVIgW9%2FsGzgRQAUSkUwMtrl5Mon14hCQisXSY87hEl9TEqrWo9gcV9St6FkRgIcNzv2YaAftHO5E0LD0jg9gqvcdCA9uO6XSjpY%2BCZuiX71y0Aq05jMtWpx6e7VGFy38ysYCKJgVzp%2BgA9qRoxQzT%2Brcm6%2FJwq8gWK40Ut1IwM56%2FMxytaemSP%2BcZPD3Jok8LP7Oo%2BS7F%2BULavBY6FKKHfq22X6cpq0HiIWsvaKkK0bb6BhJRcJIpJHUIH5PHCSpF7nB%2FhNriKQtRclcTJMa2dfj5XOpcS5UOm7WQk3ZSunNpvCN3JVA4eEtIxl8JWQ4xNH0%2FFQYVDZS06oCKIem%2Fhu%2BsSZpY9sRdO5akiWby2oaLxhhC2yPWOEgJ7yDxrb1vyweWlIIzq5XGogJGfZLIho6qXFfA4bfIpJLctxqVwg3B1WegkFMm4L1IN1zA4dIst1pVE7C%2BUVRBOa2UgHfM6hPr3JumCYX0txTRJVNLm89QuhVw9IyCb2En%2FKqfyHEz55RSlbJ3mxy4kXflOW2M%2FGrWGoI%3D",
    "pib": "104457054",
    "firma": "TEHNOMEDIA CENTAR DOO ZAJEČAR",
    "prodavnica": "1029312-Maloprodaja 38",
    "adresa": "ОМЛАДИНСКИХ БРИГАДА 33А",
    "grad": "Београд-Нови Београд",
    "kasir": "Dragana Matić R38",
    "esir": "663/1.0.0",
    "artikli": [
      {
        "naziv": "85395 SPECIJALIZOVAN KUHINJSKI APARAT BEPER BA.010 (Ђ)",
        "kolicina": 1,
        "cena": 11990,
      },
    ],
    "ukupanIznos": 11990,
    "porez": 1998.33,
    "pfrVreme": "06.04.2023. 20:38:38",
    "pfrBrojRacuna": "486SXW5R-486SXW5R-28775",
    "brojacRacuna": "23478/28775ПП",
  },
  {
    "id": "661f0081ab196a030eb3a13b",
    "userId": "660f73255eb7e010e59d00b1",
    "url":
      "https://suf.purs.gov.rs/v/?vl=AzM0S0E1OUFRMzRLQTU5QVHCBwEAfAYBAFSDHgAAAAAAAAABh3%2BCsGAAAAADYIR6RCTqdzoRPjJWRcOjTincGf9S92qhnVU%2BBhCGcTmMMLYKC4k%2BfXOX0kW1PYzY9xCfJBl1usCWW2Ve7%2BkuKHnzXTj%2FVcLpRgf0AvqJOxLJjOGThPOWm3t74TW7BIp0C8gMqoCkmx0IdEeS%2BJSCs7gjU5vLJSmiE2BFB84MVYxZWm8RNPFC0YU7qydeRqw04ayX8iXqzCrqMn84wK27Pp49HfeBS8ynr20u44KWg8ow8f7Go7x2hhPQN2X7d1uZ%2F%2FtfGdN7Jle99u3dUvpLt6%2B%2BnXk2Ln%2Fm1gIH%2F7ciWY2jEYAr%2BI1DFxwGGEwyK0OeobLzVGWES4zGV%2FcbEwZOqPGBVYVWQsJ0HdraTHuwC%2F%2B0%2BzU68Qe6kFxCyTThr42MZGDl5MQoh1G4VUGRmqm%2BfgMPbJUNLzZ5J0%2BfVVhV%2FaOxMhQ%2FPf69pDpoys9raElAcOiqi9HusWW7zIsU10V5yiBAx6lPB%2FHyaxTGSuW758bBBJkSF%2B2yFMtQeto7a%2B1H4i6AdkBbJaH5Q920ijJX11bhhoenW9dsx1g%2BRRq4fagI4RLHTdyDpK586zG7TbsB3lfSZOdcs81ZromN2X4KnBd9CtoUlNfu1WmevR937DxsAjWuWzCQkCxY7AQw6Z2Br6%2BtZKvUMF%2FF912WGjnta6sru0kBHiak29772fna9v3x6%2Flbg59%2Ben%2FsjqXmZu4%3D",
    "pib": "101670560",
    "firma": "MERCATOR-S",
    "prodavnica": "1229306-IDEA 597",
    "adresa": "ЈУРИЈА ГАГАРИНА 177",
    "grad": "Београд-Нови Београд",
    "kasir": "1032149",
    "esir": "431/2.0.0.2",
    "artikli": [
      {
        "naziv": "SOK COCKTA 0.5L KOLINSKA         KOM (Ђ)",
        "kolicina": 1,
        "cena": 89.99,
      },
      {
        "naziv": "BUREK SA SIROM I SPANACEM 90G    KOM (Е)",
        "kolicina": 2,
        "cena": 54.99,
      },
    ],
    "ukupanIznos": 199.97,
    "porez": 25,
    "pfrVreme": "14.04.2023. 13:24:44",
    "pfrBrojRacuna": "34KA59AQ-34KA59AQ-67522",
    "brojacRacuna": "67196/67522ПП",
  },
  {
    "id": "661f0082ab196a030eb3a140",
    "userId": "660f73255eb7e010e59d00b1",
    "url":
      "https://suf.purs.gov.rs/v/?vl=A0pDV1FGWUZaSkNXUUZZRlr0OgEA6DoBAAh7DgAAAAAAAAABh2pKHZsAAAAkBWLzH6g0zHl8xyJv41yrIqYEo2VbHo4X5sRqIQlvWTVZ9IyFiocTKfgBeD1%2BBjTyNAfD8eyZ%2Bfs07c2u8MpH%2B9PCCX8qkK7pY4ViA0OImtCRS7X3%2Bd0b5ql0bq9Z%2FZu5QzZ8PJ70%2F%2F7RDWQyhDZ3fFGciIpwez4I%2BpC1ZcfsCGZWMPQKDnF6m%2FWcOp53fca4F8i%2BNuzNOIRADzynx5etUDhi6JBzkavQmJczRQt%2BGcWiZNu2DATnuxGyJIRQdb09Vc8Aek5%2Fq17vBUTMCgRM6bkhIR0zsgipw4K0%2Br6Lyu8J8HUQoV3%2BqWe3YQ0AzL08oSMhx2cJvtLq6J%2FTLZo8jUO3F%2BMZbzpfeqaqpjuDFsjFp8bIo7y8NEgnn8LEQS7yZJEWOe0QssQGTGGWh7rV1L01rJbbOBw5aEfPLzQU5rk7rnkK2Bd%2BHb%2B%2Bpb1DuBHysz9apSyzsu3G2xNkmnLMIrjD0Ox8H4eW%2B%2BxO%2Fo3XQGNORyPmfgkBsaTP6hrzbvjwOUXFznlYOzM8bXmAm4skmHbmn4Ir7YdCjbF%2FvZYIllKluwFWHcnXfPfLsxx4BNpxTZX9gX7Jw6lQmw1pbpexZix1tVRdwi4pXXZrXKRf0wVSNNVCYdqkMZTmuKQzhUclM4U0ZUDtkWChKBMdCa3PttdEZ%2FQrIEErjlfI4wV2MJDuD3UOt9bOG88ZRQ%2FqwIM%3D",
    "pib": "100218528",
    "firma": "SCB DOO BEOGRAD",
    "prodavnica": "1107247-LILI",
    "adresa": "ВОЈВОДЕ СТЕПЕ 246",
    "grad": "Београд-Вождовац",
    "kasir": "borislavp",
    "esir": "315/1.0.0",
    "artikli": [
      {
        "naziv": "GUARANA MOJITO 50CL LIM/KOM (Ђ)",
        "kolicina": 1,
        "cena": 94.9,
      },
    ],
    "ukupanIznos": 94.9,
    "porez": 15.82,
    "pfrVreme": "10.04.2023. 10:30:54",
    "pfrBrojRacuna": "JCWQFYFZ-JCWQFYFZ-80628",
    "brojacRacuna": "80616/80628ПП",
  },
  {
    "id": "661f0083ab196a030eb3a144",
    "userId": "660f73255eb7e010e59d00b1",
    "url":
      "https://suf.purs.gov.rs/v/?vl=A1VCM0FUTFI2VUIzQVRMUja%2BWQMA%2BEUDALjJmgEAAAAAAAABh3%2BYDzwAAABYMPE1hD2XIEjaHZIe6rnn2CvptE8U%2Bwgz%2F1FJTbDsCKdd%2FnBeAV3tkr%2F%2BMQu1Lg91zOnrJ7Kr0rSyysHFLSFM8GbLRdDd40bbfRrs4ckD12UwYnivYfP9F2EEISwBqvW7TT8wuPej6ZdjdUzlprVweE%2FB55z8z8lqwhVO9jOYjCuFG%2Fog6VitjIpQY7azIirhVoy6PUGf%2FSxKv%2B3ZV20QonwqOxAwFI9LYQ2LZEPfaYlWqmRZ8whpHzG741UCEeM5A6Hal%2FziDV%2FBnpmAmOm4G%2BdJ64nX64LKZCKPl7wtKoMDXce0xLSi6pWPfd6P2PUm1hTxaHU7%2FvFxnk7ny1SIgo%2Fc33a87QDaX7AgHcr7mW%2F%2F2ExNFTZHn3C6rXuTrdtm2sEwvWbFrIVVxiSLjKdkK%2Fb1bEaMMOdSlFW8jYLbtcoelul2jLlYsAx%2FIon%2BooDURFzdm5G4bmKEbuHgzOjOQy3uBD2qZTIoHsKtgPPvRb2ny3cn9jhmy%2FPU3NB%2FjD3pbompGyL3RAp592umE2vhnyz9Y5PP9T3uTuFNL281IwPXMkpgkjixp136lPwZlODQojTBxPYv%2FBWTx0Af%2FKuaQSnCAk4G1jYaiIuLo22b6wJsdwRHYF%2Bn38vxnYg4ptYUVE8z0b1bybTj4bJvl2cofxPz0xzIbf2yXyQsv3EZsjTP5fWaIZC%2FVdiwwt5aSe4%3D",
    "pib": "106884584",
    "firma": "LIDL SRBIJA",
    "prodavnica": "1056774-Prodavnica br. 0107",
    "adresa": "ЗЕМУНСКА 2",
    "grad": "Београд-Нови Београд",
    "kasir": "46",
    "esir": "625/12.08.09.60",
    "artikli": [
      {
        "naziv": "Jami Pizza Capriccio/KOM (Ђ)",
        "kolicina": 1,
        "cena": 246.99,
      },
      {
        "naziv": "Jami Pizza Capriccio/KOM (Ђ)",
        "kolicina": 1,
        "cena": 246.99,
      },
      {
        "naziv": "Jami Pizza Capriccio/KOM (Ђ)",
        "kolicina": 1,
        "cena": 246.99,
      },
      {
        "naziv": "Jami Pizza Capriccio/KOM (Ђ)",
        "kolicina": 1,
        "cena": 246.99,
      },
      {
        "naziv": "Farba za jaja crvena/KOM (Ђ)",
        "kolicina": 2,
        "cena": 5.99,
      },
      {
        "naziv": "Šargarepa/KG (Е)",
        "kolicina": 1.118,
        "cena": 89.99,
      },
      {
        "naziv": "Margarin 81,5% MK30 (Ђ)",
        "kolicina": 1,
        "cena": 79.99,
      },
      {
        "naziv": "Krompir c. opr./KG (Е)",
        "kolicina": 2.608,
        "cena": 89.99,
      },
      {
        "naziv": "Mesni narezak/KOM (Ђ)",
        "kolicina": 1,
        "cena": 69.99,
      },
      {
        "naziv": "Mesni narezak/KOM (Ђ)",
        "kolicina": 1,
        "cena": 69.99,
      },
      {
        "naziv": "Mesni narezak/KOM (Ђ)",
        "kolicina": 1,
        "cena": 69.99,
      },
      {
        "naziv": "Smrznuti grašak/KOM (Е)",
        "kolicina": 1,
        "cena": 219.99,
      },
      {
        "naziv": "Sveže mleko 2,8%/KOM (Е)",
        "kolicina": 1,
        "cena": 179.99,
      },
      {
        "naziv": "Sveže mleko 2,8%/KOM (Е)",
        "kolicina": 1,
        "cena": 179.99,
      },
      {
        "naziv": "Mleveni keks/KOM (Ђ)",
        "kolicina": 1,
        "cena": 159.99,
      },
      {
        "naziv": "Pileća posebna mini/KOM (Ђ)",
        "kolicina": 1,
        "cena": 179.99,
      },
      {
        "naziv": "C Oblande/KOM (Ђ)",
        "kolicina": 1,
        "cena": 146.99,
      },
    ],
    "ukupanIznos": 2692.14,
    "porez": 379.36,
    "pfrVreme": "14.04.2023. 13:48:04",
    "pfrBrojRacuna": "UB3ATLR6-UB3ATLR6-21958",
    "brojacRacuna": "214520/219582ПП",
  },
];
