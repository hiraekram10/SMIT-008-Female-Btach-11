var now = new Date()  // Jun 27th 2024 
console.log(now);


// var dateString = now.toString()
// console.log(dateString.charAt(2));  //u


var weekDays= ["sun","mon","tues","wed","thu","Fri","sat"]
var day = now.getDay()  // 0-6 

// console.log(weekDays[day])

var monthNames = ["jan","feb","march","april","may","jun","july","aug"]
var currentMonth= monthNames[now.getMonth()]



var today = now.getDate()
if(today === 1 || today === 21 || today ===31){
    today+= 'st'
}else if(today ===2 || today == 22 ){
    today += 'nd'
}else if(today === 3 || today ===23){
    today +='rd'
}else{
    today+= 'th'
}

var year = now.getFullYear()

var currentDay = currentMonth +" " + today+" " + year
console.log(currentDay);



var getMilisec = now.getTime()
console.log(getMilisec);


var birthDay = new Date("June 30, 2025")
console.log(birthDay.getTime());



var libDate = moment().format('MM Do YYYY, h:mm:ss a')
console.log(libDate);


