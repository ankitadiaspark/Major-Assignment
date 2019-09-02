db = require('./dbcon.js')


function listByBranch(branch,callback)
{
   db.collection('user').find({branch:branch,type:'1'}).toArray(function(err,result)
   {
   	console.log(result)
       if(err){
          callback({status:false})
       }else{
          callback({status:true,data:result})
       }
   })
}

module.exports = {listByBranch:listByBranch}