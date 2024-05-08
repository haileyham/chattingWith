import { styled } from 'styled-components';

export const NavToggle = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    width: 24px;
    height: 18px;
    position: fixed;
    top: 1rem;
    left: 1rem;
    cursor: pointer;
    z-index: 99;

    //div
    div{
      width: 100%;
      height: 3px;
      background-color: black;
      transition: all 0.3s ease;
    }
    
    //toggle active
    &.open {
        div:nth-child(1) {
            transform: rotate(45deg) translate(5px, 5px);
        }

        div:nth-child(2) {
            opacity: 0;
        }

        div:nth-child(3) {
            transform: rotate(-45deg) translate(5px, -5px);
        }
    }
`
export const Nav = styled.nav`
  &.navToggleOpen {
      position: fixed;
      display: flex;
      flex-direction: column;
      gap: 3rem;
      height: 100vh;
      margin: 2rem auto;
      padding: 5rem 2rem 0;
      justify-content: flex-start;
      align-items: center;
      border-top-right-radius: 10px;
      border-bottom-right-radius: 10px;
      backdrop-filter: saturate(180%) blur(30px);
      text-align: center;
            color:#424242;
      transition: transform 0.5s ease;
      top: -2rem;
      z-index: 98;
      a {
          width: 100%;
          font-size: 1rem;
          font-weight: 900;
          &:hover {
              color: #fff;
          }
      }
      &.home {
          img {
              display: none;
          }
      }
      @media (min-width: 1080px) {
        width:20%;
        color:#fff;
        a{
          &:hover{
            color:#424242;
          }
        }
      }
}
  &.navToggleClose {
      height: 0;
      width: 0;
      transform: translateX(-10rem);
      opacity: 0;
  }
`


