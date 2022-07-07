import { useEffect, useState } from "react"
import './Market.css'
import {BsArrowUpShort, BsArrowDownShort} from 'react-icons/bs'

function Market() {
    const [marketData, setMarketData] = useState([])

    useEffect(() => {
        const fetchData = async () => {
            const response = await fetch(`http://localhost:8000/market`)
            const responseJson = await response.json()
            setMarketData(responseJson)
            const quotes = (Object?.entries(responseJson))[0][1].result
            setMarketData(quotes)
        }
        fetchData()
    }, [])
  return (
    <div className="m-items">
        {(marketData.map((i) => 
            <li key={i.symbol}
            className="m-item">
               <span>{i.symbol}
               { i.regularMarketPreviousClose < i.regularMarketPrice 
               ? <BsArrowUpShort size={15} color='green'/>
               : <BsArrowDownShort size={15} color='red'/>}
               </span>
               <span>${i.regularMarketPrice}</span>
            </li>))}
    </div>
  )
}
export default Market