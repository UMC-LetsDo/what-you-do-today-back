const todayplayProvider = require("./todayplayProvider");
const baseResponse = require("../../../config/baseResponseStatus");
const {response, errResponse} = require("../../../config/response");


/**
 * API No.1
 * API Name : 특정 컨텐츠 조회 API
 * [GET] /todayplay/content/:contentId
 */
exports.getContentById = async function (req, res) {
    /**
     * Path Variable : contentId
     */
    const contentId = req.params.contentId;

    if(!contentId) return res.send(errResponse(baseResponse.CONTENT_CONTENTID_EMPTY));

    const contentByContentId = await todayplayProvider.retrieveContent(contentId);
    if (!contentByContentId) return res.send(errResponse(baseResponse.CONTENT_CONTENTID_NOT_EXIST));

    return res.send(response(baseResponse.SUCCESS, contentByContentId));
}

/**
 * API No.2
 * API Name : 특정 해시태그 조회 API
 * [GET]
 */
exports.getHashtagById = async function (req, res) {
    /**
     * Path Variable : hashtagId
     */
    const hashtagId = req.params.hashtagId;

    if(!hashtagId) return res.send(errResponse(baseResponse.HASHTAG_HASHTAGID_EMPTY));

    const hashtagByHashtagId = await todayplayProvider.retrieveHashtag(hashtagId);
    if (!hashtagByHashtagId) return res.send(errResponse(baseResponse.HASHTAG_HASHTAGID_NOT_EXIST));

    return res.send(response(baseResponse.SUCCESS, hashtagByHashtagId));

}

/**
 * API No.3
 * API Name : 컨텐츠 id를 통한 해시태그 id 조회 API
 * [GET] /hashtag/content/:contentId
 */
exports.getHashtagByContentId = async function (req, res) {
    /**
     * Path Variable : contentId
     */
    const contentId = req.params.contentId;

    if(!contentId) return res.send(errResponse(baseResponse.CONTENT_CONTENTID_EMPTY));

    const contentByContentId = await todayplayProvider.retrieveContent(contentId);
    if (!contentByContentId) return res.send(errResponse(baseResponse.CONTENT_CONTENTID_NOT_EXIST));

    const hashtagByContentId = await todayplayProvider.retrieveHashtagByContent(contentId);
    if(!hashtagByContentId) return res.send(errResponse(baseResponse.HASHTAG_CONTENTID_NOT_EXIST));

    return res.send(response(baseResponse.SUCCESS, hashtagByContentId));
}

/**
 * API NO.4
 * API Name : 해시태그 id를 통한 컨텐츠 id 조회 API (랜덤 6개)
 * [GET] /content/hashtag/:hashtagId
 */
exports.getContentByHashtagId = async function (req, res) {
    const hashtagId = req.params.hashtagId;

    if(!hashtagId) return res.send(errResponse(baseResponse.HASHTAG_HASHTAGID_EMPTY));

    const hashtagByHashtagId = await todayplayProvider.retrieveHashtag(hashtagId);
    if (!hashtagByHashtagId) return res.send(errResponse(baseResponse.HASHTAG_HASHTAGID_NOT_EXIST));

    const contentByHashtagId = await todayplayProvider.retrieveContentByHashtag(hashtagId);
    if(!contentByHashtagId) return res.send(errResponse(baseResponse.CONTENT_HASHTAGID_NOT_EXIST));

    // random하게 6개 인덱스 선택
    let randomIndexArray = [];
    for(i = 0; i < 6; i++) {
        randomIndex = Math.floor(Math.random() * contentByHashtagId.length);
        if (randomIndexArray.indexOf(randomIndex) === -1) {
            randomIndexArray.push(randomIndex);
        }
        else {
            i--;
        }
    }
    
    let randomContents = [];
    for(i = 0; i < randomIndexArray.length; i++) {
        let idx = randomIndexArray[i];
        randomContents.push(contentByHashtagId[idx]);
    }

    return res.send(response(baseResponse.SUCCESS, contentByHashtagId));
}

/**
 * API NO.5
 * API Name : 해시태그 목록 조회 API
 * [GET] /hashtags
 */
exports.getHashtagList = async function (req, res) {
    const hashtagListResult = await todayplayProvider.retrieveHashtagList();

    let sixHashtags = [];
    for (i=0; i<9; i++) {
        sixHashtags.push(hashtagListResult[i]);
    }
    console.log(sixHashtags);

    return res.send(response(baseResponse.SUCCESS, sixHashtags));
}