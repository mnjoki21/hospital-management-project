import { useEffect, useState } from "react"

function useFetchData(){
    const [doc, setDoc] = useState('')
    const url = "http://localhost:9292/doctors"
    useEffect(()=>{
      fetch(url)
      .then(res => res.json())
      .then(data => {
        setDoc(data)
        console.log(data)
      })
      .catch(err => console.log(err))
    }, [url])
    return [doc, setDoc, url]
}

export default useFetchData