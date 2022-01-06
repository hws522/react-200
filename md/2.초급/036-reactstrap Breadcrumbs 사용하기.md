# reactstrap Breadcrumbs 사용하기

### Hint: reactstrap Breadcrumbs 패키지의 기능과 종류를 확인한다.

Breadcrumbs 패키지는 페이지 위치 경로를 지정한 웹 내비게이션에 사용된다. 보통 웹 사이트 상단에 표시되는 메뉴 리스트에 사용하며 특정 메뉴를 선택하면 해당하는 페이지 위치로 이동시킨다.

<br>

App.js

```js
import React from 'react';
import './App.css';
import ReactstrapBreadcrumbs from './R036_ReactstrapBreadcrumbs';
import 'bootstrap/dist/css/bootstrap.css';

function App() {
  return (
    <div>
      <h1>Start React 200!</h1>
      <p>CSS 적용하기</p>
      <ReactstrapBreadcrumbs />
    </div>
  );
}

export default App;
```

R036_ReactstrapBreadcrumbs.js

```js
import React, { Component } from 'react';
import { Breadcrumb, BreadcrumbItem } from 'reactstrap';

class R036_ReactstrapBreadcrumbs extends Component {
  render() {
    return (
      <div id="top">
        <Breadcrumb tag="nav" listTag="div">
          <BreadcrumbItem tag="a" href="#top">
            Go_top
          </BreadcrumbItem>
          <BreadcrumbItem tag="a" href="#bottom">
            Go_bottom
          </BreadcrumbItem>
        </Breadcrumb>
        <div id="bottom" style={{ marginTop: '1000px' }}>
          <span>bottom</span>
        </div>
      </div>
    );
  }
}

export default R036_ReactstrapBreadcrumbs;
```

reactstrap 패키지에서 사용할 Breadcrumb 와 BreadcrumbItem 을 사용하기 위해 선언한다.

`<nav>, <div>` 태그를 생성한다. bootstrap 코드로는 함축적으로 표현돼 있지만, 개발자 도구에서 elements 를 확인해보면 html 의 `<nav>, <div>` 태그가 생성된 것을 확인할 수 있다.

마찬가지로 `<a>` 태그를 생성하고 href 속성 값으로 이동할 링크의 주소를 넣을 수 있다.

주소값으로는 예제처럼 태그의 id 값을 사용해도 되고, 웹 링크를 사용할 수도 있다.
