// Provider: Read 비즈니스 로직 처리
const nowDao=require("./nowDao");

exports.retrieveContents=async function(){
    const connection = await pool.getConnection(async (conn) => conn);
    const contentListResult=await nowDao.selectContents;
    connection.release();
    return contentListResult;
};