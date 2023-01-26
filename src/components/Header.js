import styled from "styled-components";
import i1 from '../assets/i1.png';
import i2 from '../assets/i2.png';
import i3 from '../assets/i3.png';
import i4 from '../assets/i4.png';
import circular from '../assets/circular.png';
import { motion } from 'framer-motion';
import {res} from '../responsive';

const Container = styled.div`
    z-index: 999;
    position: relative;
    margin: 0 auto;
    margin-top: 10rem;
`

const Head = styled.header`
    display: flex;
    z-index: 6;
    position: relative;
    width: 75%;
    margin: 0 auto;
    ${res(1400, {width: '85%'})}
    ${res(1265, {width: '90%'})}
    ${res(964, {flexDirection: 'column', alignItems: 'center', gap: '3rem', width: '100%'})}
    

`

const Left = styled.div`
    text-align: right;
    
`

const Home = styled.a`
    font-size: 14px;
    font-weight: 400;
    letter-spacing: -0.02em;
    color: rgba(199, 199, 199, 0.5);
`

const Mid = styled.div`
    flex-grow: 1;
    padding-left: 5rem;
    ${res(964, {padding: 0})}
    
`

const Title = styled.h1`
    font-family: 'Eudoxus Sans';
    font-style: normal;
    font-weight: 700;
    font-size: 144px;
    line-height: 110%;
    letter-spacing: -0.02em;
    color: #FFFFFF;
    ${res(1165, {fontSize: '12vw'})}
`

const Title2 = styled(Title)`
    display: flex;
    align-items: center;
`

const D = styled.div`
    width: 220px;
    height: 100px;
    border: 18px solid #FFFFFF;
    border-radius: 0px 50px 50px 0px;
    margin-left: 16px;
    ${res(1165, {width: '17vw', height: '9vw'})}
    ${res(869, {border: '16px solid #FFFFFF'})}
    ${res(585, {border: '13px solid #FFFFFF'})}
    ${res(471, {border: '10px solid #FFFFFF', marginLeft: '5px'})}
    ${res(379, {border: '7px solid #FFFFFF'})}
    ${res(335, {border: '5px solid #FFFFFF'})}
`

const Right = styled.div`
    display: flex;
    flex-direction: column;
    gap: 1.5rem;
`

const Social = styled.a`
`

const SocialIcon = styled.img`
    width: 25px;
    height: 25px;
    object-fit: contain;
`

const Scroller = styled.div`
    display: flex;
    justify-content: flex-end;
    position: relative;
    top: 0rem;
    ${res(964, {justifyContent: "center"})}
`

const Wrapper = styled.div`
    width: 350px;
    height: 350px;
    background-image: url(${circular});
    background-size: cover;
    display: flex;
    justify-content: center;
    align-items: center;
`

const Mouse = styled.div`
    width: 12px;
    height: 20px;
    border-radius: 5px;
    border: 2px solid white;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-bottom: 6px;
`

const Line = styled.div`
    border: 1px solid white;
    width: 0;
    height: 5px;
    margin-bottom: 3px;
`

const Header = () => {
    return ( 
        <Container>
            <Head>
                <Left>
                    <Home>| Home</Home>
                </Left>
                <Mid>
                    <Title>METAVERSE</Title>
                    <Title2>MA<D />NESS</Title2>
                </Mid>
                <Right>
                    <Social><SocialIcon src={i1} alt='I1'/></Social>
                    <Social><SocialIcon src={i2} alt='I2'/></Social>
                    <Social><SocialIcon src={i3} alt='Twitter'/></Social>
                    <Social><SocialIcon src={i4} alt='Instagram'/></Social>
                </Right>
            </Head>
            <Scroller>
                <Wrapper>
                    <Mouse as={motion.div}  initial={{y: 0}} animate={{y: 5, }} transition={{duration: 1, repeat: Infinity}}>
                        <Line />
                    </Mouse>
                </Wrapper>
            </Scroller>
        </Container>
     );
}
 
export default Header;