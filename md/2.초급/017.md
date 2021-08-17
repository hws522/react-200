# props 사용하기

### Hint : props에 데이터를 넣는 부분과 받아 오는 부분을 확인한다.

props 는 부모 component가 자식 component에 데이터를 전달할 때 사용한다.

props 는 늘 전달받은 자식 component에서는 데이터를 수정할 수 없다.

데이터를 변경하기 위해서는 component 내부에서만 사용하는 변수에 값을 넣어 사용해야 한다.

<br>

```js
import React from 'react';
import './App.css';
import Props from './R017_Props';

function App() {
    return (
        <div>
            <h1>Start React 200!</h1>
            <p>CSS 적용하기</p>
            <Props props_val="THIS IS PROPS" />
        </div>
    );
}

export default App;
```

```js
import React, { Component } from 'react';

class R017_Props extends Component {
    render() {
        let props_value = this.props.props_val;
        props_value += ' from App.js';
        return <div>{props_value}</div>;
    }
}

export default R017_Props;
```

this.props 뒤에 상위 component(App.js)에서 전달받은 props 변수명을 붙이면, 해당 데이터를 사용할 수 있다.

데이터를 수정해야 할 경우, props 자체가 아닌 component 내부 변수(props_value)에 옮겨 가공한다. App.js에서 넘겨받은 문자열(THIS IS PROPS)뒤에 새로운 문자열(from App.js)을 붙인다.

가공된 문자열을 화면에 표시한다.

App.js 에 import 한 후, 확인할 수 있다.
