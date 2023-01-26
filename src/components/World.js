import { forwardRef, useState } from "react";
import styled from "styled-components";
import w1 from '../assets/w1.png';
import w2 from '../assets/w2.png';
import w3 from '../assets/w3.png';
import w4 from '../assets/w4.png';
import w5 from '../assets/w5.png';
import headset from '../assets/headset-vr.svg';
import { res } from "../responsive";

const Container = styled.section`
    position: relative;
    width: 75%;
    margin: 0 auto;
`

const Title = styled.p`
    font-size: 14px;
    font-weight: 400;
    letter-spacing: -0.02em;
    color: rgba(199, 199, 199, 0.5);
    text-align: center;
    position: relative;
    z-index: 4;
`

const Head = styled.h2`
    font-weight: 700;
    font-size: 64px;
    line-height: 81px;
    text-align: center;
    letter-spacing: -0.02em;
    color: #FFFFFF;
    padding-top: 2rem;
    ${res(1090, {fontSize: '50px'})}
    ${res(848, {fontSize: '40px', lineHeight: '55px'})}
    ${res(686, {fontSize: '30px'})}
    ${res(510, {fontSize: '24px', lineHeight: '45px'})}
    ${res(408, {fontSize: '19px', lineHeight: '37px'})}
    ${res(323, {fontSize: '15px', lineHeight: '30px'})}
`

const Wrapper = styled.div`
    display: flex;
    justify-content: center;
    padding-top: 5rem;
    position: relative;
    z-index: 4;
    gap: 2rem;
    flex-wrap: wrap;
`

const ImageDiv = styled.div`
    width: ${props => props.type === 'active' ? '370px' : '170px'};
    height: 563px;
    border-radius: 24px;
    background-image: url(${props => props.myi});
    cursor: pointer;
    background-size: cover;
    transition: width 1s;
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    align-items: ${props => props.type === 'active' ? 'flex-start' : 'center'};
    padding: ${props => props.type === 'active' ? '0 0 2rem 2rem' : '0 0 5rem 0rem'};
    flex-grow: 2;
    ${res(1571, {width: '370px', height: '350px', alignItems: 'flex-start', padding: '0 0 2rem 2rem'})}
    ${res(388, {width: '85%'})}
`

const IconDiv = styled.div`
    padding-bottom: 1rem;
    display: ${props => props.type === 'active' ? 'block' : 'none'};
    ${res(1571, {display: 'block'})}
`

const Icon = styled.img``

const THead = styled.h3`
    font-weight: 400;
    font-size: 16px;
    color: #FFFFFF;
    padding-bottom: 1rem;
    display: ${props => props.type === 'active' ? 'block' : 'none'};
    ${res(1571, {display: 'block'})}
    ${res(446, {fontSize: '13px'})}
`

const BHead = styled.h2`
    font-weight: 700;
    font-size: 32px;
    color: #FFFFFF;
    width: 300px;
    margin-bottom: ${props => props.type === 'active' ? '0' : '5rem'};
    transform: rotate(${props => props.type === 'active' ? '0' : '-90deg'});
    ${res(1571, {transform: 'rotate(0)', marginBottom: '0'})}
    ${res(446, {fontSize: '20px'})}
`

const World = (props, ref) => {
    const [isActive1, setIsActive1] = useState(false);
    const [isActive2, setIsActive2] = useState(true);
    const [isActive3, setIsActive3] = useState(false);
    const [isActive4, setIsActive4] = useState(false);
    const [isActive5, setIsActive5] = useState(false);
    return ( 
        <Container ref={ref}>
            <Title>| The World</Title>
            <Head>Choose the world you want <br /> to explore</Head>
            <Wrapper>
                <ImageDiv type={isActive1 ? 'active' : null} myi={w1} onClick={() => {
                    setIsActive1(!isActive1);
                    setIsActive2(false);
                    setIsActive3(false);
                    setIsActive4(false);
                    setIsActive5(false);
                    }}>
                    <IconDiv type={isActive1 ? 'active' : null}>
                        <Icon src={headset}/>
                    </IconDiv>
                    <THead type={isActive1 ? 'active' : null}>ENTER METAVERSE</THead>
                    <BHead type={isActive1 ? 'active' : null}>The Hogwarts</BHead>
                </ImageDiv>
                <ImageDiv type={isActive2 ? 'active' : null} myi={w2} onClick={() => {
                    setIsActive1(false);
                    setIsActive2(!isActive2);
                    setIsActive3(false);
                    setIsActive4(false);
                    setIsActive5(false);
                    }}>
                    <IconDiv type={isActive2 ? 'active' : null}>
                        <Icon src={headset} />
                    </IconDiv>
                    <THead type={isActive2 ? 'active' : null}>ENTER METAVERSE</THead>
                    <BHead type={isActive2 ? 'active' : null}>The Upside Down</BHead>
                </ImageDiv>
                <ImageDiv type={isActive3 ? 'active' : null} myi={w3} onClick={() => {
                    setIsActive1(false);
                    setIsActive2(false);
                    setIsActive3(!isActive3);
                    setIsActive4(false);
                    setIsActive5(false);
                    }}>
                    <IconDiv type={isActive3 ? 'active' : null}>
                        <Icon src={headset} />
                    </IconDiv>
                    <THead type={isActive3 ? 'active' : null}>ENTER METAVERSE</THead>
                    <BHead type={isActive3 ? 'active' : null}>Kadirojo Permai</BHead>
                </ImageDiv>
                <ImageDiv type={isActive4 ? 'active' : null} myi={w4} onClick={() => {
                    setIsActive1(false);
                    setIsActive2(false);
                    setIsActive3(false);
                    setIsActive4(!isActive4);
                    setIsActive5(false);
                    }}>
                    <IconDiv type={isActive4 ? 'active' : null}>
                        <Icon src={headset} />
                    </IconDiv>
                    <THead type={isActive4 ? 'active' : null}>ENTER METAVERSE</THead>
                    <BHead type={isActive4 ? 'active' : null}>Paradise Island</BHead>
                </ImageDiv>
                <ImageDiv type={isActive5 ? 'active' : null} myi={w5} onClick={() => {
                    setIsActive1(false);
                    setIsActive2(false);
                    setIsActive3(false);
                    setIsActive4(false);
                    setIsActive5(!isActive5);
                    }}>
                    <IconDiv type={isActive5 ? 'active' : null}>
                        <Icon src={headset} />
                    </IconDiv>
                    <THead type={isActive5 ? 'active' : null}>ENTER METAVERSE</THead>
                    <BHead type={isActive5 ? 'active' : null}>Hawkins Labs</BHead>
                </ImageDiv>
            </Wrapper>
        </Container>
     );
}
 
export default forwardRef(World);