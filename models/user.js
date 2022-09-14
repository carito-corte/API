const mongoose=require("mongoose");

const userSchema = mongoose.Schema({
    nombre:{
        type:String,
        require:true,
    },
    apellido:{
        type:String,
        require:true,
    },
    correo:{
        type:String,
        require:true,

    }
    
});

module.exports = mongoose.model('User', userSchema);