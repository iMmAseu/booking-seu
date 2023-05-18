import styled from 'styled-components'
import { Box } from './Box'

const Div = styled.div`
width:100%;
display: flex;


`

const Cont = styled.div`
width:100%;

`

const Line = styled.div`
border-top:1px solid #0071c2;
margin-top:1px;
`

export const TopSection = () => {

    return (

        <Cont>
        <Div>

          <Box>信息&价格</Box>
          <Box>设施</Box>
          <Box>住宿规定</Box>
          <Box>预订须知</Box>
          <Box>住客点评(487)</Box>
        
        </Div>
        <Line/>

        </Cont>
    )
}