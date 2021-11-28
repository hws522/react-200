# hook 사용하기

### Hint : 함수형 컴포넌트에서 사용되는 hook 기능을 확인한다.

함수형 컴포넌트에서 클래스형 컴포넌트와 같이 state 와 생명주기 함수와 같은 기능을 사용하기 위해 hook 을 이용한다. 대표적인 hook 함수에는 `useState()` 와 `useEffect()` 가 있다.

<br>

App.js

```js
import React from 'react';
import './App.css';
import ReactHook from './R031_ReactHook'

function App() {
  return (
    <div>
      <h1>Start React 200!</h1>
      <p>CSS 적용하기</p>
      <ReactHook/>
    </div>
  );
}

export default App;
```

R031_ReactHook.js

```js
import React, { useState, useEffect } from 'react';

function R031_ReactHook(props){
  const [contents, setContents] = useState('[ THIS IS REACT ]');

  useEffect(() => {
    console.log('useEffect');
  });

  return (
    <div style={{padding: "0px"}}>
      <h2>{contents}</h2>
      <button onClick={() =>setContents('[ THIS IS HOOK ]')}>버튼</button>
    </div>
  )
}

export default R031_ReactHook;
```

<br>

react 에서 기본으로 제공해주는 `useState()` 와 `useEffect()` 함수를 사용하기 위해 임포트해준다.

`useState()` 함수로 state 변숫값을 선언 및 할당한다. 이때 두가지 인자가 선언된 배열이 반환된다. 첫 번째 인자 contents 는 state 의 변수명, 두번째 인자 setContents 는 state 변숫값을 변경해주는 함수다. 

`useEffect()` 함수는 생명주기 함수 `componentDidMount()` 와 같이 return 되는 html 코드들이 화면에 그려진 이후에 실행된다. 최초 페이지가 로딩될 때 한 번 실행되고 `setContents()` 함수로 state 값이 변경되면 한 번 더 실행된다. 

버튼을 클릭하면, `setContents()` 함수로 contents 값을 수정한다. 이 때 state 값이 변경되면 화면을 다시 그려주는데, "THIS IS REACT" 라는 글자가 "THIS IS HOOK" 로 변경되는 것을 확인할 수 있다.



