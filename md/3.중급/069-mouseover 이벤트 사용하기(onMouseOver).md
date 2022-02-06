# mouseover 이벤트 사용하기(onMouseOver)

### Hint: onMouseOver 으로 함수 호출 시 필요한 정보를 파라미터로 전달할 수 있다.

<br>

react 에서는 onMouseOver 이벤트도 camelCase 형식의 명칭을 사용한다.

onMouseOver 이벤트는 특정 tag 영역 안에 마우스 커서가 진입할 때 발생한다.

<br>

App.js

```js
import React from 'react';
import ReactMouseOver from './R069_onMouseOver';

function App() {
  return (
    <div>
      <h1>Start React 200!</h1>
      <ReactMouseOver />
    </div>
  );
}

export default App;
```

R069_onMouseOver.js

```js
import React, { Component } from 'react';

class R069_onMouseOver extends Component {
  MouseOver(tag) {
    console.log('TAG : ' + tag);
  }

  render() {
    return (
      <>
        <div onMouseOver={(e) => this.MouseOver('div')}>
          <h3>DIV onMouseOver</h3>
        </div>
        <input type='text' onMouseOver={(e) => this.MouseOver('input')} />
        <select onMouseOver={(e) => this.MouseOver('select')}>
          <option value='react'>react</option>
          <option value='200'>200</option>
        </select>
      </>
    );
  }
}

export default R069_onMouseOver;
```

<br>

- MouseOver 라는 함수를 선언하고 전달받은 파라미터를 tag 라는 함수의 내부 변수에 넣어 사용한다.

- tag 변수를 로그로 출력한다.

- `<div>` 태그 영역에 마우스 커서가 진입할 경우 MouseOver 함수를 호출한다. 파라미터로 넘긴 'div' 가 출력된다.

- `<input>` 태그 영역에 마우스 커서가 진입할 경우 MouseOver 함수를 호출한다. 파라미터로 넘긴 'input' 이 출력된다.

- `<select>` 태그 영역에 마우스 커서가 진입할 경우 MouseOver 함수를 호출한다. 파라미터로 넘긴 'select' 가 출력된다.
