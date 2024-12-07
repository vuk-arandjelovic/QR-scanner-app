import { StyleSheet } from "react-native";

export const welcome = {
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#0782F9",
  },
  logoContainer: {
    width: "75%",
  },
  logo: {
    objectFit: "contain",
    borderRadius: 15,
    height: 250,
    aspectRatio: 1 / 1,
  },
  buttonContainer: {
    width: "60%",
    justifyContent: "center",
    alignItems: "center",
    marginTop: 20,
  },
  button: {
    backgroundColor: "#0782F9",
    width: "100%",
    padding: 15,
    borderRadius: 15,
    marginTop: 15,
    alignItems: "center",
    borderWidth: 2,
    borderColor: "#FAFAFA",
  },
  buttonText: {
    color: "white",
    fontWeight: "700",
    fontSize: 16,
  },
  buttonOutline: {
    backgroundColor: "white",
    borderColor: "#0782F9",
    borderWidth: 2,
  },
  buttonOutlineText: {
    color: "#0782F9",
    fontWeight: "700",
    fontSize: 16,
  },
};

export const auth = {
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  title: {
    fontSize: 30,
    fontWeight: "700",
    color: "#0782F9",
  },
  inputContainer: {
    width: "80%",
    marginTop: 40,
  },
  input: {
    backgroundColor: "white",
    paddingHorizontal: 15,
    paddingVertical: 10,
    borderRadius: 15,
    marginTop: 10,
  },
  buttonContainer: {
    width: "80%",
    justifyContent: "center",
    alignItems: "center",
    marginTop: 10,
    marginBottom: 20,
  },
  button: {
    backgroundColor: "#0782F9",
    width: "100%",
    padding: 15,
    borderRadius: 15,
    marginTop: 5,
    alignItems: "center",
  },
  buttonText: {
    color: "white",
    fontWeight: "700",
    fontSize: 16,
  },
};

export const home = {
  container: {
    ...StyleSheet.absoluteFillObject,
    justifyContent: "space-between",
    alignItems: "center",
    paddingVertical: 20,
  },
  containerTop: {
    justifyContent: "center",
    alignItems: "center",
    width: "80%",
    borderRadius: 15,
    aspectRatio: 2 / 1,
  },
  containerTopText: {
    fontSize: 24,
    fontWeight: "700",
    color: "#0782F9",
  },
  containerBottom: {
    padding: 5,
    justifyContent: "center",
    alignItems: "center",
    width: "100%",
  },
  buttonScanner: {
    backgroundColor: "#0782F9",
    width: "80%",
    aspectRatio: 1 / 1,
    borderRadius: 10,
    padding: 30,
    paddingTop: 15,
    marginBottom: 15,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.27,
    shadowRadius: 4.65,
    elevation: 6,
  },
  buttonScannerText: {
    color: "white",
    fontWeight: "700",
    fontSize: 16,
    paddingBottom: 13,
  },
  logo: {
    objectFit: "contain",
    borderRadius: 10,
    height: 250,
    aspectRatio: 1 / 1,
  },
};

export const profile = {
  container: {
    flex: 1,
    backgroundColor: "#f5f5f5",
  },
  profileHeader: {
    backgroundColor: "#0782F9",
    padding: 30,
    alignItems: "center",
  },
  username: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#fff",
    marginBottom: 5,
  },
  email: {
    fontSize: 16,
    color: "#fff",
    opacity: 0.9,
  },
  statsContainer: {
    padding: 15,
  },
  statRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 15,
  },
  statCard: {
    backgroundColor: "#fff",
    borderRadius: 12,
    padding: 15,
    flex: 0.48,
    alignItems: "center",
    elevation: 3,
  },
  statValue: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#0782F9",
    marginBottom: 5,
  },
  statLabel: {
    fontSize: 14,
    color: "#666",
  },
  financialCard: {
    backgroundColor: "#fff",
    borderRadius: 12,
    padding: 20,
    marginBottom: 15,
    elevation: 3,
  },
  cardHeader: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#0782F9",
    marginBottom: 15,
  },
  cardRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 10,
  },
  cardLabel: {
    fontSize: 16,
    color: "#666",
  },
  cardValue: {
    fontSize: 16,
    fontWeight: "500",
    color: "#333",
  },
  highlightsCard: {
    backgroundColor: "#fff",
    borderRadius: 12,
    padding: 20,
    elevation: 3,
  },
  highlight: {
    marginBottom: 15,
  },
  highlightLabel: {
    fontSize: 16,
    color: "#666",
    marginBottom: 5,
  },
  highlightValue: {
    fontSize: 18,
    fontWeight: "500",
    color: "#333",
  },
  highlightSubtext: {
    fontSize: 14,
    color: "#666",
    marginTop: 2,
  },
};

