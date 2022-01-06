# Fragments 사용하기

### Hint: 컴포넌트에서 element 를 return 할 때 사용되는 Fragments 기능을 확인한다.

컴포넌트 단위로 element 를 return 할 때 하나의 `<html>` 태그로 전체를 감싸지 않으면 에러가 발생한다. 이때 `<Fragments>` 태그로 감싸면 불필요한 `<html>` 태그를 추가하지 않고 사용할 수 있다.

<br>

App.js

```js
import React from 'react';
import './App.css';
import Fragments from './R032_Fragments';

function App() {
  return (
    <div>
      <h1>Start React 200!</h1>
      <p>CSS 적용하기</p>
      <Fragments />
    </div>
  );
}

export default App;
```

R032_Fragments.js

```js
import React, { Component } from 'react';

class R032_Fragments extends Component {
  render() {
    return (
      <React.Fragment>
        <p>P TAG</p>
        <span>SPAN TAG</span>
      </React.Fragment>
    );
  }
}

export default R032_Fragments;
```

<br>

`<React.Fragment>` 태그를 사용하지 않았다면, `<p>` 태그와 `<span>` 태그가 하나의 태그로 감싸져 있지 않기 때문에 에러가 발생한다.

```js
<>
  <p></p>
  <span></span>
</>

// <Fragment> 태그를 위와 같이 약식으로 사용할 수 있다.
```
