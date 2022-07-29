import React, { useState } from 'react'
import "./App.css";

function App() {

  let [title1, title1change] = useState(['남자 코트 추천', '남자 바지 추천', '남자 모자 추천']);
  let [like, likeUp] = useState([0, 0, 0]);
  let [modal, setModal] = useState(true)
  let [modalTitle, setModalTitle] = useState(0)
  let [inputValue, setInputValue] = useState('');

  return (
    <div className="App">
      <div className="black-nav">
        <div>개발 Blog</div>
      </div>
      {/* <div className="list">
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
      </button> */}

      {
        title1.map((val, i) => {
          return (
            <div className="list">
              <h4 onClick={() => { setModal(!modal); setModalTitle(i) }}>{val}
                <span onClick={(e) => {
                  e.stopPropagation();
                  let temp = [...like]
                  temp[i] = temp[i] + 1
                  likeUp(temp)
                }}>👍 {like[i]}</span>
              </h4>
              <p style={{ display: 'inline-block', marginRight: '20px'}}>7월 25일 발행</p>
              <button onClick={()=>{
                let temp = [...title1]
                temp.splice(i,1)
                title1change(temp)
              }}> 게시물 삭제</button>
            </div>
          )
        })
      }

      {
        modal == true ? <Modal modalTitle={modalTitle} title1={title1} title1change={title1change} /> : null
      }

      <input onChange={(e) => { setInputValue(e.target.value) }}></input>
      <button onClick={() => {
        let temp = [...title1]
        temp.unshift(inputValue)
        title1change(temp)
      }}>글 작성하기</button>
    </div>
  );
}

function Modal(props) {
  return (
    <div className="modal">
      <h4>{props.title1[props.modalTitle]}</h4>
      <p>날짜</p>
      <p>상세내용</p>
      <button onClick={() => {
        let temp = [...props.title1]
        temp[0] = '여자 코트 추천'
        props.title1change(temp)
      }}> 글수정 </button>
    </div>
  )
}

export default App;