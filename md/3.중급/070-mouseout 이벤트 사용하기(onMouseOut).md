# mouseout 이벤트 사용하기(onMouseOut)

### Hint: onMouseOut 으로 함수 호출 시 필요한 정보를 파라미터로 전달할 수 있다.

<br>

react 에서는 onMouseOut 이벤트도 camelCase 형식의 명칭을 사용한다.

onMouseOut 이벤트는 특정 tag 영역 안에 마우스 커서가 진입했다가 벗어날 때 발생한다.

<br>

App.js

```js
import React from 'react';
import ReactMouseOut from './R070_onMouseOut';

function App() {
  return (
    <div>
      <h1>Start React 200!</h1>
      <ReactMouseOut />
    </div>
  );
}

export default App;
```

R070_onMouseOut.js

```js
import React, { Component } from 'react';

class R070_onMouseOut extends Component {
  MouseOut(tag) {
    console.log('TAG : ' + tag);
  }

  render() {
    return (
      <>
        <div onMouseOut={(e) => this.MouseOut('div')}>
          <h3>DIV onMouseOut</h3>
        </div>
        <input type='text' onMouseOut={(e) => this.MouseOut('input')} />
        <select onMouseOut={(e) => this.MouseOut('select')}>
          <option value='react'>react</option>
          <option value='200'>200</option>
        </select>
      </>
    );
  }
}

export default R070_onMouseOut;
```

<br>

- MouseOut 이라는 함수를 선언하고 전달받은 파라미터를 tag 라는 함수의 내부 변수에 넣어 사용한다.

- tag 변수를 로그로 출력한다.

- `<div>` 태그 영역에 마우스 커서가 진입했다가 벗어날 경우 MouseOut 함수를 호출한다. 파라미터로 넘긴 'div'가 출력된다.

- `<input>` 태그 영역에 마우스 커서가 진입했다가 벗어날 경우 MouseOut 함수를 호출한다. 파라미터로 넘긴 'input'이 출력된다.

- `<select>` 태그 영역에 마우스 커서가 진입했다가 벗어날 경우 MouseOut 함수를 호출한다. 파라미터로 넘긴 'select'가 출력된다.
