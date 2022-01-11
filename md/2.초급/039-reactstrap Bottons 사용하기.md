# reactstrap Bottons 사용하기

### Hint: reactstrap Bottons 패키지의 기능과 종류를 확인한다.

Bottons 패키지는 `<Button>` 태그에 color 속성에 약속된 문자열을 넣으면, 용도에 맞는 버튼 스타일을 지원해준다.

<br>

App.js

```js
import React from 'react';
import './App.css';
import ReactstrapBottons from './R039_ReactstrapBottons';
import 'bootstrap/dist/css/bootstrap.css';

function App() {
  return (
    <div>
      <h1>Start React 200!</h1>
      <p>CSS 적용하기</p>
      <ReactstrapBottons />
    </div>
  );
}

export default App;
```

R039_ReactstrapBottons.js

```js
import React, { Component } from 'react';
import { Button } from 'reactstrap';

class R039_ReactstrapBottons extends Component {
  render() {
    return (
      <div style={{ padding: '0px' }}>
        <Button color="primary">blue</Button>
        <Button color="info">teal</Button>
        <Button color="success">green</Button>
        <Button color="warning">yellow</Button>
        <Button color="danger">red</Button>
        <Button color="dark">dark gray</Button>
        <Button color="secondary">gray</Button>
        <Button color="light">white</Button>
      </div>
    );
  }
}

export default R039_ReactstrapBottons;
```

<br>

- reactstrap 패키지에서 사용할 Button 기능을 `{}` 안에 나열하고 선언한다.

- color 속성에 약속된 문자열을 넣으면, 각각 다른 색의 버튼이 화면에 표시된다.
