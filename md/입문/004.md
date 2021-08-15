# 생명주기 함수 render() 사용하기

### Hint : render() 함수가 실행될 때 로그를 출력하고, 콘솔에서 로그를 확인한다.

react 에서 생명주기란, component 의 생성, 변경, 소멸 과정을 뜻한다. render(), constructor(), getDerivedStateFormProps(), componentDidMount() 함수들은 component '생성' 과정에 속한다.

<br>

```js
class R004_LifecycleEx extends Component {
    render() {
        console.log('3. render Call');
        return <h2>[ THIS IS RENDER FUCNTION ]</h2>;
    }
}

export default R004_LifecycleEx;
```

**render() 는 return 되는 html 형식의 코드를 화면에 그려주는 함수다.**
화면 내용이 변경될 시점에 자동으로 호출된다.

위의 component 를 import 하여 App.js 에서 개발자 도구 화면에서 확인하면 render() 함수에서 출력된 로그를 확인할 수 있다.
