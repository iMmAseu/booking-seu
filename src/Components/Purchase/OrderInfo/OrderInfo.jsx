import React from 'react';
import { Card, Typography } from 'antd';
import 'dayjs/locale/zh-cn';
import locale from 'antd/es/date-picker/locale/zh_CN';

const gridStyle = {
    width: '50%',
    textAlign: 'left',
  };

const normalStyle = {
    width: '100%',
    textAlign: 'left',
};

const { Text, Link } = Typography;

export const OrderInfo= () => {
    return(
        <Card title="订单详情">
        <Card.Grid style={gridStyle}>
            <p>入住时间</p>
            <h5>2023年6月26日周一</h5>
            <p>15:00 – 22:00</p>
        </Card.Grid>
        <Card.Grid style={gridStyle}>
            <p>退房时间</p>
            <h5>2023年6月27日周二</h5>
            <p>15:00 – 22:00</p>
        </Card.Grid>
        <Card.Grid style={normalStyle}>
            <Text strong>入住总时间:1晚</Text>
        </Card.Grid>
        <Card.Grid style={normalStyle}>
            <Text strong>已选择:</Text>
            <p>标准公寓</p>
            <Link href="http://localhost:3000/search" target="_blank">
                重新选择
            </Link>
        </Card.Grid>
        </Card>
    )
}