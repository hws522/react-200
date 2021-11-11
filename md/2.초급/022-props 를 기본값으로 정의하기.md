# props 를 기본값으로 정의하기

### Hint : props 를 기본값으로 지정하는 문법을 확인한다.

props 의 기본값은 부모 컴포넌트에서 값이 넘어오지 않았을 때 사용한다. `defaultProps` 라는 문법을 사용한다.

<br>

App.js

```js
import React from 'react';
import './App.css';
import PropsDefault from './R022_PropsDefault'

function App() {
  return (
    <div>
      <h1>Start React 200!</h1>
      <p>CSS 적용하기</p>
      <PropsDefault ReactNumber={200}/>
    </div>
  );
}

export default App;
```

R022_PropsDefault.js

```js
import React, { Component } from 'react';

class R022_PropsDefault extends Component {
  render() {
    let {
      ReactString,
      ReactNumber
    } = this.props
    return (
    <div style={{padding: "0px"}}>
      {ReactString}{ReactNumber}
    </div>
    )
  }
}

R022_PropsDefault.defaultProps = {
  ReactString: "리액트",
  ReactNumber: 400
}

export default R022_PropsDefault;
```

render() 함수 내에서 지역 변수를 선언해 props 로 전달된 값을 할당한다.

상위 컴포넌트에서 값이 전달될 것이라 기대되는 ReactString 과 ReactNumber 변수에 각각 기본값을 할당했다.

ReactString 변숫값은 비어 있기 때문에 지정한 기본값이 화면에 표시된다.

ReactNumber 변숫값은 상위 컴포넌트에서 전달됐기 때문에 지정한 기본값은 무시된다.


