# reactstrap Button Group 사용하기

### Hint: reactstrap Button Group 패키지의 기능과 종류를 확인한다.

Button Group 패키지는 비슷한 형태와 기능을 하는 버튼들을 그룹으로 관리할 수 있게 지원해준다.

<br>

App.js

```js
import React from 'react';
import './App.css';
import ReactstrapButtonGroup from './R038_ReactstrapButtonGroup';
import 'bootstrap/dist/css/bootstrap.css';

function App() {
  return (
    <div>
      <h1>Start React 200!</h1>
      <p>CSS 적용하기</p>
      <ReactstrapButtonGroup />
    </div>
  );
}

export default App;
```

R038_ReactstrapButtonGroup.js

```js
import React, { Component } from 'react';
import { Button, ButtonGroup } from 'reactstrap';

class R038_ReactstrapButtonGroup extends Component {
  constructor(props) {
    super(props);
    this.state = { number: 10 };
  }

  move = (type, e) => {
    if (type === 'Left') {
      this.setState({ number: this.state.number - 1 });
    } else if (type === 'Right') this.setState({ number: this.state.number + 1 });
  };

  render() {
    return (
      <div style={{ padding: '0px' }}>
        <ButtonGroup style={{ padding: '0px' }}>
          <Button onClick={(e) => this.move('Left')}>Left</Button>
          <Button onClick={(e) => this.move('Middle')}>Middle</Button>
          <Button onClick={(e) => this.move('Right')}>Right</Button>
        </ButtonGroup>
        <br />
        {this.state.number}
      </div>
    );
  }
}

export default R038_ReactstrapButtonGroup;
```

- reactstrap 패키지에서 사용할 Button, ButtonGroup 을 `{}` 안에 나열하고 선언한다.

- 비슷한 기능을 하는 버튼들을 `<ButtonGroup>` 태그로 묶어 사용한다.

- 각각의 `<Button>` 태그를 누를 때마다 `move()` 함수를 호출한다.

- `move()` 함수는 파라미터로 받은 type 값으로 버튼을 구분해 state 변수를 변경한다.
