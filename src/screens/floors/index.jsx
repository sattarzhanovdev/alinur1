import React from 'react'
import { API } from '../../api'
import c from './floors.module.scss'
import { Images } from '../../assets/images'
import { useNavigate } from 'react-router-dom'

const Floors = () => {
  const Navigate = useNavigate()

  const [ block, setBlock ] = React.useState(1)
  React.useEffect(() => {
    API.getBlock()
      .then(res => setBlock(res.data))
  }, [])
  const floors = []
  for(var i = 1; i <= 10; i++){
    floors.push(i)
  } 
  
  const turnOn = (value, block) => {
    localStorage.setItem('floor', value)
    API.putValue(value)
      .then(() => {
        API.putBlock(block) 
          .then(() => Navigate('/apartments/'))
      })
  }

  
  return (
    <div className={c.floors}>
      <div className={c.left}>
        <h2>Выберите этаж:</h2>
        <div className={c.btns}>
          {floors.map(item => (
            <button key={item} onClick={() => turnOn(item, (block === 100 ? 100 : 200))}>
              {item}
            </button>
          ))}
        </div>
      </div>
      <div className={c.right}>
        <img src={block === 100 ? Images.block1 : Images.block2}/>
      </div>
    </div>
  )
}

export default Floors