const express=require('express');
const path=require('path');
const hbs=require('hbs');

const app=express();

const dirPath=path.join(__dirname,'../public')
const templatePath=path.join(__dirname,'../templates/views')
const partialPath=path.join(__dirname,'../templates/partials')
app.use(express.static(dirPath))

app.set('view engine','hbs')
app.set('views',templatePath)
hbs.registerPartials(partialPath)

app.get('',(req,res)=>{
    res.render('index',{
        'name':'venky'
    })
})

app.get('/help',(req,res)=>{
    res.render('help',{
        'name':'help'
    })
})

app.get('*',(req,res)=>{
    res.send('404 page')
})

app.listen(3000,()=>{
    console.log('server is running @3000')
})