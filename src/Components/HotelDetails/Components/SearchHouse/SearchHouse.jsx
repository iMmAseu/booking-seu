import React from 'react';
import { Button,InputNumber,DatePicker,Divider,Space,Col,Row} from 'antd';
import 'dayjs/locale/zh-cn';
import locale from 'antd/es/date-picker/locale/zh_CN';
import {InfoCircleTwoTone,RedoOutlined} from '@ant-design/icons';

const { RangePicker } = DatePicker;
const onChange = (value) => {
    console.log('changed', value);
  };

export const SearchHouse= () => {
    return (
    <div>
        <h2>空房情况</h2>
        <p style={{ color: 'red' }}><InfoCircleTwoTone twoToneColor="#f5222d"/>选择日期查看此住宿的空房和价格</p>
            <Divider orientation="left"></Divider>
            <Row gutter={16}>
                <Col span={6}>    
                    <RangePicker locale={locale} size={'middle'}/> 
                </Col>
                <Space>             
                    <InputNumber size="middle" min={0} max={30} defaultValue={3} onChange={onChange} />位成人
                    <InputNumber size="middle" min={0} max={30} defaultValue={3} onChange={onChange} />名儿童
                    <InputNumber size="middle" min={0} max={30} defaultValue={3} onChange={onChange} />间客房  
                    <Button type="primary" icon={<RedoOutlined />}>确认更改</Button>   
                </Space>                     
            </Row>
    </div>  
)
}
