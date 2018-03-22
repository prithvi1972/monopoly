//-----------------------VARIABLES------------------------//

var canvas, canvasContext;
var mouseX, mouseY;

var mapImage = document.createElement("img");
var mapLoaded = false;

var positionImage = document.createElement("img");
var positionImageLoaded = false;

const POINTER_H = 48;
const POINTER_W = 30;

const TILE_WIDTH = 10;
const TILE_HEIGHT = 10;
const TILE_COL = 55;
const TILE_ROW = 55;

var worldArray = [
	0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,
	0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,
	0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,
	0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,
	0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,
	0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,
	0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,
	0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,
	0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,
	0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,
	0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,
	0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,
	0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,
	0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,
	0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,
	0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,
	0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,
	0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,
	0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,
	0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,
	0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,
	0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,
	0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,
	0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,
	0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,
	0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,
	0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,
	0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,
	0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,
	0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,
	0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,
	0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,
	0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,
	0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,
	0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,
	0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,
	0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,
	0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,
	0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,
	0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,
	0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,
	0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,
	0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,
	0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,
	0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,
	0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,
	0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,
	0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,
	0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,
	0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,
	0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,
	0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,
	0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,
	0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,
	0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0
];

var properties =  [
	{id:1, q_factor: 5, delta: 0, total_ownership: 0, name:"Thiruvananthapuram", price: 450, base_price: 450, indexValue: 2988},
	{id:2, q_factor: 5, delta: 0, total_ownership: 0, name:"Lakshadweep", price: 450, base_price: 450, indexValue: 2644},
	{id:3, q_factor: 5, delta: 0, total_ownership: 0, name:"Bengarulu", price: 800, base_price: 800, indexValue: 2493},
	{id:4, q_factor: 5, delta: 0, total_ownership: 0, name:"Goa", price: 950, base_price: 950, indexValue: 2267},
	{id:5, q_factor: 5, delta: 0, total_ownership: 0, name:"Pune", price: 700, base_price: 700, indexValue: 1937},
	{id:6, q_factor: 5, delta: 0, total_ownership: 0, name:"Mumbai", price: 1000, base_price: 1000, indexValue: 1825},
	{id:7, q_factor: 5, delta: 0, total_ownership: 0, name:"Nagpur", price: 250, base_price: 250, indexValue: 1727},
	{id:8, q_factor: 5, delta: 0, total_ownership: 0, name:"Bhopal", price: 375, base_price: 375, indexValue: 1505},
	{id:9, q_factor: 5, delta: 0, total_ownership: 0, name:"Ahemdabad", price: 800, base_price: 800, indexValue: 1494},
	{id:10, q_factor: 5, delta: 0, total_ownership: 0, name:"Jodhpur", price: 400, base_price: 400, indexValue: 1219},
	{id:11, q_factor: 5, delta: 0, total_ownership: 0, name:"JAIL", price: 0, base_price: 0, indexValue: 666},
	{id:12, q_factor: 5, delta: 0, total_ownership: 0, name:"Jaipur", price: 525, base_price: 575, indexValue: 1114},
	{id:13, q_factor: 5, delta: 0, total_ownership: 0, name:"Gurugram", price: 800, base_price: 800, indexValue: 1007},
	{id:14, q_factor: 5, delta: 0, total_ownership: 0, name:"Patiala", price: 475, base_price: 475, indexValue: 786},
	{id:15, q_factor: 5, delta: 0, total_ownership: 0, name:"Jammu", price: 475, base_price: 475, indexValue: 400},
	{id:16, q_factor: 5, delta: 0, total_ownership: 0, name:"Srinagar", price: 475, base_price: 475, indexValue: 235},
	{id:17, q_factor: 5, delta: 0, total_ownership: 0, name:"Leh", price: 475, base_price: 475, indexValue: 350},
	{id:18, q_factor: 5, delta: 0, total_ownership: 0, name:"Shimla", price: 500, base_price: 500, indexValue: 680},
	{id:19, q_factor: 5, delta: 0, total_ownership: 0, name:"Kanpur", price: 700, base_price: 700, indexValue: 1179},
	{id:20, q_factor: 5, delta: 0, total_ownership: 0, name:"Patna", price: 350, base_price: 350, indexValue: 1241},
	{id:21, q_factor: 5, delta: 0, total_ownership: 0, name:"Darjeeling", price: 325, base_price: 325, indexValue: 1027},
	{id:22, q_factor: 5, delta: 0, total_ownership: 0, name:"Guwahati", price: 350, base_price: 350, indexValue: 1142},
	{id:23, q_factor: 5, delta: 0, total_ownership: 0, name:"Aizawl", price: 350, base_price: 350, indexValue: 1475},
	{id:24, q_factor: 5, delta: 0, total_ownership: 0, name:"Kolkata", price: 825, base_price: 825, indexValue: 1521},
	{id:25, q_factor: 5, delta: 0, total_ownership: 0, name:"Bhubaneswar", price: 375, base_price: 375, indexValue: 1794},
	{id:25, q_factor: 5, delta: 0, total_ownership: 0, name:"JAIL", price: 0, base_price: 0, indexValue: 2193},
	{id:26, q_factor: 5, delta: 0, total_ownership: 0, name:"Andaman & Nicobar", price: 700, base_price: 700, indexValue: 2684},
	{id:27, q_factor: 5, delta: 0, total_ownership: 0, name:"Visakhapatnam", price: 375, base_price: 375, indexValue: 2064},
	{id:28, q_factor: 5, delta: 0, total_ownership: 0, name:"Hyderabad", price: 750, base_price: 750, indexValue: 2110},
	{id:29, q_factor: 5, delta: 0, total_ownership: 0, name:"Chennai", price: 650, base_price: 650, indexValue: 2554}
];

