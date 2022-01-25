# reactstrap Progress 사용하기

### Hint: reactstrap Progress 패키지의 기능과 종류를 확인한다.

<br>

Progress 패키지는 전체 작업에 대한 현재 진행 상태를 표현해준다. 진행 바 내부에 문자열을 넣을 수 있고, 색상을 적용할 수도 있다.

<br>

App.js

```js
import React from 'react';
import Progress from './R052_ReactstrapProgress';
import 'bootstrap/dist/css/bootstrap.css';

function App() {
  return (
    <div>
      <h1>Start React 200!</h1>
      <Progress />
    </div>
  );
}

export default App;
```

R052_ReactstrapProgress.js

```js
import React, { Component } from 'react';
import { Progress } from 'reactstrap';

class R051_ReactstrapPopover extends Component {
  constructor(props) {
    super(props);
    this.state = { progress: 0 };
  }

  componentDidMount() {
    this.progress();
  }

  progress = () => {
    if (this.state.progress !== 100) {
      setTimeout(
        function () {
          this.setState({ progress: this.state.progress + 1 });
          this.progress();
        }.bind(this),
        100
      );
    }
  };

  render() {
    return (
      <>
        <Progress color='info' value={this.state.progress}>
          {this.state.progress}%
        </Progress>
        <br />
        <Progress multi>
          <Progress bar color='warning' value='25'>
            25%
          </Progress>
          <Progress bar color='success' value='35'>
            react
          </Progress>
          <Progress bar value='20'>
            200
          </Progress>
          <Progress bar color='danger' value='20'>
            20%
          </Progress>
        </Progress>
      </>
    );
  }
}

export default R051_ReactstrapPopover;
```

<br>

- reactstrap 패키지에서 사용할 기능인 Progress 를 `{}` 안에 나열하고 선언한다.

- `componentDidMount()` 함수가 실행되면서 `progress()` 함수를 호출한다. `setTimeout()` 함수가 0.1 초마다 실행되는데, 진행 상태 값(progress) 을 1씩 증가시켜 `setState()` 함수로 변경한다.

- `setState()` 함수가 실행될 때마다 `render()` 함수가 실행된다. 이때 `{this.state.progress}` 값이 1씩 증가하기 때문에 진행 바가 0% 에서 100% 로 채워지는 것을 확인할 수 있다.

- 여러 개의 진행 바를 사용할 때는 `<Progress multi>` 태그로 묶어준다. `<Progress>` 태그의 속성은 진행 바 형태(bar, animated, striped), 색상(color), 진행률(value) 이 있다.