export const scanner = {
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
};

export const map = {
  container: {
    width: "100%",
  },
  map: {
    width: "100%",
    aspectRatio: 1,
  },
  filterBox: {
    width: "100%",
    padding: 20,
  },
  filterHeader: {
    fontSize: 20,
    marginBottom: 10,
  },
  selectList: {
    borderColor: "#0782F9",
    backgroundColor: "#fff",
  },
  storeList: {
    padding: 20,
  },
  storeCard: {
    backgroundColor: "#fff",
    padding: 15,
    borderRadius: 10,
    marginBottom: 10,
    elevation: 3,
  },
  storeName: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 5,
  },
  storeCompany: {
    fontSize: 16,
    color: "#0782F9",
    marginBottom: 5,
  },
  storeAddress: {
    fontSize: 14,
    color: "#666",
  },
  storeCity: {
    fontSize: 14,
    color: "#666",
  },
  storeInfo: {
    backgroundColor: "#f8f8f8",
    padding: 15,
    borderRadius: 10,
    marginBottom: 20,
  },
  infoText: {
    fontSize: 16,
    marginBottom: 5,
  },
  calloutContainer: {
    backgroundColor: "white",
    borderRadius: 6,
    padding: 15,
    maxWidth: 200,
  },
  calloutTitle: {
    fontSize: 16,
    fontWeight: "bold",
    marginBottom: 5,
  },
  calloutText: {
    fontSize: 14,
    color: "#666",
  },
  receiptHeader: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 10,
    color: "#0782F9",
  },
  receiptCard: {
    backgroundColor: "#f8f8f8",
    padding: 15,
    borderRadius: 10,
    marginBottom: 10,
  },
  receiptDate: {
    fontSize: 16,
    fontWeight: "bold",
  },
  receiptTotal: {
    fontSize: 16,
    color: "#0782F9",
    marginTop: 5,
  },
  receiptItems: {
    fontSize: 14,
    color: "#666",
    marginTop: 5,
  },
};

export const shared = {
  modalOverlay: {
    flex: 1,
    backgroundColor: "rgba(0,0,0,0.5)",
    justifyContent: "center",
    alignItems: "center",
  },
  modalContainer: {
    width: "90%",
    maxHeight: "80%",
    backgroundColor: "white",
    borderRadius: 20,
    padding: 20,
    elevation: 5,
  },
  modalHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 20,
    paddingBottom: 10,
    borderBottomWidth: 1,
    borderBottomColor: "#eee",
    fontSize: 24,
    fontWeight: "bold",
  },
  modalTitle: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#0782F9",
  },
  closeButton: {
    padding: 5,
  },
  closeButtonText: {
    fontSize: 30,
    color: "#666",
  },
  section: {
    marginBottom: 20,
    padding: 15,
    backgroundColor: "#f8f8f8",
    borderRadius: 10,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#0782F9",
    marginBottom: 10,
  },
  detailText: {
    fontSize: 16,
    marginBottom: 5,
    color: "#333",
  },
  itemCard: {
    backgroundColor: "white",
    padding: 10,
    marginBottom: 8,
    borderRadius: 8,
    elevation: 2,
  },
  itemName: {
    fontSize: 16,
    fontWeight: "bold",
    marginBottom: 4,
  },
  itemDetails: {
    fontSize: 14,
    color: "#666",
  },
  itemTotal: {
    fontSize: 15,
    fontWeight: "500",
    marginTop: 4,
    color: "#0782F9",
  },
  logoutContainer: {
    borderTopWidth: 1,
    borderBottomWidth: 1,

    borderColor: "#ccc",
    marginBottom: 30,
  },
};

