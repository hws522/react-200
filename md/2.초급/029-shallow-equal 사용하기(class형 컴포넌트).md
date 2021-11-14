# shallow-equal 사용하기(class 형 컴포넌트)

### Hint : shallow-equal 의 비교 함수를 사용해 render() 함수 실행을 결정할 수 있다. 

`shallow-equal` 패키지는 PureComponent 에서 state 값의 변경을 비교하는 것과 동일한 기능을 하는 함수를 제공한다. 

`shallowEqualArrays()` 함수를 사용하면 문자열과 배열은 **값**만 비교한다. 객체는 PureComponent와 동일하게 **참조 값**을 비교한다.

<br>

```
cd C:\react200\client
npm install shallow-equal
```

App.js

```js
import React from 'react';
import './App.css';
import ShallowEqual from './R029_ShallowEqual'

function App() {
  return (
    <div>
      <h1>Start React 200!</h1>
      <p>CSS 적용하기</p>
      <ShallowEqual/>
    </div>
  );
}

export default App;
```

R029_ShallowEqual.js

```js
import React, { Component  } from 'react';
import { shallowEqualArrays} from "shallow-equal";

class R029_ShallowEqual extends Component  {
  constructor (props) {
    super(props);
    this.state = { StateString: 'react' }
  }

  shouldComponentUpdate(nextProps, nextState){
    return !shallowEqualArrays(this.state, nextState)
  }

  componentDidMount(){
    const object = { react : '200'};
    const Array1 = ['리액트', object];
    const Array2 = ['리액트', object];
    const Array3 = ['리액트', { react : '200'}];
    
    console.log('shallowEqualArrays(Array1, Array2) : ' + shallowEqualArrays(Array1, Array2));
    console.log('shallowEqualArrays(Array2, Array3) : ' + shallowEqualArrays(Array2, Array3));
    this.setState({StateString : 'react'})
  }

  render() {
    console.log('render() 실행')
    return (<div></div>)
  }
}

export default R029_ShallowEqual;
```

componentDidMount 에서 선언한 배열의 값을 비교한다. 이때 object 변수는 동일한 객체를 참조한다. shallowEqualArrays() 함수로 두 배열을 비교하여 동일하면 true 를 반환한다.

첫번째 로그와는 다르게 두번째 로그에서는 object 와 {react: '200'} 은 값은 같지만, 서로 다른 참조 값을 갖는 다른 객체다. shallowEqualArrays() 함수 비교 결과 false 를 반환한다. 

shouldComponentUpdate() 함수는 변경된 props 와 state 값을 파라미터로 받을 수 있고 반환 값이 true 일 때 render() 함수를 실행시킨다. 두번째 로그 다음 문자열 state 값이 변경됐는데, 원래 Component 클래스에서는 변경으로 인식해 render() 함수를 실행시킨다. 그런데 shouldComponentUpdate() 함수에서 shallowEqualArrays() 함수로 값만 비교하기 때문에 false 를 반환하고 render() 함수를 실행하지 않는다. 

<br>

`Component 클래스에서도 shouldComponentUpdate(), shallowEqualArrays() 함수를 사용하면, PureComponent 클래스처럼 값만 비교해 render() 함수를 실행시킬 수 있다.`

