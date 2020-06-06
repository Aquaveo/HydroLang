import './loader.js'

google.charts.load("current", {packages:["corechart", "table"]});
google.charts.setOnLoadCallback(googlechartsLoaded);

var isGooglechartsLoaded = false;

function googlechartsLoaded(){
	isGooglechartsLoaded = true;
}

export default google
export {isGooglechartsLoaded}