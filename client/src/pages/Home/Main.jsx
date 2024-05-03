import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import * as S from "../../styles/mainStyles";
import { handleRoomNum } from '../../utils/roomUtils';

export default function Main() {
  const navigate = useNavigate();

  const [username, setUsername] = useState(""); // 사용자 닉네임
  const [room, setRoom] = useState(1); // 방 번호

  const handleNum = (e) => {
    handleRoomNum(e, setRoom);
  }

  const handleName = () => {
    const name = username;
    if (1 <= name.length && name.length < 11) {
      setUsername(name)
      navigate(`/chattingRoom?username=${name}&room=${room}`);
    } else {
      alert("name은 1-10자 이내로 입력해주세요")
    }
  }

  return (
    <>
      <S.MainContainer >
        <S.Nav>
          <S.Logo onClick={() => { navigate('/') }}>👻 CHAT</S.Logo>
          <S.NavA href="https://study-now-pink.vercel.app" target='_blank'>스터디나우</S.NavA>
          <S.NavA href="https://study-now-pink.vercel.app/study-post/list" >게시판</S.NavA>
          <S.NavA>앨범</S.NavA>
        </S.Nav>
        <S.IntoChatContainer1>
        </S.IntoChatContainer1>
        <S.IntoChatContainer2>
          <S.WrapInputBtn>
            <S.RoomNumberInput placeholder='방번호 입력' type="number" onChange={handleNum} value={room}></S.RoomNumberInput>
            <S.UsernameInput placeholder='닉네임 입력' onChange={(e) => { setUsername(e.target.value) }}></S.UsernameInput>
            <S.IntoChatRoomBtn onClick={handleName}>채팅방 입장</S.IntoChatRoomBtn>
          </S.WrapInputBtn>
        </S.IntoChatContainer2>
      </S.MainContainer>
    </>
  )
}
