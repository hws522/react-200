# 생명주기 함수 shouldComponentUpdate() 사용하기

### Hint : 생명주기 함수들이 실행될 때 로그를 출력하고 실행 순서를 확인한다.

React 에서 생명주기란 component 의 생성, 변경, 소멸의 과정을 뜻한다.

**shouldComponentUpdate() 함수는 component 의 '변경' 과정에 속한다.**

여기서 변경이란 state, props 의 변경을 뜻한다.

<br>

```js
import React, { Component } from 'react';

class R008_LifecycleEx extends Component {
    static getDerivedStateFromProps(props, state) {
        console.log('2. getDerivedStateFromProps Call :' + props.prop_value);
        return { tmp_state: props.prop_value };
    }

    constructor(props) {
        super(props);
        this.state = {};
        console.log('1. constructor Call');
    }

    componentDidMount() {
        console.log('4. componentDidMount Call');
        console.log('5. tmp_state : ' + this.state.tmp_state);
        this.setState({ tmp_state2: true });
    }

    shouldComponentUpdate(props, state) {
        console.log('6. shouldComponentUpdate Call / tmp_state2 = ' + state.tmp_state2);
        return state.tmp_state2;
    }

    render() {
        console.log('3. render Call');
        return <h2>[ THIS IS shouldComponentUpdate FUNCTION ]</h2>;
    }
}

export default R008_LifecycleEx;
```

componentDidMount() 함수는 생명주기 '생성' 단계에서 가장 마지막에 실행된다.

tmp_state2 라는 state 변수에 true 라는 boolean 유형의 데이터를 세팅했다. setState() 함수는 변수의 선언과 초기화를 동시에 실행한다.

setState 로 state 의 변경이 발생했기 때문에 '변경' 단계의 생명주기 함수 shouldComponentUpdate() 가 실행된다.

shouldComponentUpdate() 는 boolean 유형의 데이터를 반환하는데, return 값이 true 인 경우에 render() 함수를 한 번 더 호출한다.

**shouldComponentUpdate() 함수의 반환값에 따라 render() 함수를 재실행할 수 있다는 점을 이용하면 props 나 state 변수가 변경될 때 화면을 다시 그리며 제어할 수 있다.**

App.js 에 import 한 후 개발자 도구 화면에서 로그를 확인할 수 있다.
