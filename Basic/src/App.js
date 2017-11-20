import React, { Component } from 'react';
import './App.css';

class App extends Component {
  render() {
    const name = 'velopert';
    const style = {
        color: 'aqua',
        backgroundColor: 'black'
    }
    return (
        <div>
            {/* 주석은 이렇게 작성 */}
            <h1 className='hello' // 혹은 이렇게 작성
                // 여기에도 작성
                /* 이렇게도 작성 */
            >안녕!</h1>
            <h2 style={style}>즐거운 리액트</h2>
            <p>내 이름은 {name}</p>
            <p>{ 1+1 === 2 ? '정답' : '바보' }</p>
            // 여기에쓰면 렌더링 되버려요
        </div>
    );
  }
}

export default App;
