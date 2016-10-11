$(document).ready(function(){

      var catInfo = [
      {
         pic: "img/Cat_pc.jpg",
         id:"pc",
         numOfClicks: 0,
       },
        {
         pic:"img/Cat_pickle.jpeg",
         id: "pickle",
         numOfClicks: 0,
       },
       {
         pic: "img/Cat-Monkey.jpg",
         id:"Monkey",
         numOfClicks: 0,
       },
       {
         pic: "img/cat-tracker.jpg",
         id:"tracker",
         numOfClicks: 0,

       },
       {
         pic: "img/hover_cat.jpg",
         id:"hover",
         numOfClicks: 0,
       }];


  for(var i = 0;i < catInfo.length;i++){

       //Building the list . Creating a list item and  textnode. The textnode reads out the KittyNames. Append the textnode to the list. Append all of it to the catlist in the HTML
       var catitem = document.createElement("LI");
       var textnode = document.createTextNode(catInfo[i].id);
       catitem.appendChild(textnode);
       document.getElementById("catList").appendChild(catitem);

       //Adding the KittyName to the div
       var currentcat = catInfo[i].id;
       var currentimage = catInfo[i].pic;
       var currentclicks = catInfo[i].numOfClicks;
       var currentid = catInfo[i].id;

       catitem.addEventListener('click', (function(currentimage_copy,currentid_copy) {

           return function() {


               var x = document.createElement("IMG");
               x.setAttribute("src", currentimage_copy);

               var item = document.getElementById("CatDisplay");
               var y = document.getElementById("CatDisplay").childNodes[0];

               var item2 = document.getElementById("KittyName");
               var z = document.createTextNode(currentid_copy);

               var catbox = document.getElementById('CatCounter');

               item.replaceChild(x, y);
               item2.replaceChild(z,item2.childNodes[0]);
              // document.body.appendChild(z);

               x.addEventListener('click', (function countClicks(currentclicks_copy) {
                   //x.setAttribute("currentclicks_copy",0);
                   return function countClicks() {
                       currentclicks_copy++;
                       var catbox = document.getElementById('CatCounter');
                       var w = document.createTextNode(currentclicks_copy)
                       catbox.replaceChild(w, catbox.childNodes[0])
                       console.log(currentclicks_copy);
                  
                   };
               })(currentclicks));


           };

       })(currentimage,currentid));


   };
});
