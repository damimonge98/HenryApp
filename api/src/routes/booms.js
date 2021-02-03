var Twitter = require('twitter')
const Boom = require('../models/booms');
const express = require ("express");
const server = express.Router ()
const { CONSUMER_KEY, CONSUMER_SECRET, BEARER_TOKEN }  = process.env


const boomTweets = function () { 
var T = new Twitter({

  consumer_key:        CONSUMER_KEY,
  consumer_secret:      CONSUMER_SECRET,
  bearer_token: BEARER_TOKEN
})


const query = "?tweet.fields=created_at"
T.get (`https://api.twitter.com/2/users/148246336/tweets${query}`,{max_results : 100},function(err, data, response) {
const boomTweets = data.data.filter(el => el.text.includes("BOOM"))
  Boom.find()
  .then (boomsDB => {
      if (boomsDB.length === 0) {
        for (var i = 0; i < boomTweets.length; i++) {
          const addBooms = new Boom ({
          info: boomTweets[i].text,
          created_at: boomTweets[i].created_at
          })
          addBooms.save()
          return;
      }
      
    } else {
      for (var i = 0; i < boomTweets.length; i++) {
      const isNewBoom = boomsDB.filter(el => el.info.includes(boomTweets[i].text))
      if (isNewBoom.length === 0) { //Significa que ese boom no existe, (es nuevo)
        const addBoom = new Boom ({
          info: boomTweets[i].text,
          created_at: boomTweets[i].created_at
        })
        addBoom.save()
      }
      }
    } 
  })
  })}

  module.exports = boomTweets;


