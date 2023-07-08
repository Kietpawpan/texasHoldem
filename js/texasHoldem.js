/* Copyright (c) 2023 Montri Kiatphaophan
 * cards.js v1.0.1 | All rights reserved.
*/

//Create a set of 52 playing cards, with the ID numbers of 1 to 52 and the associated card suits of Spades, Hearts, Diamonds, and Clubs.
const cards = new Map([ 
		[1,'\u{1F0A1}'],[5,'\u{1F0A2}'],[9,'\u{1F0A3}'],[13,'\u{1F0A4}'],[17,'\u{1F0A5}'],[21,'\u{1F0A6}'],[25,'\u{1F0A7}'],
		[29,'\u{1F0A8}'],[33,'\u{1F0A9}'],[37,'\u{1F0AA}'],[41,'\u{1F0AB}'],[45,'\u{1F0AD}'],[49,'\u{1F0AE}'],

		[2,'\u{1F0B1}'],[6,'\u{1F0B2}'],[10,'\u{1F0B3}'],[14,'\u{1F0B4}'],[18,'\u{1F0B5}'],[22,'\u{1F0B6}'],[26,'\u{1F0B7}'],
		[30,'\u{1F0B8}'],[34,'\u{1F0B9}'],[38,'\u{1F0BA}'],[42,'\u{1F0BB}'],[46,'\u{1F0BD}'],[50,'\u{1F0BE}'],

		[3,'\u{1F0C1}'],[7,'\u{1F0C2}'],[11,'\u{1F0C3}'],[15,'\u{1F0C4}'],[19,'\u{1F0C5}'],[23,'\u{1F0C6}'],[27,'\u{1F0C7}'],
		[31,'\u{1F0C8}'],[35,'\u{1F0C9}'],[39,'\u{1F0CA}'],[43,'\u{1F0CB}'],[47,'\u{1F0CD}'],[51,'\u{1F0CE}'],

		[4,'\u{1F0D1}'],[8,'\u{1F0D2}'],[12,'\u{1F0D3}'],[16,'\u{1F0D4}'],[20,'\u{1F0D5}'],[24,'\u{1F0D6}'],[28,'\u{1F0D7}'],
		[32,'\u{1F0D8}'],[36,'\u{1F0D9}'],[40,'\u{1F0DA}'],[44,'\u{1F0DB}'],[48,'\u{1F0DD}'],[52,'\u{1F0DE}'],[0,''],

]);

//Let all card ID numbers have their card values (1 - 13).
const cardsV = new Map([ 
		[1,1],[5,2],[9,3],[13,4],[17,5],[21,6],[25,7],
		[29,8],[33,9],[37,10],[41,11],[45,12],[49,13],

		[2,1],[6,2],[10,3],[14,4],[18,5],[22,6],[26,7],
		[30,8],[34,9],[38,10],[42,11],[46,12],[50,13],

		[3,1],[7,2],[11,3],[15,4],[19,5],[23,6],[27,7],
		[31,8],[35,9],[39,10],[43,11],[47,12],[51,13],

		[4,1],[8,2],[12,3],[16,4],[20,5],[24,6],[28,7],
		[32,8],[36,9],[40,10],[44,11],[48,12],[52,13],[0,''],

]);

//Let all card unicodes have their ID numbers
const cardsF = new Map([ 
		['\u{1F0A1}',1],['\u{1F0A2}',5],['\u{1F0A3}',9],['\u{1F0A4}',13],['\u{1F0A5}',17],['\u{1F0A6}',21],['\u{1F0A7}',25],
		['\u{1F0A8}',29],['\u{1F0A9}',33],['\u{1F0AA}',37],['\u{1F0AB}',41],['\u{1F0AD}',45],['\u{1F0AE}',49],

		['\u{1F0B1}',2],['\u{1F0B2}',6],['\u{1F0B3}',10],['\u{1F0B4}',14],['\u{1F0B5}',18],['\u{1F0B6}',22],['\u{1F0B7}',26],
		['\u{1F0B8}',30],['\u{1F0B9}',34],['\u{1F0BA}',38],['\u{1F0BB}',42],['\u{1F0BD}',46],['\u{1F0BE}',50],

		['\u{1F0C1}',3],['\u{1F0C2}',7],['\u{1F0C3}',11],['\u{1F0C4}',15],['\u{1F0C5}',19],['\u{1F0C6}',23],['\u{1F0C7}',27],
		['\u{1F0C8}',31],['\u{1F0C9}',35],['\u{1F0CA}',39],['\u{1F0CB}',43],['\u{1F0CD}',47],['\u{1F0CE}',51],

		['\u{1F0D1}',4],['\u{1F0D2}',8],['\u{1F0D3}',12],['\u{1F0D4}',16],['\u{1F0D5}',20],['\u{1F0D6}',24],['\u{1F0D7}',28],
		['\u{1F0D8}',32],['\u{1F0D9}',36],['\u{1F0DA}',40],['\u{1F0DB}',44],['\u{1F0DD}',48],['\u{1F0DE}',52],
]);


const redCard1 = [2, 6, 10, 14, 18, 22, 26, 30, 34, 38, 42, 46, 50];
const redCard2 = [3, 7, 11, 15, 19, 23, 27, 31, 35, 39, 43, 47, 51];

//Set of staright hands
let sF1 = [1, 10, 11, 12, 13];
let sF2 = [1, 2, 3, 4, 5];
let sF3 = [2, 3, 4, 5, 6];
let sF4 = [3, 4, 5, 6, 7];
let sF5 = [4, 5, 6, 7, 8];
let sF6 = [5, 6, 7, 8, 9];
let sF7 = [6, 7, 8, 9, 10];
let sF8 = [7, 8, 9, 10, 11];
let sF9 = [8, 9, 10, 11, 12];
let sF10 = [9, 10, 11, 12, 13];

//Flush hands
const flush = new Map([ 
		[1,'A'],[5,'A'],[9,'A'],[13,'A'],[17,'A'],[21,'A'],[25,'A'],
		[29,'A'],[33,'A'],[37,'A'],[41,'A'],[45,'A'],[49,'A'],

		[2,'B'],[6,'B'],[10,'B'],[14,'B'],[18,'B'],[22,'B'],[26,'B'],
		[30,'B'],[34,'B'],[38,'B'],[42,'B'],[46,'B'],[50,'B'],

		[3,'C'],[7,'C'],[11,'C'],[15,'C'],[19,'C'],[23,'C'],[27,'C'],
		[31,'C'],[35,'C'],[39,'C'],[43,'C'],[47,'C'],[51,'C'],

		[4,'D'],[8,'D'],[12,'D'],[16,'D'],[20,'D'],[24,'D'],[28,'D'],
		[32,'D'],[36,'D'],[40,'D'],[44,'D'],[48,'D'],[52,'D'],[0,''],

]);


//Check if each hand is in the hold cards
let checkHand = (hold, hand) => hand.every(v => hold.includes(v));

let removeCard = (arr, value) => arr.indexOf(value)

