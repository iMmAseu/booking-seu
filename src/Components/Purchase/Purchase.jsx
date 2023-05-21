import { Navbar } from '../Navbar/Navbar'
import FooterBlue from '../Footer/FooterBlue'
import { useParams } from 'react-router'
import { HotelData } from '../../Utils/HotelData'
import { useState } from 'react'
import { Col, Breadcrumb, Row } from 'antd'
import {OrderInfo} from '../Purchase/OrderInfo/OrderInfo'
import {HotelPrice} from '../Purchase/HotelPrice/HotelPrice'
import {HouseInfo} from '../Purchase/HouseInfo/HouseInfo'
import { HomeOutlined, UserOutlined,BarChartOutlined } from '@ant-design/icons'
import { HotelCard } from './HotelCard/HotelCard'

export const Purchase = () => {
    const param = useParams()
    const [showData, setShowData] = useState(HotelData)
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
        <div className="container">
            <Navbar />
            <Row gutter={16}>
                <Col className="gutter-row" span={4}>
                </Col>
            <Breadcrumb
            items={[
                {
                    href: 'http://localhost:3000/',
                    title: (
                        <>
                            <HomeOutlined />
                            <span style={{ fontSize: '20px' }}>主页</span>
                        </>
                    ),
                },
                {
                    href: 'http://localhost:3000/search',
                    title: (
                        <>
                            <UserOutlined />
                            <span style={{ fontSize: '20px' }}>酒店选取</span>
                        </>
                    ),
                },
                {
                    href: '',
                    title: (
                        <>
                            <BarChartOutlined/>
                            <span style={{ fontSize: '20px' }}>酒店详情</span>
                        </>
                    ),
                },
                {
                    title: (
                        <>
                            <span style={{ fontSize: '20px' }}>付款界面</span>
                        </>
                    )
                },
                ]}
            />
            </Row>
            <Row gutter={20}>
                <Col className="gutter-row" span={4}>
                </Col>
                <Col className="gutter-row" span={5}>
                    <OrderInfo />
                    <HotelPrice />
                </Col>
                <Col className="gutter-row" span={11}>
                    <HotelCard/>
                </Col>
                <Col className="gutter-row" span={4}>
                </Col>
            </Row>
            <FooterBlue />
        </div>
    )
}