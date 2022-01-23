# reactstrap Modal 사용하기

### Hint: reactstrap Modal 패키지의 기능과 종류를 확인한다.

<br>

Modal 패키지는 `alert()` 함수와 마찬가지로 사용자에게 원하는 시점에 알림 창을 띄워 필요한 내용을 보여준다.

Modal 은 `alert()` 함수와 달리, 웹 브라우저에서 팝업 창을 차단할 수 없고 배경 페이지와 어울리는 디자인을 적용할 수 있다.

<br>

App.js

```js
import React from 'react';
import Modal from './R048_ReactstrapModal';
import 'bootstrap/dist/css/bootstrap.css';

function App() {
  return (
    <div>
      <h1>Start React 200!</h1>
      <Modal />
    </div>
  );
}

export default App;
```

R048_ReactstrapModal.js

```js
import React, { Component } from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';

class R048_ReactstrapModal extends Component {
  constructor(props) {
    super(props);
    this.state = { modal: false };
  }

  toggle = () => {
    this.setState({ modal: !this.state.modal });
  };

  render() {
    return (
      <>
        <Button color='warning' onClick={this.toggle}>
          Modal 버튼
        </Button>
        <Modal isOpen={this.state.modal} fade={true} toggle={this.toggle}>
          <ModalHeader toggle={this.toggle}>Modal Header</ModalHeader>
          <ModalBody>The generated Lorem Ipsum is therefore always free from repetition.</ModalBody>
          <ModalFooter>
            <Button color='primary' onClick={this.toggle}>
              확인
            </Button>
            <Button color='secondary' onClick={this.toggle}>
              닫기
            </Button>
          </ModalFooter>
        </Modal>
      </>
    );
  }
}

export default R048_ReactstrapModal;
```

<br>

- reactstrap 패키지에서 사용할 Button, Modal, ModalHeader, ModalBody, ModalFooter 를 `{}` 안에 나열하고 선언한다.

- Modal 팝업의 표시 상태를 state 변수로 선언하고 초깃값으로 미표시(false) 를 할당한다.

- 버튼을 누르면, toggle 함수가 실행되고 Modal 팝업 표시 상태를 현재와 반대로 변경한다.

- 팝업 창으로 표시할 영역을 `<Modal>` 태그로 묶는다. isOpen 속성이 true 이면 표시, false 이면 미표시되는데, state 변수 modal 의 상태가 변경되는 것에 따라 동작한다. fade 속성을 true 로 하면 팝업 창을 서서히 표시할 수 있다. toggle 속성에 입력된 toggle 함수는 팝업이외의 영역을 클릭했을 때 실행된다.

- `<ModalHeader>` 태그는 팝업에서 상단 헤더 영역을 나타낸다. toggle 속성에 입력된 toggle 함수는 헤더 오른쪽 영역의 `X` 를 클릭했을 때 실행된다.

- `<ModalBody>` 태그는 팝업 내용이 표시되는 영역이다.

- `<ModalFooter>` 태그는 팝업 하단 영역으로, 팝업 창에 필요한 버튼을 추가할 수 있다. 버튼 이벤트로 필요한 함수를 연결해 사용할 수 있다.