//End of global variables

function ar() {
		var ac = document.getElementById('AC').innerHTML;
		var aNum = Number(ac);
		var pot = document.getElementById('pot').innerHTML;
		var potNum = Number(pot);
		var r = document.getElementById('AR').innerHTML;
		var rNum = Number(r);
		var Pot = potNum + 1;	
		var coin = aNum - 1;
		var R = rNum + 1;
		document.getElementById('pot').innerHTML = Pot;
		document.getElementById('AC').innerHTML = coin;
		document.getElementById('AR').innerHTML = R;

}

function bc() {
		var bc = document.getElementById('BC').innerHTML;
		var bNum = Number(bc);
		var pot = document.getElementById('pot').innerHTML;
		var potNum = Number(pot);
		var call = document.getElementById('AR').innerHTML;
		var arNum = Number(call);
		var Pot = potNum + arNum;	
		var coin = bNum - arNum;
		document.getElementById('pot').innerHTML = Pot;
		document.getElementById('BC').innerHTML = coin;
		document.getElementById('AR').innerHTML = 0;
	
}

function br() {
		var bc = document.getElementById('BC').innerHTML;
		var bNum = Number(bc);
		var pot = document.getElementById('pot').innerHTML;
		var potNum = Number(pot);
		var r = document.getElementById('BR').innerHTML;
		var rNum = Number(r);
		var Pot = potNum + 1;	
		var coin = bNum - 1;
		var R = rNum + 1;
		document.getElementById('pot').innerHTML = Pot;
		document.getElementById('BC').innerHTML = coin;
		document.getElementById('BR').innerHTML = R;

}

function ac() {
		var ac = document.getElementById('AC').innerHTML;
		var aNum = Number(ac);
		var pot = document.getElementById('pot').innerHTML;
		var potNum = Number(pot);
		var call = document.getElementById('BR').innerHTML;
		var brNum = Number(call);
		var Pot = potNum + brNum;	
		var coin = aNum - brNum;
		document.getElementById('pot').innerHTML = Pot;
		document.getElementById('AC').innerHTML = coin;
		document.getElementById('BR').innerHTML = 0;
	
}


function aWin() {
		var ac = document.getElementById('AC').innerHTML;
		var aNum = Number(ac);
		var pot = document.getElementById('pot').innerHTML;
		var potNum = Number(pot);
		var coin = aNum + potNum;
		document.getElementById('pot').innerHTML = 0;
		document.getElementById('AC').innerHTML = coin;
	
}

function bWin() {
		var bc = document.getElementById('BC').innerHTML;
		var bNum = Number(bc);
		var pot = document.getElementById('pot').innerHTML;
		var potNum = Number(pot);
		var coin = bNum + potNum;
		document.getElementById('pot').innerHTML = 0;
		document.getElementById('BC').innerHTML = coin;
	
}
function start() {
	document.getElementById('z1').innerHTML = '\u{1F0A0}';
	document.getElementById('z1').style.color='blue';
	document.getElementById('z2').innerHTML = '\u{1F0A0}';
	document.getElementById('z2').style.color='blue';
	document.getElementById('z3').innerHTML = '\u{1F0A0}';
	document.getElementById('z3').style.color='blue';
	document.getElementById('z4').innerHTML = '\u{1F0A0}';
	document.getElementById('z4').style.color='blue';
	document.getElementById('z5').innerHTML = '\u{1F0A0}';
	document.getElementById('z5').style.color='blue';

	document.getElementById('c1').innerHTML = '\u{1F0A0}';
	document.getElementById('c1').style.color='blue';


	document.getElementById('c2').innerHTML = '\u{1F0A0}';
	document.getElementById('c2').style.color='blue';

	document.getElementById('c3').innerHTML = cards.get(0);
	document.getElementById('c4').innerHTML = cards.get(0);
	document.getElementById('c5').innerHTML = cards.get(0);


	document.getElementById('c6').innerHTML = '\u{1F0A0}';
	document.getElementById('c6').style.color='blue';

	document.getElementById('c7').innerHTML = '\u{1F0A0}';
	document.getElementById('c7').style.color='blue';

	document.getElementById('c8').innerHTML = cards.get(0);
	document.getElementById('c9').innerHTML = cards.get(0);
	document.getElementById('c10').innerHTML = cards.get(0);


	document.getElementById('a1').innerHTML = cards.get(0);
	document.getElementById('a2').innerHTML = cards.get(0);
	document.getElementById('a3').innerHTML = cards.get(0);
	document.getElementById('a4').innerHTML = cards.get(0);
	document.getElementById('a5').innerHTML = cards.get(0);
	document.getElementById('a6').innerHTML = cards.get(0);
	document.getElementById('a7').innerHTML = cards.get(0);
	document.getElementById('a8').innerHTML = '';

	document.getElementById('b1').innerHTML = cards.get(0);
	document.getElementById('b2').innerHTML = cards.get(0);
	document.getElementById('b3').innerHTML = cards.get(0);
	document.getElementById('b4').innerHTML = cards.get(0);
	document.getElementById('b5').innerHTML = cards.get(0);
	document.getElementById('b6').innerHTML = cards.get(0);
	document.getElementById('b7').innerHTML = cards.get(0);
	document.getElementById('b8').innerHTML = '';

	document.getElementById('sf').innerHTML = cards.get(0);
	document.getElementById('fo').innerHTML = cards.get(0);
	document.getElementById('full').innerHTML = cards.get(0);
	document.getElementById('flush').innerHTML = cards.get(0);
	document.getElementById('st').innerHTML = cards.get(0);
	
	document.getElementById('a1').style.margin='0px 0px';
	document.getElementById('a2').style.margin='0px 0px';
	document.getElementById('a3').style.margin='0px 0px';
	document.getElementById('a4').style.margin='0px 0px';
	document.getElementById('a5').style.margin='0px 0px';
	document.getElementById('a6').style.margin='0px 0px';
	document.getElementById('a7').style.margin='0px 0px';

	document.getElementById('b1').style.margin='0px 0px';
	document.getElementById('b2').style.margin='0px 0px';
	document.getElementById('b3').style.margin='0px 0px';
	document.getElementById('b4').style.margin='0px 0px';
	document.getElementById('b5').style.margin='0px 0px';
	document.getElementById('b6').style.margin='0px 0px';
	document.getElementById('b7').style.margin='0px 0px';

	
}

