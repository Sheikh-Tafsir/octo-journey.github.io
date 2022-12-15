
//import { initializeApp } from "https://www.gstatic.com/firebasejs/9.15.0/firebase-app.js";
//import {getDatabase,ref,set,push,child,onValue} from "https://www.gstatic.com/firebasejs/9.15.0/firebase-database.js";
const firebaseConfig = {
    apiKey: "AIzaSyClu8gGJY4nxh6cMRPG8rQJ-XJQxb-W3N0",
    authDomain: "schedulit-4baad.firebaseapp.com",
    databaseURL: "https://schedulit-4baad-default-rtdb.firebaseio.com",
    projectId: "schedulit-4baad",
    storageBucket: "schedulit-4baad.appspot.com",
    messagingSenderId: "898023068214",
    appId: "1:898023068214:web:a1f2b1ec57395e1dc3fe97",
    measurementId: "G-P5N6FE33FB"
};

  firebase.initializeApp(firebaseConfig);

var contactFormDB = firebase.database().ref("batman");

firebase.database().ref("/").child("name").update({
    purpose: "adding Name" 
});
document.querySelector(".dbInputBut").addEventListener("click", ()=>{
    //alert(document.querySelector(".caption").value);
    //e.preventDefault();
    var caption=document.querySelector(".caption").value;
    var story=document.querySelector(".story").value;
    var location=document.querySelector(".location").value;
    var imageLink=document.querySelector(".imageLink").value;
    //console.log(caption +" "+ story);
    //alert(caption +" "+ story);

    saveMessages(caption,story,location,imageLink);
});

const saveMessages = (caption,story,location,imageLink) =>{
    var newContactForm = contactFormDB.push();
    newContactForm.set({
        caption:caption,
        story:story,
        location:location,
        imageLink:imageLink,
    });
};

//document.querySelector("#services").addEventListener("click", ()=>{
window.addEventListener("load", ()=>{
    //alert("2");
    /*contactFormDB.on("value", function(snapshot){
        snapshot.forEach(function(element){
            alert(element.key);
        });
    })*/
    //user_name="-NJJ4gUHOazuMZZE5xLL";
    
    firebase.database().ref("batman/").on('value', function(snapshot){
        snapshot.forEach(function(get_score_and_name){
            score_data=get_score_and_name.val();
            var caption = (score_data["caption"]);
            var story = (score_data["story"]);
            var location = (score_data["location"]);
            var imageLink = JSON.stringify(score_data["imageLink"]);

            var image = document.createElement("IMG");
            image.alt = "Alt information for image";
            image.setAttribute('class', 'photo');
            image.src=imageLink;
            //alert(caption + " " + story + " " + location + " " + imageLink);
            //$(".blogposts").append("<p>" + caption + "</p><p>" + story +"</p><p>" + location +"</p><p>" + imageLink +"</p>");
            $(".blogposts").append("<div class='blogpost'><h2 class='readcaption'>" + caption + "</h2><p class='readlocation'>" + location +"</p><p class='readstory'>" + story +"</p><img src=" + imageLink + "></div>");
            //$(".blogs").append("<div class='blogpost'><h2>" + caption + "</h2><p>" + story +"</p><p>" + location +"</p><p>"+ imageLink+"</p><img src=" + imageLink + "></div>");
            //alert("ok");
        });
    });

    //alert("3");
});






