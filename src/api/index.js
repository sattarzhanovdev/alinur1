import axios from "axios";

export const API = {
  putValue: (data) => axios.put('/value.json', data),
  putBlock: (data) => axios.put('/block.json', data),
  getBlock: () => axios.get('/block.json'),
  getEntrance: () => axios.get('/entrance.json'),
  putEntrance: (data) => axios.put('/entrance.json', data),
  getValue: () => axios.get('value.json')
}