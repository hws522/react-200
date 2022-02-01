# Promise then 사용하기

### Hint: Promise then 함수의 특징과 콜백 함수와의 차이점을 확인한다.

<br>

promise 는 콜백 함수와 같이 비동기적으로 동작하는 코드를 동기적으로 구현할 때 사용한다.

promise 를 사용하면 콜백 함수와 달리, 코드 가독성을 높일 수 있고 예외 처리도 쉽게 할 수 있다.

App.js

```js
import React from 'react';
import Promise from './R064_Promise';

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

R064_Promise.js

```js
import React, { Component } from 'react';

class R064_Promise extends Component {
  componentDidMount() {
    new Promise((resolve) => {
      setTimeout(function () {
        resolve('react');
      }, 1500);
    })
      .then(function (result) {
        console.log(result);
        return result + 200;
      })
      .then((result) => {
        console.log(result);
      });
  }

  render() {
    return <h1>Promise</h1>;
  }
}

export default R064_Promise;
```

<br>

- promise 에는 대기, 이행, 거부의 개념이 있다. 대기 상태에서 이행 상태로 변할 때 `then()` 함수 안의 코드가 실행된다.

- Promise 라는 객체를 생성해 promise 를 사용한다. 파라미터로 하나의 함수(resolve) 만 받을 경우, 이행 함수로 사용된다.

- `timeout` 함수를 실행해 1.5초 후에 `resolve` 함수가 실행된다. 이때 promise 는 이행 상태가 되고, `then` 함수가 실행된다.

- `resolve` 함수에서 파라미터로 전달된 결괏값(react)을 result 라는 파라미터로 받아 사용한다. result 변수에 200을 붙여 반환한다. 반환되는 순간 대기하고 있던 `then` 함수가 실행된다.

- 반환된 값을 파라미터로 받아 사용한다. `.then(function(result){...})` 에서 사용한 function 과 같은 기능을 하는 함수를 화살표 함수로 구현한다.

- `promise then` 함수를 사용하면 코드를 콜백 함수의 계단식 복잡한 코드 형태보다 가독성 있게 구현할 수 있다.
