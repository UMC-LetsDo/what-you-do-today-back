// Provider: Read 비즈니스 로직 처리
const nowDao=require("./nowDao");

//모든 컨텐츠 조회
exports.retrieveContents=async function(){
    const connection = await pool.getConnection(async (conn) => conn);
    const contentListResult=await nowDao.selectContents;
    connection.release();
    return contentListResult;
};

//category로 모든 컨텐츠 조회
exports.retrieveContetnsByCategory=async function(category){
    const connection = await pool.getConnection(async (conn) => conn);
    const contentListResult=await nowDao.selectContentsCategory(connection,category);
    connection.release();
    return contentListResult;
}

//city로 모든 컨텐츠 조회
exports.retrieveContetnsByCity=async function(city){
    const connection = await pool.getConnection(async (conn) => conn);
    const contentListResult=await nowDao.selectContentsCity(connection,city);
    connection.release();
    return contentListResult;
}

//contentId로 특정 컨텐츠 조회
exports.retrieveContentsById=async function(contentId){
    const connection = await pool.getConnection(async (conn) => conn);
    const contentListResult=await nowDao.selectContentsId(connection,contentId);
    connection.release();

    return contentListResult[0];
};

//contentId로 특정 컨텐츠의 해시태그 조회
exports.retrieveHashById=async function(contentId){
    const connection = await pool.getConnection(async (conn) => conn);
    const contentListResult=await nowDao.selectContentsHash(connection,contentId);
    connection.release();
    return contentListResult[0];
};

//hashtag로 특정 컨텐츠 파티룸 조회
exports.retrievePartyById=async function(contentId){
    const connection = await pool.getConnection(async (conn) => conn);
    const contentListResult=await nowDao.selectParty(connection,contentId);
    connection.release();
    return contentListResult;
};