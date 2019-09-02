express = require('express')

rn = require('random-number')

userModel = require('../model/UserModel.js')

mailer = require('./mailer.js')

route = express.Router()


route.post("/save",function(req,res)
{
	console.log(req.body)
	var gen = rn.generator({
		 min: 10000,
		 max: 99999,
		integer: true
		})
	otp = gen()


	userModel.save(req.body,function(check)
	{
		if(check)
		{ 
			mail = req.body.email
			
			mailer(otp,mail,function(status)
			{
				console.log("Mail Status: " + status)
				ob = {otp:otp,isverified:false,isactive:true}
				userModel.update({email:mail},ob,function(check)
				{
						console.log("Update Status: " + check)
						res.json({msg:"Registeration Success !"})
				})				
			})				
		}
			else{
				res.json({msg:"Registeration Failed !"})
			}
	})
})

route.post("/login",function(req,res)
{
	console.log(req.body)
	userModel.login(req.body,function(check)
	{
		userObject = check.data[0];
		req.session.user = userObject
		res.json(check)
	})
})

route.get("/logout",function(req,res)
{
	console.log(req.body)
})



module.exports = route