function hole() { 
	const allCards = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,
			21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,
			41,42,43,44,45,46,47,48,49,50,51,52];

	var c1 = Math.floor(Math.random()*52)+1;

	const openC1 = [c1, 0];

	const c2C = allCards.filter((value) => {
		return !openC1.includes(value)})

	var c2= c2C[(Math.random()*c2C.length)|0];

	const openC2 = [c1, c2];

	const c6C = allCards.filter((value) => {
		return !openC2.includes(value)})

	var c6 = c6C[(Math.random()*c6C.length)|0];

	const openC6 = [c1, c2, c6];

	const c7C = allCards.filter((value) => {
		return !openC6.includes(value)})

	var c7 = c7C[(Math.random()*c7C.length)|0];
	
	
	document.getElementById('c1').innerHTML = cards.get(c1);
	if(redCard1.includes(c1)){document.getElementById('c1').style.color='red';}
	else if(redCard2.includes(c1)){document.getElementById('c1').style.color='red';}
	else{document.getElementById('c1').style.color='black';}

	document.getElementById('c2').innerHTML = cards.get(c2);
	if(redCard1.includes(c2)){document.getElementById('c2').style.color='red';}
	else if(redCard2.includes(c2)){document.getElementById('c2').style.color='red';}
	else{document.getElementById('c2').style.color='black';}

	document.getElementById('c6').innerHTML = cards.get(c6);
	if(redCard1.includes(c6)){document.getElementById('c6').style.color='red';}
	else if(redCard2.includes(c6)){document.getElementById('c6').style.color='red';}
	else{document.getElementById('c6').style.color='black';}

	document.getElementById('c7').innerHTML = cards.get(c7);
	if(redCard1.includes(c7)){document.getElementById('c7').style.color='red';}
	else if(redCard2.includes(c7)){document.getElementById('c7').style.color='red';}
	else{document.getElementById('c7').style.color='black';}
	
}

function flop() {
	const allCards = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,
			21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,
			41,42,43,44,45,46,47,48,49,50,51,52];
	var c1a = document.getElementById('c1').innerHTML;
	var c1 = cardsF.get(c1a);
	var c2a = document.getElementById('c2').innerHTML;
	var c2 = cardsF.get(c2a);
	var c6a = document.getElementById('c6').innerHTML;
	var c6 = cardsF.get(c6a);
	var c7a = document.getElementById('c7').innerHTML;
	var c7 = cardsF.get(c7a);

	const openC7 = [c1, c2, c6, c7];

	const z1C = allCards.filter((value) => {
		return !openC7.includes(value)})

	var z1 = z1C[(Math.random()*z1C.length)|0];

	const openZ1 = [c1, c2, c6, c7, z1];

	const z2C = allCards.filter((value) => {
		return !openZ1.includes(value)})

	var z2 = z2C[(Math.random()*z2C.length)|0];

	const openZ2 = [c1, c2, c6, c7, z1, z2];

	const z3C = allCards.filter((value) => {
		return !openZ2.includes(value)})

	var z3 = z3C[(Math.random()*z3C.length)|0];

	document.getElementById('z1').innerHTML = cards.get(z1);
	if(redCard1.includes(z1)){document.getElementById('z1').style.color='red';}
	else if(redCard2.includes(z1)){document.getElementById('z1').style.color='red';}
	else{document.getElementById('z1').style.color='black';}

	document.getElementById('z2').innerHTML = cards.get(z2);
	if(redCard1.includes(z2)){document.getElementById('z2').style.color='red';}
	else if(redCard2.includes(z2)){document.getElementById('z2').style.color='red';}
	else{document.getElementById('z2').style.color='black';}

	document.getElementById('z3').innerHTML = cards.get(z3);
	if(redCard1.includes(z3)){document.getElementById('z3').style.color='red';}
	else if(redCard2.includes(z3)){document.getElementById('z3').style.color='red';}
	else{document.getElementById('z3').style.color='black';}

}

function turn() {
	const allCards = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,
			21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,
			41,42,43,44,45,46,47,48,49,50,51,52];
	var c1a = document.getElementById('c1').innerHTML;
	var c1 = cardsF.get(c1a);
	var c2a = document.getElementById('c2').innerHTML;
	var c2 = cardsF.get(c2a);
	var c6a = document.getElementById('c6').innerHTML;
	var c6 = cardsF.get(c6a);
	var c7a = document.getElementById('c7').innerHTML;
	var c7 = cardsF.get(c7a);
	var z1a = document.getElementById('z1').innerHTML;
	var z1 = cardsF.get(z1a);
	var z2a = document.getElementById('z2').innerHTML;
	var z2 = cardsF.get(z2a);
	var z3a = document.getElementById('z3').innerHTML;
	var z3 = cardsF.get(z3a);

	const openZ3 = [c1, c2, c6, c7, z1, z2, z3];

	const z4C = allCards.filter((value) => {
		return !openZ3.includes(value)})

	var z4 = z4C[(Math.random()*z4C.length)|0];

	document.getElementById('z4').innerHTML = cards.get(z4);
	if(redCard1.includes(z4)){document.getElementById('z4').style.color='red';}
	else if(redCard2.includes(z4)){document.getElementById('z4').style.color='red';}
	else{document.getElementById('z4').style.color='black';}

}
 
function river() {
	const allCards = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,
			21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,
			41,42,43,44,45,46,47,48,49,50,51,52];
	var c1a = document.getElementById('c1').innerHTML;
	var c1 = cardsF.get(c1a);
	var c2a = document.getElementById('c2').innerHTML;
	var c2 = cardsF.get(c2a);
	var c6a = document.getElementById('c6').innerHTML;
	var c6 = cardsF.get(c6a);
	var c7a = document.getElementById('c7').innerHTML;
	var c7 = cardsF.get(c7a);
	var z1a = document.getElementById('z1').innerHTML;
	var z1 = cardsF.get(z1a);
	var z2a = document.getElementById('z2').innerHTML;
	var z2 = cardsF.get(z2a);
	var z3a = document.getElementById('z3').innerHTML;
	var z3 = cardsF.get(z3a);
	var z4a = document.getElementById('z4').innerHTML;
	var z4 = cardsF.get(z4a);

	const openZ4 = [c1, c2, c6, c7, z1, z2, z3, z4];

	const z5C = allCards.filter((value) => {
		return !openZ4.includes(value)})

	var z5 = z5C[(Math.random()*z5C.length)|0];

	document.getElementById('z5').innerHTML = cards.get(z5);
	if(redCard1.includes(z5)){document.getElementById('z5').style.color='red';}
	else if(redCard2.includes(z5)){document.getElementById('z5').style.color='red';}
	else{document.getElementById('z5').style.color='black';}

}   


