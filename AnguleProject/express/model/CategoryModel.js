db = require('./dbcon.js')

function save(obj,callback)
{
	db.collection('category').insert(obj,function(err)
  {
     if(err)
          callback({msg:'Not Save'})
     else
          callback({msg:'Save'}) 
  })
}

function getAll(callback)
{
  db.collection('category').find().toArray(function(err,result)
  {
       if(err)
       {
          callback({status:false})
       }else{
          callback({status:true,data:result})
       }
  })
}

module.exports = {save:save,getAll:getAll}