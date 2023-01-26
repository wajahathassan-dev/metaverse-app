import styled from "styled-components";
import headset from '../assets/headset.svg';
import twitter from '../assets/twitter.svg';
import facebook from '../assets/facebook.svg';
import instagram from '../assets/instagram.svg';
import linkedin from '../assets/linkedin.svg';
import { res } from "../responsive";


const Container = styled.div`
    width: 70%;
    margin: 0 auto;
    position: relative;
    top: -20rem;
    ${res(472, {width: '90%'})}
`

const Top = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    ${res(856, {flexDirection: 'column'})}
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
    text-align: center;
    ${res(1338, {fontSize: '50px'})}
    ${res(1067, {fontSize: '35px'})}
    ${res(472, {fontSize: '27px'})}
`

const Enter = styled.button`
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 1rem;
    width: 246px;
    height: 64px;
    background: #25618B;
    border-radius: 32px;
    border: none;
    cursor: pointer;
    transition: background-color 200ms;
    &:hover {
        background: #49258b;
    }
`

const Icon = styled.img`
    width: 24px;
    height: 24px;
    object-fit: contain;
    ${res(1338, {width: '20px', height: '20px'})}
    ${res(472, {width: '16px', height: '16px'})}
`

const Text = styled.p`
    font-weight: 400;
    font-size: 16px;
    letter-spacing: 0.005em;
    color: #FFFFFF;
    ${res(1338, {fontSize: '13px'})}
    ${res(472, {fontSize: '11px'})}
`

const Line = styled.div`
    height: 2px;
    background: #FFFFFF;
    opacity: 0.1;
    margin: 3rem 0;
`

const Bottom = styled.div`
    display: flex;
    justify-content: space-between;
    padding-bottom: 3rem;
    align-items: center;
    ${res(1000, {flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'center', gap: '2rem'})}
`

const Logo = styled.h3`
    font-weight: 800;
    font-size: 24px;
    color: #FFFFFF;
`

const Copyright = styled.p`
    font-weight: 400;
    font-size: 14px;
    text-align: center;
    letter-spacing: 0.005em;
    color: rgba(255, 255, 255, 0.7);
    opacity: 0.8;
`

const Social = styled.div`
    display: flex;
    gap: 1rem;
`

const Footer = () => {
    return ( 
        <Container>
            <Top>
                <Head>Enter the metaverse</Head>
                <Enter>
                    <Icon src={headset}/>
                    <Text>ENTER METAVERSE</Text>
                </Enter>
            </Top>
            <Line />
            <Bottom>
                <Logo>METAVERSE</Logo>
                <Copyright>Copyright © 2023 - 2030 Metaversus. All rights reserved.</Copyright>
                <Social>
                    <Icon src={twitter}/>
                    <Icon src={linkedin}/>
                    <Icon src={instagram}/>
                    <Icon src={facebook}/>
                </Social>
            </Bottom>
        </Container>
     );
}
 
export default Footer;