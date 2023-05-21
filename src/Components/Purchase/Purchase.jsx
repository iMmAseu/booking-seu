import { Navbar } from '../Navbar/Navbar'
import FooterBlue from '../Footer/FooterBlue'
import { useParams } from 'react-router'
import { HotelData } from '../../Utils/HotelData'
import { useState } from 'react'
import { Col, Breadcrumb, Row } from 'antd';
import {OrderInfo} from '../Purchase/OrderInfo/OrderInfo'
import {HotelPrice} from '../Purchase/HotelPrice/HotelPrice'
import { HomeOutlined, UserOutlined,BarChartOutlined } from '@ant-design/icons';

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
            <Row gutter={16}>
                <Col className="gutter-row" span={2}>
                </Col>
            <Breadcrumb
            items={[
                {
                    href: 'http://localhost:3000/',
                    title: (
                        <>
                            <HomeOutlined />
                            <span>主页</span>
                        </>
                    ),
                },
                {
                    href: 'http://localhost:3000/search',
                    title: (
                        <>
                            <UserOutlined />
                            <span>酒店选取</span>
                        </>
                    ),
                },
                {
                    href: '',
                    title: (
                        <>
                            <BarChartOutlined/>
                            <span>酒店详情</span>
                        </>
                    ),
                },
                {
                    title: '付款界面',
                },
                ]}
            />
            </Row>
            <Row gutter={[1, 24]}>
                <Col className="gutter-row" span={4}>
                </Col>
                <Col className="gutter-row" span={5}>
                    <OrderInfo />
                    <HotelPrice />
                </Col>
                <Col className="gutter-row" span={11}>
                </Col>
                <Col className="gutter-row" span={4}>
                </Col>
            </Row>
            <FooterBlue />
        </>
    )
}