const express = require("express");
const app = express();
const cors = require("cors");
const  nodeMailer = require('nodemailer');



app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const userdata = require("./src/model/usermodel")

const PORT = process.env.PORT || 3000;

app.get("/" , (req,res)=>{
    res.send("server running")
})

app.post("/getdata" , (req,res)=>{
    console.log(req.body)

    var otpgen  = Math.floor(Math.random()*90000) + 10000;
    console.log(otpgen)

    data={
        email:req.body.email,
        otp:otpgen
    }

    var user = new userdata(data)
    user.save();


    //Message

    let mailTransporter = nodeMailer.createTransport({
        service: 'gmail',
        auth: {
            user: 'jaganvjs.india@gmail.com',
            pass: 'yourpassword'
        }
    });
      

    let mailDetails = {
        from: 'jaganvjs.india@gmail.com',
        to: user.email,
        subject: 'Your OTP for login',
        text: otpgen +`is the OTP for login to XYZ App. Pls do not share it with anyone.`


    };
      
    mailTransporter.sendMail(mailDetails, function(err, data) {
        if(err) {
            console.log(err);
            res.send()

        } else {
            console.log(mailDetails);
            console.log('Email sent successfully');
            res.send()
        }
    });

    })



    app.post("/verifydata" , (req,res)=>{
        console.log(req.body)

    email1=req.body.email;
    otp1=req.body.otp;

    userdata.find({otp:otp1})
    .then((data)=>{
        console.log(data)
        if(data===null){
            res.send({ status: false, data: 'Invalid OTP' })
        }else{
            res.send({ status: true, data: 'Sucess' })

        }
        
    })


    })


app.listen(PORT , (req,res)=>{
    console.log(`Server Running on ${PORT}`)
})