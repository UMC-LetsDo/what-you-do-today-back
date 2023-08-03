const { response } = require("express")
const baseResponseStatus = require("../../../config/baseResponseStatus")

/*
 * API No. 0
 * API Name : 테스트 API
 * [GET] /nowplay/test
 */
exports.getTest=async function(req,res){
    return res.send(response(baseResponseStatus.SUCCESS));
};

/*
 * API No. 1
 * API Name : 주목 컨텐츠 API
 * [GET] /nowplay/highlight
 */
exports.showTopContents=async function(req,res){

};

/*
 * API No. 2
 * API Name : 전체 컨텐츠 API
 * [GET] /nowplay/contents
 */
exports.showAllContents=async function(req,res){

};

/*
 * API No. 3
 * API Name : 컨텐츠 상세정보 API
 * [GET] /nowplay/contents/:id
 */
exports.showDetailContents=async function(req,res){

};

/*
 * API No. 4
 * API Name : 컨텐츠 파티룸 API
 * [GET] /nowplay/contents/:id/partyrooms
 */
exports.showPartyRoom=async function(req,res){

};