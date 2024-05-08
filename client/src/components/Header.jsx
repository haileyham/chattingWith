import { useNavigate } from "react-router-dom";
import * as S from "../styles/commonStyles";
import React from 'react'

export default function Header({ room, username }) {
  const navigate = useNavigate();

  const handleBack = () => {
    navigate('/');
  };

  return (
    <S.Header>
      <button onClick={handleBack}>◀</button>
      <h1>Room : {room}</h1>
      <p>my name : {username}</p>
    </S.Header>
  )
}
