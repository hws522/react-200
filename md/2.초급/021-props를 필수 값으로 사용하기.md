# props를 필수 값으로 사용하기

### Hint : props 를 필수 값으로 지정하는 문법을 확인한다.

props 의 자료형을 선언할 때 prop-types 를 사용한다.

자료형 설정 대신 `isRequired` 를 조건으로 추가하면, 변숫값이 없는 경우 경고 메시지가 발생할 수 있다.

<br>

App.js

```js
import React from 'react';
import './App.css';
import PropsRequired from './R021_PropsRequired'

function App() {
  return (
    <div>
      <h1>Start React 200!</h1>
      <p>CSS 적용하기</p>
      <PropsRequired ReactNumber={200}/>
    </div>
  );
}

export default App;
```

<br>

R021_PropsRequired.js

```js
import React, { Component } from 'react';
import datatype from 'prop-types';

class R021_PropsRequired extends Component {
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

R021_PropsRequired.propTypes = {
  ReactString: datatype.isRequired,
}

export default R021_PropsRequired;
```

render() 함수 내에서 지역 변수를 선언해 props 로 전달된 값을 할당한다.

ReactString 이라는 props 값을 필수 값으로 지정한다. 하지만 상위 컴포넌트에서 ReactString 이라는 변수를 전달하지 않았기 때문에 경고 메시지가 발생한다. 

ReactString 변숫값은 비어 있기 때문에 상위 컴포넌트에서 전달받은 ReactNumber 변숫값(200)만 화면에 출력된다.