# 생명주기 함수 componentDidMount() 사용하기

### Hint : 생명주기 함수들이 실행될 때 로그를 출력하고 실행 순서를 확인한다.

**componentDidMount() 함수는 작성한 함수들 중 가장 마지막으로 실행된다.**

render() 함수가 return 되는 html 형식의 코드를 화면에 그려준 후 실행된다. 화면이 모두 그려진 후에 실행되어야 하는 이벤트 처리, 초기화 등 가장 많이 활용되는 함수다.

<br>

```js
import React, { Component } from 'react';

class R007_LifecycleEx extends Component {
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
    }

    render() {
        console.log('3. render Call');
        return <h2>[ THIS IS COMPONENTDIDMOUNT FUNCTION ]</h2>;
    }
}

export default R007_LifecycleEx;
```

위 코드를 App.js 에서 import 하여 개발자도구에서 로그를 확인할 수 있다.
