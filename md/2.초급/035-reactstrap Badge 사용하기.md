# reactstrap Badge 사용하기

### Hint: reactstrap Badge 패키지의 기능과 종류를 확인한다.

Badge 패키지는 부모 요소에 추가로 특정 문자열이나 숫자를 표시할 때 사용된다.

<br>

App.js

```js
import React from 'react';
import './App.css';
import ReactstrapBadges from './R035_ReactstrapBadges';
import 'bootstrap/dist/css/bootstrap.css';

function App() {
  return (
    <div>
      <h1>Start React 200!</h1>
      <p>CSS 적용하기</p>
      <ReactstrapBadges />
    </div>
  );
}

export default App;
```

R035_ReactstrapBadges.js

```js
import React, { Component } from 'react';
import { Badge, Button } from 'reactstrap';

class R035_ReactstrapBadges extends Component {
  render() {
    return (
      <div>
        <h1>
          PRODUCT NAME <Badge color="secondary">hit</Badge>
        </h1>
        <Button color="light" outline>
          Accessor <Badge color="dark">4</Badge>
        </Button>
        <Badge color="danger" pill>
          pill
        </Badge>
        <Badge href="http://example.com" color="light">
          GoLink
        </Badge>
      </div>
    );
  }
}

export default R035_ReactstrapBadges;
```

reactstrap 패키지에서 사용할 `Badge, Button` 을 `{}` 안에 나열한다.

텍스트 옆에 배지를 추가하면 쇼핑몰 웹 사이트의 상품 옆 신상품(new), 히트상품(hit), 세일 상품(sale) 과 같은 사용이 가능하다.

버튼안에 배지를 추가하면 접속자, 메시지의 수와 같은 어떤 속성의 수치를 나타낼 때 사용할 수 있다.

pill 속성을 추가하면 테두리를 둥글게 적용할 수 있다.

href 속성을 추가해 배지에 링크를 연결할 수 있다.
