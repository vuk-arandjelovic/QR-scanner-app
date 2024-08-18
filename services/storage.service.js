import { CONFIG } from "../config";
import AsyncStorage from "@react-native-async-storage/async-storage";

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
    // return window.location.hostname === "localhost" ||
    //   window.location.hostname === "127.0.0.1"
    //   ? `VUK_${this.name}__` || "VUK_PROJECT__"
    //   : "VUK__";
    return "VUK__";
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

  update(type, data) {
    try {
      let logins = this.get("logins") || [];
      logins = logins.map((login) => {
        if (login[type].id === data.id) login[type] = data;

        return login;
      });

      this.set("logins", logins);
      this.set(type, data);
    } catch (error) {
      console.error(error);
    }
  }

  getToken() {
    return this.storage.get("api_token") || this.token;
  }

  get isLoggedIn() {
    const account = this.storage.get("account");
    const organization = this.storage.get("organization");
    const privateKey = this.storage.get("privateKey");

    return !!(account && organization && privateKey);
  }
}

export default new StorageService();
