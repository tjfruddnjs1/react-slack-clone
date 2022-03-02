# Front - React

## Setting

```js
1. npm i react react-dom react-refresh typescript @types/react @types/react-dom

2. npm i -D eslint                                                  /* code inspector */

3. npm i -D prettier eslint-plugin-prettier eslint-config-prettier  /* code 정렬 & eslint와 prettier connect */

4. touch .eslintrc .prettierrc tsconfig.json                        /* tsconfig.json의 paths가 절대 경로 설정 */
compile 과정 : typescript -> babel(html, css, image ... -> javascript) -> javascript

5. touch webpack.config.ts                                          /* 코딩 중의 검사는 tsconfig, compile중에는 babel을 통해 */

6. npm i -D webpack @babel/core babel-loader @babel/preset-env @babel/preset-react

7. npm i -D @types/webpack @types/node @babel/preset-typescript

8. npm i style-loader css-loader

9. touch index.html

10. touch tsconfig-for-webpack-config.json                          /* webpack을 인식할 수 있게 하기위한 config */

11. cross-env TS_NODE_PROJECT=\"tsconfig-for-webpack-config.json\" webpack    /* 실행 명렁어 */

12. npm i -D webpack-dev-server                                     /* Hot reloading 을 위해 -> 매번 빌드 */

13. npm i -D @types/webpack-dev-server

14. npm i @pmmmwh/react-refresh-webpack-plugins react-refresh       
```

## react-router-dom 5 & 6

- Redirect 제거 > Routes안에는 Route만 넣을 것을 권고 > Navigate를 통해 Redirect 기능
> https://www.inflearn.com/questions/417079 : v6 중첩라우터
> https://devalice.tistory.com/112 : v6 적용

## Code Spliting 

- 필요한 컴포넌트만을 불러옴
- 어떻게 컴포넌트를 분리 ? 페이지를 통해 분리

```js
1. npm i @loadable/component
2. npm i -D @types/loadable__component
```

- import 하는 페이지에 적용시 자동 코드 스플리팅

## Styling

```js
1. npm i @emotion/react @emotion/styled

2. npm i @emotion/babel-plugin              /* babel과 emotion 설정 */
``` 