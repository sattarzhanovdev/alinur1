import {ReactComponent as ap1} from '../apartments/ap1entrance2.svg'
import {ReactComponent as ap2} from '../apartments/ap2entrance2.svg'
import {ReactComponent as ap3} from '../apartments/ap3entrance2.svg'
import {ReactComponent as ap4} from '../apartments/ap4entrance2.svg'
import logo from './logo.svg'
import mainPhoto from './photo.jpg'
import block2 from './image.webp'
import block1 from './bloack1.svg'
import pod1 from '../apartments/1 подъезд.svg'
import pod2 from '../apartments/2 подъезд.svg'

import ap1ent1block1 from '../apartments/1.svg'
import ap2ent1block1 from '../apartments/2.svg'
import ap3ent1block1 from '../apartments/3.svg'
import ap4ent1block1 from '../apartments/4.svg'
import ap5ent1block1 from '../apartments/5.svg'
import ap6ent1block1 from '../apartments/6.svg'

import ap1ent1block2 from '../apartments/ap1entrance1.svg'
import ap2ent1block2 from '../apartments/ap2entrance1.svg'
import ap3ent1block2 from '../apartments/ap3entrance1.svg'
import ap4ent1block2 from '../apartments/ap4entrance1.svg'

import ap1ent2block2 from '../apartments/ap1entrance2.svg'
import ap2ent2block2 from '../apartments/ap2entrance2.svg'
import ap3ent2block2 from '../apartments/ap3entrance2.svg'
import ap4ent2block2 from '../apartments/ap4entrance2.svg'

export const apartmentsImages = [
  {
    block: 1,
    entrance: 1,
    apartments: [
      {id: 1, name: 'Квартира 1', image: ap1ent1block1},
      {id: 2, name: 'Квартира 2', image: ap2ent1block1},
      {id: 3, name: 'Квартира 3', image: ap3ent1block1},
      {id: 4, name: 'Квартира 4', image: ap4ent1block1},
      {id: 5, name: 'Квартира 5', image: ap5ent1block1},
      {id: 6, name: 'Квартира 6', image: ap6ent1block1},
    ]
  }, 
  {
    block: 2,
    entrance: 1,
    apartments: [
      {id: 1, name: 'Квартира 1', image: ap1ent1block2},
      {id: 2, name: 'Квартира 2', image: ap2ent1block2},
      {id: 3, name: 'Квартира 3', image: ap3ent1block2},
      {id: 4, name: 'Квартира 4', image: ap4ent1block2},
    ]
  },
  {
    block: 2,
    entrance: 2,
    apartments: [
      {id: 1, name: 'Квартира 1', image: ap1ent2block2},
      {id: 2, name: 'Квартира 2', image: ap2ent2block2},
      {id: 3, name: 'Квартира 3', image: ap3ent2block2},
      {id: 4, name: 'Квартира 4', image: ap4ent2block2},
    ]
  }
]

export const Images = {
  logo,
  mainPhoto,
  block2,
  block1,
  pod1,
}