function check() {
	var c1a = document.getElementById('c1').innerHTML;
	var c1 = cardsF.get(c1a);
	var c2a = document.getElementById('c2').innerHTML;
	var c2 = cardsF.get(c2a);
	var c6a = document.getElementById('c6').innerHTML;
	var c6 = cardsF.get(c6a);
	var c7a = document.getElementById('c7').innerHTML;
	var c7 = cardsF.get(c7a);
	var z1a = document.getElementById('z1').innerHTML;
	var z1 = cardsF.get(z1a);
	var z2a = document.getElementById('z2').innerHTML;
	var z2 = cardsF.get(z2a);
	var z3a = document.getElementById('z3').innerHTML;
	var z3 = cardsF.get(z3a);
	var z4a = document.getElementById('z4').innerHTML;
	var z4 = cardsF.get(z4a);
	var z5a = document.getElementById('z5').innerHTML;
	var z5 = cardsF.get(z5a);

//Hold the hole cards and the community cards.
	var hold0a =[c1, c2, z1, z2, z3, z4, z5];
	var hold0b =[c6, c7, z1, z2, z3, z4, z5];

//Sort the card ID numbers, from min to max.
	const holdA = hold0a.sort(function(a, b){return a - b});
	const holdB = hold0b.sort(function(a, b){return a - b});

	var a1V = cardsV.get(holdA[0]);
	var a2V = cardsV.get(holdA[1]);
	var a3V = cardsV.get(holdA[2]);
	var a4V = cardsV.get(holdA[3]);
	var a5V = cardsV.get(holdA[4]);
	var a6V = cardsV.get(holdA[5]);
	var a7V = cardsV.get(holdA[6]);
	var holdAV =[a1V, a2V, a3V, a4V, a5V, a6V, a7V];


//Show the card faces
	document.getElementById('a1').innerHTML = cards.get(holdA[0]);
	if(redCard1.includes(holdA[0])){document.getElementById('a1').style.color='red';}
	else if(redCard2.includes(holdA[0])){document.getElementById('a1').style.color='red';}
	else{document.getElementById('a1').style.color='black';}


	if(a1V==a2V){
		document.getElementById('a1').style.margin='10px 0px';
		document.getElementById('a2').style.margin='10px 0px';}
	else{;}

	if(a2V==a3V){
		document.getElementById('a2').style.margin='10px 0px';
		document.getElementById('a3').style.margin='10px 0px';}
	else{;}

	if(a3V==a4V){
		document.getElementById('a3').style.margin='10px 0px';
		document.getElementById('a4').style.margin='10px 0px';}
	else{;}

	if(a4V==a5V){
		document.getElementById('a4').style.margin='10px 0px';
		document.getElementById('a5').style.margin='10px 0px';}
	else{;}

	if(a5V==a6V){
		document.getElementById('a5').style.margin='10px 0px';
		document.getElementById('a6').style.margin='10px 0px';}
	else{;}

	if(a6V==a7V){
		document.getElementById('a6').style.margin='10px 0px';
		document.getElementById('a7').style.margin='10px 0px';}
	else{;}

//Three
	if(a1V==a2V && a2V==a3V){
		document.getElementById('a1').style.margin='10px 0px';
		document.getElementById('a2').style.margin='10px 0px';
		document.getElementById('a3').style.margin='10px 0px';}

	else{;}

	if(a2V==a3V && a3V==a4V){
		document.getElementById('a2').style.margin='10px 0px';
		document.getElementById('a3').style.margin='10px 0px';
		document.getElementById('a4').style.margin='10px 0px';}
	else{;}

	if(a3V==a4V && a4V==a5V){
		document.getElementById('a3').style.margin='10px 0px';
		document.getElementById('a4').style.margin='10px 0px';
		document.getElementById('a5').style.margin='10px 0px';}
	else{;}

	if(a4V==a5V && a5V==a6V){
		document.getElementById('a4').style.margin='10px 0px';
		document.getElementById('a5').style.margin='10px 0px';
		document.getElementById('a6').style.margin='10px 0px';}
	else{;}

	if(a5V==a6V && a6V==a7V){
		document.getElementById('a5').style.margin='10px 0px';
		document.getElementById('a6').style.margin='10px 0px';
		document.getElementById('a7').style.margin='10px 0px';}
	else{;}
//Full
	if(a2V==a3V && a4V==a5V && a4V==a6V){
		document.getElementById('a2').style.margin='10px 0px';
		document.getElementById('a3').style.margin='10px 0px';
		document.getElementById('a4').style.margin='10px 0px';
		document.getElementById('a5').style.margin='10px 0px';
		document.getElementById('a6').style.margin='10px 0px';
	   	document.getElementById('a8').innerHTML ='Full House!';}
	else{;}

	if(a2V==a3V && a3V==a4V && a5V==a6V){
		document.getElementById('a2').style.margin='10px 0px';
		document.getElementById('a3').style.margin='10px 0px';
		document.getElementById('a4').style.margin='10px 0px';
		document.getElementById('a5').style.margin='10px 0px';
		document.getElementById('a6').style.margin='10px 0px';
	   	document.getElementById('a8').innerHTML ='Full House!';}
	else{;}

	if(a3V==a4V && a5V==a6V && a5V==a7V){
		document.getElementById('a3').style.margin='10px 0px';
		document.getElementById('a4').style.margin='10px 0px';
		document.getElementById('a5').style.margin='10px 0px';
		document.getElementById('a6').style.margin='10px 0px';
		document.getElementById('a7').style.margin='10px 0px';
	   	document.getElementById('a8').innerHTML ='Full House!';}
	else{;}

	if(a3V==a4V && a3V==a5V && a6V==a7V){
		document.getElementById('a3').style.margin='10px 0px';
		document.getElementById('a4').style.margin='10px 0px';
		document.getElementById('a5').style.margin='10px 0px';
		document.getElementById('a6').style.margin='10px 0px';
		document.getElementById('a7').style.margin='10px 0px';
	   	document.getElementById('a8').innerHTML ='Full House!';}
	else{;}

	if(a1V==a2V && a5V==a6V && a6V==a7V){
		document.getElementById('a1').style.margin='10px 0px';
		document.getElementById('a2').style.margin='10px 0px';
		document.getElementById('a5').style.margin='10px 0px';
		document.getElementById('a6').style.margin='10px 0px';
		document.getElementById('a7').style.margin='10px 0px';
	   	document.getElementById('a8').innerHTML ='Full House!';}
	else{;}

	if(a1V==a2V && a4V==a5V && a5V==a6V){
		document.getElementById('a1').style.margin='10px 0px';
		document.getElementById('a2').style.margin='10px 0px';
		document.getElementById('a4').style.margin='10px 0px';
		document.getElementById('a5').style.margin='10px 0px';
		document.getElementById('a6').style.margin='10px 0px';
	   	document.getElementById('a8').innerHTML ='Full House!';}
	else{;}

	if(a1V==a2V && a3V==a4V && a4V==a5V){
		document.getElementById('a1').style.margin='10px 0px';
		document.getElementById('a2').style.margin='10px 0px';
		document.getElementById('a3').style.margin='10px 0px';
		document.getElementById('a4').style.margin='10px 0px';
		document.getElementById('a5').style.margin='10px 0px';
	   	document.getElementById('a8').innerHTML ='Full House!';}
	else{;}

	if(a1V==a2V && a2V==a3V && a5V==a6V){
		document.getElementById('a1').style.margin='10px 0px';
		document.getElementById('a2').style.margin='10px 0px';
		document.getElementById('a3').style.margin='10px 0px';
		document.getElementById('a5').style.margin='10px 0px';
		document.getElementById('a6').style.margin='10px 0px';
	   	document.getElementById('a8').innerHTML ='Full House!';}
	else{;}

	if(a1V==a2V && a2V==a3V && a4V==a5V){
		document.getElementById('a1').style.margin='10px 0px';
		document.getElementById('a2').style.margin='10px 0px';
		document.getElementById('a3').style.margin='10px 0px';
		document.getElementById('a4').style.margin='10px 0px';
		document.getElementById('a5').style.margin='10px 0px';
	   	document.getElementById('a8').innerHTML ='Full House!';}
	else{;}

	if(a1V==a2V && a2V==a3V && a6V==a7V){
		document.getElementById('a1').style.margin='10px 0px';
		document.getElementById('a2').style.margin='10px 0px';
		document.getElementById('a3').style.margin='10px 0px';
		document.getElementById('a6').style.margin='10px 0px';
		document.getElementById('a7').style.margin='10px 0px';
	   	document.getElementById('a8').innerHTML ='Full House!';}
	else{;}

//Four
	if(a1V==a2V && a2V==a3V && a3V==a4V){
		document.getElementById('a1').style.margin='10px 0px';
		document.getElementById('a2').style.margin='10px 0px';
		document.getElementById('a3').style.margin='10px 0px';
		document.getElementById('a4').style.margin='10px 0px';}


	else{;}

	if(a2V==a3V && a3V==a4V && a4V==a5V){
		document.getElementById('a2').style.margin='10px 0px';
		document.getElementById('a3').style.margin='10px 0px';
		document.getElementById('a4').style.margin='10px 0px';
		document.getElementById('a5').style.margin='10px 0px';}


	else{;}

	if(a3V==a4V && a4V==a5V && a5V==a6V){
		document.getElementById('a3').style.margin='10px 0px';
		document.getElementById('a4').style.margin='10px 0px';
		document.getElementById('a5').style.margin='10px 0px';
		document.getElementById('a6').style.margin='10px 0px';}


	else{;}

	if(a4V==a5V && a5V==a6V && a6V==a7V){
		document.getElementById('a4').style.margin='10px 0px';
		document.getElementById('a5').style.margin='10px 0px';
		document.getElementById('a6').style.margin='10px 0px';
		document.getElementById('a7').style.margin='10px 0px';}


	else{;}

	document.getElementById('a2').innerHTML = cards.get(holdA[1]);
	if(redCard1.includes(holdA[1])){document.getElementById('a2').style.color='red';}
	else if(redCard2.includes(holdA[1])){document.getElementById('a2').style.color='red';}
	else{document.getElementById('a2').style.color='black';}

	document.getElementById('a3').innerHTML = cards.get(holdA[2]);
	if(redCard1.includes(holdA[2])){document.getElementById('a3').style.color='red';}
	else if(redCard2.includes(holdA[2])){document.getElementById('a3').style.color='red';}
	else{document.getElementById('a3').style.color='black';}

	document.getElementById('a4').innerHTML = cards.get(holdA[3]);
	if(redCard1.includes(holdA[3])){document.getElementById('a4').style.color='red';}
	else if(redCard2.includes(holdA[3])){document.getElementById('a4').style.color='red';}
	else{document.getElementById('a4').style.color='black';}

	document.getElementById('a5').innerHTML = cards.get(holdA[4]);
	if(redCard1.includes(holdA[4])){document.getElementById('a5').style.color='red';}
	else if(redCard2.includes(holdA[4])){document.getElementById('a5').style.color='red';}
	else{document.getElementById('a5').style.color='black';}

	document.getElementById('a6').innerHTML = cards.get(holdA[5]);
	if(redCard1.includes(holdA[5])){document.getElementById('a6').style.color='red';}
	else if(redCard2.includes(holdA[5])){document.getElementById('a6').style.color='red';}
	else{document.getElementById('a6').style.color='black';}

	document.getElementById('a7').innerHTML = cards.get(holdA[6]);
	if(redCard1.includes(holdA[6])){document.getElementById('a7').style.color='red';}
	else if(redCard2.includes(holdA[6])){document.getElementById('a7').style.color='red';}
	else{document.getElementById('a7').style.color='black';}

	document.getElementById('b1').innerHTML = cards.get(holdB[0]);
	if(redCard1.includes(holdB[0])){document.getElementById('b1').style.color='red';}
	else if(redCard2.includes(holdB[0])){document.getElementById('b1').style.color='red';}
	else{document.getElementById('b1').style.color='black';}

	document.getElementById('b2').innerHTML = cards.get(holdB[1]);
	if(redCard1.includes(holdB[1])){document.getElementById('b2').style.color='red';}
	else if(redCard2.includes(holdB[1])){document.getElementById('b2').style.color='red';}
	else{document.getElementById('b2').style.color='black';}

	document.getElementById('b3').innerHTML = cards.get(holdB[2]);
	if(redCard1.includes(holdB[2])){document.getElementById('b3').style.color='red';}
	else if(redCard2.includes(holdB[2])){document.getElementById('b3').style.color='red';}
	else{document.getElementById('b3').style.color='black';}

	document.getElementById('b4').innerHTML = cards.get(holdB[3]);
	if(redCard1.includes(holdB[3])){document.getElementById('b4').style.color='red';}
	else if(redCard2.includes(holdB[3])){document.getElementById('b4').style.color='red';}
	else{document.getElementById('b4').style.color='black';}

	document.getElementById('b5').innerHTML = cards.get(holdB[4]);
	if(redCard1.includes(holdB[4])){document.getElementById('b5').style.color='red';}
	else if(redCard2.includes(holdB[4])){document.getElementById('b5').style.color='red';}
	else{document.getElementById('b5').style.color='black';}

	document.getElementById('b6').innerHTML = cards.get(holdB[5]);
	if(redCard1.includes(holdB[5])){document.getElementById('b6').style.color='red';}
	else if(redCard2.includes(holdB[5])){document.getElementById('b6').style.color='red';}
	else{document.getElementById('b6').style.color='black';}

	document.getElementById('b7').innerHTML = cards.get(holdB[6]);
	if(redCard1.includes(holdB[6])){document.getElementById('b7').style.color='red';}
	else if(redCard2.includes(holdB[6])){document.getElementById('b7').style.color='red';}
	else{document.getElementById('b7').style.color='black';}

//Straight Check
        if(checkHand(holdAV, sF1)==true || checkHand(holdAV, sF2)==true ||
	checkHand(holdAV, sF3)==true || checkHand(holdAV, sF4)==true ||
	checkHand(holdAV, sF5)==true || checkHand(holdAV, sF6)==true ||
	checkHand(holdAV, sF7)==true || checkHand(holdAV, sF8)==true ||
	checkHand(holdAV, sF9)==true || checkHand(holdAV, sF10)==true){
		document.getElementById('a1').style.color='green';
		document.getElementById('a2').style.color='green';
		document.getElementById('a3').style.color='green';
		document.getElementById('a4').style.color='green';
		document.getElementById('a5').style.color='green';
		document.getElementById('a6').style.color='green';
		document.getElementById('a7').style.color='green';
		document.getElementById('a8').innerHTML='A: Straight!';}
	else{;}

//Flush Check
	let aFlush = [flush.get(holdA[0]),flush.get(holdA[1]),flush.get(holdA[2]),flush.get(holdA[3]),flush.get(holdA[4]),flush.get(holdA[5]), flush.get(holdA[6])];
	let aFlushCheckA = aFlush.filter(x => x == 'A').length;
	let aFlushCheckB = aFlush.filter(x => x == 'B').length;
	let aFlushCheckC = aFlush.filter(x => x == 'C').length;
	let aFlushCheckD = aFlush.filter(x => x == 'D').length;
	if(aFlushCheckA > 4 || aFlushCheckB > 4 || aFlushCheckC > 4  || aFlushCheckD > 4){		document.getElementById('a1').style.color='blue';
	document.getElementById('a2').style.color='blue';
	document.getElementById('a3').style.color='blue';
	document.getElementById('a4').style.color='blue';
	document.getElementById('a5').style.color='blue';
	document.getElementById('a6').style.color='blue';
	document.getElementById('a7').style.color='blue';
	document.getElementById('a8').innerHTML='A: Flush!';}
	else{;}

	var b1V = cardsV.get(holdB[0]);
	var b2V = cardsV.get(holdB[1]);
	var b3V = cardsV.get(holdB[2]);
	var b4V = cardsV.get(holdB[3]);
	var b5V = cardsV.get(holdB[4]);
	var b6V = cardsV.get(holdB[5]);
	var b7V = cardsV.get(holdB[6]);
	var holdBV =[b1V, b2V, b3V, b4V, b5V, b6V, b7V];


//Show the card faces
	document.getElementById('b1').innerHTML = cards.get(holdB[0]);
	if(redCard1.includes(holdB[0])){document.getElementById('b1').style.color='red';}
	else if(redCard2.includes(holdB[0])){document.getElementById('b1').style.color='red';}
	else{document.getElementById('b1').style.color='black';}


	if(b1V==b2V){
		document.getElementById('b1').style.margin='10px 0px';
		document.getElementById('b2').style.margin='10px 0px';}
	else{;}

	if(b2V==b3V){
		document.getElementById('b2').style.margin='10px 0px';
		document.getElementById('b3').style.margin='10px 0px';}
	else{;}

	if(b3V==b4V){
		document.getElementById('b3').style.margin='10px 0px';
		document.getElementById('b4').style.margin='10px 0px';}
	else{;}

	if(b4V==b5V){
		document.getElementById('b4').style.margin='10px 0px';
		document.getElementById('b5').style.margin='10px 0px';}
	else{;}

	if(b5V==b6V){
		document.getElementById('b5').style.margin='10px 0px';
		document.getElementById('b6').style.margin='10px 0px';}
	else{;}

	if(b6V==b7V){
		document.getElementById('b6').style.margin='10px 0px';
		document.getElementById('b7').style.margin='10px 0px';}
	else{;}

//Three
	if(b1V==b2V && b2V==b3V){
		document.getElementById('b1').style.margin='10px 0px';
		document.getElementById('b2').style.margin='10px 0px';
		document.getElementById('b3').style.margin='10px 0px';}

	else{;}

	if(b2V==b3V && b3V==b4V){
		document.getElementById('b2').style.margin='10px 0px';
		document.getElementById('b3').style.margin='10px 0px';
		document.getElementById('b4').style.margin='10px 0px';}
	else{;}

	if(b3V==b4V && b4V==b5V){
		document.getElementById('b3').style.margin='10px 0px';
		document.getElementById('b4').style.margin='10px 0px';
		document.getElementById('b5').style.margin='10px 0px';}
	else{;}

	if(b4V==b5V && b5V==b6V){
		document.getElementById('b4').style.margin='10px 0px';
		document.getElementById('b5').style.margin='10px 0px';
		document.getElementById('b6').style.margin='10px 0px';}
	else{;}

	if(b5V==b6V && b6V==b7V){
		document.getElementById('b5').style.margin='10px 0px';
		document.getElementById('b6').style.margin='10px 0px';
		document.getElementById('b7').style.margin='10px 0px';}
	else{;}

//Full
	if(b2V==b3V && b4V==b5V && b4V==b6V){
		document.getElementById('b2').style.margin='10px 0px';
		document.getElementById('b3').style.margin='10px 0px';
		document.getElementById('b4').style.margin='10px 0px';
		document.getElementById('b5').style.margin='10px 0px';
		document.getElementById('b6').style.margin='10px 0px';
	   	document.getElementById('b8').innerHTML ='Full House!';}
	else{;}

	if(b2V==b3V && b3V==b4V && b5V==b6V){
		document.getElementById('b2').style.margin='10px 0px';
		document.getElementById('b3').style.margin='10px 0px';
		document.getElementById('b4').style.margin='10px 0px';
		document.getElementById('b5').style.margin='10px 0px';
		document.getElementById('b6').style.margin='10px 0px';
	   	document.getElementById('b8').innerHTML ='Full House!';}
	else{;}


	if(b3V==b4V && b5V==b6V && b5V==b7V){
		document.getElementById('b3').style.margin='10px 0px';
		document.getElementById('b4').style.margin='10px 0px';
		document.getElementById('b5').style.margin='10px 0px';
		document.getElementById('b6').style.margin='10px 0px';
		document.getElementById('b7').style.margin='10px 0px';
	   	document.getElementById('b8').innerHTML ='Full House!';}
	else{;}

	if(b3V==b4V && b3V==b5V && b6V==b7V){
		document.getElementById('b3').style.margin='10px 0px';
		document.getElementById('b4').style.margin='10px 0px';
		document.getElementById('b5').style.margin='10px 0px';
		document.getElementById('b6').style.margin='10px 0px';
		document.getElementById('b7').style.margin='10px 0px';
	   	document.getElementById('b8').innerHTML ='Full House!';}
	else{;}

	if(b1V==b2V && b5V==b6V && b6V==b7V){
		document.getElementById('b1').style.margin='10px 0px';
		document.getElementById('b2').style.margin='10px 0px';
		document.getElementById('b5').style.margin='10px 0px';
		document.getElementById('b6').style.margin='10px 0px';
		document.getElementById('b7').style.margin='10px 0px';
	   	document.getElementById('b8').innerHTML ='Full House!';}
	else{;}

	if(b1V==b2V && b4V==b5V && b5V==b6V){
		document.getElementById('b1').style.margin='10px 0px';
		document.getElementById('b2').style.margin='10px 0px';
		document.getElementById('b4').style.margin='10px 0px';
		document.getElementById('b5').style.margin='10px 0px';
		document.getElementById('b6').style.margin='10px 0px';
	   	document.getElementById('b8').innerHTML ='Full House!';}
	else{;}

	if(b1V==b2V && b3V==b4V && b4V==b5V){
		document.getElementById('b1').style.margin='10px 0px';
		document.getElementById('b2').style.margin='10px 0px';
		document.getElementById('b3').style.margin='10px 0px';
		document.getElementById('b4').style.margin='10px 0px';
		document.getElementById('b5').style.margin='10px 0px';
	   	document.getElementById('b8').innerHTML ='Full House!';}
	else{;}

	if(b1V==b2V && b2V==b3V && b5V==b6V){
		document.getElementById('b1').style.margin='10px 0px';
		document.getElementById('b2').style.margin='10px 0px';
		document.getElementById('b3').style.margin='10px 0px';
		document.getElementById('b5').style.margin='10px 0px';
		document.getElementById('b6').style.margin='10px 0px';
	   	document.getElementById('b8').innerHTML ='Full House!';}
	else{;}

	if(b1V==b2V && b2V==b3V && b4V==b5V){
		document.getElementById('b1').style.margin='10px 0px';
		document.getElementById('b2').style.margin='10px 0px';
		document.getElementById('b3').style.margin='10px 0px';
		document.getElementById('b4').style.margin='10px 0px';
		document.getElementById('b5').style.margin='10px 0px';
	   	document.getElementById('b8').innerHTML ='Full House!';}
	else{;}

	if(b1V==b2V && b2V==b3V && b6V==b7V){
		document.getElementById('b1').style.margin='10px 0px';
		document.getElementById('b2').style.margin='10px 0px';
		document.getElementById('b3').style.margin='10px 0px';
		document.getElementById('b6').style.margin='10px 0px';
		document.getElementById('b7').style.margin='10px 0px';
	   	document.getElementById('b8').innerHTML ='Full House!';}
	else{;}

//Four
	if(b1V==b2V && a2V==b3V && a3V==b4V){
		document.getElementById('b1').style.margin='10px 0px';
		document.getElementById('b2').style.margin='10px 0px';
		document.getElementById('b3').style.margin='10px 0px';
		document.getElementById('b4').style.margin='10px 0px';}


	else{;}

	if(b2V==b3V && a3V==b4V && a4V==b5V){
		document.getElementById('b2').style.margin='10px 0px';
		document.getElementById('b3').style.margin='10px 0px';
		document.getElementById('b4').style.margin='10px 0px';
		document.getElementById('b5').style.margin='10px 0px';}


	else{;}

	if(b3V==b4V && a4V==b5V && a5V==b6V){
		document.getElementById('b3').style.margin='10px 0px';
		document.getElementById('b4').style.margin='10px 0px';
		document.getElementById('b5').style.margin='10px 0px';
		document.getElementById('b6').style.margin='10px 0px';}


	else{;}

	if(b4V==b5V && a5V==b6V && a6V==b7V){
		document.getElementById('b4').style.margin='10px 0px';
		document.getElementById('b5').style.margin='10px 0px';
		document.getElementById('b6').style.margin='10px 0px';
		document.getElementById('b7').style.margin='10px 0px';}


	else{;}

	document.getElementById('b2').innerHTML = cards.get(holdB[1]);
	if(redCard1.includes(holdB[1])){document.getElementById('b2').style.color='red';}
	else if(redCard2.includes(holdB[1])){document.getElementById('b2').style.color='red';}
	else{document.getElementById('b2').style.color='black';}

	document.getElementById('b3').innerHTML = cards.get(holdB[2]);
	if(redCard1.includes(holdB[2])){document.getElementById('b3').style.color='red';}
	else if(redCard2.includes(holdB[2])){document.getElementById('b3').style.color='red';}
	else{document.getElementById('b3').style.color='black';}

	document.getElementById('b4').innerHTML = cards.get(holdB[3]);
	if(redCard1.includes(holdB[3])){document.getElementById('b4').style.color='red';}
	else if(redCard2.includes(holdB[3])){document.getElementById('b4').style.color='red';}
	else{document.getElementById('b4').style.color='black';}

	document.getElementById('b5').innerHTML = cards.get(holdB[4]);
	if(redCard1.includes(holdB[4])){document.getElementById('b5').style.color='red';}
	else if(redCard2.includes(holdB[4])){document.getElementById('b5').style.color='red';}
	else{document.getElementById('b5').style.color='black';}

	document.getElementById('b6').innerHTML = cards.get(holdB[5]);
	if(redCard1.includes(holdB[5])){document.getElementById('b6').style.color='red';}
	else if(redCard2.includes(holdB[5])){document.getElementById('b6').style.color='red';}
	else{document.getElementById('b6').style.color='black';}

	document.getElementById('b7').innerHTML = cards.get(holdB[6]);
	if(redCard1.includes(holdB[6])){document.getElementById('b7').style.color='red';}
	else if(redCard2.includes(holdB[6])){document.getElementById('b7').style.color='red';}
	else{document.getElementById('b7').style.color='black';}

	document.getElementById('b1').innerHTML = cards.get(holdB[0]);
	if(redCard1.includes(holdB[0])){document.getElementById('b1').style.color='red';}
	else if(redCard2.includes(holdB[0])){document.getElementById('b1').style.color='red';}
	else{document.getElementById('b1').style.color='black';}

	document.getElementById('b2').innerHTML = cards.get(holdB[1]);
	if(redCard1.includes(holdB[1])){document.getElementById('b2').style.color='red';}
	else if(redCard2.includes(holdB[1])){document.getElementById('b2').style.color='red';}
	else{document.getElementById('b2').style.color='black';}

	document.getElementById('b3').innerHTML = cards.get(holdB[2]);
	if(redCard1.includes(holdB[2])){document.getElementById('b3').style.color='red';}
	else if(redCard2.includes(holdB[2])){document.getElementById('b3').style.color='red';}
	else{document.getElementById('b3').style.color='black';}

	document.getElementById('b4').innerHTML = cards.get(holdB[3]);
	if(redCard1.includes(holdB[3])){document.getElementById('b4').style.color='red';}
	else if(redCard2.includes(holdB[3])){document.getElementById('b4').style.color='red';}
	else{document.getElementById('b4').style.color='black';}

	document.getElementById('b5').innerHTML = cards.get(holdB[4]);
	if(redCard1.includes(holdB[4])){document.getElementById('b5').style.color='red';}
	else if(redCard2.includes(holdB[4])){document.getElementById('b5').style.color='red';}
	else{document.getElementById('b5').style.color='black';}

	document.getElementById('b6').innerHTML = cards.get(holdB[5]);
	if(redCard1.includes(holdB[5])){document.getElementById('b6').style.color='red';}
	else if(redCard2.includes(holdB[5])){document.getElementById('b6').style.color='red';}
	else{document.getElementById('b6').style.color='black';}

	document.getElementById('b7').innerHTML = cards.get(holdB[6]);
	if(redCard1.includes(holdB[6])){document.getElementById('b7').style.color='red';}
	else if(redCard2.includes(holdB[6])){document.getElementById('b7').style.color='red';}
	else{document.getElementById('b7').style.color='black';}

//Straight Check
        if(checkHand(holdBV, sF1)==true || checkHand(holdBV, sF2)==true ||
	checkHand(holdBV, sF3)==true || checkHand(holdBV, sF4)==true ||
	checkHand(holdBV, sF5)==true || checkHand(holdBV, sF6)==true ||
	checkHand(holdBV, sF7)==true || checkHand(holdBV, sF8)==true ||
	checkHand(holdBV, sF9)==true || checkHand(holdBV, sF10)==true){
		document.getElementById('b1').style.color='green';
		document.getElementById('b2').style.color='green';
		document.getElementById('b3').style.color='green';
		document.getElementById('b4').style.color='green';
		document.getElementById('b5').style.color='green';
		document.getElementById('b6').style.color='green';
		document.getElementById('b7').style.color='green';
		document.getElementById('b8').innerHTML='B: Straight!';}
	else{;}

	let bFlush = [flush.get(holdB[0]),flush.get(holdB[1]),flush.get(holdB[2]),
			flush.get(holdB[3]),flush.get(holdB[4]),flush.get(holdB[5]), flush.get(holdB[6])];
	let bFlushCheckA = bFlush.filter(x => x == 'A').length;
	let bFlushCheckB = bFlush.filter(x => x == 'B').length;
	let bFlushCheckC = bFlush.filter(x => x == 'C').length;
	let bFlushCheckD = bFlush.filter(x => x == 'D').length;
	if(bFlushCheckA > 4 || bFlushCheckB > 4 || bFlushCheckC > 4  || bFlushCheckD > 4){		document.getElementById('b1').style.color='blue';
	document.getElementById('b2').style.color='blue';
	document.getElementById('b3').style.color='blue';
	document.getElementById('b4').style.color='blue';
	document.getElementById('b5').style.color='blue';
	document.getElementById('b6').style.color='blue';
	document.getElementById('b7').style.color='blue';
	document.getElementById('b8').innerHTML='B: Flush!';}
	else{;}

}

