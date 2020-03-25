'use strict';
//获取数据库
const db = uniCloud.database();


exports.main = async (event, context) => {
  //event为客户端上传的参数
  let list = event.list
  const banner = db.collection(list)		// 获取集合的引用
  const res = await banner.get()
  //返回数据给客户端
  return res
};
