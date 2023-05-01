
const express = require('express')
const app = express()
const port = 5000;
var cors = require('cors')


const categories = require('../news-dragon-server/data/categories.json');
const news = require('../news-dragon-server/data/newsData.json')


app.use(cors())

app.get('/', (req, res) => {
  res.send('Welcome to express server!')
})

// for categories 

app.get('/categories', (req,res) => {
  res.send(categories)
})


// for news => 
app.get('/news', (req,res) => {
  res.send(news)
})

// for getting news through id 

app.get('/news/:id', (req,res) => {
  const id = req.params.id;
  const selectedNews = news.find(n => n._id === id)
  res.send(selectedNews)
})

// for getting category news through category id
app.get('/categories/:id', (req,res) => {
  const id = parseInt(req.params.id);
  if(id === 0){
    res.send(news)
  } 
  else{
    const categoryNews = news.filter(n => n.category_id == id);
    res.send(categoryNews)
  }
  
  

})




app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})