# forEach() 함수 사용하기

### Hint : For문 대비 forEach() 함수의 장점과 사용법을 확인한다.

배열 함수 forEach() 는 for 문에서 사용하던 순번과 배열의 크기 변수를 사용하지 않는다.

배열의 처음부터 마지막 순번까지 모두 작업하는 경우 forEach() 문을 사용하는 것이 간편하다.

하지만 특정 순번에서만 배열 값을 사용하거나 변경해야 하는 상황이라면 for문을 사용해야 한다.

<br>

```js
import React, { Component } from 'react';

class R014_ForEach extends Component {
    componentDidMount() {
        var Es5_Arr = [3, 2, 8, 8];
        var Es5_newArr = [];

        for (var i = 0; i < Es5_Arr.length; i++) {
            Es5_newArr.push(Es5_Arr[i]);
        }
        console.log('1. Es5_newArr : [' + Es5_newArr + ']');

        var Es6_Arr = [3, 3, 9, 8];
        var Es6_newArr = [];
        Es6_Arr.forEach((result) => {
            Es6_newArr.push(result);
        });
        console.log('2. Es6_newArr : [' + Es6_newArr + ']');
    }

    render() {
        return <h2>[ THIS IS ForEach ]</h2>;
    }
}

export default R014_ForEach;
```

for 문에서는 순번변수(i)와 배열의 크기(For_Arr.length)가 필요하다. 순번을 0부터 1씩 증가시킨다. 배열의 크기보다 1이 작은 값이 될 때까지 새로운 함수(For_newArr)에 기존 함수 값을 넣는다(push)

forEach 함수에서는 순번과 배열의 크기 정보를 사용하지 않는다. 0부터 배열의 크기만큼 반복하며 순서대로 배열 값을 반환한다. 반복문이 실행될 때마다 콜백 함수로 결과값(result)을 받아 새로운 함수(ForEach_newArr)에 넣는다.

App.js 에 import 한 후, 개발자도구에서 console 창에 로그를 확인할 수 있다.
