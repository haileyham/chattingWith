import { styled } from 'styled-components';

const imagePath = process.env.PUBLIC_URL + '/172444.webp';

export const MainContainer = styled.main`
    margin:0;
    box-sizing: border-box;
`

export const Nav = styled.nav`
    display:flex;
    max-width:1200px;
    margin:1rem auto;
    padding:1rem;
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
    text-decoration: none;
    flex-grow: 1;
    cursor: pointer;
    position: relative;
    &::before {
        content: '';
        position: absolute;
        top:1.7rem;
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
    margin:2rem auto 5rem;
    max-width: 1080px;
    height:20rem;
    @media (min-width: 1080px) {
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
    gap:10px;
    @media (min-width: 768px) {
      flex-direction: row;
    }
`
export const UsernameInput = styled.input`
    width:80%;
    padding:2rem;
    border-radius: 5px;
    border:  #ffebeb solid 5px;
    outline: none;
`
export const RoomNumberInput = styled.input`
    width:80%;
    padding:2rem;
    border-radius: 5px;
    border:  #ffebeb solid 5px;
    outline: none;
`
export const IntoChatRoomBtn = styled.button`
    width:100%;
    padding:2rem;
    background: #ffe0e5;
    border-radius: 5px;
    border: none;
    cursor: pointer;
    &:hover{
        background: pink;
    }
`

