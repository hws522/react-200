# reactstrap Jumbotron 사용하기

### Hint: reactstrap Jumbotron 패키지의 기능과 종류를 확인한다.

<br>

Jumbotron 은 대형 전광판을 의미한다. 넓은 영역에 눈에 띄게 정보를 표시해 사용자의 관심을 불러일으킬 수 있다.

<br>

App.js

```js
import React from 'react';
// import './App.css';
import Jumbotron from './R046_ReactstrapJumbotron';
import 'bootstrap/dist/css/bootstrap.css';

function App() {
  return (
    <div>
      <h1>Start React 200!</h1>
      <p>CSS 적용하기</p>
      <Jumbotron />
    </div>
  );
}

export default App;
```

R046_ReactstrapJumbotron.js

```js
import React, { Component } from 'react';
import { Jumbotron, Button } from 'reactstrap';

class R046_ReactstrapJumbotron extends Component {
  render() {
    return (
      <>
        <Jumbotron style={{ backgroundColor: '#D38C7C' }}>
          <h1 className='display-4'>REACT 200</h1>
          <p className='h4'>Contrary to popular belief, Lorem Ipsum is not simply random text.</p>
          <hr className='my-2' />
          <p>There are many variations of passages of Lorem Ipsum available.</p>
          <p className='lead'>
            <Button color='danger'>Go Detail</Button>
          </p>
        </Jumbotron>
      </>
    );
  }
}

export default R046_ReactstrapJumbotron;
```

<br>

- reactstrap 패키지에서 사용할 기능인 Jumbotron, Button 을 `{}` 안에 나열하고 선언한다.

- `<Jumbotron>` 태그로 하위 태그들을 묶어주면, 넓은 영역을 차지하는 `<div>` 태그가 생성된다.

- `<Jumbotron>` 태그에 배경색, 배경 이미지 등 추가 속성을 적용할 수 있다.
