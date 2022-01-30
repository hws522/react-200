# sweetalert2 position 사용하기

### hint: sweetalert2 position의 기능과 종류를 확인한다.

<br>

sweetalert2 패키지는 알림 창의 표시 방식과 구성 요소들을 원하는 형태로 변경할 수 있는 옵션을 제공한다. 옵션 중 position 은 알림 창의 표시 위치를 결정한다.

<br>

App.js

```js
import React from 'react';
import Sweetalert2Position from './R057_Sweetalert2Position';

function App() {
  return (
    <div>
      <h1>Start React 200!</h1>
      <Sweetalert2Position />
    </div>
  );
}

export default App;
```

R057_Sweetalert2Position.js

```js
import React, { Component } from 'react';
import Swal from 'sweetalert2';

class R057_Sweetalert2Position extends Component {
  saveAlert = (flag, positionFlag, e) => {
    Swal.fire({
      position: positionFlag,
      icon: 'success',
      title: flag + '되었습니다.',
      showConfirmButton: false,
      timer: 1500,
    });
  };

  render() {
    return (
      <>
        <h1>sweetalert2</h1>
        <button onClick={(e) => this.saveAlert('저장', 'center')}>저장</button>
        <button onClick={(e) => this.saveAlert('수정', 'bottom-end')}>수정</button>
      </>
    );
  }
}

export default R057_Sweetalert2Position;
```

<br>

- `saveAlert` 함수는 파라미터로 두 가지 변수(flag, positionFlag) 를 받는다. `Swal.fire` 함수의 옵션 중 title 은 알림 창에 표시되는 문구인데, 파라미터 flag 에 따라 표시 문구가 달라진다. position 은 알림 창의 표시 위치를 정하는 옵션으로, 파라미터 positionFlag 의 값을 할당한다.

- `Swal.fire` 함수의 position 옵션 값은 다음과 같은 형식으로 사용할 수 있다.
  - top: 중앙 상단
  - top-start: 좌측 상단
  - top-end: 우측 상단
  - center: 정중앙
  - center-start: 중앙 좌측
  - center-end: 중앙 우측
  - bottom: 중앙 하단
  - bottom-start: 좌측 하단
  - bottom-end: 우측하단
