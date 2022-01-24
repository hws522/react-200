# reactstrap Popovers 사용하기

### Hint: reactstrap Popovers 패키지의 기능의 종류를 확인한다.

<br>

Popover 패키지는 html 요소를 클릭했을 때, 요소에 연결된 메시지 박스를 띄울 수 있는 기능을 제공한다. tooltip 과 거의 동일하게 동작한다.

<br>

App.js

```js
import React from 'react';
import Popover from './R051_ReactstrapPopover';
import 'bootstrap/dist/css/bootstrap.css';

function App() {
  return (
    <div>
      <h1>Start React 200!</h1>
      <Popover />
    </div>
  );
}

export default App;
```

R051_ReactstrapPopover.js

```js
import React, { Component } from 'react';
import { Button, UncontrolledPopover, PopoverHeader, PopoverBody } from 'reactstrap';

class R051_ReactstrapPopover extends Component {
  render() {
    return (
      <>
        <Button id='Popover_id' type='button'>
          Popover button
        </Button>
        <UncontrolledPopover placement='right' target='Popover_id'>
          <PopoverHeader>React 200</PopoverHeader>
          <PopoverBody>Aenean id magna id risus congue ornare. Vestibulum sed diam et mi pulvinar facilisis sed eu risus.</PopoverBody>
        </UncontrolledPopover>
      </>
    );
  }
}

export default R051_ReactstrapPopover;
```

- reactstrap 패키지에서 사용할 Button, UncontrolledPopover, PopoverHeader, PopoverBody 를 `{}` 안에 나열하고 선언한다.

- UncontrolledPopover 는 태그나 함수를 생략해도 기본 기능을 제공해준다. 그래서 기본적인 기능만 사용할 것이라면, Popover 보다 UncontrolledPopover 를 사용하는 것이 간편하다.

- `<Button>` 태그의 id 값을 `<UncontrolledPopover>` 태그의 target 속성 값과 동일하게 해주면, 버튼을 눌렀을 때 `<UncontrolledPopover>` 태그 영역이 나타난다. 버튼을 누를 때마다 `<UncontrolledPopover>` 태그 영역의 표시 상태가 반대로 바뀐다.

- placement 는 요소를 기준으로 메시지 박스가 표시되는 위치 속성이다. top(위), bottom(아래), left(왼쪽), right(오른쪽) 를 사용할 수 있다.

- `<UncontrolledPopover>` 태그 안에서 `<PopoverHeader>` 태그로 헤더 영역에 제목을 입력할 수 있다. `<PopoverBody>` 태그에는 메시지 내용을 표시할 수 있다.
