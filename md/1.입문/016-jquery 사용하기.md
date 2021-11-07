# jquery 사용하기

### Hint : jquery 를 import 하는 방법과 기본 문법을 확인한다.

jquery 는 가장 인기 있는 자바스크립트 라이브러리다.

이벤트 처리, 애니메이션 등 자바스크립트의 기능을 간단하고 빠르게 구현할 수 있도록 지원해준다.

jquery를 사용하기 위해 `npm install jquery` 를 해준다.

<br>

```js
import React, { Component } from 'react';
import $ from 'jquery';

class R016_Jquery extends Component {
    input_alert = (e) => {
        var input_val = $('#inputId').val();
        alert(input_val);
    };

    render() {
        return (
            <div>
                <h2>[ THIS IS Jquery ]</h2>
                <input id="inputId" name="inputName" />
                <button id="buttonId" onClick={(e) => this.input_alert(e)}>
                    Jquery Button
                </button>
            </div>
        );
    }
}

export default R016_Jquery;
```

jquery 를 import 해 기호 $ 를 선언한다. 이는 jquery 를 사용할 때, $ 기호를 붙여 사용해야 한다는 것을 의미한다.

화면의 왼쪽에 보이는 버튼으로 값을 입력하면 `<input>` 태그의 value 값으로 저장된다.

button 을 클릭하면 input_alert 라는 함수를 호출한다.

함수가 호출되면 jquery 문법 $('#inputId')로, id 값이 inputId 인 `<input>` 태그에 접근한다.

`<input>` 태그의 value 값을 가져와 input_val 변수에 저장한다.

변숫값을 팝업 창으로 표시한다.

App.js 에 import 한 후, 개발자도구에서 console 창에 로그를 확인할 수 있다.
