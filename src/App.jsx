import { useState, useEffect } from 'react'

import './App.css'

function App() {
  const url = " https://restcountries.com/v3.1/all"
  const [country, setCountry] = useState([])
  useEffect(()=>{
    const fetchData = async ()=>{
      try {
        const response = await fetch(url)
        const data = await response.json()
        setCountry(data)
      } catch (error) {
        console.error('Error fetching country data:',error)
      }
    }
    fetchData()
  },[])
  return (
    <div className='container'>
      {
        country.map((country)=>(
          <article className='article'>
            <h2>{country.name.common}</h2>
            <img className='img' src={country.flags.svg} alt={`flags of ${country.name.common}`}/>

          </article>

        ))}

    </div>
  )
}
 


export default App
