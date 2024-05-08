import { styled } from 'styled-components';

const imagePath = process.env.PUBLIC_URL + '/172444.webp';

export const MainContainer = styled.main`
    margin:0;
    box-sizing: border-box;
    height:100vh;
    background: #fff;
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

