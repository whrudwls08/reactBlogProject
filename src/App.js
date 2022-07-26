import React, { useState } from 'react'
import "./App.css";

function App() {

  let [title1, title1change] = useState(['남자 코트 추천', '남자 바지 추천', '남자 모자 추천']);
  let [like, likeUp] = useState(0);
  let [modal, setModal] = useState(false)

  return (
    <div className="App">
      <div className="black-nav">
        <div>개발 Blog</div>
      </div>
      <div className="list">
        <h4 style={{ display: 'inline-block' }}>{title1[0]} <span onClick={() => { likeUp(like + 1) }}>👍</span> {like} </h4>
        <button style={{ marginLeft: '10px', paddingBottom: '-10px' }} onClick={() => {
          let temp = [...title1]
          temp[0] == '여자 코트 추천' ? temp[0] = '남자 코트 추천' : temp[0] = '여자 코트 추천'
          title1change(temp)
        }}>남녀 변경</button>
        <p style={{ marginTop: '0px' }}>7월 22일 발행</p>
      </div>
      <div className="list">
        <h4>{title1[1]}</h4>
        <p>7월 22일 발행</p>
      </div>
      <div className="list">
        <h4 onClick={() => {
          setModal(!modal)
        }}>{title1[2]}</h4>
        <p>7월 22일 발행</p>
      </div>
      <button style={{ marginTop: '10px' }} onClick={() => {
        let copy = [...title1]
        copy.sort()
        title1change(copy)
      }}>
        정렬하기
      </button>
      {
        modal == true ? <Modal /> : null
      }
    </div>
  );
}

function Modal() {
  return (
    <div className="modal">
      <h4>제목</h4>
      <p>날짜</p>
      <p>상세내용</p>
    </div>
  )
}

export default App;
