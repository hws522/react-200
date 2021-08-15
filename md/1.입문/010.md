# var, let, const 사용하기

### Hint : 기존 var 변수와 비교해 변수의 재선언, 재할당이 가능한지 확인한다.

ES5에서 사용하던 var 는 유연한 방식으로 변수를 재선언, 재할당할 수 있다.

이런 특징으로 인해 변수의 사용 범위가 불확실해지거나 의도하지 않은 변숫값 변경이 발생할 수 있다.

이러한 var 의 단점을 보완하기 위해 ES6에서 let, const 가 추가됐다.

<br>

```js
import React, { Component } from 'react';

class R010_Variable extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    componentDidMount() {
        var varName = 'react';
        console.log('varName1 : ' + varName);
        var varName = '200'; // 'varName' is already defined  no-redeclare
        console.log('varName2 : ' + varName);

        let letName = 'react';
        console.log('letName1 : ' + letName);
        // let letName = '200' // Parsing error: Identifier 'letName' has already been declared
        letName = 'react200';
        console.log('letName2 : ' + letName);

        const constName = 'react';
        console.log('constName : ' + constName);
        // const constName = '200' // Parsing error: Identifier 'constName' has already been declared
        // constName = 'react200' // Uncaught TypeError: Assignment to constant variable.
    }

    render() {
        return <h2>[ THIS IS Variable ]</h2>;
    }
}

export default R010_Variable;
```

이미 선언한 var 변수를 다시 선언했을 때, 경고 메시지가 콘솔 로그에 출력된다. 하지만 var 변수는 재선언, 재할당을 허용하기 때문에 경고 메시지가 출력돼도 페이지가 정상적으로 표시된다.

이미 선언한 let 변수를 다시 선언했을 때, 에러 메시지가 콘솔 로그에 출력된다. let 변수는 재선언을 허용하지 않기 때문에 에러 메시지가 표시된다.

let 변수는 재할당을 허용한다. 이미 선언한 let 변수에 새로운 값을 할당했을 때, 페이지가 정상적으로 표시된다.

이미 선언한 const 변수를 다시 선언했을 때, 에러 메시지가 콘솔 로그에 출력된다. const 변수는 재선언을 허용하지 않기 때문에 에러 메시지가 표시된다.

이미 선언한 const 변수에 새로운 값을 할당했을 때, 에러 메시지가 콘솔 로그에 출력된다. const 변수는 재할당을 허용하지 않기 때문에 에러 메시지가 표시된다.

App.js 에 import 한 후, 개발자도구 console 창에서 로그를 확인할 수 있다.
