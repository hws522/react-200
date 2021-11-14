# state를 직접 변경한 후 forceUpdate() 함수 사용하기

### Hint : state 를 직접 변경했을 때 forceUpdate() 로 render() 함수를 실행한다.

`this.state.변수명 = value` 와 같이 직접 state 를 변경하면 render() 함수를 호출하지 않으므로 화면에 보이는 state 값은 바뀌기 전 상태로 남게 된다. 이때 `forceUpdate()` 함수로 화면을 새로고침하면, render() 함수를 호출해 변경된 값을 화면에 보여줄 수 있다.

<br>

App.js

```js
import React from 'react';
import './App.css';
import ForceUpdate from './R026_ForceUpdate'

function App() {
  return (
    <div>
      <h1>Start React 200!</h1>
      <p>CSS 적용하기</p>
      <ForceUpdate/>
    </div>
  );
}

export default App;
```

R026_ForceUpdate.js

```js
import React, { Component } from 'react';

class R026_ForceUpdate extends Component {
  constructor (props) {
    super(props);
    this.state = {
        StateString: 'react',
    }
  }

  StateChange = () => {
    this.state.StateString = '리액트';
    this.forceUpdate();
  }

  render() {
    return (
    <div style={{padding: "0px"}}>
      <button onClick={(e) => this.StateChange('direct', e)}>state 직접 변경</button><br/>
      [state 변경하기] StateString : {this.state.StateString}
    </div>
    )
  }
}

export default R026_ForceUpdate;
```

constructor 함수 안에서 state 변수 StateString 의 초깃값으로 react 라는 문자열을 저장했다. constructor() 함수가 실행되고 render() 함수에서 화면을 그리기 때문에 {this.state.StateString} 은 react 로 표시된다. 

[state 직접 변경] 버튼을 눌렀을 때 `this.state.변수명 = value` 문법으로 state 를 직접 변경한다. 이때 StateString 값은 '리액트' 로 변경 된다. `forceUpdate()` 가 실행되기 전까지는 render() 함수가 실행되지 않으므로 state 값은 변경되지만 화면에 표시되는 값은 변하지 않는다. 

forceUpdate() 함수는 화면을 강제로 새로 고침하기 때문에 render() 함수를 다시 실행시켜 화면에 변경된 state 값을 표시할 수 있다. 


