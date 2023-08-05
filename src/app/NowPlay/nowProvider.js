// Provider: Read 비즈니스 로직 처리
const nowDao=require("./nowDao");

//모든 컨텐츠 조회
exports.retrieveContents=async function(){
    const connection = await pool.getConnection(async (conn) => conn);
    const contentListResult=await nowDao.selectContents;
    connection.release();
    return contentListResult;
};

//contentId로 특정 컨텐츠 조회
exports.retrieveContentsById=async function(contentId){
    const connection = await pool.getConnection(async (conn) => conn);
    const contentListResult=await nowDao.selectContentsId(connection,contentId);
    connection.release();

    return contentListResult[0];
};