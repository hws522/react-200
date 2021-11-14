# setState() 함수 사용하기

### Hint : state 를 직접 변경했을 때와 setState() 함수를 사용했을 때의 차이를 확인한다.

`this.state.변수명 = value` 와 같이 state 를 직접 변경하면 render() 함수를 호출하지 않으므로 화면에 보이는 state 값은 바뀌기 전 상태로 남게 된다. 

setState() 함수로 state 를 변경해야 render() 함수를 호출해 변경된 값을 화면에 보여줄 수 있다. 

<br>

App.js

```js
import React from 'react';
import './App.css';
import SetState from './R025_SetState'

function App() {
  return (
    <div>
      <h1>Start React 200!</h1>
      <p>CSS 적용하기</p>
      <SetState/>
    </div>
  );
}

export default App;
```

R025_SetState.js

```js
import React, { Component } from 'react';

class R025_SetState extends Component {
  constructor (props) {
    super(props);
    this.state = {
        StateString: 'react',
    }
  }

  StateChange = (flag) => {
    if(flag == 'direct') this.state.StateString = '리액트';
    if(flag == 'setstate') this.setState({StateString : '리액트'});
  }

  render() {
    return (
    <div style={{padding: "0px"}}>
      <button onClick={(e) => this.StateChange('direct', e)}>state 직접 변경</button>
      <button onClick={(e) => this.StateChange('setstate', e)}>setState로 변경</button><br/>
      [state 변경하기] StateString : {this.state.StateString}
    </div>
    )
  }
}

export default R025_SetState;
```

constructor 함수 안에서 state 변수 StateString 의 초깃값으로 react 라는 문자열을 저장했다. constructor 함수가 실행되고 render() 함수에서 화면을 그리기 때문에 {this.state.StateString} 은 react 로 표시된다. 

[state 직접 변경] 버튼을 눌렀을 때, `this.state.변수명 = value` 문법으로 state 를 직접 변경한다. 이때 StateString 값은 '리액트' 로 변경 되지만 render() 함수를 호출하지 않으므로 화면에는 이전 값인 'react' 로 표시된다.

[setState로 변경] 버튼을 눌렀을 때 setState() 함수로 state 를 변경한다. 이때 StateString 값은 '리액트' 로 변경되고 render() 함수를 다시 호출해 화면에는 변경된 값인 '리액트' 가 표시된다. 

