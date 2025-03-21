const express = require("express");
const router = express.Router();
const bcrypt = require("bcrypt")
const User = require("../models/User");

// Yeni Kullanıcı Ekleme(REGISTER)
router.post("/register",async (req,res) => {
    try {
        const { username, email, password } = req.body;

        const checkUser = await User.findOne({email});
        if(checkUser){
            return res.status(400).json({error: "Bu email adresi daha önce kullanılmıştır..."});
        }
        const hashPassword = await bcrypt.hash(password,10);

        const newUser = await new User({
            username,
            email,
            password : hashPassword
        });
        await newUser.save();
        res.status(201).json(newUser);
    } catch (error) {
        res.status(500).json({error: "Sunucu hatası..."})
    }
})
// Yeni Kullanıcı Ekleme(REGISTER)

//Giriş İşlemi(LOGIN)
router.post("/login",async (req,res) => {
    try {
        const { email, password } = req.body;
        //Kullanıcı kontrolü var mı yok mu
        const user = await User.findOne({ email });
        if(!user){
            return res.status(404).json({error: "Geçersiz email adresi..."});
        }
        //Şifre kontrolü
        const isValidPassword = await bcrypt.compare(password,user.password);
        if(!isValidPassword){
            return res.status(401).json({error : "Geçersiz şifre..."});
        }
        res.status(200).json({
            id : user._id,
            email : user.email,
            username : user.username,
            roole : user.role
        });  
    } catch (error) {
        res.status(500).json({error: "Sunucu hatası..."})
    }
})
//Giriş İşlemi(LOGIN)



module.exports = router;