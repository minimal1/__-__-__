<!-- @format -->

# Passport js

인증을 담당하는 미들웨어, 사용하기 쉽다
알아서 해준다.
여러 인증 모듈을 제공한다.
Facebook, github, steam 등

그중 Passport-Local Mongoose 모듈은
기본적인 것들을 다 만들수 있어서 선호한다 니꼬가

# 인증

- 쿠키를 이용해서 user 객체를 구한걸 controller에 전송

## 쿠키

- 자동적으로 모든 리퀘스트에 담겨 백엔드로 전송된다.
- 매우 작고, 민감한 데이터다

# serialize & deserialize

시리얼 라이즈 : 어떤 정보(어떤 필드)를 쿠키에게 주느냐 for user
디시리얼 라이즈 : 쿠키의 정보를 통해 어떻게 사용자를 알아내는가
