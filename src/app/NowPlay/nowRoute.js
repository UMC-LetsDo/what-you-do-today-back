module.exports=function(app){
    const now=require('./nowController');
    
    //0.테스트 API
    app.get('/app/now/test',now.getTest);
    //1.주목 컨텐츠 API [GET]
    app.get('/app/now/highlight',now.showTopContents);
    //2.전체 컨텐츠 API [GET]
    app.get('/app/now/contents',now.showAllContents);
    //3.컨텐츠 상세정보 API [GET]
    app.get('/app/now/contents/:contentId',now.showDetailContents);
    //4.컨텐츠 파티룸 API [GET]
    app.get('/app/now/contents/:id/partyrooms',now.showPartyRoom);
}