function help() {
	document.getElementById('sf').innerHTML = 'Straight Flush';
	document.getElementById('c1').innerHTML = cards.get(37);
	document.getElementById('c1').style.color='black';
	document.getElementById('c2').innerHTML = cards.get(41);
	document.getElementById('c2').style.color='black';
	document.getElementById('c3').innerHTML = cards.get(45);
	document.getElementById('c3').style.color='black';
	document.getElementById('c4').innerHTML = cards.get(49);
	document.getElementById('c4').style.color='black';
	document.getElementById('c5').innerHTML = cards.get(1);
	document.getElementById('c5').style.color='black';

	document.getElementById('fo').innerHTML = 'Four of Kind';
	document.getElementById('z1').innerHTML = cards.get(1);
	document.getElementById('z1').style.color='black';
	document.getElementById('z2').innerHTML = cards.get(2);
	document.getElementById('z2').style.color='red';
	document.getElementById('z3').innerHTML = cards.get(3);
	document.getElementById('z3').style.color='red';
	document.getElementById('z4').innerHTML = cards.get(4);
	document.getElementById('z4').style.color='black';
	document.getElementById('z5').innerHTML = cards.get(37);
	document.getElementById('z5').style.color='black';

	document.getElementById('full').innerHTML = 'Full House';
	document.getElementById('c6').innerHTML = cards.get(49);
	document.getElementById('c6').style.color='black';
	document.getElementById('c7').innerHTML = cards.get(50);
	document.getElementById('c7').style.color='red';
	document.getElementById('c8').innerHTML = cards.get(51);
	document.getElementById('c8').style.color='red';
	document.getElementById('c9').innerHTML = cards.get(37);
	document.getElementById('c9').style.color='black';
	document.getElementById('c10').innerHTML = cards.get(38);
	document.getElementById('c10').style.color='red';

	document.getElementById('flush').innerHTML = 'Flush';
	document.getElementById('a1').innerHTML = cards.get(5);
	document.getElementById('a1').style.color='black';
	document.getElementById('a2').innerHTML = cards.get(13);
	document.getElementById('a2').style.color='black';
	document.getElementById('a3').innerHTML = cards.get(25);
	document.getElementById('a3').style.color='black';
	document.getElementById('a4').innerHTML = cards.get(29);
	document.getElementById('a4').style.color='black';
	document.getElementById('a5').innerHTML = cards.get(49);
	document.getElementById('a5').style.color='black';

	document.getElementById('st').innerHTML = 'Straight';
	document.getElementById('b1').innerHTML = cards.get(1);
	document.getElementById('b1').style.color='black';
	document.getElementById('b2').innerHTML = cards.get(6);
	document.getElementById('b2').style.color='red';
	document.getElementById('b3').innerHTML = cards.get(11);
	document.getElementById('b3').style.color='red';
	document.getElementById('b4').innerHTML = cards.get(16);
	document.getElementById('b4').style.color='black';
	document.getElementById('b5').innerHTML = cards.get(17);
	document.getElementById('b5').style.color='black';}

