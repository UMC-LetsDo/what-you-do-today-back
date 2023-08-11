module.exports = function(app){
    const user = require('./userController');
    const jwtMiddleware = require('../../../config/jwtMiddleware');

    // 0. 테스트 API
    // app.get('/app/test', user.getTest)

    // 1. 유저 생성 (회원가입) API
    app.post('/signup', user.postUsers);

    // 2. 유저 조회 API (+ 검색)
    app.get('/users', user.getUsers);

    // 3. 특정 유저 조회 API
    app.get('/user/:userId', user.getUserById);


    // TODO: After 로그인 인증 방법 (JWT)
    // 로그인 하기 API (JWT 생성)
    app.post('/login', user.login);

    // JWT 검증 API
    app.get('/user-verify', jwtMiddleware, user.check);
};
