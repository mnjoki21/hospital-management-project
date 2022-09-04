import React from 'react'
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
      <div className='form'>
          <h3 className='title'>BOOK YOUR DOCTOR'S APPOINTMENT HERE!!</h3>
          <form className='inputs'>
              <label className='name'>First Name:</label>
              <input
                  type='text'
                  required
                  value={ firstName }
                  onChange={(e) => setFirstName(e.target.value)}
              ></input>
              <label className='name'>Last Name:</label>
              <input
                  type='text'
                  required
                  value={ lastName}
                  onChange={(e) => setLastName(e.target.value)}
              ></input>
              <label className='name'>Select Gender:</label>
              <select>
                  <option value='Female'> Female</option>
                  <option value='Male'>Male</option>
              </select>
                <label className='name'>Email:</label>
              <input
                  type='text'
                  required
                  value={ email }
                  onChange={(e) => setEmail(e.target.value)}
              ></input>
                <label className='name'>Address:</label>
              <input
                  type='text'
                  value={ address }
                  onChange={(e) => setAddress(e.target.value)}
              ></input>
                <label className='name'>Telephone No:</label>
              <input
                  type='text'
                  required
                  value={ telephone}
                  onChange={(e) => setTelephone(e.target.value)}
              ></input>
                <label className='name'>Town:</label>
              <input
                  type='text'
                  required
                  value={ town }
                  onChange={(e) => setTown(e.target.value)}
              ></input>
                <label className='name'>Ailment name:</label>
              <input
                  type='text'
                  required
                  value={ ailment }
                  onChange={(e) => setAilment(e.target.value)}
              ></input>
              <label className='name'>Ailment type:</label>
              <select>
                  <option value='Severe'> Severe</option>
                  <option value='Mild'>Mild</option>
              </select>
              <label className='name'>Select Doctor:</label>
               <select>
                  <option value='doctor'> Dr.Mwangi</option>
                  <option value='doctor'>Dr.Otieno</option>
              </select>

              <button className='submit-btn'>SUBMIT FORM</button>
                

                 
          </form>

     </div>
  )
}

export default Form