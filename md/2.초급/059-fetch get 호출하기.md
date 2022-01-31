# fetch get 호출하기

### Hint: fetch 함수의 특징과 사용법에 대해 확인한다.

<br>

웹에서는 클라이언트와 서버가 http 프로토콜을 통해 요청과 응답을 주고받는다. http 에서 사용하는 방식은 여러 가지가 있지만, GET 과 POST 를 가장 많이 사용한다. 간단히 정리하면 GET 은 데이터를 조회해 가져와 사용하는 것이다.

`GET 방식은 http://example.com?a=1&b=2 와 같이 url? 뒤에 파라미터명=값 형태로 필요한 데이터를 전달한다. 주로 데이터 조회나 검색 등의 기능에 사용된다.`

<br>

App.js

```js
import React from 'react';
import FetchGet from './R059_FetchGet';

function App() {
  return (
    <div>
      <h1>Start React 200!</h1>
      <FetchGet />
    </div>
  );
}

export default App;
```

R059_FetchGet.js

```js
import React, { Component } from 'react';

class R059_FetchGet extends Component {
  componentDidMount = async () => {
    const response = await fetch('http://date.jsontest.com/');
    const body = await response.json();
    alert(body.date);
  };

  render() {
    return <h1>fetch get</h1>;
  }
}

export default R059_FetchGet;
```

<br>

- 자바스크립트 내장 함수인 `fetch` 를 사용하면 쉽게 비동기 통신을 구현할 수 있다.

- 비동기 통신이란, 쉽게 말해 먼저 시작한 작업의 완료 여부와 상관없이 다음 작업을 실행하는 것이다.

- `fetch` 를 사용해서 get 방식으로 url 을 호출해 데이터를 가져온다. 가져온 데이터를 response 라는 변수에 할당한다.

- 이때 `fetch` 함수에 별도의 http 메서드 설정이 없다면, get 방식으로 호출한다.

- 웹 브라우저에서 테스트 url 을 호출하면, 다음과 같이 데이터를 확인할 수 있다. (크롬 확장프로그램인 JSON Viewer 사용)

- response 라는 변수는 json 형태이기 때문에, `json()` 함수로 사용할 수 있도록 변환해 body 라는 변수에 할당한다. 이때 `fetch` 함수의 비동기적 특징 때문에 데이터를 가져오기 전에 `json()` 함수가 실행돼 에러가 발생할 수 있다.

- 이런 에러는 비동기 함수에 동기적인 기능을 추가해 해결할 수 있다. 이때 사용하는 것이 `async` 와 `await` 문법이다. 비동기 함수를 실행하는 함수에 `async` 를 추가하고 동기적으로 처리돼야 하는 함수 구문 앞에 `await` 를 추가한다.
