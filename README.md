# <span id="top">🎡 Chatting With</span> 
### 🔗 [Chatting With 바로가기](https://chatting-with.vercel.app/)
<br/>

<img src="https://raw.githubusercontent.com/haileyham/chattingWith/84afe9b0b5940647303f0c5b99b27ee3de8e86bc/client/public/img/chattingWith.jpg" alt="chatting-with 이미지" style="max-width:700px">

<br/>

## 📢 Chatting With 서비스 소개

실시간 랜덤 채팅을 통해 다른 사용자들과 소통할 수 있는 플랫폼입니다. 사용자는 원하는 채팅 방에 닉네임을 설정하여 참여할 수 있습니다. 채팅 방에 참여한 후에는 다른 이들과 즉각적으로 채팅할 수 있으며, 채팅 내용은 실시간으로 전송되어 상호 작용이 가능합니다.
#### 1. 1~100번 방에 입장
- 1번부터 100번까지의 방 중에서 원하는 방에 입장하여 대화 가능합니다.
#### 2. 닉네임 설정
- 원하는 닉네임을 설정하여 방에 입장 가능합니다.
#### 3. 실시간 채팅
- 방에 입장하여 1:1 혹은 여러명이서 실시간 대화를 즐길 수 있습니다.

<br/>

## 📖 개요

### 🎈 프로젝트

- 프로젝트명 : Chatting With
- 프로젝트 기간 : 2023.10

### 🐣 특징 및 성과
- socket.io를 활용한 실시간 채팅 플랫폼 개발
- 반응형 웹을 통한 사용자 친화적
- 채팅방 입장시 system message 입장 알림으로 원활한 소통 향상
- 채팅창 scroll 자동 최하단 적용하여 사용자 편리성 증대
- mobile input 입력 시 확대 방지로 인한 사용자 편리성 증대
- client 및 server 각 배포하여 서비스 제공

### ⚙ 개발 환경

  <img src="https://img.shields.io/badge/React-61DAFB?style=for-the-badge&logo=react&logoColor=white"/><img src="https://img.shields.io/badge/Node.js-5FA04E?style=for-the-badge&logo=nodedotjs&logoColor=white"/><img src="https://img.shields.io/badge/socket.io-010101?style=for-the-badge&logo=socketdotio&logoColor=white"/><img src="https://img.shields.io/badge/StyledComponents-DB7093?style=for-the-badge&logo=styledcomponents&logoColor=white"/><br/><img src="https://img.shields.io/badge/github-181717?style=for-the-badge&logo=github&logoColor=white"/><img src="https://img.shields.io/badge/git-F05032?style=for-the-badge&logo=git&logoColor=white"/><img src="https://img.shields.io/badge/figma-f76c62?style=for-the-badge&logo=figma&logoColor=white"/><img src="https://img.shields.io/badge/notion-000000?style=for-the-badge&logo=notion&logoColor=white"/>



<p align="right"><a href="#top">TOP 🔼</a></p>

# 💡 주요 기능 및 페이지

### [Socket.io]
- Socket.io
- React - client
  - vercel 을 활용하여 배포
- Node.js - server
  - 채팅용 서버 배포

## server 및 client
### [🔎 Main]
| 방 입장 및 닉네임 설정 | 
| ---------------------------| 
| <img width="250px" src="https://raw.githubusercontent.com/haileyham/chattingWith/main/client/assets/images/1.gif"> | 
#### 💡 방 입장
- 1번부터 100번방까지 원하는 방에 입장하여 대화 가능(예외처리 완료)

#### 💡 닉네임 설정
- 원하는 닉네임 설정 후, 입장 가능(예외처리 완료)


#### 💡 Side Toggle Bar
- side toggle bar를 활용하여 편리한 이용 가능
- backdrop 불투명 유리 효과 설정 


### [🔎 Chatting Room] 
| user 입장 알림 | user 메시지 위치 | 스크롤 맨 밑 추적 |
| --------------------------- | --------------------------- | --------------------------- |
|<img width="250px" src="https://raw.githubusercontent.com/haileyham/chattingWith/main/client/assets/images/2.gif"> | <img width="250px" src="https://raw.githubusercontent.com/haileyham/chattingWith/main/client/assets/images/3.gif"> |<img width="250px" src="https://raw.githubusercontent.com/haileyham/chattingWith/main/client/assets/images/4.gif">|

#### 💡 user 입장 알림 - system message
- 채팅방 내에 신규 유저 입장시, system message로 유저 닉네임과 함께 알림 메시지 전달 처리
#### 💡 스크롤 맨 밑 추적
- 채팅 진행 시, 자동으로 스크롤바 최하단으로 가도록하여 사용자 편리성 증대(useRef 이용)
#### 💡 본인 & 상대 글 위치
- 상대방과 나의 글을 분별하여 위치 각 조정
- 단순 일자형 대화가 아닌 상대방과의 채팅 메시지 구분을 위한 UI 처리를 통한 편리성 증대 

<br/>

| 반응형 웹 pc 버전 가능 |
| --------------------------- | 
|<img width="500px" src="https://raw.githubusercontent.com/haileyham/chattingWith/main/client/assets/images/5.JPG">|

<p align="right"><a href="#top">TOP 🔼</a></p>

# 🎃 트러블 슈팅
## 🎃 backdrop
### ▶ 요약
nav의 backdrop 효과가 제대로 동작하지 않는 문제
### ▶ 어떤 문제?
- pc web에서는 잘 작동하나 ios 환경에서 제대로 동작하지 않는 문제 발생
### ▶ 해결 방안
- 기존 backdrop-filter에 추가로 -webkit-backdrop-filter 설정 필요
```
backdrop-filter: saturate(180%) blur(30px);
-webkit-backdrop-filter:saturate(180%) blur(30px); //추가
```

## 🎃 배포 사이트 server
### ▶ 요약
배포 사이트 서버가 제대로 동작하지 않는 현상
### ▶ 어떤 문제?
- 잘 작동하던 서버가 갑자기 제대로 동작하지 않는 문제
- 링크 직접 입력 시 제대로 동작 & 환경변수 처리시 제대로 입력했음에도 문제 지속
### ▶ 해결 방안
- 배포 사이트 변경하면서 환경변수 설정을 제대로 하지 않았음. 바봅..
  - client : React 환경이기에 REACT_APP 접두사 
  - server : node.js 환경이기에 dotenv 패키지 설치 후 및 설정 후, 환경변수 처리

<p align="right"><a href="#top">TOP 🔼</a></p>

<br/>

# 🎪 기능 시현

<p align="right"><a href="#top">TOP 🔼</a></p>
