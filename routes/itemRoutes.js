const express = require('express');
const router = express.Router();
const axios = require('axios')
const Item = require('../models/Item');


router.get('/findcoctail',(req,res,next)=>{
  //in this route find all items that are owned by req.user
  // Item.find()
  // .then((AllTheItems)=>{
  //   res.json(AllTheItems);
  // })
  // .catch(()=>{
  //   res.json(err);
  // })
})


router.get('/ingredients-list', (req, res, next) => {
  console.log(">>>>>> calling fetch-list <<<<<< ");
  
  axios.get('https://www.thecocktaildb.com/api/json/v1/1/list.php?i=list')
  .then(theItems => {
    // console.log("these are the items from the api ---------- ", theItems.data.drinks)
    res.status(200).json(theItems.data.drinks)
  }).catch(err => res.status(400).json(err))
})


router.get('/search-for/:whatToSearch', (req, res, next) => {
  axios.get(`https://www.thecocktaildb.com/api/json/v1/1/search.php?${req.params.whatToSearch}`)
  .then(apiResponse => {
    console.log('the info form api ========= ', apiResponse.data)
    res.status(200).json(apiResponse.data);
  }).catch(err => res.status(400).json(err))
});




module.exports = router;