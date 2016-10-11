var catArray = ["ComputerCat","PickledCat","CatMonkey","TrackedCat","HoverCat"];

var catInfo = {
 "ComputerCat":{
   "pic": "Cat_pc.jpg",
   "numOfClicks": 0
 },
 "PickledCat":{
   "pic":"Cat_pickle.jpeg",
   "numOfClicks": 0
 },
 "CatMonkey":{
   "pic": "Cat-Monkey.jpg",
   "numOfClicks": 0
 },
 "TrackedCat":{
   "pic": "cat-tracker.jpg",
   "numOfClicks": 0
 },
 "HoverCat":{
   "pic": "hover_cat.jpg",
   "numOfClicks": 0
 }
};

var kittyList = '<input type="button" "+ catId +"  value="Cat Monkey" />'
$("<input>").attr("id="+ '%data%');

var catReplace = kittyList.replace('%data%',catInfo.pic);

for(var i = 0;i < catArray.length;i++){
  var kitty = catArray[i]


$('#KittyName').append(catReplace);





}
