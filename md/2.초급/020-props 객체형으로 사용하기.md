# props 객체형으로 사용하기

### Hint : props 객체 자체의 자료형이 아닌, 객체 내부 변수들의 자료형 선언 방법을 확인한다.

props 값을 객체로 하위 컴포넌트에 전달할 경우, 자료형을 `object` 로 선언한다. 하지만 객체 형태(객체 내부 변수들)의 자료형을 선언할 때는 `shape` 이라는 유형을 사용한다.

<br>

App.js

```js
import React from 'react';
import './App.css';
import PropsObjVal from './R020_PropsObjVal'

function App() {
  return (
    <div>
      <h1>Start React 200!</h1>
      <p>CSS 적용하기</p>
      <PropsObjVal ObjectJson={{react:"리액트", twohundred:"200"}}/>
    </div>
  );
}

export default App;
```

<br>

R020_PropsObjVal.js

```js
import React, { Component } from 'react';
import datatype from 'prop-types';

class R020_PropsObjVal extends Component {
  render() {
    let {
      ObjectJson
    } = this.props
    return (
    <div style={{padding: "0px"}}>
      {JSON.stringify(ObjectJson)}
    </div>
    )
  }
}

R020_PropsObjVal.propTypes = {
  ObjectJson: datatype.shape({
    react: datatype.string,
    twohundred: datatype.number
  })
}

export default R020_PropsObjVal;
```

render() 함수 내에서 지역 변수를 선언해 props 로 전달된 값을 할당한다. 

shape 유형을 사용해 객체 변수 Object Json 의 내부 key 값(react, twohundred)에 대해 자료형을 선언한다. twohundred 가 문자열 ('200')로 전달됐지만, 자료형이 number 로 선언됐다. 자료형이 일치하지 않아 경고 메시지가 발생한다. 

경고 메시지는 개발자 도구 콘솔 창에서 확인할 수 있다.
