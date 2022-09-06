import { useEffect, useState } from "react"

function useFetchPatient(){
    const [pat, setPat] = useState('')
    const url = "http://localhost:9292/patients"
    useEffect(()=>{
        fetch(url)
        .then(res => res.json())
        .then(data => {
          setPat(data)
          console.log(data)
        })
        .catch(err => console.log(err))
      }, [])
    return [pat, setPat, url]
}

export default useFetchPatient