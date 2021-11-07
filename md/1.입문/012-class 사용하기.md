# class 사용하기

### Hint : 기존 ES5의 prototype 과 비교해 ES6 class 의 장점과 사용법을 확인한다.

기존 ES5 자바스크립트에서는 객체를 구현하기 위해 prototype 을 사용한다.

객체는 상속을 통해 코드를 재사용할 수 있게 해준다.

ES6에서 등장한 class 는 prototype 과 같은 개념인데, 쉽게 읽고 표현하기 위해 고안된 문법이다.

<br>

```js
import React, { Component } from 'react';

class ClassPrototype extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    componentDidMount() {
        //ES5 prototype
        var ExamCountFunc = (function () {
            function ExamCount(num) {
                this.number = num;
            }
            ExamCount.prototype.showNum = function () {
                console.log('1. react_' + this.number);
            };
            return ExamCount;
        })();

        var cnt = new ExamCountFunc('200');
        cnt.showNum();

        //ES6 class
        class ExamCountClass {
            constructor(num2) {
                this.number2 = num2;
            }
            showNum() {
                console.log(`2. react_${this.number2}`);
            }
        }

        var cnt2 = new ExamCountClass('2hundred');
        cnt2.showNum();
    }

    render() {
        return <h2>[ THIS IS Class ]</h2>;
    }
}

export default ClassPrototype;
```

ExamCountFunc() 함수(객체)를 실행한 후, return 되는 결과값(객체)을 cnt 라는 변수에 저장한다.

생성자 함수를 실행하는데, 파라미터로 전달받은 num 변수의 값(200)을 객체 변수 number 에 저장한다.

객체 안에 선언된 showNum() 함수를 실행한다.

`생성자 함수명.prototype.함수명` 형태로 선언해주면, 객체 외부에서 함수(cnt.showNum()) 를 실행해 객체 내부에 선언된 함수로 사용할 수 있다. 함수가 실행되면, 생성자 함수에서 '200' 으로 할당된 객체 변수 number 를 사용한다.

ExamCountClass 객체를 생성한 후, 객체를 cnt2 라는 변수에 저장한다.

ES6 에서는 객체를 class 로 선언한다.

constructor() 라는 생성자 함수가 실행되고, 파라미터로 전달받은 num2 라는 변숫값(2hundred)을 객체 변수 number2에 저장한다.

객체 안에 선언된 showNum() 함수를 실행한다.

객체에 접근할 때, 실행할 함수(showNum)는 class 의 중괄호 안에 간단하게 선언할 수 있다. 함수가 실행되면, 생성자 함수에서 '2hundred'로 할당된 객체 변수 number2를 사용한다.

App.js 에 import 한 후, 개발자도구에서 console 창에 로그를 확인할 수 있다.
