import React, { useRef } from 'react'
import io from 'socket.io-client';
import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import * as S from "../../styles/chatStyles";
import Header from '../../components/Header';


const socket = io.connect(process.env.REACT_APP_SERVER)
// const socket = io.connect("http://localhost:3001")

export default function ChatRoom(props) {
  const [message, setMessage] = useState("");
  // const [messageReceived, setMessageReceived] = useState(""); //서버 수신 메시지
  const [chatMessage, setChatMessage] = useState([]);

  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const username = searchParams.get('username');
  const room = searchParams.get('room');
  const ref = useRef(null);

  // 전체 메시지 전달
  const sendMessage = () => {
    socket.emit("send_message", { message, user: username });
    setChatMessage([...chatMessage, { message, user: username }]);
    setMessage("");
  };

  // 방 접속
  const joinRoom = () => {
    if (room !== "") {
      socket.emit("join_room", room);
    }
  }

  const now = new Date();
  const currentHour = now.getHours();
  const currentMinute = now.getMinutes();
  const messageWithTime = `${currentHour}:${currentMinute}`;

  // 방 메시지 전달
  const sendMessageRoom = () => {
    if (message.trim() === '') {
      alert('빈값안됨')
      return;
    } else {
      socket.emit("send_message_Room", { message, room, user: username, time: messageWithTime })
      setChatMessage([...chatMessage, { message, user: username, time: messageWithTime }]);
      setMessage("");
    }
  }

  const handleSubmit = (e) => {
    e.preventDefault();
  }

  // 방입장
  const notifyUserJoin = () => {
    socket.emit("user_join", { room, user: username });
  }

  useEffect(() => {
    joinRoom();
    notifyUserJoin();
  }, []);

  useEffect(() => {
    socket.on("receive_message", (data) => {
      setChatMessage([...chatMessage, { message: data.message, user: data.user, admit: data.admit, time: messageWithTime }])
    })
    ref.current.scrollTop = ref.current.scrollHeight;
  }, [socket, chatMessage])

  return (
    <div className="App">
      <S.ChattingContainer>
        <Header room={room} username={username} />
        <S.MessageList ref={ref}>
          <p style={{ color: "#525252" }}>- <strong>{username}</strong>님 <strong>{room}</strong>번방에 오신 것을 환영합니다. 자유롭게 대화를 나누세요. -</p>
          {chatMessage.map((chat, i) => (
            <div key={i}>
              {chat.admit === "관리자" ?
                <S.SystemMessage>{chat.message}</S.SystemMessage> : chat.user === username ?
                  <>
                    <S.MessageMe>
                      <p>
                        <S.UsernameMe>You</S.UsernameMe>
                        {chat.message}
                        <S.TimeMe>{chat.time}</S.TimeMe>
                      </p>
                    </S.MessageMe>
                  </>
                  :
                  <>
                    <S.MessageSomeone>
                      <p>
                        <S.UsernameSomeone>{chat.user}</S.UsernameSomeone>
                        {chat.message}
                        <S.TimeSomeone>{chat.time}</S.TimeSomeone>
                      </p>
                    </S.MessageSomeone>
                  </>
              }
            </div>
          ))}
        </S.MessageList>
      </S.ChattingContainer>
      <S.ChattingBox onSubmit={handleSubmit}>
        <S.ChattingInput placeholder="Message..."
          onChange={(e) => { setMessage(e.target.value) }}
          value={message}
        />
        {chatMessage.user === "chattingWithAdmit" ?
          <S.ChattingSendBtn onClick={sendMessage}>SuperSend</S.ChattingSendBtn> :
          <S.ChattingSendBtn type="submit" onClick={sendMessageRoom}>send</S.ChattingSendBtn>
        }
      </S.ChattingBox>
    </div>
  );
}