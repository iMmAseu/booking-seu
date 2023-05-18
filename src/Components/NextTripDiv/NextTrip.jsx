import styled from "styled-components"
import { ImageContainer } from "./ImageContainer"



const Cont = styled.div`
width:80%;
margin: auto;
`
const H1 = styled.h1`
font-size: 24px;
    font-weight: 700;
    line-height: 32px;
    margin:0;
    margin-bottom:16px;
    color:#333333;
`
const FlexDiv = styled.div`
display:flex;
justify-content:space-between;
`

export const NextTrip = () => {


    return (
        <Cont>
            <H1>精彩下一站，灵感这里找</H1>

            <FlexDiv>
                <ImageContainer wide="320px" img="https://cf.bstatic.com/xdata/images/xphoto/540x405/122925057.webp?k=09f14b17546723a74f3c71cc9d5e5040e60c1594234b5a06cc3ce376ad299da5&o=">
                    <h1>德国最刺激的水上公园</h1>
                </ImageContainer>

                <ImageContainer wide="320px" img="https://cf.bstatic.com/xdata/images/xphoto/540x405/124728212.webp?k=7b5c982e56da0da2c45cb3e7663683b608d309a239a77ba2729f14cc6f0f36b2&o=">
                    <h1>48小时东京游</h1>                   
                </ImageContainer>


                <ImageContainer wide="320px" img="https://cf.bstatic.com/xdata/images/xphoto/540x405/122809197.webp?k=e7f86e398e43427ca04f743292823c6cdbc72ce486cb8a5609af837afd6f5255&o=">
                    <h1>独自旅行的八个想法</h1>
                </ImageContainer>
            </FlexDiv>

            <FlexDiv>
                <ImageContainer wide="490px" img="https://cf.bstatic.com/xdata/images/xphoto/540x405/121352725.webp?k=b630e51b3ad653b598a22809bd644c80513f8911932846d0ff981ee236a36a35&o=">
                    <h1>在欧洲五个梦幻湖泊和峡湾中进行野外游泳</h1>
                </ImageContainer>

                <ImageContainer wide="490px" img="https://cf.bstatic.com/xdata/images/xphoto/540x405/63486779.webp?k=316f6f1b92d64eb083891b2d8cf4d6f9b88a487052eed17a97846ff1f74da509&o=">
                    <h1>
                    五个拥有私人游泳池的令人叹为观止的住宿。
                    </h1>
                </ImageContainer>
            </FlexDiv>
        </Cont>
    )

}