import React from 'react'
import { MainRoutes } from './routes'
import axios from 'axios'
axios.defaults.baseURL = 'https://nurkeldi-maket-default-rtdb.asia-southeast1.firebasedatabase.app'

function App() {
  return (
    <div>
      <MainRoutes />
    </div>
  )
}

export default App