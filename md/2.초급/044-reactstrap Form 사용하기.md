# reactstrap Form 사용하기

### Hint: reactstrap Form 패키지의 기능과 종류를 확인한다.

<br>

Form 패키지를 이용하면 기존 `<html form>` 태그에 깔끔하고 정리된 스타일을 간편하게 적용해 사용할 수 있다.

<br>

App.js

```js
import React from 'react';
// import './App.css';
import ReactstrapForm from './R044_ReactstrapForm';
import 'bootstrap/dist/css/bootstrap.css';

function App() {
  return (
    <div>
      <h1>Start React 200!</h1>
      <p>CSS 적용하기</p>
      <ReactstrapForm />
    </div>
  );
}

export default App;
```

R044_ReactstrapForm.js

```js
import React, { Component } from 'react';
import { Form, Label, Input, Row, Col, FormGroup } from 'reactstrap';

class R044_ReactstrapForm extends Component {
  render() {
    return (
      <Form>
        <Label for="exampleGender">gender</Label>
        <Input type="select" bsSize="sm">
          <option>no select</option>
          <option>woman</option>
          <option>man</option>
        </Input>
        <Row>
          <Col md={6}>
            <FormGroup>
              <Label for="exampleAddress">address</Label>
              <Input type="text" name="address" id="address" />
            </FormGroup>
          </Col>
          <Col md={4}>
            <FormGroup>
              <Label for="exampleMobile">mobile</Label>
              <Input type="text" name="mobile" id="mobile" />
            </FormGroup>
          </Col>
          <Col md={2}>
            <FormGroup>
              <Label for="exampleAge">age</Label>
              <Input type="text" name="age" id="age" />
            </FormGroup>
          </Col>
        </Row>
      </Form>
    );
  }
}

export default R044_ReactstrapForm;
```

<br>

- reactstrap 패키지에서 사용할 Form, Label, Input, Row, Col, FormGroup 을 사용하기 위해 선언한다.

- `<Form>` 태그를 이용해 하나의 폼 단위로 사용할 영역을 묶어준다.

- `<Label>` 태그로 폼 요소를 설명하는 문자열을 추가할 수 있다.

- Input 유형을 select 로 입력해 `<option>` 태그 중 하나를 선택할 수 있다. 이때 bsSize 속성으로 태그의 크기를 정할 수 있다. sm 대신 lg 를 사용하면 큰 크기의 선택 박스를 사용할 수 있다.

- `<Row>` 태그는 줄 단위로 태그들을 묶어 사용할 수 있게 해준다. `<Col>` 태그의 md 속성으로 너비 값을 정할 수 있는데, 한 줄에 12개의 영역으로 나뉜다. 한 `<Row>` 태그에 속한 `<Col>` 태그의 md 속성의 합이 12가 되도록 해야 한다. `<FormGroup>` 태그는 비슷한 용도의 태그들을 `<div>` 태그로 감싸 사용할 수 있다.
