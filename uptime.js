const axios = require('axios')
setInterval(function(){
   const reponse = axios.get('https://tasurik.glitch.me')
   console.log(reponse.data) 


}, 1000)