import AsyncStorage from '@react-native-async-storage/async-storage';

export const saveStorageData = async (key: string, value: string) => {
  try {
    await AsyncStorage.setItem(key, value);
  } catch (e) {
    console.error(e);
  }
};

export const getStorageData = async (key: string) => {
  try {
    const jsonValue = await AsyncStorage.getItem(key);

    if (typeof jsonValue === 'string') {
      return jsonValue;
    }

    return jsonValue != null ? JSON.parse(jsonValue) : null;
  } catch (e) {
    console.error(e);
  }
};

export const getAllStorageData = async (keys: string[]) => {
  try {
    const values = await AsyncStorage.multiGet(keys);

    return values;
  } catch (e) {
    console.error(e);
  }
};

export const getAllStorageKeys = async () => {
  try {
    const values = await AsyncStorage.getAllKeys();

    return values;
  } catch (e) {
    console.error(e);
  }
};
