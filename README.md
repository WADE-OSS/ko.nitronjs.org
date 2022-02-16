# [Nitron](https://ko.nitronjs.org).js 한국어 문서
유저 인터페이스 구성을 위한 자바스크립트 프레임워크

**왜 Nitron을 사용해야하나요?**

- **넓은 확장성** : 내가 만든 컴포넌트를 배포하거나, 다른 컴포넌트를 가져와서 적용하는 등 넓은 확장성를 가져요.
- **사용성** : HTML, CSS, JavaScript를 배우셨다면 쉽게 시작하실 수 있어요.
- **컴포넌트 기반** : 반복적으로 사용하는 코드는 컴포넌트(캡슐)에 넣고 `<Component />`와 같이 축약하거나, 속성을 추가하여 생성한 컴포넌트 내부 글씨와 같은것을 쉽게 조작할 수 있어요.

## 예시 코드
`index.html`
```html
<!DOCTYPE html>
<html>
<head>
    <title>Nitron App</title>
</head>
<body>
    <div id="root"></div>
    <script src="./src/nitron.js"></script>
    <script src="./App.js"></script>
</body>
</html>
```

`App.js`
```js
nitron.component('component',{
  template:`
    <p>hello, World!</p>
  `
});

const App = `
  <Component />
`;

nitronDOM.render(App,document.getElementById('root'));
```

### 라이선스
- `Nitron.js` : [MIT License](https://github.com/WADE-OSS/nitron/blob/main/LICENSE)
- `Nitorn Styles Tools` : [MIT License](https://github.com/WADE-OSS/nitron-styles-Tools/blob/main/LICENSE)

Nitron 팀에서 지원하는 라이브러리 및 프레임워크 외에는 해당 라이브러리, 프레임워크 제작 팀에서 라이선스를 별도로 고지합니다.
