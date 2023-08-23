/*
[NowContents]
nowcontents_id int -PK + auto increment
title varchar
homepage_url varchar
place varchar
period varchar
cost double
image_url varchar
description varchar
flag varchar
category_id int -FK
city varchar

[NowContent_Hashtag]
hashtag_id int -PK,FK auto increment
hashtag_name varchar
nowcontents_id int -FK
*/

//모든 컨텐츠 조회: 요즘뭐하니1-전체
async function selectContents(connection){
    const selectContentsQuery=`
    SELECT nowcontents_id,title,image_url,place,peroid,cost
    FROM NowContents;
    `;
    const [contentRows]=await connection.query(selectContentsQuery);
    return contentRows;
}
//contentId 특정 컨텐츠 조회: 요즘뭐하니2
async function selectContentsId(connection,contentId){
    const selectContentsQuery=`
    SELECT nowcontents_id,title,hompage_url,place,peroid,cost,image_url,description
    FROM NowContents
    WHERE nowcontents_id=?;
    `;
    const [contentRows]=await connection.query(selectContentsQuery,contentId);
    return contentRows;
}
//hashtag로 특정 컨텐츠 파티룸 조회: 요즘뭐하니2-파티룸 부분
//주목받는 컨텐츠 조회: 요즘뭐하니1-주목받는 컨텐츠 부분
//행사 종류별로 전체 컨텐츠 조회: 요즘뭐하니1-전체 이외의 것들 부분
//지역별로 전체 컨텐츠 조회: 요즘뭐하니1-지역 부분
module.exports={
    selectContents,
    selectContentsId
};