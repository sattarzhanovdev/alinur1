import React from 'react'
import {ReactComponent as One} from '../../assets/apartments/ap1entrance2.svg'
import {ReactComponent as Two} from '../../assets/apartments/ap2entrance2.svg'
import {ReactComponent as Three} from '../../assets/apartments/ap3entrance2.svg'
import {ReactComponent as Four} from '../../assets/apartments/ap4entrance2.svg'
import {ReactComponent as One2} from '../../assets/apartments/ap4entrance1.svg'
import {ReactComponent as Two2} from '../../assets/apartments/ap4entrance1.svg'
import {ReactComponent as Three2} from '../../assets/apartments/ap4entrance1.svg'
import {ReactComponent as Four2} from '../../assets/apartments/ap4entrance1.svg'
import {ReactComponent as Entrance} from '../../assets/apartments/entrance.svg'
import {ReactComponent as Entrance2} from '../../assets/apartments/entrance2.svg'
import c from './main.module.scss'
import { API } from '../../api'
import { useNavigate } from 'react-router-dom'
import { Images } from '../../assets/images'

const Main = () => {
  const Navigate = useNavigate()
  const [ selected, setSelected ] = React.useState(0)
  const [ block, setBlock ] = React.useState(1)

  // const scaleApartment = (id) => {
  //   setSelected(id)
  //   console.log(selected);
    
  // }

  const floor = localStorage.getItem('floor')

  React.useEffect(() => {
    API.getBlock()
      .then(res => setBlock(res.data))
  }, [])


  const turnOn = (value) => {
    API.putValue(value)
      .then(() => {
        Navigate('/apartment/')
      })
  }

  const nums = []

  if(block == 100){
    for(let i = 1; i <= 6; i++){
      nums.push(i)
    }
  }else{
    for(let i = 1; i <= 4; i++){
      nums.push(i)
    }
  }

  return (
    <div className={c.main}>
      <div className={c.house}>
        <div className={c.left}>
          <h1>Выберите квартиру:</h1>
          <div className={c.btns}>
            {
              nums.map(item => (
                <button onClick={() => turnOn(item+10)}>
                  {item}
                </button>
              ))
            }
          </div>
        </div>
        <div className={c.right}>
          <img src={block === 100 ? Images.block1 : Images.block2} alt="" />
        </div>
      </div>
    </div>
  )
}

export default Main



// {/* <div className={c.plan}>
//           <One
//             className={c.one} 
//             id={selected === 1 ? c.selected : ''} 
//             onClick={() => {
//               setSelected(1)
//               turnOn(11, 200, 1)
//             }}
//           />
//           <Two 
//             className={c.two} 
//             id={selected === 2 ? c.selected : ''} 
//             onClick={() => {
//               setSelected(2)
//               turnOn(12, 200, 1)
//             }}
//           />
//           <Three 
//             className={c.three} 
//             id={selected === 3 ? c.selected : ''} 
//             onClick={() => {
//               setSelected(3)
//               turnOn(13, 200, 1)
//             }}
//           />
//           <Four 
//             className={c.four} 
//             id={selected === 4 ? c.selected : ''} 
//             onClick={() => {
//               setSelected(4)
//               turnOn(14, 200, 1)
//             }}
//           />
//           <Entrance className={c.entrance}/>
//         </div> */}
