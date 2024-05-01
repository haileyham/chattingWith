const express = require('express');
const app = express();
const http = require('http');
const { Server } = require('socket.io');
const cors = require("cors");

app.use(cors());

const server = http.createServer(app)

const io = new Server(server, {
  cors: {
    origin: process.env.CORS_ORIGIN,
    methods: ["GET", "POST"],
  },
});

io.on("connection", (socket) => {
  console.log(`User Connected : ${socket.id}`)

  // 모두에게 보내기
  socket.on("send_message", (data) => {
    socket.broadcast.emit("receive_message", data);
  })

  // 방에 입장하기
  socket.on("join_room", (data) => {
    socket.join(data)
  })

  // 방에만 보내기
  socket.on("send_message_Room", (data) => {
    socket.to(data.room).emit("receive_message", data)
  })

  // 방입장
  socket.on("user_join", ({ room, user }) => {
    const joinMessage = `${user}님이 채팅방 ${room}에 입장했습니다.`
    socket.to(room).emit("receive_message", { message: joinMessage, user: "관리자" })
  })
})

server.listen(process.env.PORT, () => {
  console.log("SERVER IS RUNNING")
})

