# reactstrap Fade 사용하기

### Hint: reactstrap Fade 패키지의 기능과 종류를 확인한다.

<br>

Fade 패키지는 특정 영역을 서서히 나타내고 숨기는 기능을 제공한다. 기능을 버튼 이벤트로 제어할 수 있다.

<br>

App.js

```js
import React from 'react';
// import './App.css';
import ReactstrapFade from './R043_ReactstrapFade';
import 'bootstrap/dist/css/bootstrap.css';

function App() {
  return (
    <div>
      <h1>Start React 200!</h1>
      <p>CSS 적용하기</p>
      <ReactstrapFade />
    </div>
  );
}

export default App;
```

R043_ReactstrapFade.js

```js
import React, { Component } from 'react';
import { Button, Fade } from 'reactstrap';

class R043_ReactstrapFade extends Component {
  constructor(props) {
    super(props);
    this.state = { fadeInOut: false };
  }

  toggle = (e) => {
    this.setState({ fadeInOut: !this.state.fadeInOut });
  };

  render() {
    return (
      <div>
        <Button color="success" onClick={this.toggle}>
          Fade In/Out
        </Button>
        <Fade in={this.state.fadeInOut} tag="h1">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit
        </Fade>
      </div>
    );
  }
}

export default R043_ReactstrapFade;
```

<br>

- reactstrap 패키지에서 사용할 Button, Fade 를 `{}` 안에 나열하고 선언한다.

- `<Fade>` 태그 영역의 표시 상태를 state 로 선언하고 초깃값은 false 로 할당한다.

- `<Fade>` 태그는 in 속성이 true 이면 표시, false 이면 미표시된다.

- fadeInOut 의 초깃값이 false 이기 때문에 최초 화면 로딩 시 `<Fade>` 태그 영역이 미표시된다.

- 버튼을 누르면 toggle 함수가 실행된다.

- toggle 함수는 fadeInOut 값을 현재 상태의 반대로 할당한다. setState() 함수가 실행되면 render() 함수가 한 번 더 실행돼 변경된 fadeInOut 값이 적용된다. 결과적으로 버튼이 클릭될 때마다 `<Fade>` 태그 영역은 현재 상태가 미표시일 경우 표시, 표시일 경우 미표시된다.
