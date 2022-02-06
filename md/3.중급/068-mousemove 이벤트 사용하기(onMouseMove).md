# mousemove 이벤트 사용하기(onMouseMove)

### Hint: onMouseMove 으로 함수 호출 시 필요한 정보를 파라미터로 전달할 수 있다.

<br>

react 에서는 onMouseMove 이벤트도 camelCase 형식의 명칭을 사용한다.

onMouseMove 이벤트는 특정 tag 영역 안에서 마우스 커서가 움직일 때 발생한다.

<br>

App.js

```js
import React from 'react';
import ReactMouseMove from './R068_onMouseMove';

function App() {
  return (
    <div>
      <h1>Start React 200!</h1>
      <ReactMouseMove />
    </div>
  );
}

export default App;
```

R068_onMouseMove.js

```js
import React, { Component } from 'react';

class R068_onMouseMove extends Component {
  MouseMove(tag) {
    console.log('TAG : ' + tag);
  }

  render() {
    return (
      <>
        <div onMouseMove={(e) => this.MouseMove('div')}>
          <h3>DIV onMouseMove</h3>
        </div>
        <input type='text' onMouseMove={(e) => this.MouseMove('input')} />
        <select onMouseMove={(e) => this.MouseMove('select')}>
          <option value='react'>react</option>
          <option value='200'>200</option>
        </select>
      </>
    );
  }
}

export default R068_onMouseMove;
```

<br>

- MouseMove 라는 함수를 선언하고 전달받은 파라미터를 tag 라는 함수의 내부 변수에 넣어 사용한다.

- tag 변수를 로그로 출력한다.

- `<div>` 태그 영역에서 마우스 커서가 움직일 경우, MouseMove 함수를 호출한다. 파라미터로 넘긴 'div' 가 출력된다.

- `<input>` 태그 영역에서 마우스 커서가 움직일 경우, MouseMove 함수를 호출한다. 파라미터로 넘긴 'input' 이 출력된다.

- `<select>` 태그 영역에서 마우스 커서가 움직일 경우, MouseMove 함수를 호출한다. 파라미터로 넘긴 'select' 가 호출된다.
