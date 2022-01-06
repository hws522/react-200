# reactstrap Alerts 사용하기

### Hint: reactstrap Alerts 패키지의 기능과 종류를 확인한다.

bootstrap 은 프론트엔드 디자인을 쉽게 구현할 수 있도록 도와주는 html, css, js 프레임워크다.

bootstrap 을 react 에서 사용할 수 있도록 패키지로 만든 것이 reactstrap 이다. Alert 패키지는 알림 영역에 대한 기능을 제공한다.

```js
npm install -save reactstrap
```

커맨드에 위의 명령어를 입력해서 reactstrap 을 설치한다.

<br>

reactstrap 은 bootstrap css 를 포함하고 있지 않기 때문에,

```js
npm install -save bootstrap
```

위의 명령어를 통해 bootstrap 도 설치한다.

<br>

App.js

```js
import React from 'react';
import './App.css';
import ReactstrapAlerts from './R034_ReactstrapAlerts';
import 'bootstrap/dist/css/bootstrap.css';

function App() {
  return (
    <div>
      <h1>Start React 200!</h1>
      <p>CSS 적용하기</p>
      <ReactstrapAlerts />
    </div>
  );
}

export default App;
```

R034_ReactstrapAlerts.js

```js
import React, { Component } from 'react';
import { Alert, UncontrolledAlert } from 'reactstrap';

class R034_ReactstrapAlerts extends Component {
  render() {
    return (
      <div>
        <Alert color="light">Simple Alert [color : light]</Alert>
        <UncontrolledAlert color="warning">Uncontrolled Alert [color : warning]</UncontrolledAlert>
      </div>
    );
  }
}

export default R034_ReactstrapAlerts;
```

reactstrap 패키지에서 사용할 기능을 `{}` 안에 나열한다. 기본 알림 Alert 와 삭제 기능이 추가된 알림 UncontrolledAlert 를 사용하기 위해 선언한다.

기본 알림 영역 Alert 를 구현한다. 단순히 알림 내용을 표시시켜준다.

삭제 가능한 알림 영역인 UncontrolledAlert 를 구현한다. `X` 버튼을 누르면 알림 영역이 삭제된다.

`reactstrap 에서 color 속성을 primary, secondary, success, danger, warning, info, light, dark 중에 선택하면 각각 다른 색을 적용할 수 있다.`
