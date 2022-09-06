import React, { useEffect, useState } from 'react'
import Doc from './Doc'

function Doctors() {
  const [doc, setDoc] = useState('')
  useEffect(()=>{
    fetch("http://localhost:9292/patients")
    .then(res => res.json())
    .then(data => {
      setDoc(data)
      // console.log(data)
    })
  }, [])

  return (
    <div>
        <ol>
            {!doc ? "Loading..." : doc?.map((doctor)=>{
              return (
              <li key={doctor?.id}>
                <Doc doctor={doctor} />
              </li>
              )
            })}
        </ol>
    </div>
  )
}

export default Doctors;