var events = [
	{id: 1, e_name: "Earthquake", e_factor: 5, type: -1}
];

//Empty Tables
var playerArray = [];
var land_event = [];
var player_land = [];

var isPaused = false;

var current_player_id = 1;

const RENT_FACTOR = 10;

var shouldExecuteEvent = false;
var le_landId, le_eventId, le_event_life, le_event_level;

var shouldExecuteBuy = true;
var pl_per = 7;









//-------------------------CORE---------------------------//

//Main game
window.onload = function(){
	canvas=document.getElementById('gameCanvas');
	canvasContext=canvas.getContext('2d');

	updateWorldArray();

	addPlayer("Shubham", 1000);
	consoleOut();

	if(!isPaused){
		//If paused then no call to changes
		mainGameLoop();
	}

	setInterval(setGraphics, 1000/30);
	loadImage();
	addMouseListner();
}

//This calls all the steps that need to happen after pressing global next
function mainGameLoop(){	
	
	//Moves current player to random dice location
	movePointerTo(current_player_id, rollDice());

	//Checks if user has to give rent or not
	rentcheck();

	//Buys land
	callBuy();

	//Update new player id
	updatePlayerId();

	//event happenning update
	callEvent();

	//update quality factor
	updateLandPrices();

	consoleOut();

	//TESTING ENDS HERE
}

// This binds callEvent to button
$(document).ready(function(){$("#test").click(callEvent);});

// This binds mainGameLoop to button
$(document).ready(function(){$("#next").click(mainGameLoop);});

//returns a random number
function rollDice(){
	return Math.floor(Math.random()*6+1);
}

//This function moves the pointer to that particular location
function movePointerTo(id, value){
	for(var i=0; i<playerArray.length; i++){
		if(id == playerArray[i].id){
			playerArray[i].currentIndex += value;
			if(playerArray[i].currentIndex >= properties.length){
				playerArray[i].currentIndex -= properties.length;
			}
			playerArray[i].posX = (((properties[playerArray[i].currentIndex].indexValue)%TILE_COL-0.25)*TILE_HEIGHT);
			playerArray[i].posY = ((Math.floor((properties[playerArray[i].currentIndex].indexValue/TILE_ROW)))*TILE_WIDTH - 20);
			break;
		}
	}
}

//This function checks rent and deducts accordingly
function rentcheck(){
	var current_land_id = (playerArray[current_player_id-1].currentIndex + 1);
	for(var i=0; i<player_land.length; i++){
		if(player_land[i].l_id == current_land_id && player_land[i].u_id != current_player_id){
			for(var j=0; j<playerArray.length; j++){
				if(playerArray[j].id == player_land[i].u_id){
					//Adding rent to other player's account
					playerArray[j].money += ((RENT_FACTOR/100)*(player_land[i].per/100)*properties[current_land_id-1]);

					//decreasing current player's rent
					playerArray[current_player_id-1].money -= ((RENT_FACTOR/100)*(player_land[i].per/100)*properties[current_land_id-1]);
				}
			}
		}
	}
}

//This function deals with buying
function callBuy(){
	if(shouldExecuteBuy){

		//If requested percent is greater than 100 or makes the sum greator than 100 then it will equat it remaining or zero
		if((properties[playerArray[current_player_id-1].currentIndex].total_ownership + pl_per) >= 100){
			pl_per = (100 - properties[playerArray[current_player_id-1].currentIndex].total_ownership);
		}

		addPlayerLand(properties[playerArray[current_player_id-1].currentIndex].id, current_player_id , pl_per);
	}
}

