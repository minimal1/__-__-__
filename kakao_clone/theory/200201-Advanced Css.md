<!-- @format -->

# Advanced Css

- 고오급 스킬

# transition

- state가 변화되는 모습에 효과를 넣는 속성

# transformations

- element들의 모습이 변하는 효과
- 회전, 크기 변경 등 다양하게 가능, rotate, scale
- transition과 함께 쓰일 때 효과는 2배

# animation

- 특정 동작을 계속 하도록 만듬, state의 변화없이도

```
  @keyframes [Animationname] {
    from {
      transform: none;
    }
    to {
      transform: rotate(1turn) scale(.5, .5);
    }
  }

  @keyframes [Animationname] {
    0% {
      transform: none;
    }
    50% {
      transform: rotate(1turn) scale(.5, .5);
    }
    100% {
      transform: none;
    }
  }
```

# Media query

- 브라우저 크기별로 적용시켜주는 속성
- 반응형 웹 디자인에 필요
