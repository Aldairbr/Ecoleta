import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { FiArrowLeft } from 'react-icons/fi'
import { Map, TileLayer, Marker} from 'react-leaflet'
import api from '../../services/api'

import './styles.css'
import logo from '../../assets/logo.svg'

interface item {
  id: number,
  title: string,
  image_url: string
}

const CreatePoint = () => {

  const [items, setItems] = useState<item[]>([])

  useEffect(() => {
    api.get('/items').then(response => {
      setItems(response.data)
    })
  }, [])

  return (
    <div id="page-create-point">
      <header>
         <img src={logo} alt="Ecoleta"/>

         <Link to="/">
            <FiArrowLeft />
           Voltar para Home
         </Link>

      </header>
      <form >
        <h1>Cadastro do <br/> ponto de coleta</h1>

        <fieldset>
          <legend>
            <h2>Dados</h2>
          </legend>

          <div className="field">
            <label htmlFor="name">Nome da entidade</label>
            <input 
              type="text"
              name="name"
              id="name"
            />
          </div>

          <div className="field-group">
            <div className="field">
              <label htmlFor="email">Email</label>
              <input 
                type="email"
                name="email"
                id="email"
              />
            </div>

            <div className="field">
              <label htmlFor="whatsapp">Whatsapp</label>
              <input 
                type="text"
                name="whatsapp"
                id="whatsapp"
              />
            </div>
          </div>

        </fieldset>

        <fieldset>
          <legend>
            <h2>Endereço</h2>,
            <span>Selecione o endereço no mapa</span>
          </legend>

          <Map center={[-31.7337873, -52.3223392]} zoom={15}>
            <TileLayer
              attribution='&amp;copy <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
              url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
             <Marker position={[-31.7337873, -52.3223392]} />
          </Map>

         

          <div className="field-group">

            <div className="field">
              <label htmlFor="uf">Estado (UF)</label>
              <select name="uf" id="uf">
                <option value="0">Selecione uma UF</option>
              </select>
            </div>

            <div className="field">
              <label htmlFor="city">Cidade</label>
              <select name="city" id="city">
                <option value="city">Selecione uma cidade</option>
              </select>
            </div> 

          </div>
        </fieldset>

        <fieldset>
          <legend>
            <h2>Itens de coleta</h2>
          </legend>

          <ul className="items-grid">
          {items.map(items =>  
            <li>
              <img src={items.image_url} alt=""/>
          <span>{items.title}</span>
            </li>)}
           
          </ul>

        </fieldset>
        <button type="submit">
          Cadastrar ponto de coleta
        </button>
      </form>
    </div>
  )
}

export default CreatePoint