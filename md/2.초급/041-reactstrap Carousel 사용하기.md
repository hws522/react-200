# reactstrap Carousel 사용하기

### Hint: reactstrap Carousel 패키지의 기능화 종류를 확인한다.

<br>

Carousel 패키지는 슬라이드를 자동으로 회전시키는 기능을 제공한다.

이미지, 텍스트, 버튼 등으로 이루어진 슬라이드를 일정 시간 단위로 다음 슬라이드로 이동시킨다.

<br>

App.js

```js
import React from 'react';
// import './App.css';
import ReactstrapCarousel from './R041_ReactstrapCarousel';
import 'bootstrap/dist/css/bootstrap.css';

function App() {
  return (
    <div>
      <h1>Start React 200!</h1>
      <p>CSS 적용하기</p>
      <ReactstrapCarousel />
    </div>
  );
}

export default App;
```

R041_ReactstrapCarousel.js

```js
import React, { Component } from 'react';
import { UncontrolledCarousel } from 'reactstrap';

const items = [
  {
    src: 'https://cdn.pixabay.com/photo/2021/12/28/16/35/leopard-6899752_960_720.jpg',
    altText: '슬라이드1 이미지 대체 문구',
    caption: '슬라이드1 설명',
    header: '슬라이드1 제목',
  },
  {
    src: 'https://cdn.pixabay.com/photo/2021/01/19/21/16/cat-5932474_960_720.jpg',
    altText: '슬라이드2 이미지 대체 문구',
    caption: '슬라이드2 설명',
    header: '슬라이드2 제목',
  },
  {
    src: 'https://cdn.pixabay.com/photo/2021/12/27/17/47/animal-6897849_960_720.jpg',
    altText: '슬라이드3 이미지 대체 문구',
    caption: '슬라이드3 설명',
    header: '슬라이드3 제목',
  },
];

class R041_ReactstrapCarousel extends Component {
  render() {
    return <UncontrolledCarousel items={items} />;
  }
}

export default R041_ReactstrapCarousel;
```

<br>

- reactstrap 패키지에서 사용할 UncontrolledCarousel 을 `{}` 안에 나열하고 선언한다. UncontrolledCarousel 은 태그나 함수를 생략해도 기본 기능을 제공해준다. 그래서 기본적인 기능만 사용할 것이라면, Carousel 보다 UncontrolledCarousel 을 사용하는 것이 간편하다.

- UncontrolledCarousel 슬라이드에서 사용할 데이터를 배열로 만든다. src 값은 슬라이드 이미지, altText 는 슬라이드 이미지가 없을 경우 대체 문구, header 는 슬라이드 제목, caption 은 header 하단에 표시되는 슬라이드 설명이다.

- `<UncontrolledCarousel>` 태그에 배열 형태의 데이터를 넣어주면, reactstrap 이 Carousel 기능에 필요한 `<html>` 태그를 그려주고 스타일(css) 과 이벤트(function) 를 적용한다.

- 한 슬라이드에 머무는 시간은 기본값 5초가 적용된다. 웹 브라우저의 가로 너비가 특정 값보다 작으면, 슬라이드 제목과 설명 부분이 표시되지 않을 수 있다.
