# reactstrap Card 사용하기

### Hint: reactstrap Card 패키지의 기능과 종류를 확인한다.

<br>

Card 패키지는 이미지 제목, 부제목, 내용, 버튼 등을 한 세트로 묶는다. Card 단위로 리스트를 만들어 반복해서 출력하면, 정형화된 콘텐츠 목록을 만들 수 있다.

<br>

App.js

```js
import React from 'react';
// import './App.css';
import ReactstrapCard from './R040_ReactstrapCard';
import 'bootstrap/dist/css/bootstrap.css';

function App() {
  return (
    <div>
      <h1>Start React 200!</h1>
      <p>CSS 적용하기</p>
      <ReactstrapCard />
    </div>
  );
}

export default App;
```

R040_ReactstrapCard.js

```js
import React, { Component } from 'react';
import { Card, CardImg, CardText, CardBody, CardTitle, CardSubtitle, Button } from 'reactstrap';

class R040_ReactstrapCard extends Component {
  render() {
    return (
      <div>
        <Card>
          <CardImg top height="200px" src="http://bitly.kr/4KkfRxZfR" alt="Card image cap" />
          <CardBody>
            <CardTitle>Card 제목</CardTitle>
            <CardSubtitle>Card 부제목</CardSubtitle>
            <CardText>Card 내용 Lorem Ipsum is simply dummy text.</CardText>
            <Button>버튼</Button>
          </CardBody>
        </Card>
      </div>
    );
  }
}

export default R040_ReactstrapCard;
```

<br>

- reactstrap 패키지에서 사용할 Card, CardImg, CardText, CardBody, CardTitle, CardSubtitle, Button 을 `{}` 안에 나열하고, 선언한다.

- `<Card>` 태그로 하위 태그들을 묶어준다.

- `<CardImg>` 태그는 `<img>` 태그와 같이 이미지 크기와 url 을 지정할 수 있다.

- `<CardBody>` 태그로 Card 의 제목, 부제목, 내용, 버튼 태그를 묶어 이미지 하단에 표시한다.
