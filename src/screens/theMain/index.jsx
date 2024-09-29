import React from 'react'
import c from './main.module.scss'
import { Images } from '../../assets/images'
import { API } from '../../api'
import { useNavigate } from 'react-router-dom'


const TheMain = () => {
  const Navigate = useNavigate()

  const turnOn = (value) => {
    API.putValue(value)
      .then(() => {
        if(value == 91){
          Navigate('/blocks/')
        }
      })
  }
  return (
    <div className={c.main}>
      <div className={c.left}>
        <div className={c.logo}>
          <img src={Images.logo} alt="" />
        </div>
        <div className={c.btns}>
          <button onClick={() => turnOn(91)}>Включить дом</button>
          <button onClick={() => turnOn(92)}>Включить демо режим</button>
        </div>
      </div>
      <div className={c.right}>
        <img src={Images.mainPhoto} alt="" />
      </div>
    </div>
  )
}

export default TheMain



