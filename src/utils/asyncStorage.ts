import AsyncStorage from '@react-native-async-storage/async-storage'

export const storeData = async (key: string, value: object[]) => {
  try {
    const jsonValue = JSON.stringify(value)
    await AsyncStorage.setItem(key, jsonValue)
  } catch (e) {
    console.log('Store Data Error', e)
  }
}

export const getData = async (key: string) => {
  try {
    const jsonValue = await AsyncStorage.getItem(key)
    return jsonValue != null ? JSON.parse(jsonValue) : null
  } catch (e) {
    console.log('Get Data Error', e)
  }
}

export const removeData = async (key: string) => {
  try {
    const jsonValue = await AsyncStorage.removeItem(key)
    return jsonValue != null ? JSON.parse(jsonValue) : null
  } catch (e) {
    console.log('Remove Data Error', e)
  }
}
