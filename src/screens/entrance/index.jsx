import React from 'react'
import { API } from '../../api'
import c from './floors.module.scss'
import { Images } from '../../assets/images'
import { useNavigate } from 'react-router-dom'

const Entrance = () => {
  const Navigate = useNavigate()

  const [ block, setBlock ] = React.useState(1)
  const [ entrance, setEntrance ] = React.useState(1)
  React.useEffect(() => {
    API.getBlock()
      .then(res => {
        setBlock(res.data)
        API.getEntrance()
          .then(data => {
            setEntrance(data.data)
          })
      })
  }, [])
  const floors = []
  for(var i = 1; i <= 2; i++){
    floors.push(i)
  } 
  
  const turnOn = (value, block, entrance) => {
    API.putValue(value)
      .then(() => {
        API.putEntrance(block) 
          .then(() => {
            API.putBlock(200)
              .then(() => Navigate('/floors/'))
          })
      })
  }
  return (
    <div className={c.floors}>
      <div className={c.left}>
        <h2>Выберите подъезд:</h2>
        <div className={c.btns}>
          {floors.map(item => (
            <button key={item} onClick={() => turnOn(90, Number(item), entrance)}>
              {item}
            </button>
          ))}
        </div>
      </div>
      <div className={c.right}>
        <img src={block === 1 ? Images.block2 : Images.block2}/>
      </div>
    </div>
  )
}

export default Entrance