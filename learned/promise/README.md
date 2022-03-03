# promise

## axios

- 아래와 같이 비동기처리 내에서 set을하는 경우 이전 초기화하는 것이 권장

```js
setSignUpError("");
setSignUpSuccess(false);

axios
  .post("http://localhost:3095/api/users", {
    email,
    nickname,
    password,
  })
  .then((response) => {
    setSignUpSuccess(true);
  })
  .catch((error) => {
    setSignUpError(error.response.data);
  })
  .finally(() => {});
```
