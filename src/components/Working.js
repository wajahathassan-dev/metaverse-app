import { forwardRef } from "react";
import styled from "styled-components";
import planet11 from '../assets/planet-11.png';
import { res } from "../responsive";

const Container = styled.div`
    display: flex;
    padding-top: 10rem;
    gap: 4rem;
    justify-content: center;
    ${res(1042, {flexDirection: 'column', alignItems: 'center', gap: '1rem'})}
`

const Left = styled.div`
    position: relative;
    display: flex;
    justify-content: flex-end;
`

const Planet = styled.img`
    width: 700px;
    object-fit: contain;
    filter: drop-shadow(0px 80px 120px rgba(0, 0, 0, 0.25));
    position: relative;
    z-index: 4;
    ${res(1246, {width: '600px'})}
    ${res(597, {width: '90%'})}
`

const GreyBox = styled.div`
    position: absolute;
    width: 569px;
    height: 265.76px;
    left: 5rem;
    top: 45%;
    background: rgba(255, 255, 255, 0.08);
    backdrop-filter: blur(24px);
    border-radius: 195px 160px 240px 180px;
    transform: rotate(-176.93deg);
    z-index: 3;
    ${res(1246, {width: '469px'})}
    ${res(597, {width: '50%', left: '30%', height: '40vw'})}
`

const Right = styled.div`
    
`

const Title = styled.p`
    font-size: 14px;
    font-weight: 400;
    letter-spacing: -0.02em;
    color: rgba(199, 199, 199, 0.5);
`

const Head = styled.h2`
    font-weight: 700;
    font-size: 64px;
    line-height: 81px;
    text-align: center;
    letter-spacing: -0.02em;
    color: #FFFFFF;
    padding-top: 2rem;
    padding-bottom: 2rem;
    text-align: left;
    ${res(1246, {fontSize: '50px'})}
    ${res(597, {fontSize: '30px', lineHeight: '40px'})}
`

const Point = styled.div`
    display: flex;
    margin-bottom: 1.5rem;
`

const Number = styled.div`
    width: 70px;
    height: 70px;
    color: #FFFFFF;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 22px;
    font-size: 20px;
    background: rgba(255, 255, 255, 0.08);
    backdrop-filter: blur(24px);
    border-radius: 24px;
    ${res(1246, {fontSize: '18px'})}
    ${res(597, {fontSize: '14px', width: '50px', height: '50px'})}
`

const Detail = styled.p`
    font-weight: 400;
    font-size: 18px;
    line-height: 180%;
    color: #B0B0B0;
    padding-left: 1.5rem;
    ${res(1246, {fontSize: '15px'})}
    ${res(597, {fontSize: '11px'})}
`

const Working = (props, ref) => {
    return ( 
        <Container ref={ref}>
            <Left>
                <Planet src={planet11}/>
                <GreyBox />
            </Left>
            <Right>
                <Title>| How Metaverse Works</Title>
                <Head>Get started <br />with just a few <br />clicks</Head>
                <Point>
                    <Number>01</Number>
                    <Detail>Find a world that suits you <br />and you want to enter</Detail>
                </Point>
                <Point>
                    <Number>02</Number>
                    <Detail>Enter the world by reading <br />basmalah to be safe</Detail>
                </Point>
                <Point>
                    <Number>03</Number>
                    <Detail>No need to beat around the bush, <br />just stay on the gas and have fun</Detail>
                </Point>
            </Right>
        </Container>
     );
}
 
export default forwardRef(Working);