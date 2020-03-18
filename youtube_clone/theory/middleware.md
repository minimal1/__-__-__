<!-- @format -->

# Middleware

nodejs의 express 서버의 응답과 user 사이에 들어가게되는 함수

ex) 유저의 로그인 상태 확인, 파일 업로드중 파일 가로채 다른 서버에 업로드, 로깅 등

app.get("/", {middlewares}, handleRequest)

or

app.use({middleware}) -> 순서 유의
