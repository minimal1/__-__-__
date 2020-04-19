<!-- @format -->

# Auth

Username과 password를 이용한 방식(local)은 매우 간단

- username and password를 보내고, mongoose가 해당 정보로 확인후 passport에게 성공 메세지를 보내면 passport는 쿠키를 만든다.

깃헙 인증은 다르다
-> Github website (auth) -> /auth/github/callback -> githubLoginCallBack (profile) => return cb(err) : !!! 실패 or => return cb(null, user) : !!! 성공 -> passport는 makeCookie(user) & saveCookie & sendCookie
