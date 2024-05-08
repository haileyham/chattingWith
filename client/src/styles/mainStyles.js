import { styled } from 'styled-components';

const borderRadius = '8rem';

export const MainContainer = styled.main`
    margin:0;
    box-sizing: border-box;
    height:100vh;
    background: #fff;
    `

export const IntoChatContainer1 = styled.div`
    position: relative;
    width:100%;
    height:65vh;
    h1{
      position: absolute;
      color:#fff;
      bottom:10%;
      left:10%;
      line-height: 3rem;
      z-index: 2;
      span{
        opacity: 0;
        animation: example 1s alternate forwards;
        display: block;
      }
      span:nth-child(1) { animation-delay: 1s; }
      span:nth-child(2) { animation-delay: 2s; }
      span:nth-child(3) { animation-delay: 3s; }
      span:nth-child(4) { animation-delay: 4s; }
    }
    @keyframes example {
      from {
    opacity: 0;
    filter: brightness(0);
    transform: translateY(30px);
  }
  to {
    opacity: 1;
    filter: brightness(1);
  }
}



    img{
      width: 100%;
      height: 100%;
      object-fit: cover;
      border-bottom-right-radius: ${borderRadius};
      filter:brightness(0.5);
    }
`

export const IntoChatContainer2 = styled.div`
    max-width: 1080px;
    height:35vh;
    padding-bottom:1rem;
    position: relative;
    button{
      background:rgb(118, 193, 254);
      padding: 1rem 6rem;
      font-size: 1.2rem;
      font-weight:900;
      color:#fff;
      border: none;
      border-radius:  ${borderRadius};
      cursor: pointer;
      &:hover{
        background: rgb(82, 87, 234);
      }
    }
`

export const WrapInputBtn = styled.div`
    display:flex;
    margin: auto;
    width:90%;
    height:100%;
    flex-direction: column;
    justify-content: center; 
    align-items:center;
    font-size: 1rem;
    gap:1rem;
    @media (min-width: 768px) {
      flex-direction: row;
    }
`

export const UsernameInput = styled.input`
    width:90%;
    padding:1rem 1.5rem;
    border:  #ffebeb solid 5px;
    border-radius: 2rem;
    outline: none;
    &:focus{
      border:  rgb(212, 236, 255) solid 5px;
    }
    @media (min-width: 768px) {
      padding:2rem;
    }
`
export const RoomNumberInput = styled.input`
    width:90%;
    padding:1rem 1.5rem;
    border-radius: 2rem;
    border:  #ffebeb solid 5px;
    outline: none;
    &:focus{
      border:  rgb(212, 236, 255) solid 5px;
    }
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

