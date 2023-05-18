import styled from 'styled-components'
import PoolIcon from '@material-ui/icons/Pool';
import WifiIcon from '@material-ui/icons/Wifi';
import LocalParkingIcon from '@material-ui/icons/LocalParking';
import AcUnitIcon from '@material-ui/icons/AcUnit';
import UpdateIcon from '@material-ui/icons/Update';
const FlexDiv = styled.div`
width:100%;
display: flex;
justify-content: space-around;



`
const Cont = styled.div`
display:grid;

margin-top:15px;
margin-bottom:10px;
justify-content: center;

p{
    margin:0;
    margin-top:10px;
    font-size: 14px;
    line-height: 20px;
    color: #969696;
}

`
const styles = {
    fontSize: "35px" , color:"#333", display:"block",margin:"auto"
}


export const AllIcons = ()=>{


    return (
        <FlexDiv>

            <Cont>
                <PoolIcon style = {styles}/>
                <p>室外游泳池</p>
            </Cont>

            <Cont>
                <WifiIcon style = {styles} />
                <p>免费WiFi</p>
            </Cont>

            <Cont>
                <LocalParkingIcon style = {styles}/>   
                <p>免费停车</p>
            </Cont>

            <Cont> 
                <AcUnitIcon style = {styles}/>
                <p>空调服务</p>
            </Cont>

            <Cont> 
                <UpdateIcon style = {styles}/>
                <p>24小时前台服务</p>
            </Cont>
           
        </FlexDiv>
    )
}