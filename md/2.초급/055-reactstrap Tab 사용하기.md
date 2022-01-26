# reactstrap Tab 사용하기

### Hint: reactstrap Tab 패키지의 기능과 종류를 확인한다.

<br>

Tab 패키지는 사용자 동작에 따라 특정 영역에 다른 내용을 표시할 때 사용한다. 클릭 이벤트에 따라 원하는 영역을 표시해야 할 경우, 간편하게 사용할 수 있다.

<br>

App.js

```js
import React from 'react';
import ReactstrapTab from './R055_ReactstrapTab';
import 'bootstrap/dist/css/bootstrap.css';

function App() {
  return (
    <div>
      <h1>Start React 200!</h1>
      <ReactstrapTab />
    </div>
  );
}

export default App;
```

R055_ReactstrapTab.js

```js
import React, { Component } from 'react';
import { TabContent, TabPane, Nav, NavItem, NavLink } from 'reactstrap';

class R055_ReactstrapTab extends Component {
  constructor(props) {
    super(props);
    this.state = { TabState: 'React' };
  }

  toggle = (tabnum) => {
    if (this.state.TabState !== tabnum) this.setState({ TabState: tabnum });
  };

  render() {
    return (
      <>
        <Nav tabs>
          <NavItem>
            <NavLink
              onClick={() => {
                this.toggle('React');
              }}
            >
              First Tab
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink
              onClick={() => {
                this.toggle('200');
              }}
            >
              Second Tab
            </NavLink>
          </NavItem>
        </Nav>
        <TabContent activeTab={this.state.TabState}>
          <TabPane tabId='React'>
            <h3>React</h3>
          </TabPane>
          <TabPane tabId='200'>
            <h3>200</h3>
          </TabPane>
        </TabContent>
      </>
    );
  }
}

export default R055_ReactstrapTab;
```

<br>

- reactstrap 패키지에서 사용할 TabContent, TabPane, Nav, NavItem, NavLink 를 `{}` 나열하고 선언한다.

- 표시할 tab 영역의 id 를 상태 변수로 선언한다. 초깃값으로 첫 번째 탭의 tabId 인 React 로 할당한다.

- 내비게이션 메뉴를 클릭하면, toggle 함수를 호출하는데, 파라미터로 표시할 tab 영역의 tabId 값을 넘긴다.

- 파라미터로 넘어온 값(tabnum)이 현재 tabid 의 상태(TabState) 값과 다르다면, 변경된 값으로 상태(TabState) 값을 수정한다.

- 변경된 상태(TabState) 값을 `<TabContent>` 태그의 activeTab 속성에 할당한다. 이 때 할당된 값과 `<TabPane>` 태그의 tabId 값을 비교해 일치하는 `<TabPane>` 태그 영역을 표시한다.
