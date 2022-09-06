import React, { useEffect, useState } from 'react'
import Doc from './Doc'
import useFetchData from './hooks/fetchData'
import Patient from './Patient'

function Doctors() {
  const [doc, setDoc, url, setUrl] = useFetchData()
  const [pat, setPat] = useState('')
  useEffect(()=>{
    fetch("http://localhost:9292/patients")
    .then(res => res.json())
    .then(data => {
      setPat(data)
      console.log(data)
    })
    .catch(err => console.log(err))
  }, [])

  return (
    <div>
      <h3>Our doctors:</h3>
        <ol>
            {!doc ? "Loading..." : doc?.map((doctor)=>{
              // setUrl("http://localhost:9292/doctors")
              return (
              <li key={doctor?.id}>
                <Doc doctor={doctor}/>
              </li>
              )
            })}
        </ol>
        <h3>Current patients being served:</h3>
        <ol>
            {!pat ? "Loading..." : pat?.map((patient)=>{
              // setUrl("http://localhost:9292/patients")
              return (
              <li key={patient?.id}>
                <Patient pat={patient}/>
              </li>
              )
            })}
        </ol>
    </div>
  )
}

export default Doctors