import { useState } from "react";
import styled from "styled-components";
import hamburger from '../assets/hamburger.png';
import search from '../assets/search.png';
import { res } from "../responsive";

const Container = styled.div`
    position: fixed;
    width: 100vw;
    box-sizing: border-box;
    top: 0;
    left: 0;
    background-color: #1f1d1d;
    z-index: 9999;
`

const Nav = styled.nav`
    width: 75%;
    margin: 0 auto;
    display: flex;
    justify-content: space-between;
    padding: 2rem 0;
    ${res(381, {width: '90%'})}
`

const Item = styled.a`
    z-index: 999;
    cursor: pointer;
    transition: transform 200ms;
    &:hover {
        transform: scale(1.1);
    }
`

const Search = styled.img`
    width: 19px;
    height: 19px;
    object-fit: contain;
`

const Menu = styled.img``

const Logo = styled(Item)`
    color: #FFFFFF;
    font-weight: 800;
    font-size: 24px;
`

const Toggle = styled.div`
    background-color: #1f1d1d;
    position: absolute;
    height: 100vh;
    transition: width 0.3s;
    width: ${props => props.show === 'active' ? '17rem' : '0'};
    position: fixed;
    left: 0;
    top: 0;
    z-index: 990;
    display: flex;
    justify-content: center;
    align-items: center;
    overflow: hidden;
`

const NavItem = styled.a`
    color: #f1eded;
    cursor: pointer;
    transition: color 200ms;  
    &:hover {
        color: #807b7b;
    }
`

const Mid = styled.div`
    display: flex;
    flex-direction: column;
    gap: 2.5rem;
`
const Navbar = ({handleClick}) => {
    const [active, setActive] = useState(false);

    return ( 
        <Container>
            <Nav>
                <Item><Search src={search} alt='search'/></Item>
                <Logo>METAVERSE</Logo>
                <Item onClick={() => setActive(!active)}><Menu src={hamburger} alt='menu'/></Item>
            </Nav>
            <Toggle show={active ? 'active' : null}>
                <Mid>
                    <NavItem onClick={() => handleClick('home')}>| Home</NavItem>
                    <NavItem onClick={() => handleClick('about')}>| About</NavItem>
                    <NavItem onClick={() => handleClick('world')}>| The World</NavItem>
                    <NavItem onClick={() => handleClick('work')}>| How Metaverse Works</NavItem>
                    <NavItem onClick={() => handleClick('new')}>| What's New</NavItem>
                    <NavItem onClick={() => handleClick('people')}>| People on the world</NavItem>
                </Mid>
            </Toggle>
        </Container>
     );
}
 
export default Navbar;