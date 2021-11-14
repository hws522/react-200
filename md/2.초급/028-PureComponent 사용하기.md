# PureComponent 사용하기(class형 컴포넌트)

### Hint : PureComponent 와 render() 함수와의 관계를 확인한다. 

class형 컴포넌트에는 `Component` 와 `PureComponent` 가 있다. 두 컴포넌트 모두 props 와 state 의 변경에 따라 render() 함수를 호출하는데, 변경에 대한 기준이 다르다. 

PureComponent 에서는 비교 대상의 값을 비교해 동일하지 않으면 변경이 발생했다고 본다. 불필요한 render() 함수 실행을 줄이면 페이지 성능을 향상시킬 수 있다. 

<br>

App.js

```js
import React from 'react';
import './App.css';
import PureComponentClass from './R028_PureComponentClass'

function App() {
  return (
    <div>
      <h1>Start React 200!</h1>
      <p>CSS 적용하기</p>
      <PureComponentClass/>
    </div>
  );
}

export default App;
```

R028_PureComponentClass.js

```js
import React, { PureComponent } from 'react';

class R028_PureComponentClass extends PureComponent {
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

export default R028_PureComponentClass;
```

state 에 문자열 변수와 객체가 포함된 배열 변수를 선언하고 초깃값을 저장한다. 

[문자열 변경] 버튼을 클릭하면, constructor 에서 선언한 문자열 변수와 동일한 state 값을 setState() 함수로 선언 및 초기화한다. 이때 컴포넌트는 state 값이 동일하다고 간주해 render() 함수를 실행하지 않는다. PureComponent 에서는 새로운 state 변수가 선언됐지만, 변숫값만 비교한다. 

[객체 배열 변경] 버튼을 클릭하면, constructor 에서 선언한 배열 변수와 동일한 state 값을 setState() 함수로 선언 및 초기화한다. 이때 컴포넌트는 state 값이 변경됐다고 간주해 render() 함수를 실행한다. PureComponent 에서는 기본적으로 변숫값만 비교하지만, 예외적으로 객체에 대해서는 참조 값을 비교한다. constructor 에서 생성한 객체(`{ react : '200' }`) 의 데이터는 같지만, 참조 값이 달라 다른 객체로 인식된다. 

`참조 값이란, 객체를 생성했을 때 저장되는 메모리 주소다. 완전히 동일한 객체라도 새로 선언하면 다른 참조 값을 갖는다.`

