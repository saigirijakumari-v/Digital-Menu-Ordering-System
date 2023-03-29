const express = require("express")
const mongo = require("mongodb").MongoClient
const mongodb = require("mongodb")
const app = express();
var bodyParser=require('body-parser');
const cors = require('cors');
const url = "mongodb://localhost:27017";
app.use(cors());
let dbUrl,fooditems,admins;
mongo.connect(
  url,
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  },
  (err, client) => {
    if (err) {
      console.error(err)
      return
    }
    dbUrl = client.db("digitalmenu");
    fooditems = dbUrl.collection("fooditems");
    admins = dbUrl.collection("admins");
    chefs = dbUrl.collection("chefs");
    orders = dbUrl.collection("orders");

  }
)
app.use(express.json())

//ADMIN API's

//Add record to the database

app.post("/addDish", (req, res) => {
  fooditems.insertOne(
    {
      dishname:req.body.Dname,
      dishprice:req.body.Dprice,
      type:req.body.Dtype
    },
    (err,output)=>{
      if(err){
        console.error(err)
        res.status(500).json({err:err})
        return
      }
      res.status(200).json({success:"Data inserted successfully"})
    }
  )
})

//get all records from fooditems

  app.get("/fooditems", (req, res) => {
    fooditems.find().toArray((err, items) => {
      if (err) {
        console.error(err)
        res.status(500).json({ err: err })
        return
      }
      res.status(200).json({ fooditems: items })
    })
  })

  //get all records from admins
  
  app.get("/admins", (req, res) => {
    admins.find().toArray((err, items) => {
      if (err) {
        console.error(err)
        res.status(500).json({ err: err })
        return
      }
      res.status(200).json({ admins: items })
    })
  })

  //get all records from chef

  app.get("/chefs", (req, res) => {
    chefs.find().toArray((err, items) => {
      if (err) {
        console.error(err)
        res.status(500).json({ err: err })
        return
      }
      res.status(200).json({ chefs: items })
    })
  })

  //get all records from orders

  app.get("/orders", (req, res) => {
    console.log(req.body);
    orders.find().toArray((err, items) => {
      if (err) {
        console.error(err)
        res.status(500).json({ err: err })
        return
      }
      res.status(200).json({ orders: items })
    })
  })

  //get matching record from the database using id

  app.get('/getdata/:id',(req,res)=>{
    fooditems.find({_id:new mongodb.ObjectId(req.params.id)}).toArray((err,data)=>
    {
      if(err){
        console.error(err)
        res.status(500).json({err:err});
        return
      }
      res.status(200).json({dishdata : data})
    })
  })

  //delete record with matching id

  app.delete('/delete/:id',(req,res)=>{
    fooditems.deleteOne({_id:new mongodb.ObjectId(req.params.id)},
    (err,msg)=>{
      console.log(msg,"deleted");
      if(err){
        console.error(err)
        res.status(500).json({err:err});
        return
      }
      res.status(200).json({msg : "Record deleted successfully!"})
    })
  })

  //Update record in the database with matching fields

  app.put('/update/:id',(req,res)=>{
    console.log("update is working",req.body,req.params.id);
  fooditems.updateOne({_id:new mongodb.ObjectId(req.params.id)},{ $set:{
    dishname:req.body.Dname,
    dishprice:req.body.Dprice,
    type:req.body.Dtype,

  }},
    (err,msg)=>{
      console.log("update msg: ",msg);
      if(err){
        console.error(err)
        res.status(500).json({err:err});
        return
      }
      res.status(200).json({success : "Record updated successfully!"})
    })
  })


  //Update status of a record in orders collection

  app.put('/deliverystatus/:id',(req,res)=>{
    console.log("update is working",req.body,req.params.id);
  orders.updateOne({_id:new mongodb.ObjectId(req.params.id)},{ $set:{
    deliverystatus:req.body.Dstatus
  }},
    (err,msg)=>{
      console.log("update msg: ",msg);
      if(err){
        console.error(err)
        res.status(500).json({err:err});
        return
      }
      res.status(200).json({success : "Record updated successfully!"})
    })
  })


  app.put('/availabilitystatus/:id',(req,res)=>{
    console.log("update is working",req.params.id);
  orders.updateOne({_id:new mongodb.ObjectId(req.params.id)},{ $set:{
    availabilitystatus:req.body.Astatus
  }},
    (err,msg)=>{
      console.log("update msg: ",msg);
      if(err){
        console.error(err)
        res.status(500).json({err:err});
        return
      }
      res.status(200).json({success : "Record updated successfully!"})
    })
  })


  //Customer API calls

  var bodyParser=require('body-parser');
  app.use(bodyParser.urlencoded({extended:true}));
  app.use(bodyParser.json());

  var mongoose=require('mongoose');
//const { response } = require('express');
var dburl="mongodb://localhost:27017/digitalmenu";
mongoose.connect(dburl);
mongoose.connection.on('connected',()=>{
    console.log('Connected to MongoDB using Mongoose');
});
mongoose.connection.on('error',()=>{
    console.log('MongoDB Connection error');
});





var Schema=mongoose.Schema;
var firstschema= new Schema({
    id:Number,
    dishname:String,
    dishprice:Number,
    type:String,
    deliverystatus:String,
    availabilitystatus:String
});
var db=mongoose.model('orders',firstschema);

var Schema=mongoose.Schema;
var secondschema = new Schema({
    id:Number,
    dishimage:String,
    dishname:String,
    dishprice:Number,
    type:String
});
var menu=mongoose.model('fooditems',secondschema);




app.post('/additems',function(req,res,next){
    
        db.create(req.body,(error,data)=>{
            if(error){
                console.log("error during insertion",error);
                res.send(error);
            }
            else{
                console.log("document inserted");
                res.send("document inserted");
                res.json(data);
            }});
});

app.post("/addtodb", (req, res) => {
    console.log("added to db",req.body);
      db.create(req.body,(error,data)=>{
        if(error){
            console.log("error during insertion",error);
            res.send(error);
        }
        else{
            console.log("document inserted");
            res.send("document inserted");
        }});
  });


  app.get('/getfooditems',function(req,res){
   
   // let dbresponse;
    menu.find( {},(err, dbres)=>{
        if(err){
            console.log(err);
        }
        else{
        console.log("Documents fetched are :  ", dbres);
        res.json(dbres);
    }});
    
});



app.get('/getitems',function(req,res){
    //filter
    db.find().toArray((err, response)=>{
        console.log("Documents fetched are :  ", response);
        res.send( response );
        res.json( response );
    });
});



app.delete('/deleteitem',function(req,res){
    console.log(req.data);
    console.log(req.params.id);
    db.findByIdAndDelete( req.params.id,(err, response)=>{
        if(err){
            res.send(err);
        }
        else{
            console.log("Document Deleted :  ", response);
            
                
 } });
            res.status(200).json({msg:response});
        }
        
      );

app.post('/addbyid',function(req,res){
    console.log(req.body._id);
    db.create(req.params._id,(err, res)=>{

        if(err){
          res.send(err);
        }
        else{
            console.log("Documents fetched are :  ", res);
            res.json(res);
        }
       
    });
});

  app.listen(3000, () => console.log("Server is runnng on port 3000."))