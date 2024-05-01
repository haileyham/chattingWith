import { styled } from 'styled-components';

const imagePath = process.env.PUBLIC_URL + '/172444.webp';

export const MainContainer = styled.main`
    margin:0;
    box-sizing: border-box;
`

export const Nav = styled.nav`
    display:flex;
    max-width:1200px;
    margin:auto;
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
    padding: 2rem;
    text-decoration: none;
    flex-grow: 1;
    cursor: pointer;
    position: relative;
    &::before {
        content: '';
        position: absolute;
        bottom: 1rem;
        left: 50%; /* 중앙부터 시작 */
        width: 0;
        height: 2px;
        background: #3f3f3f; /* 라인 색상 설정 */
        transition: width 0.3s ease; /* 애니메이션 효과 설정 */
        transform: translateX(-50%); /* 중앙 정렬 */
    }
    &:hover::before {
        width: 70%; /* 호버 시 라인이 중앙부터 퍼지도록 설정 */
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
    margin:auto;
    max-width: 1200px;
    height:10rem;
    /* background-color: #ffebeb; */
    margin-top:2rem;
    margin-bottom:20rem;
    display: flex;
    justify-content: center; 
    align-items: center; 
`

export const WrapInputBtn = styled.div`
    display:flex;
    gap:10px;
    height:30px;
    align-items: center;
    font-size: 1rem;
`
export const UsernameInput = styled.input`
    border-radius: 5px;
    border:  #ffebeb solid 5px;
    outline: none;
    padding:2rem;
`
export const RoomNumberInput = styled.input`
    border-radius: 5px;
    border:  #ffebeb solid 5px;
    outline: none;
    padding:2rem;
    width:100px;
`
export const IntoChatRoomBtn = styled.button`
    background: #ffe0e5;
    border-radius: 5px;
    border: none;
    padding:2rem;
    cursor: pointer;
    &:hover{
        background: pink;
    }
`

