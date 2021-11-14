# props 의 자식 Component 에 node 전달하기

### Hint : props에 node를 넣어 전달하는 문법을 확인한다.

props 를 하위 컴포넌트 태그 안쪽에 선언해 전달하는 것 이외에도 하위 컴포넌트 태그 사이에 작성된 node 를 전달할 수 있다. 

`node란, html 문서를 구성하는 포괄적인 개념이다. 노드의 종류엔 문서 요소, 속성, 텍스트, 주석 등이 있다. 예를 들면, <p id='a'>bc</p> 에서 <p> 태그가 요소, id가 속성, bc 가 텍스트다.`

<br>

App.js

```js
import React from 'react';
import './App.css';
import PropsNode from './R023_PropsNode'

function App() {
  return (
    <div>
      <h1>Start React 200!</h1>
      <p>CSS 적용하기</p>
      <PropsNode>
        <span>node from App.js</span>
      </PropsNode>
    </div>
  );
}

export default App;
```

하위 컴포넌트 태그 사이에 `<span>` 태그를 추가하면 props 에 담아 하위 컴포넌트에 전달한다. 

<br>


R023_PropsNode.js

```js
import React, { Component } from 'react';

class R023_PropsNode extends Component {
  render() {
    return (
    <div style={{padding: "0px"}}>
      {this.props.children}
    </div>
    )
  }
}

export default R023_PropsNode;
```

<br>

상위 컴포넌트에서 전달한 노드는 `this.props.children` 이라는 문법으로 접근해 사용할 수 있다. 

