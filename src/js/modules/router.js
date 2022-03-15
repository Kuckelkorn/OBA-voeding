import './vendor/routie.min.js'

import { getData } from './getData.js'
import { render } from './render.js'

export function handleRoutes() {
  routie({
    'sport': async ()=>{
      const data = await getData('sport')
      render(await data, 'sport')
    },
    'kinderen': async ()=>{
      const data = await getData('kinderen')
      render(await data, 'kinderen')
    },
    'suiker': async ()=>{
      const data = await getData('suiker')
      render(await data, 'suiker')
    },
    'vet': async ()=>{
      const data = await getData('vet')
      render(await data, 'vet')
    }
  })
}