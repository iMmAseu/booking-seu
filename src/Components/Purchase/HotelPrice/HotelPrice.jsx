import React from 'react';
import { Card,Space, Typography } from 'antd';
import 'dayjs/locale/zh-cn';
import locale from 'antd/es/date-picker/locale/zh_CN';

const normalStyle = {
    width: '100%',
    textAlign: 'left',
};

const { Text, Link } = Typography;

export const HotelPrice= () => {
    return(
        <Card title="价格汇总">
            <Card.Grid style={normalStyle}>
                <h1>价格：2697.03元</h1>
                <p>+税费及其他费用,按住宿当地货币计算</p>
            </Card.Grid>
            <Card.Grid style={normalStyle}>
                <h3>价格信息</h3>
                <p>含403.59元税费和其他费用</p>
                
            </Card.Grid>
        </Card>
    )
}