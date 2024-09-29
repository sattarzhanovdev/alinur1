import React from 'react'
import { Images } from '../../assets/images'
import c from './blocks.module.scss'
import { useNavigate } from 'react-router-dom'
import { API } from '../../api'

const Blocks = () => {
  const Navigate = useNavigate()

  const turnOn = (block) => {
    API.putBlock(block)
      .then(() => {
        API.putValue(70).then(() => {
          if(block == 100){
            API.putEntrance(1)
            Navigate('/floors/')
          }else{
            Navigate('/entrance/')
          }
        })
      })
  }
  return (
    <div className={c.blocks}>
      <img src={Images.block2} alt="" onClick={() => turnOn(200)} className={c.aBlock}/>
      <img src={Images.block1} alt="" onClick={() => turnOn(100)}/>
    </div>
  )
}

export default Blocks