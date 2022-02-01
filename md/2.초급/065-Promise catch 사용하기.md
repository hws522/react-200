# Promise catch 사용하기

### Hint: Promise catch 함수의 특징과 기능을 확인한다.

<br>

Promise 의 상태가 대기, 이행, 거부 중 거부 상태가 됐을 때 `catch` 함수를 실행한다.

대기 상태의 Promise 에 에러가 발생해 이행으로 상태 변화를 하지 못하는 경우다.

<br>

App.js

```js
import React from 'react';
import Promise from './R065_Promise';

function App() {
  return (
    <div>
      <h1>Start React 200!</h1>
      <Promise />
    </div>
  );
}

export default App;
```

R065_Promise.js

```js
import React, { Component } from 'react';

class R065_Promise extends Component {
  componentDidMount() {
    new Promise((resolve, reject) => {
      reject(Error('ERROR Info'));
    })
      .then((result) => console.log('then ' + result))
      .catch((result) => console.log('catch : ' + result));
  }

  render() {
    return <h1>Promise</h1>;
  }
}

export default R065_Promise;
```

<br>

- Promise 라는 객체를 생성해 promise 를 사용한다. 파라미터로 2개의 함수를 받으면, 첫 번째 함수`(resolve)`는 **이행 함수**, 두 번째 함수`(reject)`는 **거부 함수**로 사용된다.

- 거부 함수 `reject` 를 실행하면서 Error 객체를 사용해 에러를 발생시킨다.

- Promise 동작 중 거부 함수가 실행되면, 이행 상태가 되지 못하기 때문에 then 함수는 실행되지 않는다.

- promise 의 상태가 거부로 변하면서 `catch` 함수가 실행된다. reject 함수에서 파라미터로 전달받은 에러 정보를 출력한다.
