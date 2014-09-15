var victims = prompt("How many disaster victims do you wish to enter?");

var victimsNameArray=[]
var victimsPhoneNumberArray=[]
var victimsStreetArray=[]


for (var i = 0; i<victims; i++) {
	var name = prompt("Name");
	victimsNameArray.push(name);
	
	var phoneNumb = prompt("Phone Number");
	// console.log("The victims phone number:", phoneNumb)
	victimsPhoneNumberArray.push(phoneNumb)
	// console.log("victimsPhoneNumberArray:", victimsPhoneNumberArray)
	
	var street = prompt("Street Address");
	victimsStreetArray.push(street);
}
 
var volunteers = prompt("How many volunteers would you wish to enter?")

var volunteersNameArray = []
var volunteersPhoneNumberArray = []
var volunteersStreetArray = []

for (var i = 0; i<volunteers; i++) {
	var nameV = prompt("Name");
	volunteersNameArray.push(nameV);

	var phoneNumbV = prompt("Phone Number");
	volunteersPhoneNumberArray.push(phoneNumbV);

	var streetV = prompt("Street Address");
	volunteersStreetArray.push(streetV);
}

alert("Total Victims: " + victims);
alert("Total Volunteers: " + volunteers);
alert("Victims are: " + victimsNameArray);
alert("Volunteers are: " + volunteersNameArray);