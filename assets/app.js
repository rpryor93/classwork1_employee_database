var config = {
    apiKey: "AIzaSyAnDBhlLe-rmDpw6CpZlOo6f6x0_Gc6lg8",
    authDomain: "boomboom-a76d6.firebaseapp.com",
    databaseURL: "https://boomboom-a76d6.firebaseio.com",
    storageBucket: "boomboom-a76d6.appspot.com",
  };
  firebase.initializeApp(config);

var database = firebase.database();
var name = "";
var role = "";
var startDate;
var monthlyRate;


$("#submission").on("click", function(){
	name = $("#employeeName").val().trim();
	role = $("#employeeRole").val().trim();
	startDate = $("#startDate").val().trim();
	monthlyRate = $("#monthlyRate").val().trim();

database.ref().push({
	name: name,
	role: role,
	startDate: startDate,
	monthlyRate: monthlyRate,
	dateAdded: firebase.database.ServerValue.TIMESTAMP
	
});



})