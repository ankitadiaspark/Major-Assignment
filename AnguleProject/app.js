express = require('express')
expressSession = require('express-session')
bodyParser = require('body-parser')
path = require('path')

userRoute = require('./express/route/userRoute.js')
cateRoute = require('./express/route/categoryRoute.js')

app = express()

app.use(express.static(path.join(__dirname,"dist")))
app.use(express.json())
app.use(bodyParser.urlencoded({extended:true}))
app.use(expressSession({secret:"my college web"}))



app.use("/user",userRoute)
app.use("/category",cateRoute)


app.listen(7898,function()
{	
	console.log("Server Run At : http://localhost:7898")
})