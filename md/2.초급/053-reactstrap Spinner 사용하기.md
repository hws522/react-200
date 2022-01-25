# reactstrap Spinner 사용하기

### Hint: reactstrap Spinner 패키지의 기능과 종류를 확인한다.

<br>

Spinner 패키지는 어떤 작업이 진행되고 있음을 표시하는, 움직이는 원 형태의 디자인을 제공한다. 색상, 너비, 높이 값을 지정할 수 있다.

<br>

App.js

```js
import React from 'react';
import ReactstrapSpinner from './R053_ReactstrapSpinner';
import 'bootstrap/dist/css/bootstrap.css';

function App() {
  return (
    <div>
      <h1>Start React 200!</h1>
      <ReactstrapSpinner />
    </div>
  );
}

export default App;
```

R053_ReactstrapSpinner.js

```js
import React, { Component } from 'react';
import { Spinner } from 'reactstrap';

class R053_ReactstrapSpinner extends Component {
  render() {
    return (
      <>
        <Spinner color='secondary' />
        <Spinner color='success' />
        <Spinner type='grow' color='dark' />
        <Spinner type='grow' color='info' />
        <Spinner size='sm' color='primary' />
        <Spinner style={{ width: '10em', height: '0.5em' }} color='dark' />
        <br />
        <Spinner style={{ width: '10em', height: '10em' }} color='secondary' />
        <Spinner style={{ width: '3em', height: '10em' }} type='grow' color='primary' />
      </>
    );
  }
}

export default R053_ReactstrapSpinner;
```

<br>

- reactstrap 패키지에서 사용할 Spinner 를 `{}` 안에 나열하고 선언한다.

- `<Spinner>` 태그에 color 속성을 추가하면 색상을 변경할 수 있다.

- `<Spinner>` 태그에 type 속성을 grow 로 추가하면, 원의 중앙에서 점점 커지다가 사라지는 디자인이 적용된다.

- `<Spinner>` 태그에 size 속성을 추가하면, 약속된 크기로 표시할 수 있다. 기본 크기보다 작게 표시하려면 size 값에 sm 을 입력한다.

- `<Spinner>` 태그에 style 속성 값으로 너비(width)와 높이(height) 값을 할당하면, 원하는 크기로 나타낼 수 있다. rem 은 css 크기 단위로, 기본 크기의 몇 배의 크기로 표시할지 정할 수 있다. 너비와 높이를 같은 값으로 하지 않으면, 타원형이나 비정상적인 모습으로 표시될 수 있다.
