const { pool } = require("../../../config/database");
const { logger } = require("../../../config/winston");

const todayplayDao = require("./todayplayDao");

// contentId로 특정 content 조회
exports.retrieveContent = async function (contentId) {
    const connection = await pool.getConnection(async (conn) => conn);
    const contentResult = await todayplayDao.selectContentId(connection, contentId);

    connection.release();

    return contentResult[0];
}

// hashtagId로 특정 hashtag 조회
exports.retrieveHashtag = async function (hashtagId) {
    const connection = await pool.getConnection(async (conn) => conn);
    const hashtagResult = await todayplayDao.selectHashtagId(connection, hashtagId);

    connection.release();

    return hashtagResult[0];
}

// contentId로 해시태그 목록 조회
exports.retrieveHashtagByContent = async function (contentId) {
    const connection = await pool.getConnection(async (conn) => conn);
    const hashtagListResult = await todayplayDao.selectHashtagByContentId(connection, contentId);
    connection.release();

    return hashtagListResult;
}

// hashtagId로 컨텐츠 목록 조회
exports.retrieveContentByHashtag = async function (hashtagId) {
    const connection = await pool.getConnection(async (conn) => conn);
    const contentListResult = await todayplayDao.selectContentByHashtagId(connection, hashtagId);
    connection.release();

    return contentListResult;
}

// hashtag 목록 조회
exports.retrieveHashtagList = async function () {
    const connection = await pool.getConnection(async (conn) => conn);
    const hashtagListResult = await todayplayDao.selectHashtags(connection);
    connection.release();

    return hashtagListResult;
}