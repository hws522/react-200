# props Boolean 으로 사용하기

### Hint : props 의 다른 자료형들이 갖고 있지 않은 Boolean 변수만의 특징을 확인한다.

props 값을 Boolean 형으로 하위 컴포넌트에 전달할 경우, true 나 false 중 하나를 할당한다. 추가 문법으로 props 변수를 선언한 후 값을 할당하지 않고 넘기면 true 가 기본값으로 할당된다.

<br>    

App.js

```js
import React from 'react';
import './App.css';
import PropsBoolean from './R019_PropsBoolean'

function App() {
  return (
    <div>
      <h1>Start React 200!</h1>
      <p>CSS 적용하기</p>
      <PropsBoolean BooleanTrueFalse={false}/>
      <PropsBoolean BooleanTrueFalse/>
    </div>
  );
}

export default App;
```

BooleanTrueFalse 변수를 선언하고 false 값을 넣은 후 props 에 담아 하위 컴포넌트로 전달한다.

BooleanTrueFalse 변수를 선언하고 할당 없이 props 에 담아 하위 컴포넌트로 전달한다. 

<br>

R019_PropsDatatype.js

```js
import React, { Component } from 'react';

class R019_PropsDatatype extends Component {
  render() {
    let {
      BooleanTrueFalse
    } = this.props
    return (
    <div style={{padding: "0px"}}>
      {BooleanTrueFalse ? '2. ' : '1. '}
      {BooleanTrueFalse.toString()}
    </div>
    )
  }
}

export default R019_PropsDatatype;
```

render() 함수 내에서 지역 변수를 선언해 props 로 전달된 값을 할당한다.

삼항 연산자를 이용해 BooleanTrueFalse 변수가 true 이면 '2', false 이면 '1' 을 화면에 출력한다. 

BooleanTrueFalse 변수가 false 일 경우 그대로 false 가 출력되고, 값이 없을 경우 기본값으로 true 가 화면에 출력된다. 

Boolean 변수는 직접 화면에 출력할 수 없으므로 출력을 하기 위해서는 `toString()` 함수를 사용해 문자열로 변환한다.