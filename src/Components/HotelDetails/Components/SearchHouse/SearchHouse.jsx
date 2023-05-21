import React from 'react';
import { Table,InputNumber,DatePicker,Divider,Space,Col,Row} from 'antd';
import 'dayjs/locale/zh-cn';
import locale from 'antd/es/date-picker/locale/zh_CN';
import {InfoCircleTwoTone,RedoOutlined} from '@ant-design/icons';
import styled from 'styled-components';
import { Link} from "react-router-dom";

const Reserve = styled.div`
box-sizing: border-box;
    vertical-align: middle;

    
    min-height: 36px;
    min-width: 36px;
   
    border-radius: 2px;
 
    justify-content: center;
    text-align: left;
    padding: 8px 16px;
    cursor: pointer;
    background-color: #0071c2;
    border: 1px solid #0071c2;
    border-radius: 2px;
    margin-left:20px;
    p{
        margin:0;
        font-size: 14px;
    font-weight: 500;
    line-height: 20px;
    color:#ffff;
    }  
`

const columns = [
    {
      title: '房间类型',
      dataIndex: 'roomtype',
      key: 'roomtype',
      render: (text) => <a>{text}</a>,
    },
    {
      title: '可住人数',
      dataIndex: 'avaibility',
      key: 'avaibility',
    },
    {
      title: '价格',
      dataIndex: 'price',
      key: 'price',
    },
  ];
  const data = [
    {
        key: '1',
        roomtype: '标准房间',
        avaibility: '1',
        price: 300,
        description: '包含一张单人床，不推荐儿童单独入住，包含各种必要的基础设施',
    },
    {
        key: '2',
        roomtype: '标准双人房',
        avaibility: '2',
        price: 350,
        description: '包含一张双人床，推荐一个大人一个儿童入住，包含各种必要的基础设施',
    },
    {
        key: '3',
        roomtype: '高级套房',
        avaibility: '2',
        price: 500,
        description: '包含两张单人床，推荐两位成人入住，包含各种必要的基础设施及额外的服务',
    },
    {
        key: '4',
        roomtype: '家庭套房',
        avaibility: '3',
        price: 600,
        description: '包含一张单人床一张双人床，推荐一家人入住，包含各种必要的基础设施及额外的服务',
    },
    {
        key: '5',
        roomtype: '豪华套房',
        avaibility: '4',
        price: 800,
        description: '包含两张双人床，推荐一家人入住，包含各种必要的基础设施及额外的服务和更多更好的服务',
    },
  ];

const { RangePicker } = DatePicker;
const onChange = (value) => {
    console.log('changed', value);
  };

export const SearchHouse= ({ id}) => {
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
                    <Link to={`/search/${id}/purchase`}>
                        <Reserve>
                            <p>
                                付款
                            </p>
                        </Reserve> 
                    </Link>     
                </Space>  
            </Row>
            <Table columns={columns} expandable={{expandedRowRender: (record) => (<p style={{margin: 0,}}>{record.description}</p>), rowExpandable: (record) => record.name !== 'Not Expandable',}} dataSource={data} />
    </div>  
)
}
