import { styled } from 'styled-components';

export const ChattingContainer = styled.div`
    height:100vh;
    background-color: #ffeded;
`

export const Header = styled.header`
    height:10vh;
    background-color: #ffd6d6;
    display:flex;
    justify-content: space-around;
    align-items: center;
`

export const Heading = styled.h1`
    margin: 0;
    padding: 0;
`;

export const ChattingBox = styled.form`
    position: absolute;
    bottom: 0;
    display: flex;
    gap: 0.3rem;
    width: 100%;
    padding: 0.5rem;
    box-sizing: border-box;
    background-color: #ff7878;
`;

export const ChattingInput = styled.input`
    padding: 0.5rem;
    border: none;
    border-radius: 5px;
    flex-grow: 1;
    &:focus {
        outline: none;
    }
`;

export const ChattingSendBtn = styled.button`
    background-color: #f8d5d5;
    padding: 0.5rem;
    border: none;
    border-radius: 5px;
    cursor: pointer;
`;

export const MessageList = styled.ul`
    list-style: none;
    /* background-color: #ffffff; */
    margin: 0;
    padding: 0;
    height:85%;
    overflow-y: auto;
    display:flex;
    flex-direction: column;
    color:#fff;
`;

export const MessageMe = styled.li`
    padding: 1rem;
    background-color: #cebaf1;
    border-radius: 10px;
    width:80%;
    margin-left: auto; /* 오른쪽 정렬을 위한 설정 */
    margin-right:10px;
    margin-top:40px;
    position: relative;
`;

export const MessageSomeone = styled.li`
    padding: 1rem;
    background-color: #c29de8;
    border-radius: 10px;
    width:80%;
    margin-right: auto; /* 왼쪽 정렬을 위한 설정 */
    margin-left:10px;
    margin-top:40px;
    position: relative;
`;

export const TimeMe = styled.span`
    color:#797979;
    position: absolute;
    left:-50px;
    top:17px;
`

export const TimeSomeone = styled.span`
    color:#797979;
    position: absolute;
    right:-50px;
    top:17px;
`

export const UsernameMe = styled.p`
    color:#797979;
    position: absolute;
    right:10px;
    top:-40px;
    `

export const UsernameSomeone = styled.p`
    color:#797979;
    position: absolute;
    left:10px;
    top:-40px;
`

export const SystemMessage = styled.li`
    color:#797979;
    line-height: 2rem;
    margin-top:10px;
`