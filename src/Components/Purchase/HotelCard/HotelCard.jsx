import React from 'react';
import { Rate, Card } from 'antd';
import 'dayjs/locale/zh-cn';
import locale from 'antd/es/date-picker/locale/zh_CN';

const { Meta } = Card;

const gridStylePic = {
    width: '30%',
    textAlign: 'left',
};

const gridStyleWord = {
    width: '70%',
    textAlign: 'left',
};

export const HotelCard= ({url}) => {
    return(
        <Card>
            <Card.Grid style={gridStylePic} >
                <Card cover={<img alt="example" src="https://dimg04.c-ctrip.com/images/0204q120004603gsuC04A_W_1080_808_R5_D.jpg" />}  bordered={false}>
                </Card>
            </Card.Grid>
            <Card.Grid style={gridStyleWord}>
            <p>公寓式酒店<Rate disabled defaultValue={4}/></p>
            <h2>HotelHome Paris 16</h2>
            </Card.Grid>
        </Card>
    )
}