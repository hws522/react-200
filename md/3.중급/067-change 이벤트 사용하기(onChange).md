# change 이벤트 사용하기(onChange)

### Hint: onChange 로 함수 호출 시 필요한 정보를 이벤트 객체로 전달할 수 있다.

<br>

react 에서는 onChange 이벤트도 camelCase 형식의 명칭을 사용한다.

onChange 이벤트는 특정 element 에 변화가 생겼을 때 정의된 함수를 호출하는 방식으로 사용한다.

<br>

App.js

```js
import React from 'react';
import ReactChange from './R067_onChange';

function App() {
  return (
    <div>
      <h1>Start React 200!</h1>
      <ReactChange />
    </div>
  );
}

export default App;
```

R067_onChange.js

```js
import React, { Component } from 'react';

class R067_onChange extends Component {
  change = (e) => {
    var val = e.target.value;
    console.log('param : ' + val);
  };

  render() {
    return (
      <>
        <input type='text' onChange={this.change} />
        <select onChange={this.change}>
          <option value='react'>react</option>
          <option value='200'>200</option>
        </select>
      </>
    );
  }
}

export default R067_onChange;
```

<br>

- `change` 라는 함수를 선언하고 전달받은 파라미터를 `e` 라는 함수의 내부 변수에 넣어 사용한다.

- 이벤트 객체 변수 `e` 에 target 속성을 붙여 value 값을 가져오고 val 변수에 할당한다.

- val 변수를 로그로 출력한다.

- input 박스에 문자를 입력하거나 삭제할 때마다 onChange 이벤트가 발생해 change 함수를 호출한다. 함수 호출 시 파라미터를 따로 넘겨주지 않아도 이벤트 객체가 전달된다(`e`). 이벤트 객체에는 `<input>` 태그에 현재 입력된 값이 value 로 할당된다.

- select 박스에 선택된 option 이 달라질 때마다 onChange 이벤트가 발생해 change 함수를 호출한다. 함수 호출 시 파라미터를 따로 넘겨주지 않아도 이벤트 객체가 전달된다(`e`). 이벤트 객체에는 `<option>` 태그의 value 값이 할당된다.

- 실행결과를 보면, input 박스에 글자 하나가 입력될 때마다 change 함수가 호출된 것을 확인할 수 있다.
