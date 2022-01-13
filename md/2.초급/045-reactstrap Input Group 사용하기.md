# reactstrap Input Group 사용하기

### Hint: reactstrap Input Group 패키지의 기능과 종류를 확인한다.

<br>

Input Group 패키지는 여러 개의 태그를 하나의 input 그룹으로 묶어 사용할 수 있도록 지원한다.

<br>

App.js

```js
import React from 'react';
// import './App.css';
import InputGroup from './R045_ReactstrapInputGroup';
import 'bootstrap/dist/css/bootstrap.css';

function App() {
  return (
    <div>
      <h1>Start React 200!</h1>
      <p>CSS 적용하기</p>
      <InputGroup />
    </div>
  );
}

export default App;
```

R045_ReactstrapInputGroup.js

```js
import React, { Component } from 'react';
import { InputGroup, InputGroupText, Input, Button } from 'reactstrap';

class R045_ReactstrapInputGroup extends Component {
  render() {
    return (
      <>
        <InputGroup>
          <Input placeholder="userid" />
          <InputGroupText>@reactmail.com</InputGroupText>
        </InputGroup>
        <InputGroup>
          <Button>버튼</Button>
          <Input />
        </InputGroup>
      </>
    );
  }
}

export default R045_ReactstrapInputGroup;
```

<br>

- reactstrap 패키지에서 사용할 InputGroup, ~~InputGroupAddon~~, InputGroupText, Input, Button 을 `{}` 안에 나열하고 선언한다.

- `<InputGroup>` 태그로 `<Input>` 태그와 고정 텍스트 표시 영역(@reactmail.com) 을 묶어 사용한다.

- 현재 InputGroupAddon 은 사용할 수 없기 때문에, addonType 속성값을 사용하는 대신 `<InputGroup>` 안에 `<Input>` 태그와 `<InputGroupText>` 의 위치를 전환함으로써 `<Input>` 태그의 오른쪽, 왼쪽에 표시할 수 있도록 한다.

- `<InputGroup>` 태그로 `<Input>` 태그와 버튼 영역을 묶어 사용한다.
