import styled from "styled-components";
import ArrowImg from '../assets/arrow-down.svg';
import { motion } from 'framer-motion';
import { res } from "../responsive";
import { forwardRef } from "react";

const Container = styled.section`
    text-align: center;
    top: -5rem;
    position: relative;
    padding-top: 5rem;
    max-width: 1200px;
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

const Detail = styled.p`
    font-weight: 400;
    font-size: 32px;
    line-height: 57.6px;
    color: #C7C7C7;
    padding: 0 6rem;
    margin: 0 auto;
    padding-top: 5rem;
    padding-bottom: 12rem;
    text-align: justify;
    position: relative;
    z-index: 4;
    ${res(1000, {fontSize: '28px', lineHeight: '50px'})}
    ${res(800, {fontSize: '22px', paddingLeft: '4rem', paddingRight: '4rem'})}
    ${res(600, {fontSize: '20px', lineHeight: '40px'})}
    ${res(500, {fontSize: '15px', lineHeight: '30px'})}
    ${res(400, {padding: '5rem 3rem 0 3rem'})}
` 

const Highlight = styled.span`
    color: #FFFFFF;
    font-weight: 700;
`
const Arrow = styled.img``


const About = (props, ref) => {
    return ( 
        <Container ref={ref}>
            <Title>| About</Title>
            <Detail>
            <Highlight>Metaverse</Highlight> is a new thing in the future, where you can enjoy the virtual world by feeling like it's really real, you can feel what you feel in this metaverse world, because this is really the <Highlight>madness of the metaverse</Highlight> of today, using only <Highlight>VR</Highlight> devices you can easily explore the metaverse world you want, turn your dreams into reality. Let's <Highlight>explore</Highlight> the madness of the metaverse...
            </Detail>
            <Arrow as={motion.img} src={ArrowImg} initial={{y: 0}} animate={{y: 10}} transition={{duration: 2, repeat: Infinity}}/>
        </Container>
     );
}
 
export default forwardRef(About);