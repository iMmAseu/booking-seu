import { Navbar } from '../Navbar/Navbar'
import FooterBlue from '../../Components/Footer/FooterBlue'
import { useParams } from 'react-router'
import { HotelData } from '../../../src/Utils/HotelData'
import { useState } from 'react'

export const Purchase = () => {
    const param = useParams()
    const [, setShowData] = useState("")

    const sendData = HotelData.filter((el) => {
        return el.id === Number(param.id)
    })
    const filterSearch = (search) => {

        const filteredData = HotelData.filter((e) => {
            return (e.name.toLowerCase().includes(search.toLowerCase()))
        })
        setShowData(filteredData)
    }
    return (
        <>
            <Navbar />
            <FooterBlue />
        </>
    )
}