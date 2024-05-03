export const handleRoomNum = (e, setRoom) => {
  const newNum = parseInt(e.target.value);
  if (isNaN(newNum)) {
    alert('숫자를 입력해 주세요');
  } else if (newNum >= 1 && newNum <= 100) {
    setRoom(newNum);
  } else {
    alert('1~100번 방에 입장해 주세요');
  }
}