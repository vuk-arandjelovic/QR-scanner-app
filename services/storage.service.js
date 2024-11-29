import { CONFIG } from "../config";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { jwtDecode } from "jwt-decode";

export class StorageService {
  storage;
  session;
  name = CONFIG.name;
  constructor(
    storage = process.browser &&
      typeof window !== "undefined" &&
      window.localStorage
  ) {
    if (storage !== undefined) this.storage = storage;
  }

  get namespace() {
    return "QRScanner__";
  }

  init(storage) {
    if (storage !== undefined) this.storage = storage;
  }

  async set(key, value) {
    try {
      await AsyncStorage.setItem(
        `${this.namespace}${key}`,
        JSON.stringify(value)
      );
    } catch (error) {
      console.error("Error setting item:", error);
    }
  }
  async put(key, value) {
    try {
      const existingValue = await this.get(key);
      if (!existingValue) {
        await AsyncStorage.setItem(
          `${this.namespace}${key}`,
          JSON.stringify(value)
        );
      } else {
        return false; // Key already exists
      }
    } catch (error) {
      console.error("Error putting item:", error);
    }
  }
  async get(key) {
    try {
      const value = await AsyncStorage.getItem(`${this.namespace}${key}`);
      return value ? JSON.parse(value) : null;
    } catch (error) {
      console.error("Error getting item:", error);
      return null;
    }
  }
  async getAll() {
    try {
      const keys = await AsyncStorage.getAllKeys();
      const filteredKeys = keys.filter((key) => key.startsWith(this.namespace));
      const items = await AsyncStorage.multiGet(filteredKeys);
      return items.map(([key, value]) => ({ key, value: JSON.parse(value) }));
    } catch (error) {
      console.error("Error getting all items:", error);
      return [];
    }
  }
  async delete(key) {
    try {
      await AsyncStorage.removeItem(`${this.namespace}${key}`);
    } catch (error) {
      console.error("Error deleting item:", error);
    }
  }
  async clear() {
    try {
      const keys = await AsyncStorage.getAllKeys();
      const filteredKeys = keys.filter((key) => key.startsWith(this.namespace));
      await AsyncStorage.multiRemove(filteredKeys);
    } catch (error) {
      console.error("Error clearing storage:", error);
    }
  }
  // Warning: this will delete other websites data as well on localhost only, as for actual domains, each domain has its own localStorage space, so namespaces isn't necessary
  clearEntireStorage() {
    if (this.storage) this.storage.clear();
  }
  async getUserId() {
    try {
      const token = await this.getToken();
      if (!token) return null;

      const decoded = jwtDecode(token);
      return decoded.id;
    } catch (error) {
      console.error("Error getting userId:", error);
      return null;
    }
  }
  getToken() {
    if (CONFIG.auth_token) return CONFIG.auth_token;
    return this.get("token");
  }
}

export default new StorageService();
