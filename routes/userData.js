const express = require("express");

const router = express.Router();
const user = require("../models/userSchema");
const User = require("../models/adminSchema");
const transactions = require("../models/transactionSchema");

router.post("/add", async (req, res) => {
  const {
    firstName,
    lastName,
    Phone,
    DOB,
    gender,
    Address,
    name,
    email,
    employment,
    accountType,
    amount,
  } = req.body;
  if (
    !firstName ||
    !lastName ||
    
    !Phone ||
    !DOB ||
    !gender ||
    !Address ||
    !name ||
    !email ||
    !employment ||
    !accountType ||
    !amount
  ) {
    return res.status(400).json({ msg: "Please fill all the details" });
  }
  const newUser = new user({
    firstName,
    lastName,
    Phone,
    DOB,
    gender,
    Address,
    name,
    email,
    employment,
    accountType,
    amount,
  });

  await newUser.save();
});

router.get("/customers", async (req, res) => {
  try {
    const User = await user.find();
    res.send(User);
    console.log(User)
      res.status(200).json(User.favourite);
    console.log(User.favourite)
  } catch (e) {
    console.log(e);
    res.status(500).json();
  }
});

router.get("/customers/:id", async (req, res) => {
  const { id} = req.body;
  console.log(req.params.id);
  const data = await user.findById(req.params.id);
  // console.log(data);
  if (data) {
    res.send(data);
    // console.log(data);
  }
});

router.put("/customer/money", async (req, res) => {
  // console.log(req.body)
  try {
    const { id, count, id2 } = req.body;
    const data = await user.findById(id);
    const data2 = await user.findById(id2);
    data2.amount = count + data2.amount;
    data.amount = data.amount - count;
    data.save();
    data2.save();
    res.send("updated successfull");
  } catch (e) {
    console.log(e.message);
  }
});


router.post("/transactions" , async(req,res) => {
  try {
  const { id, count, id2 } = req.body;
  const data = await user.findById(id);
  const data2 = await user.findById(id2);
// console.log(req.body);
  const newTrans = new transactions({
    userOne : data.name,
    userTwo:data2.name,
    amount:count,
    timestamp: new Date()
  })

  await newTrans.save();
} catch (e) {
  console.log(e);
}
})


router.get("/gettransactions", async (req,res) => {
  try {
    const data = await transactions.find();
    res.send(data);
    // console.log(data)
  } catch (e) {
    console.log(e);
    res.status(500).json();
  }
})




router.post("/login", (req, res)=> {
  const { email, password} = req.body
  User.findOne({ email: email}, (err, user) => {
      if(user){
          if(password === user.password ) {
              res.send({message: "welcome to ava banking solution.", user: user})
          } else {
              res.send({ message: "user or password invalid"})
          }
      } else {
          res.send({message: "user or password invalid"})
      }
  })
}) 

router.post("/register", (req, res)=> {
  const { name, email, phone, address,  password} = req.body
  User.findOne({email: email}, (err, user) => {
      if(user){
          res.send({message: "User already registerd"})
      } else {
          const user = new User({
              name,
              email,
              phone,
              address,
              password
          })
          user.save(err => {
              if(err) {
                  res.send(err)
              } else {
                  res.send( { message: "Welocome! proceed to login" })
              }
          })
      }
  })
  
}) 





module.exports = router;
