<!-- @format -->

# Build for production

\*\*\*Translate to old version code
build:server and build:assets
-> build:server에서는 babel로 old version으로 컨버터, babel은 폴더를 지정해서 이용할 수 있음

그러나 babel은 기본적으로 javascript를 찾아 컴파일해서 old version으로 바꿔주므로 templete이나 css파일은 없다.
고로 ignore 해주고, 직접 넣어줄 필요가 있다.

async function을 위해 사용된 babel/polyfill을 import해주어야한다.
