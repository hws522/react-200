# 생명주기 함수 static getDerivedStateFormProps(props, state) 사용하기

### Hint : 생명주기 함수들이 실행될 때 로그를 출력하고 실행 순서를 확인한다.

**getDerivedStateFromProps(props, state) 함수는 constructor() 함수 다음으로 실행된다.**

컴포넌트가 새로운 props를 받게 됐을 때, state 를 변경해준다.

<br>

```js
function App() {
    return (
        <div>
            <h1>Start React 200!</h1>
            <p>CSS 적용하기</p>
            <LifecycleEx prop_value="FromApp.js" />
        </div>
    );
}
```

App.js 에서 import 한 LifecycleEx component 로 prop_value 라는 변수를 전달한다.

```js
import React, { Component } from 'react';

class R006_LifecycleEx extends Component {
    static getDerivedStateFromProps(props, state) {
        console.log('2. getDerivedStateFromProps Call :' + props.prop_value);
        return {};
    }
    constructor(props) {
        super(props);
        this.state = {};
        console.log('1. constructor Call');
    }

    render() {
        console.log('3. render Call');
        return <h2>[ THIS IS CONSTRUCTOR FUNCTION ]</h2>;
    }
}

export default R006_LifecycleEx;
```

App.js 에서 전달한 prop_value 라는 변수를 props.prop_value 로 접근하여 값을 가져올 수 있다.

개발자도구에서 로그를 확인할 수 있다.