//This function adds a row to player_land table
function addPlayerLand(landId, userId, ownership){
	if(properties[landId-1].base_price != 0){

		var isEntryAlreadyPresent = false
		for(var i=0; i<player_land.length; i++){
			if(player_land[i].u_id == userId && player_land[i].l_id == landId){
				isEntryAlreadyPresent = true;
				player_land[i].per += ownership;
			}
		}

		//Now if there is no new entry
		if(!isEntryAlreadyPresent){
			var temp = {l_id: landId, u_id: userId, per: ownership};
			player_land.push(temp);
		}

		//Now we have to decrement the value of land from player's revenue
		playerArray[userId-1].money -= (ownership/100)*properties[landId-1].price;
	}
}

//This updates the current player id
function updatePlayerId(){
	current_player_id++;
	if(current_player_id > playerArray.length){
		current_player_id -= playerArray.length;
	}
}

//This function calls up event
function callEvent(){
	//first we have decrease the life of existing events
	for(var i=0; i<land_event.length; i++){
		if(land_event[i].e_life>0){
			land_event[i].e_life--;
		}
	}

	if(shouldExecuteEvent){
		addLandEvent(le_landId, le_eventId, le_event_life, le_event_level);
	}
}

//This function adds a row to land_event table
function addLandEvent(landId, eventId, event_life, event_level){
	var temp = {l_id: landId, e_id: eventId, e_life: event_life, e_level: event_level};
	land_event.push(temp);
}

//this function creates new value of land using ownership and quality factor
function updateLandPrices(){
	//This calculate the sigma of all ownerships & delta_q
	for(var i=0; i<properties.length; i++){

		var sigmaOwnership = 0;
		for(var j=0; j<player_land.length; j++){
			if(properties[i].id == player_land[j].l_id){
				sigmaOwnership += player_land[j].per;
			}
		}
		properties[i].total_ownership = sigmaOwnership;

		var delta_q = 0;
		for(var j=0; j<land_event.length; j++){
			if(properties[i].id == land_event[j].l_id){
				delta_q += (events[(land_event[j].e_id-1)].type)*(events[(land_event[j].e_id-1)].e_factor)*((land_event[j].e_level)*(land_event[j].e_life));
			}
		}
		properties[i].delta = delta_q;

		//New price
		properties[i].price = properties[i].base_price + (properties[i].q_factor + properties[i].delta)*(properties[i].total_ownership);
	}
}

//This function adds a row to player table
function addPlayer(team_name, team_money){
	var temp = {id: playerArray.length+1, currentIndex: 0, name: team_name, posX: 0, posY: 0, money: team_money};
	playerArray.push(temp);

	//To reset all pointers after adding any player
	resetAllPointers();
}

//This Resets all the points after player is created (Reset position is patiala)
function resetAllPointers(){
	//find patiala as our reset position
	var resetIndex = 0;
	for(var i=0; i<properties.length; i++){
		//indexValue 786 is for Patiala
		if(properties[i].indexValue == 786){
			resetIndex = i;
			break;
		}
	}

	for(var i=0; i<playerArray.length; i++){
		playerArray[i].posX = (((properties[resetIndex].indexValue)%TILE_COL-0.25)*TILE_HEIGHT);
		playerArray[i].posY = ((Math.floor((properties[resetIndex].indexValue/TILE_ROW)))*TILE_WIDTH - 20);
		playerArray[i].currentIndex = resetIndex;
	}
}

//This function updates the world array with points for rendering
function updateWorldArray(){
	for(var i=0; i<properties.length; i++){
		worldArray[properties[i].indexValue] = 1;
		if(properties[i].base_price == 0){
			worldArray[properties[i].indexValue] = 2;
		}
	}
}

//This function creates physical properties of those array
function drawWorldArray(){
	for(var i=0; i<TILE_ROW; i++){
		for(var j=0; j<TILE_COL; j++){
			var indexNo = worldIndex(i,j);
			if(worldArray[indexNo]==0){
				createRect(TILE_WIDTH*i, TILE_HEIGHT*j, TILE_WIDTH-2, TILE_HEIGHT-2, 'rgba(0,0,0,0)');
			}
			else if(worldArray[indexNo]==1){
				createRect(TILE_WIDTH*i, TILE_HEIGHT*j, TILE_WIDTH, TILE_HEIGHT, 'rgba(200,0,0,1)');
			}
			else if(worldArray[indexNo]==2){
				createRect(TILE_WIDTH*i, TILE_HEIGHT*j, TILE_WIDTH, TILE_HEIGHT, 'rgba(0,0,0,1)');
			}
		}
	}	
}

//This returns index of element
function worldIndex(colIndex,rowIndex){
	return colIndex + TILE_COL*rowIndex;
}

//This loads the image
function loadImage(){
	mapImage.onload = function(){
		mapLoaded = true;
	}
	mapImage.src="img/map.jpg";

	positionImage.onload = function(){
		positionImageLoaded = true;
	}
	positionImage.src="img/position.png";
}

