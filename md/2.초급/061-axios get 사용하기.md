# axios get 사용하기

### axios 함수의 특징과 사용법에 대해 확인한다.

<br>

axios 도 fetch 와 마찬가지로 비동기 통신을 지원한다.

axios 는 fetch 와 달리, 별도로 설치한 후 임포트해 사용해야 한다.

```
npm install -save axios
```

위 명령어를 입력하여 axios 를 설치한다.

<br>

App.js

```js
import React from 'react';
import AxiosGet from './R061_AxiosGet';

function App() {
  return (
    <div>
      <h1>Start React 200!</h1>
      <AxiosGet />
    </div>
  );
}

export default App;
```

R061_AxiosGet.js

```js
import React, { Component } from 'react';
import axios from 'axios';

class R061_AxiosGet extends Component {
  componentDidMount() {
    axios.get('http://date.jsontest.com/').then((response) => {
      alert(response.data.date);
    });
  }

  render() {
    return <h1>axios get</h1>;
  }
}

export default R061_AxiosGet;
```

<br>

- `axios.get('호출 url')` 문법으로 get 방식의 http 호출을 한다.

- url 호출이 완료되면, `then` 함수가 실행된다. 이때 호출 결과로 response 가 반환된다. response 와 호출된 변수명 사이에 data 를 붙이면, 변수를 사용할 수 있다.
