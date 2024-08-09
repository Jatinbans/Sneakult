const express = require('express');
const mongoose = require('mongoose');
const PORT = 3000;

const app = express();
app.use(express.json());

mongoose.connect('mongodb://localhost:27017/Sneakult',{
    
}).then(()=> console.log('Connected to MongoDB'))
.catch(err => console.log('Error:',err));


//data model 
const dataSchema = new mongoose.Schema({
    name:String,
    value:String,
},{timestamps:true});

const DataModel = mongoose.model("DataModel",dataSchema);

//end point to post data in database
app.post('/api/data',(req,res)=>{    
    const newData = new DataModel({
        name: req.body.name,
        value: req.body.value
    });

    //to save data 
    newData.save()
    .then((savedData)=>{
        console.log('saved data:',savedData);
        
        res.status(201).send('Data saved Successfully')})
    .catch(err =>res.send(500).send('Error',err));
});
//end point to get data from database
app.get('/api/data', (req, res) => {
    
    DataModel.find({})
        .then(data => {
            console.log('Reterived Data:', data);
            
            res.json(data);
        })
        .catch(err => res.status(500).send('Error:', err));
});

app.listen(3000,()=>{
    console.log(`Server is running on port ${PORT}`);
    
})