function reload() {
	document.getElementById('c1').innerHTML = cards.get(0);
	document.getElementById('c2').innerHTML = cards.get(0);
	document.getElementById('c3').innerHTML = cards.get(0);
	document.getElementById('c4').innerHTML = cards.get(0);
	document.getElementById('c5').innerHTML = cards.get(0);

	document.getElementById('z1').innerHTML = cards.get(0);
	document.getElementById('z2').innerHTML = cards.get(0);
	document.getElementById('z3').innerHTML = cards.get(0);
	document.getElementById('z4').innerHTML = cards.get(0);
	document.getElementById('z5').innerHTML = cards.get(0);

	document.getElementById('c6').innerHTML = cards.get(0);
	document.getElementById('c7').innerHTML = cards.get(0);
	document.getElementById('c8').innerHTML = cards.get(0);
	document.getElementById('c9').innerHTML = cards.get(0);
	document.getElementById('c10').innerHTML = cards.get(0);

	document.getElementById('a1').innerHTML = cards.get(0);
	document.getElementById('a2').innerHTML = cards.get(0);
	document.getElementById('a3').innerHTML = cards.get(0);
	document.getElementById('a4').innerHTML = cards.get(0);
	document.getElementById('a5').innerHTML = cards.get(0);
	document.getElementById('a6').innerHTML = cards.get(0);
	document.getElementById('a7').innerHTML = cards.get(0);
	document.getElementById('a8').innerHTML = '';

	document.getElementById('b1').innerHTML = cards.get(0);
	document.getElementById('b2').innerHTML = cards.get(0);
	document.getElementById('b3').innerHTML = cards.get(0);
	document.getElementById('b4').innerHTML = cards.get(0);
	document.getElementById('b5').innerHTML = cards.get(0);
	document.getElementById('b6').innerHTML = cards.get(0);
	document.getElementById('b7').innerHTML = cards.get(0);
	document.getElementById('b8').innerHTML = '';

	document.getElementById('AC').innerHTML = 0;
	document.getElementById('BC').innerHTML = 0;
	document.getElementById('pot').innerHTML = 0;

	document.getElementById('sf').innerHTML = cards.get(0);
	document.getElementById('fo').innerHTML = cards.get(0);
	document.getElementById('full').innerHTML = cards.get(0);
	document.getElementById('flush').innerHTML = cards.get(0);
	document.getElementById('st').innerHTML = cards.get(0);


}

