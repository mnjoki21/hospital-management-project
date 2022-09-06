import React from 'react'

function Doc({ doctor }) {
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
  }
  
  return (
    <>
       { `${doctor?.first_name} ${doctor?.last_name} - ${doctor?.ailment_type || doctor?.ailment_name}` }  <span style={{cursor: "pointer"}} onClick={deleteDoc}>🗑</span>
    </>
  )
}

export default Doc