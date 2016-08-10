var config = {
    apiKey: "AIzaSyAnDBhlLe-rmDpw6CpZlOo6f6x0_Gc6lg8",
    authDomain: "boomboom-a76d6.firebaseapp.com",
    databaseURL: "https://boomboom-a76d6.firebaseio.com",
    storageBucket: "boomboom-a76d6.appspot.com",
  };
  firebase.initializeApp(config);

var database = firebase.database();
$("#submission").on("click", function(){
	var	name = $("#employeeName").val().trim();
	var role = $("#employeeRole").val().trim();
	var startDate = $("#startDate").val().trim();
	var monthlyRate = $("#monthlyRate").val().trim();

database.ref().push({
	name: name,
	role: role,
	startDate: startDate,
	monthlyRate: monthlyRate,
	dateAdded: firebase.database.ServerValue.TIMESTAMP
	
});



})