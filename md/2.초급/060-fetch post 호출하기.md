# fetch post 호출하기

### Hint: fetch 함수의 특징과 사용법에 대해 확인한다.

<br>

GET 이 데이터를 조회해 가져와 사용하는 용도로 사용한다면, POST 는 서버의 상태나 데이터를 변경하는 등의 수행 작업에 사용된다.

`POST 방식은 http body 에 데이터를 넣어 전달하는데, url 뒤에 파라미터를 표시하지 않고 사용할 수 있다는 장점이 있다.`

<br>

App.js

```js
import React from 'react';
import FetchPost from './R060_FetchPost';

function App() {
  return (
    <div>
      <h1>Start React 200!</h1>
      <FetchPost />
    </div>
  );
}

export default App;
```

R060_FetchPost.js

```js
import React, { Component } from 'react';

class R060_FetchPost extends Component {
  componentDidMount = async () => {
    const response = await fetch('http://date.jsontest.com/', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: { a: 'react', b: 200 },
    });
    const body = await response.json();
    alert(body.date);
  };

  render() {
    return <h1>fetch post</h1>;
  }
}

export default R060_FetchPost;
```

<br>

- post 도 get 방식과 마찬가지로 자바스크립트 내장 함수인 `fetch` 를 사용하면, 비동기 통신을 쉽게 구현할 수 있다.

- `fetch` 사용 방법은 get 과 비슷하지만, 두 번째 파라미터에 post 호출에 대한 정보가 추가된다.

- `method: 'POST'` 는 post 방식으로 통신을 하겠다는 의미다.

- http 통신을 할 때, header 부분에서 어떤 형태의 데이터를 사용할지 지정한다. json 형태의 데이터를 사용하기 위해 application/json 을 할당한다.

- http body 에 json 형태의 데이터를 담아 전송한다.

- 호출한 url 에서는 body 의 데이터를 사용하지 않기 때문에 어떤 형식으로 사용하는지만 확인한다.
