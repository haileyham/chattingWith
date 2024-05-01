import React from 'react'
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Main from '../pages/Home/Main';
import ChatRoom from '../pages/chat/ChatRoom';

export default function route() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/chattingRoom" element={<ChatRoom />} />
      </Routes>
    </BrowserRouter>
  )
}
