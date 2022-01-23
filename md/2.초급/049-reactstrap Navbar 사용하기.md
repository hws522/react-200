# reactstrap Navbar 사용하기

### Hint: reactstrap Navbar 패키지의 기능과 종류를 확인한다.

<br>

Navbar 패키지는 웹 사이트의 내부 페이지들로 쉽게 이동할 수 있도록 메뉴 리스트와 링크를 제공한다.

<br>

App.js

```js
import React from 'react';
import Navbar from './R049_ReactstrapNavbar';
import 'bootstrap/dist/css/bootstrap.css';

function App() {
  return (
    <div>
      <h1>Start React 200!</h1>
      <Navbar />
    </div>
  );
}

export default App;
```

R049_ReactstrapNavbar.js

```js
import React, { Component } from 'react';
import { Collapse, Navbar, NavbarToggler, NavbarBrand, Nav, NavItem, NavLink } from 'reactstrap';

class R048_ReactstrapModal extends Component {
  constructor(props) {
    super(props);
    this.state = { collapsed: false };
  }

  toggle = () => {
    this.setState({ collapsed: !this.state.collapsed });
  };

  render() {
    return (
      <>
        <Navbar color='faded' light>
          <NavbarBrand href='/' className='mr-auto'>
            Navbar
          </NavbarBrand>
          <NavbarToggler onClick={this.toggle} className='mr-2' />
          <Collapse isOpen={this.state.collapsed} navbar>
            <Nav navbar>
              <NavItem>
                <NavLink href='#'>react</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href='http://example.com/'>200</NavLink>
              </NavItem>
            </Nav>
          </Collapse>
        </Navbar>
      </>
    );
  }
}

export default R048_ReactstrapModal;
```

<br>

- reactstrap 패키지에서 사용할 Collapse, Navbar, NavbarToggler, NavbarBrand, Nav, NavLink 를 `{}` 안에 나열하고 선언한다.

- Navbar 리스트의 표시 상태를 state 변수로 선언하고 초깃값으로 미표시(false) 를 할당한다.

- 전체 내비게이션 영역을 `<Navbar>` 태그로 묶는다.

- `<NavbarBrand>` 태그는 내비게이션에서 무조건 표시되는 영역이다.

- `<NavbarToggler>` 태그는 화면 오른쪽에 표시되는 버튼으로, 클릭 시 toggle 함수를 실행한다.

- `<Collapse>` 태그는 toggle 함수가 실행되면, 표시 또는 미표시되는 영역이다. toggle 함수에서 변경되는 state 변수, collapsed 값에 따라 동작한다.

- Nav 안에 표시할 메뉴 리스트를 `<NavItem>` 태그로 나열한다. `<NavItem>` 태그 안에 NavLink, 메뉴명, 링크를 추가할 수 있다.
