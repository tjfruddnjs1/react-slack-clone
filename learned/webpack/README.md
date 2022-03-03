# Webpack

## dev server

- cors 발생 문제 해결을 위해 http 요청(ex. /api/)을 할 경우 해당 요청은 `target`에서 보낸 것처럼 동작
- 원래라면 server측에서 관리 -> 해당 방법은 프론트에서의 해결 방법 

```js
proxy: {
      '/api/': {
        target: 'http://localhost:3095',
        changeOrigin: true,
        ws: true,
      },
    },
```
