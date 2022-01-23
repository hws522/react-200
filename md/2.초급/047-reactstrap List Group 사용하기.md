# reactstrap List Group 사용하기

### Hint: reactstrap List Group 패키지의 기능과 종류를 확인한다.

<br>

List Group 패키지는 정돈된 스타일의 목록을 표시할 때 사용한다.

`<ListGroup>` 과 `<ListGroupItem>` 태그는 html 에서 목록을 만드는 태그인 `<ul>, <li>` 로 변환된다.

Button 과 링크(`<a>` 태그) 에 별도의 태그를 추가하지 않고 속성 값으로 간편하게 사용할 수 있다.

<br>

App.js

```js
import React from 'react';
// import './App.css';
import ListGroup from './R047_ReactstrapListGroup';
import 'bootstrap/dist/css/bootstrap.css';

function App() {
  return (
    <div>
      <h1>Start React 200!</h1>
      <p>CSS 적용하기</p>
      <ListGroup />
    </div>
  );
}

export default App;
```

R047_ReactstrapListGroup.js

```js
import React, { Component } from 'react';
import { ListGroup, ListGroupItem, Badge } from 'reactstrap';

class R047_ReactstrapListGroup extends Component {
  render() {
    return (
      <>
        <ListGroup>
          <ListGroupItem color='danger' className='justify-content-between'>
            Badge
            <Badge pill>200</Badge>
          </ListGroupItem>
          <ListGroupItem disabled tag='a' href='#'>
            Disable
          </ListGroupItem>
          <ListGroupItem tag='a' href='http://example.com'>
            Link
          </ListGroupItem>
          <ListGroupItem tag='button' action onClick={(e) => alert('button')}>
            Button
          </ListGroupItem>
        </ListGroup>
      </>
    );
  }
}

export default R047_ReactstrapListGroup;
```

<br>

- reactstrap 패키지에서 사용할 ListGroup, ListGroupItem, Badge 를 `{}` 안에 나열하고 선언한다.

- 목록으로 사용할 요소들을 `<ListGroup>` 태그로 묶어준다.

- `<ListGroupItem>` 태그로 목록의 요소를 추가한다. reactstrap 에서 지원하는 color 속성과 `<Badge>` 태그를 사용해 간편하게 목록 색상과 추가 정보를 표현할 수 있다.

- disabled 속성을 추가하면 목록 요소를 비활성화할 수 있다.

- 태그 속성 값을 `a` 로 하면 `<a>` 태그가 추가된다. href 속성 값은 `<a>` 태그와 동일하게 이동할 링크 정보를 넣어준다.

- tag 속성 값을 button 으로 하면 `<Button>` 태그가 추가된다. onClick 이벤트를 추가해 목록 요소를 클릭 시 지정한 함수를 실행한다.
