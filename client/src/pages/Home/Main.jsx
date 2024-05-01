import React, { useState } from 'react'
import { useNavigate, Link } from 'react-router-dom';
import * as S from "../../styles/mainStyles";

export default function Main() {
  const navigate = useNavigate();

  const [username, setUsername] = useState(""); // 사용자 닉네임
  const [room, setRoom] = useState(""); // 방 번호

  return (
    <>
      <S.MainContainer >
        <S.Nav>
          <S.Logo onClick={() => { navigate('/') }}>👻 CHAT</S.Logo>
          <S.NavA onClick={() => { navigate('/') }}>Home</S.NavA>
          <S.NavA onClick={() => { navigate('/') }}>채팅목록</S.NavA>
          <S.NavA>게시판</S.NavA>
          <S.NavA>앨범</S.NavA>
        </S.Nav>
        <S.IntoChatContainer1>
        </S.IntoChatContainer1>
        <S.IntoChatContainer2>
          <S.WrapInputBtn>
            <S.RoomNumberInput placeholder='방번호 입력' type="number" onChange={(e) => { setRoom(e.target.value) }}></S.RoomNumberInput>
            <S.UsernameInput placeholder='닉네임 입력' onChange={(e) => { setUsername(e.target.value) }}></S.UsernameInput>
            <Link to={`/chattingRoom?username=${username}&room=${room}`} style={{ width: "80%" }}>
              <S.IntoChatRoomBtn>채팅방 입장</S.IntoChatRoomBtn>
            </Link>
          </S.WrapInputBtn>
        </S.IntoChatContainer2>
      </S.MainContainer>
    </>
  )
}
