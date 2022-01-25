# reactstrap Table 사용하기

### Hint: reactstrap Table 패키지의 기능과 종류를 확인한다.

<br>

Table 패키지는 `<html table>` 태그에 간편하게 스타일을 적용할 수 있도록 지원해준다.

테이블 색상, 가로줄, 세로줄, 크기, hover, striped 속성을 지정할 수 있다.

<br>

App.js

```js
import React from 'react';
import ReactstrapTable from './R054_ReactstrapTable';
import 'bootstrap/dist/css/bootstrap.css';

function App() {
  return (
    <div>
      <h1>Start React 200!</h1>
      <ReactstrapTable />
    </div>
  );
}

export default App;
```

R054_ReactstrapTable.js

```js
import React, { Component } from 'react';
import { Table } from 'reactstrap';

class R054_ReactstrapTable extends Component {
  render() {
    return (
      // <Table>
      // <Table dark bordered>
      // <Table striped hover>
      <Table borderless size='sm'>
        <thead>
          <tr>
            <th>number</th>
            <th>Book Name</th>
            <th>Price</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <th scope='row'>1</th>
            <td>React 100</td>
            <td>￦10000</td>
          </tr>
          <tr>
            <th scope='row'>2</th>
            <td>React 200</td>
            <td>￦20000</td>
          </tr>
        </tbody>
      </Table>
    );
  }
}

export default R054_ReactstrapTable;
```

<br>

- reactstrap 패키지에서 사용할 Table 을 `{}` 안에 나열하고 선언한다.

- 속성이 추가되지 않은 `<Table>` 태그의 스타일은 흰색 배경에 가로줄만 있다.

- dark 속성은 배경이 어둡게 변하고 bordered 속성은 세로줄이 생긴다.

- striped 속성은 짝수 행에만 음영을 준다. hover 속성은 마우스 커서가 위치한 행에 음영을 주고 마우스 커서가 벗어나면 음영을 제거한다.

- borderless 속성은 가로줄, 세로줄 모두를 제거한다. size 속성을 sm 으로 하면 테이블의 크기가 축소된다.
