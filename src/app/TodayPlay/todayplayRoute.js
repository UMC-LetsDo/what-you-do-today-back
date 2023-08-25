module.exports = function(app) {
    const todayplay = require('./todayplayController');

    // 1. 특정 컨텐츠 조회 API
    app.get('/todayplay/content/:contentId', todayplay.getContentById);

    // 2. 특정 해시태그 조회 API
    app.get('/hashtag/:hashtagId', todayplay.getHashtagById);

    // 3. 컨텐츠 id를 통한 해시태그 id 조회 API
    app.get('/hashtag/content/:contentId', todayplay.getHashtagByContentId);

    // 4. 해시태그 id를 통한 컨텐츠 id 조회 API (랜덤 6개)
    app.get('/content/hashtag/:hashtagId', todayplay.getContentByHashtagId);

    // 5. 해시태그 목록 조회 API
    app.get('/hashtags', todayplay.getHashtagList);
}