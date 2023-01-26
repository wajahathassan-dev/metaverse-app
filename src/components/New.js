import styled from "styled-components";
import picture from '../assets/picture.svg';
import headset from '../assets/headset.svg';
import planet14 from '../assets/planet-14.png';
import { res } from "../responsive";
import { forwardRef } from "react";

const Container = styled.div`
    display: flex;
    justify-content: center;
    ${res(1148, {flexDirection: 'column-reverse', alignItems: 'center', justifyContent: 'flex-start', marginTop: '10rem'})}
`

const Left = styled.div`
    padding-left: 4rem;
    ${res(468, {paddingLeft: '2rem'})}
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
    ${res(1148, {fontSize: '50px'})}
    ${res(468, {fontSize: '30px', lineHeight: '45px'})}
`

const Wrapper = styled.div`
    display: flex;
    gap: 2rem;
    ${res(468, {flexDirection: 'column', alignItems: 'flex-start'})}
`

const Point = styled.div`
    ${res(468, {display: 'flex', flexDirection: 'column', alignItems: 'flex-start'})}
`

const IconCon = styled.div`
    width: 70px;
    height: 70px;
    background: rgba(255, 255, 255, 0.08);
    backdrop-filter: blur(24px);
    border-radius: 24px;
    display: flex;
    justify-content: center;
    align-items: center;
    ${res(1148, {width: '50px', height: '50px'})}
`

const Icon = styled.img`
    width: 20px;
    height: 16px;
`

const Label = styled.h3`
    font-weight: 700;
    font-size: 24px;
    line-height: 30px;
    color: #FFFFFF;
    padding: 1rem 0;
    ${res(1148, {fontSize: '19px'})}
    ${res(468, {fontSize: '16px'})}
`

const Detail = styled.p`
    font-weight: 400;
    font-size: 16px;
    line-height: 180%;
    color: #B0B0B0;
    ${res(1148, {fontSize: '13px'})}
    ${res(468, {fontSize: '10px'})}
`

const Right = styled.div`
    position: relative;
    ${res(1148, {display: 'flex', justifyContent: 'center'})}
`

const Planet14 = styled.img`
    width: 95%;
    object-fit: contain;
    filter: drop-shadow(0px 80px 120px rgba(0, 0, 0, 0.25));
    position: relative;
    z-index: 4;
    ${res(1148, {width: '70%'})}
`

const GreyBox = styled.div`
    background: rgba(255, 255, 255, 0.08);
    backdrop-filter: blur(24px);
    border-radius: 195px 160px 240px 180px;
    transform: rotate(176.81deg);
    width: 60%;
    height: 314.8px;
    position: absolute;
    bottom: 8rem;
    right: 10%;
    z-index: 3;
    ${res(1148, {width: '40%', height: '40%', left: '30%', bottom: '20%'})}
`

const New = (props, ref) => {
    return ( 
        <Container ref={ref}>
            <Left>
                <Title>| What's New?</Title>
                <Head>What's new about <br />Metaverse?</Head>
                <Wrapper>
                    <Point>
                        <IconCon>
                            <Icon src={picture}/>
                        </IconCon>
                        <Label>A new world</Label>
                        <Detail>We have the latest update <br />with new world for you to <br />try never mind</Detail>
                    </Point>
                    <Point>
                        <IconCon>
                            <Icon src={headset}/>
                        </IconCon>
                        <Label>More realistic</Label>
                        <Detail>In the latest update, your <br />eyes are narrow, making the <br />world more realistic than ever</Detail>
                    </Point>
                </Wrapper>
            </Left>
            <Right>
                <Planet14 src={planet14}/>
                <GreyBox />
            </Right>
        </Container>
     );
}
 
export default forwardRef(New);