/**
 * Created by zhouhangfeng on 2019/8/21.
 */
//封装操作localStorage本地存储的方法


//

var storage={
  set(key,value){
    localStorage.setItem(key,JSON.stringify(value))
  },
  get(key){
    return JSON.parse(localStorage.getItem(key))
  },
  remove(key){
     JSON.parse(localStorage.removeItem(key))
  },
}
export default storage
