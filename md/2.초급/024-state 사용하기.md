# state 사용하기

### Hint : state 값을 화면에 표시하는 문법을 확인한다.

`props` 를 상위 컴포넌트에서 하위 컴포넌트로 데이터를 전달할 때 사용했다면, `state` 는 하나의 컴포넌트 안에서 전역 변수처럼 사용한다.

<br>

App.js

```js
import React from 'react';
import './App.css';
import ReactState from './R024_ReactState'

function App() {
  return (
    <div>
      <h1>Start React 200!</h1>
      <p>CSS 적용하기</p>
      <ReactState reactString={"react"}/>
    </div>
  );
}

export default App;
```

reactString 이라는 변수를 선언하고 react 라는 문자열을 할당한 후, props 에 담아 하위 컴포넌트에 전달한다. 

<br>

R024_ReactState.js

```js
import React, { Component } from 'react';

class R024_ReactState extends Component {
  constructor (props) {
    super(props);
    this.state = {
        StateString: this.props.reactString,
        StateNumber: 200,  
    }
  }

  render() {
    return (
    <div style={{padding: "0px"}}>
      {this.state.StateString}{this.state.StateNumber}
    </div>
    )
  }
}

export default R024_ReactState;
```

가장 먼저 실행되는 생성자 함수 constructor 안에서 state 변수의 초깃값을 정의해야 한다. 

StateString 변수에는 props 로 전달된 reactString 값을 저장하고 StateNumber 변수에는 숫자 200 을 저장한다. 

`this.State.변수명` 문법으로 state 변수에 접근한다. state 값을 화면에 그대로 표시한다. 



