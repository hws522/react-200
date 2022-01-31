# axios post 사용하기

### Hint: axios 함수의 특징과 사용법에 대해 확인한다.

<br>

axios 로 post 방식의 호출을 하는 문법은 get 방식으로 호출했을 때와 거의 동일하다.

다른 점은 post 함수의 파라미터로 json 과 같은 형태의 데이터를 넣고 http body 에 담아 url 을 호출할 수 있다는 것이다.

<br>

App.js

```js
import React from 'react';
import AxiosPost from './R062_AxiosPost';

function App() {
  return (
    <div>
      <h1>Start React 200!</h1>
      <AxiosPost />
    </div>
  );
}

export default App;
```

R062_AxiosPost.js

```js
import React, { Component } from 'react';
import axios from 'axios';

class R062_AxiosPost extends Component {
  componentDidMount() {
    axios
      .post('http://date.jsontest.com/', {
        a: 'react',
        b: 200,
      })
      .then((response) => {
        alert(response.data.date);
      });
  }

  render() {
    return <h1>axios post</h1>;
  }
}

export default R062_AxiosPost;
```

<br>

- `axios.post('호출 url', json 데이터)` 문법으로 post 방식의 http 호출을 한다.

- json 데이터는 `{key1: value1, key2: value2}` 형태로 사용하고 http body 에 담겨 전송된다. 호출한 url 에서는 body 의 데이터를 사용하지 않기 때문에 어떤 형식으로 사용하는지만 확인한다.

- url 호출이 완료되면, `then` 함수가 실행된다. 이때 호출 결과로 response 가 반환된다.

- response 와 호출된 변수명 사이에 data 를 붙이면 변수를 사용할 수 있다.
