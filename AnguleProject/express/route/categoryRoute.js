express = require('express')
cateModel = require('../model/CategoryModel.js')

route = express.Router()


route.get("/get",function(req,res)
{	
	cateModel.getAll(function(check)
	{
		res.json(check)
	})
})

route.post("/save",function(req,res)
{	
	cateModel.save(req.body,function(check)
	{
		res.json(check)
	})
})


module.exports = route