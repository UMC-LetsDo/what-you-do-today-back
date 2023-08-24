module.exports=function(app){
    const now=require('./nowController');
    
    //0.테스트 API
    app.get('/app/now/test',now.getTest);

    //요즘뭐하니1 PART
    //1.주목 컨텐츠 API [GET]
    app.get('/app/now/highlight',now.showTopContents);
    //2.전체 컨텐츠 API [GET]
    app.get('/app/now/contents',now.showAllContents);
    //3. 행사 종류별로 전체 컨텐츠 API [GET]
    app.get('/app/now/contents/:category',now.showAllContentsCategory);
    //4. 지역별로 전체 컨텐츠 API [GET]
    app.get('/app/now/contents/:city',now.showAllContentsCity);

    //요즘뭐하니2 PART
    //5. 컨텐츠 상세정보 API [GET]
    app.get('/app/now/contents/:contentId',now.showDetailContents);
    //6. 컨텐츠 파티룸 API [GET]
    app.get('/app/now/contents/:contentId/partyrooms',now.showPartyRoom);
}