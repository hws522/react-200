# Component 사용하기(class형 컴포넌트)

### Hint : Component 와 render() 함수와의 관계를 확인한다. 

class형 컴포넌트에는 `Component` 와 `PureComponent` 가 있다. 두 컴포넌트 모두 props 와 state 의 변경에 따라 render() 함수를 호출하는데, 변경에 대한 기준이 다르다. `Component` 에서는 비교대상이 완전히 동일하지 않으면 변경이 발생했다고 본다.

<br>

App.js

```js
import React from 'react';
import './App.css';
import ComponentClass from './R027_ComponentClass'

function App() {
  return (
    <div>
      <h1>Start React 200!</h1>
      <p>CSS 적용하기</p>
      <ComponentClass/>
    </div>
  );
}

export default App;
```

R027_ComponentClass.js

```js
import React, { Component } from 'react';

class R027_ComponentClass extends Component {
  constructor (props) {
    super(props);
    this.state = {
      StateString: 'react',
      StateArrayObj: ['react', { react: '200' }]
    }
  }

  buttonClick = (type) => {
    if(type === 'String'){
      this.setState({ StateString: 'react' });
    }else{
      this.setState({ StateArrayObj: ['react', { react: '200' }] });
    }
  }

  render() {
    console.log('render() 실행')
    return (
      <div>
        <button onClick={e => this.buttonClick('String')}>문자열 변경</button>
        <button onClick={e => this.buttonClick('ArrayObject')}>객체 배열 변경</button>
      </div>
    )
  }
}

export default R027_ComponentClass;
```

<br>

state 에 문자열 변수와 객체가 포함된 배열 변수를 선언하고 초깃값을 저장한다. 

[문자열 변경] 버튼을 클릭하면, constructor 에서 선언한 문자열 변수와 동일한 state 값을 setState() 함수로 선언 및 초기화한다. 이때 컴포넌트는 state 값이 변경됐다고 간주해 render() 함수를 실행한다. 

[객체 배열 변경] 버튼을 클릭하면, constructor 에서 선언한 배열 변수와 동일한 state 값을 setState() 함수로 선언 및 초기화한다. 이때 컴포넌트는 state 값이 변경됐다고 간주해 render() 함수를 실행한다. 

`setState() 함수로 실행한 값은 이전에 있던 state 값과 동일하더라도 Component 에서는 새로운 state 변수가 같은 이름으로 생성됐다고 인식한다.`


