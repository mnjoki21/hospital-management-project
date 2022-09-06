import React from 'react'
import useFetchData from '../hooks/fetchData'

function Doc({ doctor }) {
  const [doc, setDoc] = useFetchData()
  const deleteDoc = ()=>{
    fetch(`http://localhost:9292/doctors/${doctor?.id}`, {
      method: "DELETE",
      headers: {
        "Content-Type":"application/json"
      }
    })
    .then(res=>res.json())
    .then(data => console.log(data))
    .catch(err=>console.log(err))

    fetch("http://localhost:9292/doctors")
      .then(res => res.json())
      .then(data => {
        setDoc(data)
        console.log(data)
      })
      .catch(err => console.log(err))
  }
  
  return (
    <>
       { `${doctor?.first_name} ${doctor?.last_name} - ${doctor?.ailment_type || doctor?.ailment_name}` }  <span style={{cursor: "pointer"}} onClick={deleteDoc}>🗑</span>
    </>
  )
}

export default Doc