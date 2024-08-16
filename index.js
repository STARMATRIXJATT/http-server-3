const express = require('express')
const app = express()//call express 
const port = 3000
app.post('/conversations', function(req, res)  {
    //headers,body , query parameter
    //do machine learning model
    console.log(req.headers["authorization"])
    res.send({msg:" 2 + 2 = 4 "});
  })

app.listen(port, function(){
  console.log(`Example app listening on port ${port}`)
})