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

//모든 컨텐츠 조회
async function selectContents(connection){
    const selectContentsQuery=`
    SELECT nowcontents_id,title
    FROM NowContents;
    `;
    const [contentRows]=await connection.query(selectContentsQuery);
    return contentRows;
}

module.exports={
    selectContents
};