const express = require("express");
const userSchema = require("../models/user.js");
const router=express.Router();

//crear usuario
router.post("/users", (req, res) => {
    const user = userSchema(req.body);
    user
      .save()
      .then((data) => res.json(data))
      .catch((error) => res.json({ message: error }));
  });

//obtener usuraios
router.get("/users", (req, res) => {
    userSchema
      .find()
      .then((data) => res.json(data))
      .catch((error) => res.json({ message: error }));
  });

//obtener un usuario
router.get("/users/:id",(req,res)=>{
    const {id}= req.params;
    userSchema
    .findById(id)
    .then((data)=>res.json(data)) 
    .catch((error)=> res.json({message:error}));
});

//Actualizar un usuario
router.put("/users/:id", (req, res) => {
    const { id } = req.params;
    const { nombre, apellido, correo } = req.body;
    userSchema
      .updateOne({ _id: id }, { $set: { nombre, apellido, correo } })
      .then((data) => res.json(data))
      .catch((error) => res.json({ message: error }));
  });

//eliminar usuario
router.delete("/users/:id", (req, res) => {
    const { id } = req.params;
    userSchema
      .remove({ _id: id })
      .then((data) => res.json(data))
      .catch((error) => res.json({ message: error }));
  });



module.exports=router;