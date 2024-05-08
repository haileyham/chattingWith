import { styled } from 'styled-components';

export const NavToggle = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    width: 24px;
    height: 18px;
    position: fixed;
    top: 2rem;
    left: 2rem;
    cursor: pointer;
    z-index: 99;
    @media (min-width: 1080px) {
      width:2rem;
      height:2rem;
    }

    //div
    div{
      width: 100%;
      height: 3px;
      background-color: #fff;
      transition: all 0.3s ease;
      @media (min-width: 1080px) {
      height:5px;
    }
    }
    
    //toggle active
    &.open {
        div:nth-child(1) {
            transform: rotate(45deg) translate(5px, 5px);
            @media (min-width: 1080px) {
            transform: rotate(45deg) translate(5px, 5px);
            }
        }

        div:nth-child(2) {
            opacity: 0;
        }

        div:nth-child(3) {
            transform: rotate(-45deg) translate(5px, -5px);
            @media (min-width: 1080px) {
            transform: rotate(-45deg) translate(15px, -15px);
            }
        }
    }
`
export const Nav = styled.nav`
  &.navToggleOpen {
      position: fixed;
      display: flex;
      flex-direction: column;
      gap: 1rem;
      height: 100vh;
      margin: 2rem auto;
      padding: 5rem 1rem 0;
      justify-content: flex-start;
      align-items: center;
      border-top-right-radius: 10px;
      border-bottom-right-radius: 10px;
      backdrop-filter: saturate(180%) blur(30px);
      text-align: center;
      color: #fff;
      transition: transform 0.5s ease;
      top: -2rem;
      z-index: 98;
      a {
          width: 100%;
          padding:1rem 1.5rem;
          font-size: 1rem;
          font-weight: 900;
          background-color: rgba(255,255,255,0.2);
          border-radius: 10rem;
          &:hover {
              color: #424242;
          }
      }
      &.home {
          img {
              display: none;
          }
      }
      @media (min-width: 1080px) {
        width:20%;
      }
}
  &.navToggleClose {
      height: 0;
      width: 0;
      transform: translateX(-10rem);
      opacity: 0;
  }
`

// chatting room
export const Header = styled.header`
    position: relative;
    height:6rem;
    padding:2rem 0;
    display:flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
    border-end-end-radius:1rem;
    border-bottom-left-radius:1rem;
    background-color: #ffebeb;
    button{
      position: absolute;
      top:60%;
      left:5%;
      padding:0.3rem 0.5rem 0.5rem;
      border: none;
      border-radius: 1rem;
      background-color: #fff;
      font-size: 1.5rem;
      transform: translateY(-50%);
      cursor: pointer;
      &:hover{
          background: #ffe3e3;
        }
    }
    h1{
      margin: 0;
      padding: 0;
      font-size: 1.5rem;
    }
    p{
      font-weight: 900;
    }
    @media (min-width: 1080px) {
      flex-direction: row;
      button{
        top:50%;
        left:2%;
      }
    }
`
