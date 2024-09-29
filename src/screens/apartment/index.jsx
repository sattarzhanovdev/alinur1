import React from 'react'
import c from './apartment.module.scss'
import { useParams } from 'react-router-dom'
import { apartmentsImages, Images } from '../../assets/images'
import { API } from '../../api'


const Apartment = () => {
  const [ block, setBlock ] = React.useState(1)
  const [ entrance, setEntrance ] = React.useState(1)
  const [ value, setValue ] = React.useState(1)

  React.useEffect(() => {
    API.getValue()
      .then(res => setValue(res.data - 10))
    API.getBlock()
      .then(res => {
        setBlock(res.data)
        API.getEntrance(data => {
          setEntrance(data.data)
        })
      })
  }, [])

  console.log(entrance);
  

  return (
    <div className={c.apartment}>
      <img src={apartmentsImages.find(item => item.block === (block / 100) && item.entrance === entrance)?.apartments.find(item => item.id === value).image} alt="" />
    </div>
  )
}

export default Apartment