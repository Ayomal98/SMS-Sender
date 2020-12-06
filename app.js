const express=require('express');
const ejs=require('ejs');
const bodyparser=require('body-parser');
const Nexmo=require('nexmo');
const socketio=require('socket.io');

//initialize nexmo
const nexmo=new Nexmo({
    apiKey:"your apikey",
    apiSecret:"your api password"
},{debug:true})
//initialize app
const app=express();

//template engine setup
app.set('view engine','html');
app.engine('html',ejs.renderFile);

app.use(express.static(__dirname + '/public'));

//body-parser middleware
app.use(bodyparser.json());
app.use(bodyparser.urlencoded({extended:true}));

//define the index route
app.get('/',(req,res)=>{
    res.render('index')
})

//catch the form submit

app.post('/',(req,res)=>{
    console.log(10);
    const number=req.body.number;
    const msg=req.body.text;
    nexmo.message.sendSms('Vonage APIs',number,msg,{type:'unicode'},
     (error,responseData)=>{
        if(error){
            console.log(error);
        }else{
            console.log('send')
            console.dir(responseData);
        }
        console.log(11);
     })
})

//define the port
const port=3000;

//start server
app.listen(port,()=>{
    console.log(`Server started on the port ${port}`);
})