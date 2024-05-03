import { styled } from 'styled-components';

const imagePath = process.env.PUBLIC_URL + '/172444.webp';

export const MainContainer = styled.main`
    margin:0;
    box-sizing: border-box;
    height:100vh;
    background: #fff;
`

export const Nav = styled.nav`
    display:flex;
    max-width:1200px;
    margin:auto;
    padding:2rem 1rem 1rem;
    gap:1rem;
    text-align: center;
    align-items: center;
    box-sizing: border-box;
`

export const Logo = styled.span`
    font-weight: 900;
    font-size: 1.3rem;
    flex-grow:2;
    cursor: pointer;
`

export const NavA = styled.a`
    position: relative;
    flex-grow: 1;
    color:inherit;
    text-decoration: none;
    cursor: pointer;
    &::before {
        content: '';
        position: absolute;
        top:1.7rem;
        left: 50%;
        width: 0;
        height: 2px;
        background: #3f3f3f; 
        transition: width 0.3s ease; 
        transform: translateX(-50%);
      }
    &:hover::before {
        width: 70%; 
    }
    @media (min-width: 1080px) {
      padding: 2rem;
      &::before {
        top:auto;
        bottom: 1rem;
      }
    }
`

export const IntoChatContainer1 = styled.div`
    background-image: url('${imagePath}');
    background-size: cover;
    background-position:center bottom;
    margin: 2rem auto;
    height:22rem;
`

export const IntoChatContainer2 = styled.div`
    margin:-2rem auto 5rem;
    height:20rem;
    max-width: 1080px;
    @media (min-width: 768px) {
      margin:-2rem auto;
      height:20rem;
    }
`

export const WrapInputBtn = styled.div`
    display:flex;
    margin:auto;
    width:90%;
    height:100%;
    flex-direction: column;
    justify-content: center; 
    align-items:center;
    font-size: 1rem;
    gap:15px;
    @media (min-width: 768px) {
      flex-direction: row;
    }
`
export const UsernameInput = styled.input`
    width:90%;
    padding:1rem;
    border-radius: 5px;
    border:  #ffebeb solid 5px;
    outline: none;
    @media (min-width: 768px) {
      padding:2rem;
    }
`
export const RoomNumberInput = styled.input`
    width:90%;
    padding:1rem;
    border-radius: 5px;
    border:  #ffebeb solid 5px;
    outline: none;
    @media (min-width: 768px) {
      padding:2rem;
    }
`
export const IntoChatRoomBtn = styled.button`
    width:90%;
    padding:1rem;
    background: #ffe0e5;
    border-radius: 5px;
    border: none;
    cursor: pointer;
    &:hover{
        background: pink;
    }
    @media (min-width: 768px) {
      padding:2rem;
    }
`

