# reactstrap Collapse 사용하기

### Hint: reactstrap Collapse 패키지의 기능과 종류를 확인한다.

<br>

Collapse 패키지는 특정 영역을 펼치고 숨기는 기능을 제공한다.

버튼 이벤트로 펼치고 숨기는 기능을 제어할 수 있다.

상단부터 점차적으로 펼쳐지고 하단부터 숨겨진다는 것이 `show()`, `hide()` 함수와의 차이점이다.

<br>

App.js

```js
import React from 'react';
// import './App.css';
import ReactstrapCollapse from './R042_ReactstrapCollapse';
import 'bootstrap/dist/css/bootstrap.css';

function App() {
  return (
    <div>
      <h1>Start React 200!</h1>
      <p>CSS 적용하기</p>
      <ReactstrapCollapse />
    </div>
  );
}

export default App;
```

R042_ReactstrapCollapse.js

```js
import React, { Component } from 'react';
import { UncontrolledCollapse, Button, CardBody, Card } from 'reactstrap';

class R042_ReactstrapCollapse extends Component {
  render() {
    return (
      <div>
        <Button color="warning" id="toggle">
          펼치기/접기
        </Button>
        <UncontrolledCollapse toggler="#toggle">
          <Card>
            <CardBody>REACT 200</CardBody>
          </Card>
        </UncontrolledCollapse>
      </div>
    );
  }
}

export default R042_ReactstrapCollapse;
```

<br>

- reactstrap 패키지에서 사용할 UncontrolledCollapse, Button, CardBody, Card 를 `{}` 안에 나열하고 선언한다.

- UncontrolledCollapse 는 태그나 함수를 생략해도 기본 기능을 제공해준다. 그래서 기본적인 기능만 사용할 것이라면, Collapse 보다 UncontrolledCollapse 를 사용하는 것이 간편하다.

- toggler 속성의 # 을 사용해 toggle 함수를 호출하는 id 값(toggle) 을 지정했다.

- 버튼을 클릭하면 UncontrolledCollapse 패키지에 내부적으로 선언된 toggle 함수(펼치기/숨기기 함수) 를 실행한다.

- `<UncontrolledCollapse>` 태그의 toggler 속성으로 버튼 id 를 지정해주고 태그 안에 화면에 표시할 내용을 작성한다.
