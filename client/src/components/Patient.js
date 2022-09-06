import React from 'react'

function Patient({ pat }) {
  const deletePat = ()=>{
    fetch(`http://localhost:9292/patients/${pat?.id}`, {
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
       { `${pat?.first_name} ${pat?.last_name} - ${pat?.ailment_type || pat?.ailment_name}` }  <span style={{cursor: "pointer"}} onClick={deletePat}>🗑</span>
    </>
  )
}

export default Patient