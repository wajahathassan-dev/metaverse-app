import { forwardRef } from "react";
import styled from "styled-components";
import map from '../assets/mapp.png';
import { res } from "../responsive";

const Container = styled.div`
    width: 70%;
    margin: 20rem auto;
    ${res(599, {width: '85%'})}
`

const Title = styled.p`
    font-size: 14px;
    font-weight: 400;
    letter-spacing: -0.02em;
    color: rgba(199, 199, 199, 0.5);
    text-align: center;
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
    ${res(1262, {fontSize: '40px', lineHeight: '60px', paddingBottom: '0'})}
    ${res(789, {fontSize: '30px', lineHeight: '50px'})}
    ${res(599, {fontSize: '23px'})}
    ${res(375, {fontSize: '19px', lineHeight: '40px'})}
`

const Map = styled.div`
    overflow: hidden;
    ${res(789, {position: 'relative', top: '-10rem'})}
`

const MapImg = styled.img`
    height: 45rem;
    width: 100%;
    object-fit: contain;
`
const People = (props, ref) => {
    return ( 
        <Container ref={ref}>
            <Title>| People on the world</Title>
            <Head>Track friends around you and <br />invite them to play together in <br />the same world</Head>
            <Map>
                <MapImg src={map}/>
            </Map>
        </Container>
     );
}
 
export default forwardRef(People);