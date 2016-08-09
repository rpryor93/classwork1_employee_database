var config = {
   apiKey: "AIzaSyBsuTEfTmEyhR_8z36d6f-PeAynGQf3sFg",
   authDomain: "employee-data-group-project.firebaseapp.com",
   databaseURL: "https://employee-data-group-project.firebaseio.com",
   storageBucket: "employee-data-group-project.appspot.com",
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