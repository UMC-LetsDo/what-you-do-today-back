const jwt = require('jsonwebtoken');
const secret_config = require('./secret');
const { response } = require("./response")
const { errResponse } = require("./response")
const baseResponse = require("./baseResponseStatus");

const jwtMiddleware = (req, res, next) => {
    try {
        const token = req.headers['authorization'] || req.query.token;
        // token does not exist
        if(!token) {
            return res.send(errResponse(baseResponse.TOKEN_EMPTY))
        }
        // 요청 헤더에 저장된 토큰(req.headers.authorization)과 비밀키를 사용하여 토큰을 req.decoded에 반환
        req.decoded = jwt.verify(token, secret_config.jwtsecret);
        return next();
    }
        // 인증 실패
    catch (error) {
        // 유효시간이 초과된 경우
        if (error.name === 'TokenExpiredError') {
            console.log(error.name);
            return res.send(errResponse(baseResponse.TOKEN_VERIFICATION_EXPIRED));
        }
        // 토큰의 비밀키가 일치하지 않는 경우
        if (error.name === 'JsonWebTokenError') {
            console.log(error.name);
            return res.send(errResponse(baseResponse.TOKEN_VERIFICATION_FAILURE));
        }
    }
};

module.exports = jwtMiddleware;