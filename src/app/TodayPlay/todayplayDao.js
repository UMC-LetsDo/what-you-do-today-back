// contentId로 특정 content 조회
async function selectContentId(connection, contentId) {
    const selectContentIdQuery = `
        SELECT todaycontent_id, title, image_url, detail
        FROM todaycontent
        WHERE todaycontent_id = ?;
    `;
    const [contentRow] = await connection.query(selectContentIdQuery, contentId);
    return contentRow;
}

// hahtagId로 특정 content 조회
async function selectHashtagId(connection, hashtagId) {
    const selectHashtagIdQuery = `
        SELECT hashtag_id, name
        FROM hashtag
        WHERE hashtag_id = ?;
    `;
    const [hashtagRow] = await connection.query(selectHashtagIdQuery, hashtagId);
    return hashtagRow;
}

// contentId로 hashtag 목록 조회
async function selectHashtagByContentId(connection, contentId) {
    const selectHashtagByContentIdQuery = `
        SELECT todaycontent_id, hashtag_id
        FROM todaycontent_hashtag
        WHERE todaycontent_id = ?;
    `;
    const [hashtagRows] = await connection.query(selectHashtagByContentIdQuery, contentId);
    return hashtagRows;
}

// hashtagId로 content 목록 조회
async function selectContentByHashtagId(connection, hashtagId) {
    const selectContentByHashtagIdQuery = `
        SELECT hashtag_id, todaycontent_id 
        FROM todaycontent_hashtag
        WHERE hashtag_id = ?;
    `;
    const [contentRows] = await connection.query(selectContentByHashtagIdQuery, hashtagId);
    return contentRows;
}

// 전체 hashtag 목록 조회
async function selectHashtags(connection) {
    const selectHashtagsQuery = `
        SELECT hashtag_id, name
        FROM hashtag;
    `;
    const [hashtagRow] = await connection.query(selectHashtagsQuery);
    return hashtagRow;
}

module.exports = {
    selectContentId,
    selectHashtagId,
    selectHashtagByContentId,
    selectContentByHashtagId,
    selectHashtags,
};