# sweetalert2 confirm 사용하기

### Hint: sweetalert2 confirm 패키지의 기능에 대해 확인한다.

<br>

웹 사이트에 삭제 기능을 구현할 때 사용자의 실수로 데이터가 삭제될 수 있다. 이런 상황을 방지하기 위해 실제 삭제 작업을 실행하기 전에 다시 한번 확인하는 알림 창을 표시한다.

<br>

App.js

```js
import React from 'react';
import Sweetalert2Confirm from './R058_Sweetalert2Confirm';

function App() {
  return (
    <div>
      <h1>Start React 200!</h1>
      <Sweetalert2Confirm />
    </div>
  );
}

export default App;
```

R058_Sweetalert2Confirm.js

```js
import React, { Component } from 'react';
import Swal from 'sweetalert2';

class R058_Sweetalert2Confirm extends Component {
  deleteAlert = (e) => {
    Swal.fire({
      title: '정말 삭제하시겠습니까?',
      icon: 'question',
      showCancelButton: true,
      confirmButtonColor: '#4B088A',
      cancelButtonColor: '#01DF01',
      confirmButtonText: '예',
      cancelButtonText: '아니요',
    }).then((result) => {
      if (result.value) {
        document.getElementById('deleteId').remove();
        Swal.fire('Deleted', 'sweetalert2 삭제완료', 'success');
      }
    });
  };

  render() {
    return (
      <>
        <h1 id='deleteId'>sweetalert2</h1>
        <button onClick={(e) => this.deleteAlert()}>삭제</button>
      </>
    );
  }
}

export default R058_Sweetalert2Confirm;
```

<br>

- `deleteAlert` 함수가 실행되면 confirm 알림 창으로, 다시 한번 삭제를 진행할 것인지 묻는다.

- confirmButtonText 옵션은 [확인] 버튼, cancelButtonText 에는 [취소] 버튼에 표시될 텍스트를 입력할 수 있다. 사용자가 선택하면 프로미스 함수 `then()` 이 실행된다.

- 사용자가 삭제를 선택했다면, result.value 값이 true 로 반환된다. `<h1>` 태그에 id 값 (deleteId) 로 접근해 sweetalert2 영역을 화면에서 삭제한다. 그리고 삭제 완료 알림창을 표시한다.
