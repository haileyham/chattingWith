import * as S from "../styles/commonStyles";
import { Link, useNavigate } from 'react-router-dom';
import React, { useState } from 'react'

export default function Toggle() {
  const navigate = useNavigate();
  const [toggle, setToggle] = useState(false);

  const useToggle = () => {
    setToggle(!toggle);
  };

  return (
    <>
      <S.NavToggle onClick={useToggle} className={toggle ? 'mNavToggle open' : 'mNavToggle'}>
        <div></div>
        <div></div>
        <div></div>
      </S.NavToggle>
      <S.Nav className={toggle ? 'navToggleOpen' : 'navToggleClose'}>
        <Link onClick={() => { navigate('/') }} className="home">👻 CHAT</Link>
        <Link href="https://study-now-pink.vercel.app" target='_blank'>스터디나우</Link>
        <Link href="https://study-now-pink.vercel.app/study-post/list" >게시판</Link>
        <Link>앨범</Link>
      </S.Nav>
    </>
  )
}