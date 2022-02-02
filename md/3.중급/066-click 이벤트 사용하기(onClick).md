# click 이벤트 사용하기

### Hint: onClick 으로 함수 호출 시, 필요한 정보를 파라미터로 전달할 수 있다.

<br>

react 에서는 html 과 달리 이벤트에 `camelCase` 를 사용한다.

onClick 이벤트는 특정 element 가 클릭됐을 때 정의된 함수를 호출하는 방식으로 사용한다.

html 에서는 onclick 으로 모두 소문자로 나타낸다.

`camelCase 란, 낙타의 등처럼 문자열 중간에 대문자가 위로 올라오는 네이밍 문법이다. 여러 개의 단어가 합쳐질 때 단어가 시작되는 첫 글자만 대문자로 표기하는 방식이다. 이때 맨 앞 글자가 소문자이면 'lowerCamelCase', 대문자이면 'UpperCamelCase'라고 부른다.`

<br>

App.js

```js
import React from 'react';
import ReactonClick from './R066_onClick';

function App() {
  return (
    <div>
      <h1>Start React 200!</h1>
      <ReactonClick />
    </div>
  );
}

export default App;
```

R066_onClick.js

```js
import React, { Component } from 'react';

class R065_Promise extends Component {
  buttonClick = (param) => {
    if (typeof param != 'string') param = 'Click a';
    console.log('param : ' + param);
  };

  render() {
    return (
      <>
        <button onClick={(e) => this.buttonClick('Click button')}>Click button</button>
        <div onClick={(e) => this.buttonClick('Click div')}>Click div</div>
        <a href='javascript:' onClick={this.buttonClick}>
          Click a
        </a>
      </>
    );
  }
}

export default R065_Promise;
```

<br>

- buttonClick 이라는 함수를 선언하고 전달받은 파라미터를 param 이라는 함수의 내부 변수에 넣어 사용한다.

- param 변수가 문자열(string)이 아니라면, Click a 라는 문자열을 param 변수에 할당한다.

- param 변수를 로그로 출력한다.

- `<button>, <div>, <a>` 태그에 onClick 이벤트를 추가한다. 사용자가 특정 태그 영역을 클릭할 때마다 buttonClick 함수를 호출하고 서로 다른 파라미터(Click button, Click div)를 전달한다.

- buttonClick 함수가 선언될 때에는 파라미터를 받는 것으로 되어있지만,`<a>` 태그에 이벤트로 추가된 onClick 처럼 파라미터 없이 호출해도 정상적으로 동작한다.
