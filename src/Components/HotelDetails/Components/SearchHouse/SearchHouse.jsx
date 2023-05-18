import React from 'react';
import { DatePicker, Space,Col,Row  } from 'antd';
import 'dayjs/locale/zh-cn';
import locale from 'antd/es/date-picker/locale/zh_CN';
import {InfoCircleTwoTone} from '@ant-design/icons';

const { RangePicker } = DatePicker;

export const SearchHouse= () => {
    return (
    <div>
        <h2>空房情况</h2>
        <p style={{ color: 'red' }}><InfoCircleTwoTone twoToneColor="#f5222d"/>选择日期查看此住宿的空房和价格</p>
        <Row>
            <Col span={12}>
                <Space direction="vertical" size={12}>
                <RangePicker locale={locale} size={'large'}/>
                </Space>
            </Col>
            <Col span={12}>
                
            </Col>
        </Row>
        
    </div>  
)
}
