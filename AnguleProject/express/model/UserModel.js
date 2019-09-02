db = require('./dbcon.js')

function saveUser(obj,callback)
{
	db.collection('user').insert(obj,function(err)
  {
     if(err)
          callback(false)
     else
          callback(true) 
  })
}

function updateUser(where,obj,callback)
{
  db.collection('user').update(where,{$set:obj},function(err)
  {
     if(err)
          callback(false)
     else
          callback(true) 
  })
}

function loginUser(obj,callback)
{
  db.collection('user').find(obj).toArray(function(err,result)
  {
       if(err){
          callback({status:false})
       }else{
          callback({status:true,data:result})
       }
  })
}

module.exports = {save:saveUser,login:loginUser,update:updateUser}