//Mouse listener
function addMouseListner(){
	canvas.addEventListener('mousemove',function(evt){
		var rect = canvas.getBoundingClientRect();
		var root = document.documentElement;

		mouseX = evt.clientX - rect.left - root.scrollLeft;
		mouseY = evt.clientY - rect.top - root.scrollTop;
	});
}









//-----------------------GRAPHICS-------------------------//

//Main graphics loading/drawing function
function setGraphics(){
	//black layer
	createRect(0, 0, canvas.width, canvas.height, 'black');

	//draws the map beneath everything
	if(mapLoaded){
		canvasContext.drawImage(mapImage, 0, 0, canvas.width, canvas.height);
	}

	//mouse location for debugging
	drawTextArroundMouse();	

	//draws the map lines aka path
	drawMapLines();

	//draws the title and price
	drawMapLegend();

	//draws the red boxs for cities
	drawWorldArray();	

	//draw pointer
	if(positionImageLoaded){
		drawAllPositions();
	}
}

//This function draws all the map positions
function drawAllPositions(){
	for(var i=0; i<playerArray.length; i++){
		canvasContext.drawImage(positionImage, playerArray[i].posX, playerArray[i].posY, POINTER_W/2, POINTER_H/2);
		drawText(playerArray[i].name, (playerArray[i].posX - positionImage.width/5), (playerArray[i].posY - positionImage.height/12), "black");
	}
}

//This function draws line between map points
function drawMapLines(){
	for(var i=0; i<properties.length; i++){
		j=i+1;
		if(j==properties.length)	j=0;
		drawLine(((properties[i].indexValue)%TILE_COL+0.5)*TILE_HEIGHT, (Math.floor((properties[i].indexValue/TILE_ROW))+0.5)*TILE_WIDTH,((properties[j].indexValue)%TILE_COL+0.5)*TILE_HEIGHT, (Math.floor((properties[j].indexValue/TILE_ROW))+0.5)*TILE_WIDTH);
	}
}

//This map draws the legend of the points on the map
function drawMapLegend(){
	for(var i=0; i<properties.length; i++){
		drawText(properties[i].name, ((properties[i].indexValue+1.5)%TILE_COL)*TILE_HEIGHT, Math.floor((properties[i].indexValue/TILE_ROW) + 0.5)*TILE_WIDTH, 'black');
		if(properties[i].base_price != 0)
			drawText("Rs "+properties[i].price, ((properties[i].indexValue+1.5)%TILE_COL)*TILE_HEIGHT, Math.floor((properties[i].indexValue/TILE_ROW) + 1.5)*TILE_WIDTH, 'black');
	}
}

//This map draws the mouse positions on the screen
function drawTextArroundMouse(){
	mouseTileX = Math.floor(mouseX/TILE_WIDTH);
	mouseTileY = Math.floor(mouseY/TILE_HEIGHT);
	//console.log(mouseTileX,mouseTileY,mouseTileY*55+mouseTileX);
	drawText(worldIndex(mouseTileX,mouseTileY), mouseX, mouseY, 'red');
}

//This function draws a rectangle
function createRect(leftX,topY,width,height,color){
	canvasContext.fillStyle=color;
	canvasContext.fillRect(leftX,topY,width,height);		
}

//This function draws string on screen
function drawText(string,leftX,topY,color){
	canvasContext.fillStyle=color;
	canvasContext.fillText(string,leftX,topY);
}

//This function draws line between two points
function drawLine(startX, startY, endX, endY){
	canvasContext.beginPath();
	canvasContext.moveTo(startX, startY);
	canvasContext.lineTo(endX, endY);
	canvasContext.strokeStyle = 'rgba(0,0,0,0.2)';
	canvasContext.fillStyle = 'rgba(0,0,0,0.2)';
	canvasContext.lineWidth = 4;
	canvasContext.stroke();
}









//----------------------DEBUG ONLY------------------------//

function consoleOut(){

	if(playerArray.length){
		console.log("PLAYER TABLE");
		for(var i=0; i<playerArray.length; i++){
			//console.log("ID: "+playerArray[i].id+" currentIndex: "+playerArray[i].currentIndex+" Name: "+playerArray[i].name);
			console.log("Pos X: "+playerArray[i].posX+" Pos Y: "+playerArray[i].posY+" Money: "+playerArray[i].money);
		}
	}

	if(player_land.length){
		console.log("PLAYER_LAND TABLE");
		for(var i=0; i<player_land.length; i++){
			console.log("Land ID: "+player_land[i].l_id+" User_ID: "+player_land[i].u_id+" Ownership: "+player_land[i].per);
		}
	}

	if(land_event.length){
		console.log("LAND_EVENT TABLE");
		for(var i=0; i<land_event.length; i++){
			console.log("Land ID: "+land_event[i].l_id+" Event_ID: "+land_event[i].e_id+" E_LIFE: "+land_event[i].e_life+" E_LEVEL: "+land_event[i].e_level);
		}
	}
}