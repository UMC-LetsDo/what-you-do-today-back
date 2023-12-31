const { pool } = require("../../../config/database");
const { logger } = require("../../../config/winston");

const userDao = require("./userDao");

// Provider: Read 비즈니스 로직 처리

// 유저 리스트 가져오기
exports.retrieveUserList = async function (email) {
    if (!email) {
        const connection = await pool.getConnection(async (conn) => conn);
        const userListResult = await userDao.selectUser(connection);
        connection.release();

        return userListResult;

    } else {
        const connection = await pool.getConnection(async (conn) => conn);
        const userListResult = await userDao.selectUserEmail(connection, email);
        connection.release();

        return userListResult;
    }
};

// userId 찾기
exports.retrieveUser = async function (userId) {
    const connection = await pool.getConnection(async (conn) => conn);
    const userResult = await userDao.selectUserId(connection, userId);

    connection.release();

    return userResult[0];
};

// 이메일 체크
exports.emailCheck = async function (email) {
    const connection = await pool.getConnection(async (conn) => conn);
    const emailCheckResult = await userDao.selectUserEmail(connection, email);
    connection.release();

    return emailCheckResult;
};

// 닉네임 체크
exports.nicknameCheck = async function (nickname) {
    const connection = await pool.getConnection(async (conn) => conn);
    const nicknameCheckResult = await userDao.selectUserNickname(connection, nickname);
    connection.release();

    return nicknameCheckResult;
}

exports.passwordCheck = async function (selectUserPasswordParams) {
    const connection = await pool.getConnection(async (conn) => conn);
    const passwordCheckResult = await userDao.selectUserPassword(
        connection,
        selectUserPasswordParams
    );
    connection.release();
    return passwordCheckResult[0];
};

exports.accountCheck = async function (email) {
    const connection = await pool.getConnection(async (conn) => conn);
    const userAccountResult = await userDao.selectUserAccount(connection, email);
    connection.release();

    return userAccountResult;
};