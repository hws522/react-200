# props 자료형 선언하기

### Hint : 선언한 자료형과 다른 자료형이 전달됐을 때, 경고 메세지를 확인한다.

자식 component 에서 props 에 대한 자료형을 선언해놓으면, 부모 component 에서 넘어오는 props 변수들의 자료형과 비교한다.

이때 자료형이 일치하지 않는다면, 경고 메시지로 알려주기 때문에 잘못된 데이터를 확인할 수 있다.


<br>

App.js

```js
import React from 'react';
import './App.css';
import PropsDatatype from './R018_PropsDatatype'

function App() {
  return (
    <div>
      <h1>Start React 200!</h1>
      <p>CSS 적용하기</p>
      <PropsDatatype 
        String="react"
        Number={200}
        Boolean={1==1}
        Array={[0, 1, 8]}
        ObjectJson={{react:"리액트", twohundred:"200"}}
        Function={console.log("FunctionProps: function!")}
      />
    </div>
  );
}

export default App;
```

문자열, 숫자, 불리언, 배열, 객체, 함수 데이터를 props 에 담아 하위 컴포넌트로 전달한다.


<br>

R018_PropsDatatype

```js
import React, { Component } from 'react';
import datatype from 'prop-types';

class R018_PropsDatatype extends Component {
  render() {
    let {
      String, Number, Boolean, Array, ObjectJson, Function
    } = this.props
    return (
    <div style={{padding: "0px"}}>
      <p>StringProps: {String}</p>
      <p>NumberProps: {Number}</p>
      <span>BooleanProps: {Boolean.toString()}</span>
      <p>ArrayProps: {Array.toString()}</p>
      <p>ObjectJsonProps: {JSON.stringify(ObjectJson)}</p>
      <p>FunctionProps: {Function}</p>
    </div>
    )
  }
}

R018_PropsDatatype.propTypes = {
  String: datatype.number,
  Number: datatype.number,
  Boolean: datatype.bool,
  Array: datatype.array,
  ObjectJson: datatype.object,
  Function: datatype.func,
}

export default R018_PropsDatatype;
```


