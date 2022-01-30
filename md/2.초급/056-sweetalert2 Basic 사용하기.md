# sweetalert2 Basic 사용하기

### Hint: sweetalert2 Basic 의 기능과 종류를 확인한다.

<br>

sweetalert2 패키지는 다양한 디자인과 기능의 알림 창을 지원한다. 기본 자바스크립트 `alert()` 와 같이 사용자에게 필요한 정보를 알림창으로 표시한다.

cmd 창을 열어 client 폴더 경로로 이동한다.

```
npm install sweetalert2
```

위 명령어를 입력하면 npm 이 sweetalert2 를 설치한다.

<br>

App.js

```js
import React from 'react';
import Sweetalert2Basic from './R056_Sweetalert2Basic';

function App() {
  return (
    <div>
      <h1>Start React 200!</h1>
      <Sweetalert2Basic />
    </div>
  );
}

export default App;
```

R056_Sweetalert2Basic.js

```js
import React, { Component } from 'react';
import Swal from 'sweetalert2';

class R056_Sweetalert2Basic extends Component {
  componentDidMount() {
    // Swal.fire('1. SweetAlert')
    // alert('2. alert()')
    Swal.fire('1. SweetAlert').then((result) => {
      alert('2. result.value : ' + result.value);
    });
  }

  render() {
    return <h1>sweetalert2</h1>;
  }
}

export default R056_Sweetalert2Basic;
```

<br>

- sweetalert2 에서 지원하는 알림 창을 사용하기 위해 sweetalert2 를 import 한다.

- `sweetalert2` 와 `alert()` 의 차이를 확인하기 위해 위 주석을 해제하고 아래 기존에 있던 코드를 주석 처리한다. 코드를 실행하면, `alert()` 가 `Swal.fire()` 보다 먼저 실행된다. 이유는 sweetalert2 는 비동기적으로 동작해 `Swal.fire()` 함수를 실행시켜 놓고 완료 여부에 상관없이 다음 코드를 실행하기 때문이다. 이때 `alert()` 함수는 동기적으로 동작하기 때문에 [확인] 버튼을 누르지 않으면 다음 작업으로 넘어가지 않는다.

<br>

`동기는 요청과 결과가 동시에 일어난다는 뜻이고, 비동기는 요청과 결과의 작업 처리 단위를 맞추지 않는다는 뜻이다.`

<br>

- 비동기적으로 실행되는 `sweetalert2` 함수를 동기적으로 사용하기 위해 이전 주석 처리했던 코드를 주석 해제 하고, 현재 alert 들을 주석처리한다. 프로미스의 `then` 함수를 사용해 `Swal.fire()` 함수의 결괏값(result)이 반환됐을 때, `alert()` 함수를 실행한다. `Swal.fire()` 함수 알림 창에서 [OK] 버튼을 누르면 result 값이 true 로 반환된다.

<br>

`프로미스란, 비동기 함수를 동기적으로 사용할 수 있도록 하는 개념이다. 프로미스 함수 중 then 은 이전 함수가 완전히 완료됐을 때 실행된다.`
