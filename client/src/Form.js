import React from 'react'
import "./Form.css"
import { useState } from 'react'

function Form() {
    const [ firstName, setFirstName ] = useState('')
    const [ lastName, setLastName] = useState('')
    const [ email, setEmail] = useState('')
    const [ address, setAddress] = useState('')
    const [ telephone, setTelephone ] = useState('')
    const [ town, setTown ] = useState('')
    const [ ailment, setAilment] = useState('')
    
  return (
    <div class="container">
      <div class="contact-box">
        <div class="left"></div>
        <div class="right">
          <h2>Book Now</h2>
            <input
              type='text'
              required
              className ="field"
              placeholder='First Name'
              value={ firstName }
              onChange={(e) => setFirstName(e.target.value)}
            ></input>
            <input
              type='text'
              required
              className ="field"
              placeholder='Last Name'
              value={ lastName}
              onChange={(e) => setLastName(e.target.value)}
            ></input>
            <br />
            <select>   
              <option value='Female'> Female</option>
              <option value='Male'>Male</option>
            </select>
            <br />
            <input
              type='text'
              required
              className='field'
              placeholder='Email'
              value={ email }
              onChange={(e) => setEmail(e.target.value)}
            ></input>
            <input
               type='text'
               value={ address }
               placeholder="Address"
               className='field'
               onChange={(e) => setAddress(e.target.value)}
            ></input>
           <input
               type='text'
               required
               className='field'
               placeholder='Telephone'
               value={ telephone}
               onChange={(e) => setTelephone(e.target.value)}
           ></input>
           <input
               type='text'
               required
               className='field'
               placeholder='Town'
               value={ town }
               onChange={(e) => setTown(e.target.value)}
           ></input>
           <input
               type='text'
               required
               className='field'
               placeholder='Ailment Name'
               value={ ailment }
               onChange={(e) => setAilment(e.target.value)}
           ></input>
           <label className='name'>Ailment type:</label>
           <select>
              <option value='Severe'> Severe</option>
              <option value='Mild'>Mild</option>
           </select>
           <br />
           <label className='name'>Select Doctor:</label>
            <select>
              <option value='doctor'> Dr.Mwangi</option>
              <option value='doctor'>Dr.Otieno</option>
           </select>
          <textarea placeholder="Anymore feedback" class="field"></textarea>
          <button class="btn">Send</button>
        </div>
      </div>
	  </div>
  )
}

export default Form