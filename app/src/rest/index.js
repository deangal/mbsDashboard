const express = require("express")
const app = express()

const cors = require('cors');
const corsOptions ={
    origin:'http://localhost:3000', 
    credentials:true,            //access-control-allow-credentials:true
    optionSuccessStatus:200
}
app.use(cors(corsOptions));


app.get("/", (req,res) => {
    res.json({name:'dean'})
})

app.listen(3001)