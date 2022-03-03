# UseCallback

## VS useMemo

- 특정함수를 새로 만들지 않고 재사용하고 싶을 때 사용
- useMemo : 결과값을 재사용

> https://react.vlpt.us/basic/18-useCallback.html

## 사용법

- 함수 내에서 사용하는 state, props는 deps 배열 안에 포함 => `함수 기준 바뀔수 있는 외부 변수 기입`
- set function은 바뀌지 않는 변수

```js
const onChange = useCallback(
  (e) => {
    const { name, value } = e.target;
    setInputs({
      ...inputs,
      [name]: value,
    });                                     /* function */
  },
  [inputs]                                  /* deps */
);
```
