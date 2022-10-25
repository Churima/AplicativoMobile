const express=require('express');
const cors=require('cors');
const bodyParser = require('body-parser');
const res = require('express/lib/response');
const models=require('./models');


const app= express();
app.use(cors());
app.use(bodyParser.urlencoded({ extended: false}));
app.use(bodyParser.json());

let user=models.User;

let port=process.env.PORT || 3000;

app.listen(port,(req,res)=>{
    console.log('servidor onn');
});

app.get('/',(req,res)=>{
    res.send('Meu servidor backend rodando!');
});

app.get('/create',async (req,res)=>{
    let create = await user.create({
        name: 'Mari', 
        password: '12345',
        createdAt: new Date(),
        updatedAt: new Date(),
    });
    res.send('Usuario criado!!');
});

//read
app.get('/read',async (req,res)=>{
    let read = await user.findAll({
        raw:true
    });
    res.send(read);
});

//ATUALIZANDO - update
app.get('/update', async (req,res)=>{
    let update=await user.findByPk(2).then((response)=>{
        //console.log(response);
        response.name='Joaozinho';
        response.save();
    });
});

//EXCLUINDO - delete
app.get('/delete', async (req,res)=>{
    user.destroy({
        where: {id:3}
    });
});

app.post('/login', async (req,res)=>{
    let response= await user.findOne({
        where: {name: req.body.name, password: req.body.password}
    });
   
    if (response == null){
        res.send(JSON.stringify('error'));
    }else {
        res.send(response);
    }
}); 