'use strict';
//获取数据库
const db = uniCloud.database();


exports.main = async (event, context) => {
  //event为客户端上传的参数
  let list = event.list
  let pageid = event.pageid
  const banner = db.collection(list)		// 获取集合的引用
  .limit(6)  		//开始拉取的数据
  .skip(pageid*6)   //拉取数据的索引
  const res = await banner.get()
  //返回数据给客户端
  return res
};