export const query = {
  container: {
    flex: 1,
    backgroundColor: "#f5f5f5",
    padding: 15,
  },
  searchContainer: {
    flexDirection: "row",
    marginBottom: 15,
  },
  searchInput: {
    flex: 1,
    backgroundColor: "white",
    borderRadius: 10,
    padding: 12,
    marginRight: 10,
    borderWidth: 1,
    borderColor: "#0782F9",
  },
  searchButton: {
    backgroundColor: "#0782F9",
    borderRadius: 10,
    padding: 12,
    justifyContent: "center",
  },
  searchButtonText: {
    color: "white",
    fontWeight: "bold",
  },
  loader: {
    marginTop: 20,
  },
  resultsContainer: {
    flex: 1,
  },
  itemCard: {
    backgroundColor: "white",
    borderRadius: 10,
    padding: 15,
    marginBottom: 10,
    elevation: 3,
  },
  itemName: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 10,
  },
  priceContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 5,
  },
  priceLabel: {
    fontSize: 16,
    color: "#666",
  },
  priceValue: {
    fontSize: 18,
    fontWeight: "500",
    color: "#0782F9",
  },
  dateText: {
    color: "#666",
    fontSize: 14,
    marginBottom: 10,
  },
  historyButton: {
    backgroundColor: "#f0f0f0",
    padding: 8,
    borderRadius: 8,
    alignItems: "center",
  },
  historyButtonText: {
    color: "#0782F9",
    fontWeight: "500",
  },
  noResults: {
    textAlign: "center",
    color: "#666",
    marginTop: 20,
    fontSize: 16,
  },
  priceHistoryContainer: {
    maxHeight: "80%",
  },
  pricesList: {
    paddingHorizontal: 5,
  },
  priceHistoryItem: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingVertical: 12,
    paddingHorizontal: 8,
    borderBottomWidth: 1,
    borderBottomColor: "#eee",
  },
  priceHistoryDate: {
    fontSize: 16,
    color: "#666",
  },
  priceHistoryValue: {
    fontSize: 16,
    fontWeight: "500",
    color: "#0782F9",
  },
};

export const receipts = {
  mainContainer: {
    flex: 1,
    backgroundColor: "#f5f5f5",
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    padding: 20,
    backgroundColor: "#fff",
    borderBottomWidth: 1,
    borderBottomColor: "#eee",
  },
  headerText: {
    fontSize: 24,
    fontWeight: "bold",
  },
  filterSection: {
    marginBottom: 20,
  },
  filterLabel: {
    fontSize: 16,
    fontWeight: "500",
    marginBottom: 8,
    marginTop: 12,
  },
  dateInput: {
    borderWidth: 1,
    borderColor: "#0782F9",
    borderRadius: 8,
    padding: 12,
    marginBottom: 10,
  },
  input: {
    borderWidth: 1,
    borderColor: "#0782F9",
    borderRadius: 8,
    padding: 12,
    marginBottom: 10,
  },
  buttonRow: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  button: {
    flex: 1,
    padding: 15,
    borderRadius: 8,
    marginHorizontal: 5,
  },
  clearButton: {
    backgroundColor: "#ff4444",
  },
  applyButton: {
    backgroundColor: "#0782F9",
  },
  buttonText: {
    color: "#fff",
    textAlign: "center",
    fontWeight: "bold",
  },
  content: {
    flex: 1,
    padding: 15,
  },
  receiptCard: {
    backgroundColor: "#fff",
    padding: 15,
    borderRadius: 10,
    marginBottom: 10,
    elevation: 3,
  },
  storeName: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 5,
  },
  receiptDate: {
    color: "#666",
    marginBottom: 5,
  },
  receiptTotal: {
    fontSize: 16,
    fontWeight: "500",
    color: "#0782F9",
  },
  filterButton: {
    backgroundColor: "#0782F9",
    padding: 10,
    borderRadius: 8,
  },
  filterButtonText: {
    color: "#fff",
    fontWeight: "bold",
  },
};

