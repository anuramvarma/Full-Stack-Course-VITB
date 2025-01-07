const express = require('express')
const app = express()
app.get('/', function (req, res) 
{
  res.send('1st Host')
})
//----------------------------------------
app.get('/abort',function(req,res)
{
    res.send('2nd Host')
})
//----------------------------------------
app.get('/nxt', function (req, res) 
{
  res.send('3rd Host')
})
app.listen(3000)


