import axios from 'axios'
import { BASE_URL } from '../config'

export const getSheetData = async () => {
  const { data } = await axios.get(`${BASE_URL}/sheets-data`)
  return data
}