export const guarantee = {
  mainContainer: {
    flex: 1,
    backgroundColor: "#f5f5f5",
  },
  container: {
    flex: 1,
  },
  header: {
    padding: 20,
    borderBottomWidth: 1,
    borderBottomColor: "#0782F9",
  },
  headerText: {
    fontSize: 24,
    fontWeight: "bold",
  },
  content: {
    padding: 20,
  },
  guaranteeCard: {
    backgroundColor: "white",
    padding: 15,
    borderRadius: 10,
    marginBottom: 10,
    elevation: 3,
  },
  guaranteeName: {
    fontSize: 18,
    fontWeight: "bold",
  },
  guaranteeDate: {
    fontSize: 16,
    color: "#666",
    marginBottom: 10,
  },
  buttonRow: {
    flexDirection: "row",
    justifyContent: "flex-end",
    gap: 10,
  },
  cardButton: {
    padding: 8,
    borderRadius: 5,
    minWidth: 70,
    alignItems: "center",
  },
  editButton: {
    backgroundColor: "#0782F9",
  },
  deleteButton: {
    backgroundColor: "#ff4444",
  },
  addButton: {
    position: "absolute",
    bottom: 20,
    right: 20,
    width: 60,
    height: 60,
    borderRadius: 30,
    backgroundColor: "#0782F9",
    justifyContent: "center",
    alignItems: "center",
    elevation: 5,
  },
  addButtonText: {
    fontSize: 30,
    lineHeight: 30,
    color: "white",
  },
  formContainer: {
    width: "100%",
  },
  label: {
    fontSize: 16,
    marginBottom: 5,
    marginTop: 10,
  },
  selectBox: {
    borderWidth: 1,
    borderColor: "#0782F9",
    borderRadius: 8,
    marginBottom: 10,
  },
  input: {
    borderWidth: 1,
    borderColor: "#0782F9",
    borderRadius: 8,
    padding: 10,
    marginBottom: 10,
  },
  buttonContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 20,
  },
  button: {
    flex: 1,
    padding: 15,
    borderRadius: 8,
    marginHorizontal: 5,
  },
  cancelButton: {
    backgroundColor: "#ff4444",
  },
  submitButton: {
    backgroundColor: "#0782F9",
  },
  buttonText: {
    color: "white",
    fontWeight: "bold",
  },
  dateInput: {
    borderWidth: 1,
    borderColor: "#0782F9",
    borderRadius: 8,
    padding: 15,
    marginBottom: 10,
  },
  dateText: {
    color: "#000",
  },
  itemCard: {
    backgroundColor: "white",
    padding: 10,
    marginBottom: 8,
    borderRadius: 8,
    elevation: 2,
  },
  itemName: {
    fontSize: 16,
    fontWeight: "bold",
    marginBottom: 4,
  },
  itemDetails: {
    fontSize: 14,
    color: "#666",
  },
  itemTotal: {
    fontSize: 15,
    fontWeight: "500",
    marginTop: 4,
    color: "#0782F9",
  },
  expiredGuaranteeCard: {
    backgroundColor: "#ffebee",
    borderColor: "#ef5350",
    borderWidth: 1,
  },
  expiredText: {
    color: "#d32f2f",
  },
  highlightedItem: {
    backgroundColor: "#e3f2fd",
    borderColor: "#42a5f5",
    borderWidth: 1,
  },
  highlightedText: {
    color: "#1976d2",
    fontWeight: "bold",
  },
  itemDetails: {
    backgroundColor: "#f5f5f5",
    padding: 10,
    borderRadius: 8,
    marginBottom: 15,
  },
};

export const itemCard = {
  itemCard: {
    backgroundColor: "white",
    padding: 10,
    marginBottom: 8,
    borderRadius: 8,
    elevation: 2,
  },
  highlightedCard: {
    backgroundColor: "#e3f2fd",
    borderColor: "#42a5f5",
    borderWidth: 1,
  },
  itemName: {
    fontSize: 16,
    fontWeight: "bold",
    marginBottom: 4,
  },
  itemDetails: {
    fontSize: 14,
    color: "#666",
  },
  itemTotal: {
    fontSize: 15,
    fontWeight: "500",
    marginTop: 4,
    color: "#0782F9",
  },
  dateText: {
    color: "#666",
    fontSize: 14,
    marginTop: 4,
  },
  actionsContainer: {
    flexDirection: "row",
    justifyContent: "flex-end",
    marginTop: 8,
  },
};

export const billCard = {
  billCard: {
    backgroundColor: "#fff",
    padding: 15,
    borderRadius: 10,
    marginBottom: 10,
    elevation: 3,
  },
  storeName: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 5,
  },
  billDate: {
    color: "#666",
    marginBottom: 5,
  },
  billPfr: {
    fontSize: 14,
    color: "#0782F9",
    marginBottom: 3,
  },
  itemCount: {
    fontSize: 14,
    color: "#666",
    marginBottom: 3,
  },
  billTotal: {
    fontSize: 16,
    fontWeight: "500",
    color: "#0782F9",
  },
  actionsContainer: {
    flexDirection: "row",
    justifyContent: "flex-end",
    marginTop: 8,
  },
};

export const baseModal = {
  modalOverlay: {
    flex: 1,
    backgroundColor: "rgba(0,0,0,0.5)",
    justifyContent: "center",
    alignItems: "center",
  },
  modalContainer: {
    width: "90%",
    maxHeight: "80%",
    backgroundColor: "white",
    borderRadius: 20,
    padding: 20,
    elevation: 5,
  },
  modalHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 20,
    paddingBottom: 10,
    borderBottomWidth: 1,
    borderBottomColor: "#eee",
  },
  modalTitle: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#0782F9",
  },
  closeButton: {
    padding: 5,
  },
  closeButtonText: {
    fontSize: 30,
    color: "#666",
  },
  contentContainer: {
    marginBottom: 20,
  },
  footer: {
    borderTopWidth: 1,
    borderTopColor: "#eee",
    paddingTop: 15,
  },
};

export default {
  welcome,
  auth,
  home,
  profile,
  scanner,
  map,
  shared,
  query,
  receipts,
  guarantee,
  itemCard,
  billCard,
  baseModal,
};
