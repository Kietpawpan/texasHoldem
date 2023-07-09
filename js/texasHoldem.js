/* Copyright (c) 2023 Montri Kiatphaophan
 * cards.js v1.0.1 | All rights reserved.
*/

/*
Let's have 52 playing cards, with the ID numbers from 1 to 52,
and the relative card suits of Spades, Hearts, Diamonds, and Clubs.
The ID numbers are given as follows:

Suit 		A B C D (A:Spades, B:Hearts, C: Diamonds, and D: Clubs)
Card ID No. 	1 2 3 4
		5 6 7 8
		9 10 11 12 
		13 14 15 16
		17 18 19 20
		21 22 23 24
		25 26 27 28
		29 30 31 32
		33 34 35 36
		37 38 39 40
		41 42 43 44 
		45 46 47 48
		49 50 51 51

*/

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

// All the card ID numbers have their values from 1 to 13 according to the face for each suit.
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

//Let all card unicodes have their ID numbers.
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

//Classify the red cards, based on the ID No.
const redCard1 = [2, 6, 10, 14, 18, 22, 26, 30, 34, 38, 42, 46, 50];
const redCard2 = [3, 7, 11, 15, 19, 23, 27, 31, 35, 39, 43, 47, 51];

//Staright hands.
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


//Check if each hand is in the hold cards, or see if array A is a subset of array B.
// hold is parent array. hand is child array.

let checkHand = (hold, hand) => hand.every(v => hold.includes(v));


function hole() {

//All possible card numbers in the four suits.

	const allCards = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,
			21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,
			41,42,43,44,45,46,47,48,49,50,51,52];

//Randomly select the first hole card for player A, the output is an interger between 1 and 52.

	var c1 = Math.floor(Math.random()*52)+1;

//Create the array of opened cards after playing the first hole card.

	const openC1 = [c1];

//Remove the opened card (in openC1) from the original card suits (allCards).

	const c6C = allCards.filter((value) => {
		return !openC1.includes(value)})

//Randomly select the first hole card for player B.

	var c6= c6C[(Math.random()*c6C.length)|0];

//Create the array of opened cards after playing the second hole card.

	const openC6 = [c1, c6];

	const c2C = allCards.filter((value) => {
		return !openC6.includes(value)})

	var c2 = c2C[(Math.random()*c2C.length)|0];

	const openC2 = [c1, c6, c2];

	const c7C = allCards.filter((value) => {
		return !openC2.includes(value)})

	var c7 = c7C[(Math.random()*c7C.length)|0];

//Show the red cards (if any)
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
	document.getElementById('a8').innerHTML = '';
	document.getElementById('b8').innerHTML = '';
	document.getElementById('a8').style.color='black';
	document.getElementById('b8').style.color='black';

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

//Combine the hole cards with the community cards.
	var hold0a =[c1, c2, z1, z2, z3, z4, z5];
	var hold0b =[c6, c7, z1, z2, z3, z4, z5];

//Sort the card ID numbers, from min to max.
	const holdA = hold0a.sort(function(a, b){return a - b});
	const holdB = hold0b.sort(function(a, b){return a - b});

//Get the card values
	var a1V = cardsV.get(holdA[0]);
	var a2V = cardsV.get(holdA[1]);
	var a3V = cardsV.get(holdA[2]);
	var a4V = cardsV.get(holdA[3]);
	var a5V = cardsV.get(holdA[4]);
	var a6V = cardsV.get(holdA[5]);
	var a7V = cardsV.get(holdA[6]);

//Arrange the cards from A, 2, 3,..., J, Q, K
	var holdAV =[a1V, a2V, a3V, a4V, a5V, a6V, a7V];

//For Straight Check
	var holdAV1 =[a1V, a2V, a3V, a4V, a5V];
	var holdAV2 =[a2V, a3V, a4V, a5V, a6V];
	var holdAV3 =[a3V, a4V, a5V, a6V, a7V];

//Shift the cards down for 10px if the values are identical.

//Pair
	if(a1V==a2V){
		document.getElementById('a1').style.margin='10px 0px';
		document.getElementById('a2').style.margin='10px 0px';
	   	document.getElementById('a8').innerHTML ='One pair!';}
	else{;}

	if(a2V==a3V){
		document.getElementById('a2').style.margin='10px 0px';
		document.getElementById('a3').style.margin='10px 0px';
	   	document.getElementById('a8').innerHTML ='One pair!';}
	else{;}

	if(a3V==a4V){
		document.getElementById('a3').style.margin='10px 0px';
		document.getElementById('a4').style.margin='10px 0px';
	   	document.getElementById('a8').innerHTML ='One pair!';}
	else{;}

	if(a4V==a5V){
		document.getElementById('a4').style.margin='10px 0px';
		document.getElementById('a5').style.margin='10px 0px';
	   	document.getElementById('a8').innerHTML ='One pair!';}
	else{;}

	if(a5V==a6V){
		document.getElementById('a5').style.margin='10px 0px';
		document.getElementById('a6').style.margin='10px 0px';
	   	document.getElementById('a8').innerHTML ='One pair!';}
	else{;}

	if(a6V==a7V){
		document.getElementById('a6').style.margin='10px 0px';
		document.getElementById('a7').style.margin='10px 0px';
	   	document.getElementById('a8').innerHTML ='One pair!';}
	else{;}

//Two pairs
	if(a1V==a2V && a3V==a4V){
	   	document.getElementById('a8').innerHTML ='Two pair!';}
	else{;}

	if(a1V==a2V && a4V==a5V){
	   	document.getElementById('a8').innerHTML ='Two pair!';}
	else{;}

	if(a1V==a2V && a5V==a6V){
	   	document.getElementById('a8').innerHTML ='Two pair!';}
	else{;}

	if(a1V==a2V && a6V==a7V){
	   	document.getElementById('a8').innerHTML ='Two pair!';}
	else{;}

	if(a4V==a5V && a6V==a7V){
	   	document.getElementById('a8').innerHTML ='Two pair!';}
	else{;}

	if(a3V==a4V && a6V==a7V){
	   	document.getElementById('a8').innerHTML ='Two pair!';}
	else{;}

	if(a2V==a3V && a6V==a7V){
	   	document.getElementById('a8').innerHTML ='Two pair!';}
	else{;}

	if(a2V==a3V && a4V==a5V){
	   	document.getElementById('a8').innerHTML ='Two pair!';}
	else{;}

	if(a3V==a4V && a5V==a6V){
	   	document.getElementById('a8').innerHTML ='Two pair!';}
	else{;}

	if(a2V==a3V && a5V==a6V){
	   	document.getElementById('a8').innerHTML ='Two pair!';}
	else{;}

//Three of a kind
	if(a1V==a2V && a2V==a3V){
		document.getElementById('a1').style.margin='10px 0px';
		document.getElementById('a2').style.margin='10px 0px';
		document.getElementById('a3').style.margin='10px 0px';
	   	document.getElementById('a8').innerHTML ='Three of a kind!';}
	else{;}

	if(a2V==a3V && a3V==a4V){
		document.getElementById('a2').style.margin='10px 0px';
		document.getElementById('a3').style.margin='10px 0px';
		document.getElementById('a4').style.margin='10px 0px';
	   	document.getElementById('a8').innerHTML ='Three of a kind!';}
	else{;}

	if(a3V==a4V && a4V==a5V){
		document.getElementById('a3').style.margin='10px 0px';
		document.getElementById('a4').style.margin='10px 0px';
		document.getElementById('a5').style.margin='10px 0px';
	   	document.getElementById('a8').innerHTML ='Three of a kind!';}
	else{;}

	if(a4V==a5V && a5V==a6V){
		document.getElementById('a4').style.margin='10px 0px';
		document.getElementById('a5').style.margin='10px 0px';
		document.getElementById('a6').style.margin='10px 0px';
	   	document.getElementById('a8').innerHTML ='Three of a kind!';}
	else{;}

	if(a5V==a6V && a6V==a7V){
		document.getElementById('a5').style.margin='10px 0px';
		document.getElementById('a6').style.margin='10px 0px';
		document.getElementById('a7').style.margin='10px 0px';
	   	document.getElementById('a8').innerHTML ='Three of a kind!';}
	else{;}

//Full house

	if(a2V==a3V && a4V==a5V && a5V==a6V){
		document.getElementById('a2').style.margin='10px 0px';
		document.getElementById('a3').style.margin='10px 0px';
		document.getElementById('a4').style.margin='10px 0px';
		document.getElementById('a5').style.margin='10px 0px';
		document.getElementById('a6').style.margin='10px 0px';
	   	document.getElementById('a8').innerHTML ='Full house!';}
	else{;}

	if(a2V==a3V && a3V==a4V && a5V==a6V){
		document.getElementById('a2').style.margin='10px 0px';
		document.getElementById('a3').style.margin='10px 0px';
		document.getElementById('a4').style.margin='10px 0px';
		document.getElementById('a5').style.margin='10px 0px';
		document.getElementById('a6').style.margin='10px 0px';
	   	document.getElementById('a8').innerHTML ='Full house!';}
	else{;}

	if(a2V==a3V && a5V==a6V && a6V==a7V){
		document.getElementById('a2').style.margin='10px 0px';
		document.getElementById('a3').style.margin='10px 0px';
		document.getElementById('a5').style.margin='10px 0px';
		document.getElementById('a6').style.margin='10px 0px';
		document.getElementById('a7').style.margin='10px 0px';
	   	document.getElementById('a8').innerHTML ='Full house!';}
	else{;}


	if(a3V==a4V && a5V==a6V && a6V==a7V){
		document.getElementById('a3').style.margin='10px 0px';
		document.getElementById('a4').style.margin='10px 0px';
		document.getElementById('a5').style.margin='10px 0px';
		document.getElementById('a6').style.margin='10px 0px';
		document.getElementById('a7').style.margin='10px 0px';
	   	document.getElementById('a8').innerHTML ='Full house!';}
	else{;}

	if(a3V==a4V && a4V==a5V && a6V==a7V){
		document.getElementById('a3').style.margin='10px 0px';
		document.getElementById('a4').style.margin='10px 0px';
		document.getElementById('a5').style.margin='10px 0px';
		document.getElementById('a6').style.margin='10px 0px';
		document.getElementById('a7').style.margin='10px 0px';
	   	document.getElementById('a8').innerHTML ='Full house!';}
	else{;}

	if(a1V==a2V && a5V==a6V && a6V==a7V){
		document.getElementById('a1').style.margin='10px 0px';
		document.getElementById('a2').style.margin='10px 0px';
		document.getElementById('a5').style.margin='10px 0px';
		document.getElementById('a6').style.margin='10px 0px';
		document.getElementById('a7').style.margin='10px 0px';
	   	document.getElementById('a8').innerHTML ='Full house!';}
	else{;}

	if(a1V==a2V && a4V==a5V && a5V==a6V){
		document.getElementById('a1').style.margin='10px 0px';
		document.getElementById('a2').style.margin='10px 0px';
		document.getElementById('a4').style.margin='10px 0px';
		document.getElementById('a5').style.margin='10px 0px';
		document.getElementById('a6').style.margin='10px 0px';
	   	document.getElementById('a8').innerHTML ='Full house!';}
	else{;}

	if(a1V==a2V && a3V==a4V && a4V==a5V){
		document.getElementById('a1').style.margin='10px 0px';
		document.getElementById('a2').style.margin='10px 0px';
		document.getElementById('a3').style.margin='10px 0px';
		document.getElementById('a4').style.margin='10px 0px';
		document.getElementById('a5').style.margin='10px 0px';
	   	document.getElementById('a8').innerHTML ='Full house!';}
	else{;}

	if(a1V==a2V && a2V==a3V && a5V==a6V){
		document.getElementById('a1').style.margin='10px 0px';
		document.getElementById('a2').style.margin='10px 0px';
		document.getElementById('a3').style.margin='10px 0px';
		document.getElementById('a5').style.margin='10px 0px';
		document.getElementById('a6').style.margin='10px 0px';
	   	document.getElementById('a8').innerHTML ='Full house!';}
	else{;}

	if(a1V==a2V && a2V==a3V && a4V==a5V){
		document.getElementById('a1').style.margin='10px 0px';
		document.getElementById('a2').style.margin='10px 0px';
		document.getElementById('a3').style.margin='10px 0px';
		document.getElementById('a4').style.margin='10px 0px';
		document.getElementById('a5').style.margin='10px 0px';
	   	document.getElementById('a8').innerHTML ='Full house!';}
	else{;}

	if(a1V==a2V && a2V==a3V && a6V==a7V){
		document.getElementById('a1').style.margin='10px 0px';
		document.getElementById('a2').style.margin='10px 0px';
		document.getElementById('a3').style.margin='10px 0px';
		document.getElementById('a6').style.margin='10px 0px';
		document.getElementById('a7').style.margin='10px 0px';
	   	document.getElementById('a8').innerHTML ='Full house!';}
	else{;}

//Four of a kind
	if(a1V==a2V && a2V==a3V && a3V==a4V){
		document.getElementById('a1').style.margin='10px 0px';
		document.getElementById('a2').style.margin='10px 0px';
		document.getElementById('a3').style.margin='10px 0px';
		document.getElementById('a4').style.margin='10px 0px';
	   	document.getElementById('a8').innerHTML ='Four of a kind!';}
	else{;}

	if(a2V==a3V && a3V==a4V && a4V==a5V){
		document.getElementById('a2').style.margin='10px 0px';
		document.getElementById('a3').style.margin='10px 0px';
		document.getElementById('a4').style.margin='10px 0px';
		document.getElementById('a5').style.margin='10px 0px';
	   	document.getElementById('a8').innerHTML ='Four of a kind!';}
	else{;}

	if(a3V==a4V && a4V==a5V && a5V==a6V){
		document.getElementById('a3').style.margin='10px 0px';
		document.getElementById('a4').style.margin='10px 0px';
		document.getElementById('a5').style.margin='10px 0px';
		document.getElementById('a6').style.margin='10px 0px';
	   	document.getElementById('a8').innerHTML ='Four of a kind!';}
	else{;}

	if(a4V==a5V && a5V==a6V && a6V==a7V){
		document.getElementById('a4').style.margin='10px 0px';
		document.getElementById('a5').style.margin='10px 0px';
		document.getElementById('a6').style.margin='10px 0px';
		document.getElementById('a7').style.margin='10px 0px';
	   	document.getElementById('a8').innerHTML ='Four of a kind!';}
	else{;}

//Show red cards (if any)
	document.getElementById('a1').innerHTML = cards.get(holdA[0]);
	if(redCard1.includes(holdA[0])){document.getElementById('a1').style.color='red';}
	else if(redCard2.includes(holdA[0])){document.getElementById('a1').style.color='red';}
	else{document.getElementById('a1').style.color='black';}


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

//Straight Check, to see if straight hand is the subset of the hold cards pf player A.
	let sHanda='';
        if(checkHand(holdAV, sF1)==true || checkHand(holdAV, sF2)==true ||
	checkHand(holdAV, sF3)==true || checkHand(holdAV, sF4)==true ||
	checkHand(holdAV, sF5)==true || checkHand(holdAV, sF6)==true ||
	checkHand(holdAV, sF7)==true || checkHand(holdAV, sF8)==true ||
	checkHand(holdAV, sF9)==true || checkHand(holdAV, sF10)==true){
		document.getElementById('a1').style.margin='0px 0px';
		document.getElementById('a2').style.margin='0px 0px';
		document.getElementById('a3').style.margin='0px 0px';
		document.getElementById('a4').style.margin='0px 0px';
		document.getElementById('a5').style.margin='0px 0px';
		document.getElementById('a6').style.margin='0px 0px';
		document.getElementById('a7').style.margin='0px 0px';

		document.getElementById('a1').style.color='green';
		document.getElementById('a2').style.color='green';
		document.getElementById('a3').style.color='green';
		document.getElementById('a4').style.color='green';
		document.getElementById('a5').style.color='green';
		document.getElementById('a6').style.color='green';
		document.getElementById('a7').style.color='green';
		document.getElementById('a8').innerHTML='Straight!';
		sHanda='y';}
	else{;}

	if(a1V==a2V-1 && a2V==a3V-1 && a3V==a4V-1 && a4V==a5V-1){
		document.getElementById('a1').style.margin='10px 0px';
		document.getElementById('a2').style.margin='10px 0px';
		document.getElementById('a3').style.margin='10px 0px';
		document.getElementById('a4').style.margin='10px 0px';
		document.getElementById('a5').style.margin='10px 0px';}
	else{;}

	if(a2V==a3V-1 && a3V==a4V-1 && a4V==a5V-1 && a5V==a6V-1){
		document.getElementById('a2').style.margin='10px 0px';
		document.getElementById('a3').style.margin='10px 0px';
		document.getElementById('a4').style.margin='10px 0px';
		document.getElementById('a5').style.margin='10px 0px';
		document.getElementById('a6').style.margin='10px 0px';}
	else{;}

	if(a3V==a4V-1 && a4V==a5V-1 && a5V==a6V-1 && a6V==a7V-1){
		document.getElementById('a3').style.margin='10px 0px';
		document.getElementById('a4').style.margin='10px 0px';
		document.getElementById('a5').style.margin='10px 0px';
		document.getElementById('a6').style.margin='10px 0px';
		document.getElementById('a7').style.margin='10px 0px';}
	else{;}

//Flush Check, to count the number of cards from any same suit.
	let fHanda ='';
	let aFlush = [flush.get(holdA[0]),flush.get(holdA[1]),flush.get(holdA[2]),flush.get(holdA[3]),flush.get(holdA[4]),flush.get(holdA[5]), flush.get(holdA[6])];
	let aFlushCheckA = aFlush.filter(x => x == 'A').length;
	let aFlushCheckB = aFlush.filter(x => x == 'B').length;
	let aFlushCheckC = aFlush.filter(x => x == 'C').length;
	let aFlushCheckD = aFlush.filter(x => x == 'D').length;
	if(aFlushCheckA > 4 || aFlushCheckB > 4 || aFlushCheckC > 4  || aFlushCheckD > 4){	
		document.getElementById('a1').style.margin='0px 0px';
		document.getElementById('a2').style.margin='0px 0px';
		document.getElementById('a3').style.margin='0px 0px';
		document.getElementById('a4').style.margin='0px 0px';
		document.getElementById('a5').style.margin='0px 0px';
		document.getElementById('a6').style.margin='0px 0px';
		document.getElementById('a7').style.margin='0px 0px';

		document.getElementById('a1').style.color='blue';
		document.getElementById('a2').style.color='blue';
		document.getElementById('a3').style.color='blue';
		document.getElementById('a4').style.color='blue';
		document.getElementById('a5').style.color='blue';
		document.getElementById('a6').style.color='blue';
		document.getElementById('a7').style.color='blue';
		document.getElementById('a8').innerHTML='Flush!';
		fHanda='y';}
		else{;}

//Straight Flush Check
	if(sHanda=='y' && fHanda=='y'){
	document.getElementById('a8').innerHTML='Straight Flush!';}
	else{;}

//High card
	if(document.getElementById('a8').innerHTML=='' && a1V==1){
	document.getElementById('a8').innerHTML='High card!';
	document.getElementById('a1').style.margin='10px 0px';}
	else{;}

	if(document.getElementById('a8').innerHTML=='' && a1V!==1){
	document.getElementById('a8').innerHTML='High card!';
	document.getElementById('a7').style.margin='10px 0px';}
	else{;}

//Four of a kind color
	if(document.getElementById('a8').innerHTML=='Four of a kind!'){
		document.getElementById('a8').style.color='blue';}
	else{;}

//Full house color
	if(document.getElementById('a8').innerHTML=='Full house!'){
		document.getElementById('a8').style.color='blue';}
	else{;}

//Straight Flush color
	if(document.getElementById('a8').innerHTML=='Straight Flush!'){
		document.getElementById('a8').style.color='blue';}
	else{;}

//B player
	var b1V = cardsV.get(holdB[0]);
	var b2V = cardsV.get(holdB[1]);
	var b3V = cardsV.get(holdB[2]);
	var b4V = cardsV.get(holdB[3]);
	var b5V = cardsV.get(holdB[4]);
	var b6V = cardsV.get(holdB[5]);
	var b7V = cardsV.get(holdB[6]);

	var holdBV =[b1V, b2V, b3V, b4V, b5V, b6V, b7V];

//For Straight Check
	var holdBV1 =[b1V, b2V, b3V, b4V, b5V];
	var holdBV2 =[b2V, b3V, b4V, b5V, b6V];
	var holdBV3 =[b3V, b4V, b5V, b6V, b7V];


//Show the card faces
	document.getElementById('b1').innerHTML = cards.get(holdB[0]);
	if(redCard1.includes(holdB[0])){document.getElementById('b1').style.color='red';}
	else if(redCard2.includes(holdB[0])){document.getElementById('b1').style.color='red';}
	else{document.getElementById('b1').style.color='black';}

	if(b1V==b2V){
		document.getElementById('b1').style.margin='10px 0px';
		document.getElementById('b2').style.margin='10px 0px';
	   	document.getElementById('b8').innerHTML ='One pair!';}
	else{;}

	if(b2V==b3V){
		document.getElementById('b2').style.margin='10px 0px';
		document.getElementById('b3').style.margin='10px 0px';
	   	document.getElementById('b8').innerHTML ='One pair!';}
	else{;}

	if(b3V==b4V){
		document.getElementById('b3').style.margin='10px 0px';
		document.getElementById('b4').style.margin='10px 0px';
	   	document.getElementById('b8').innerHTML ='One pair!';}
	else{;}

	if(b4V==b5V){
		document.getElementById('b4').style.margin='10px 0px';
		document.getElementById('b5').style.margin='10px 0px';
	   	document.getElementById('b8').innerHTML ='One pair!';}
	else{;}

	if(b5V==b6V){
		document.getElementById('b5').style.margin='10px 0px';
		document.getElementById('b6').style.margin='10px 0px';
	   	document.getElementById('b8').innerHTML ='One pair!';}
	else{;}

	if(b6V==b7V){
		document.getElementById('b6').style.margin='10px 0px';
		document.getElementById('b7').style.margin='10px 0px';
	   	document.getElementById('b8').innerHTML ='One pair!';}
	else{;}

//Two pairs
	if(b1V==b2V && b3V==b4V){
	   	document.getElementById('b8').innerHTML ='Two pair!';}
	else{;}

	if(b1V==b2V && b4V==b5V){
	   	document.getElementById('b8').innerHTML ='Two pair!';}
	else{;}

	if(b1V==b2V && b5V==b6V){
	   	document.getElementById('b8').innerHTML ='Two pair!';}
	else{;}

	if(b1V==b2V && b6V==b7V){
	   	document.getElementById('b8').innerHTML ='Two pair!';}
	else{;}

	if(b4V==b5V && b6V==b7V){
	   	document.getElementById('b8').innerHTML ='Two pair!';}
	else{;}

	if(b3V==b4V && b6V==b7V){
	   	document.getElementById('b8').innerHTML ='Two pair!';}
	else{;}

	if(b2V==b3V && b6V==b7V){
	   	document.getElementById('b8').innerHTML ='Two pair!';}
	else{;}

	if(b2V==b3V && b4V==b5V){
	   	document.getElementById('b8').innerHTML ='Two pair!';}
	else{;}

	if(b3V==b4V && b5V==b6V){
	   	document.getElementById('b8').innerHTML ='Two pair!';}
	else{;}

	if(b2V==b3V && b5V==b6V){
	   	document.getElementById('b8').innerHTML ='Two pair!';}
	else{;}


//Three
	if(b1V==b2V && b2V==b3V){
		document.getElementById('b1').style.margin='10px 0px';
		document.getElementById('b2').style.margin='10px 0px';
		document.getElementById('b3').style.margin='10px 0px';
	   	document.getElementById('b8').innerHTML ='Three of a kind!';}
	else{;}

	if(b2V==b3V && b3V==b4V){
		document.getElementById('b2').style.margin='10px 0px';
		document.getElementById('b3').style.margin='10px 0px';
		document.getElementById('b4').style.margin='10px 0px';
	   	document.getElementById('b8').innerHTML ='Three of a kind!';}

	else{;}

	if(b3V==b4V && b4V==b5V){
		document.getElementById('b3').style.margin='10px 0px';
		document.getElementById('b4').style.margin='10px 0px';
		document.getElementById('b5').style.margin='10px 0px';
	   	document.getElementById('b8').innerHTML ='Three of a kind!';}
	else{;}

	if(b4V==b5V && b5V==b6V){
		document.getElementById('b4').style.margin='10px 0px';
		document.getElementById('b5').style.margin='10px 0px';
		document.getElementById('b6').style.margin='10px 0px';
	   	document.getElementById('b8').innerHTML ='Three of a kind!';}
	else{;}

	if(b5V==b6V && b6V==b7V){
		document.getElementById('b5').style.margin='10px 0px';
		document.getElementById('b6').style.margin='10px 0px';
		document.getElementById('b7').style.margin='10px 0px';
	   	document.getElementById('b8').innerHTML ='Three of a kind!';}
	else{;}

//Full
	if(b2V==b3V && b4V==b5V && b4V==b6V){
		document.getElementById('b2').style.margin='10px 0px';
		document.getElementById('b3').style.margin='10px 0px';
		document.getElementById('b4').style.margin='10px 0px';
		document.getElementById('b5').style.margin='10px 0px';
		document.getElementById('b6').style.margin='10px 0px';
	   	document.getElementById('b8').innerHTML ='Full house!';}
	else{;}

	if(b2V==b3V && b3V==b4V && b5V==b6V){
		document.getElementById('b2').style.margin='10px 0px';
		document.getElementById('b3').style.margin='10px 0px';
		document.getElementById('b4').style.margin='10px 0px';
		document.getElementById('b5').style.margin='10px 0px';
		document.getElementById('b6').style.margin='10px 0px';
	   	document.getElementById('b8').innerHTML ='Full house!';}
	else{;}


	if(b3V==b4V && b5V==b6V && b5V==b7V){
		document.getElementById('b3').style.margin='10px 0px';
		document.getElementById('b4').style.margin='10px 0px';
		document.getElementById('b5').style.margin='10px 0px';
		document.getElementById('b6').style.margin='10px 0px';
		document.getElementById('b7').style.margin='10px 0px';
	   	document.getElementById('b8').innerHTML ='Full house!';}
	else{;}

	if(b3V==b4V && b3V==b5V && b6V==b7V){
		document.getElementById('b3').style.margin='10px 0px';
		document.getElementById('b4').style.margin='10px 0px';
		document.getElementById('b5').style.margin='10px 0px';
		document.getElementById('b6').style.margin='10px 0px';
		document.getElementById('b7').style.margin='10px 0px';
	   	document.getElementById('b8').innerHTML ='Full house!';}
	else{;}

	if(b1V==b2V && b5V==b6V && b6V==b7V){
		document.getElementById('b1').style.margin='10px 0px';
		document.getElementById('b2').style.margin='10px 0px';
		document.getElementById('b5').style.margin='10px 0px';
		document.getElementById('b6').style.margin='10px 0px';
		document.getElementById('b7').style.margin='10px 0px';
	   	document.getElementById('b8').innerHTML ='Full house!';}
	else{;}

	if(b1V==b2V && b4V==b5V && b5V==b6V){
		document.getElementById('b1').style.margin='10px 0px';
		document.getElementById('b2').style.margin='10px 0px';
		document.getElementById('b4').style.margin='10px 0px';
		document.getElementById('b5').style.margin='10px 0px';
		document.getElementById('b6').style.margin='10px 0px';
	   	document.getElementById('b8').innerHTML ='Full house!';}
	else{;}

	if(b1V==b2V && b3V==b4V && b4V==b5V){
		document.getElementById('b1').style.margin='10px 0px';
		document.getElementById('b2').style.margin='10px 0px';
		document.getElementById('b3').style.margin='10px 0px';
		document.getElementById('b4').style.margin='10px 0px';
		document.getElementById('b5').style.margin='10px 0px';
	   	document.getElementById('b8').innerHTML ='Full house!';}
	else{;}

	if(b1V==b2V && b2V==b3V && b5V==b6V){
		document.getElementById('b1').style.margin='10px 0px';
		document.getElementById('b2').style.margin='10px 0px';
		document.getElementById('b3').style.margin='10px 0px';
		document.getElementById('b5').style.margin='10px 0px';
		document.getElementById('b6').style.margin='10px 0px';
	   	document.getElementById('b8').innerHTML ='Full house!';}
	else{;}

	if(b1V==b2V && b2V==b3V && b4V==b5V){
		document.getElementById('b1').style.margin='10px 0px';
		document.getElementById('b2').style.margin='10px 0px';
		document.getElementById('b3').style.margin='10px 0px';
		document.getElementById('b4').style.margin='10px 0px';
		document.getElementById('b5').style.margin='10px 0px';
	   	document.getElementById('b8').innerHTML ='Full house!';}
	else{;}

	if(b1V==b2V && b2V==b3V && b6V==b7V){
		document.getElementById('b1').style.margin='10px 0px';
		document.getElementById('b2').style.margin='10px 0px';
		document.getElementById('b3').style.margin='10px 0px';
		document.getElementById('b6').style.margin='10px 0px';
		document.getElementById('b7').style.margin='10px 0px';
	   	document.getElementById('b8').innerHTML ='Full house!';}
	else{;}

	if(b2V==b3V && b5V==b6V && b6V==b7V){
		document.getElementById('b2').style.margin='10px 0px';
		document.getElementById('b3').style.margin='10px 0px';
		document.getElementById('b5').style.margin='10px 0px';
		document.getElementById('b6').style.margin='10px 0px';
		document.getElementById('b7').style.margin='10px 0px';
	   	document.getElementById('b8').innerHTML ='Full house!';}
	else{;}


//Four
	if(b1V==b2V && b2V==b3V && b3V==b4V){
		document.getElementById('b1').style.margin='10px 0px';
		document.getElementById('b2').style.margin='10px 0px';
		document.getElementById('b3').style.margin='10px 0px';
		document.getElementById('b4').style.margin='10px 0px';
	   	document.getElementById('b8').innerHTML ='Four of a kind!';}
	else{;}

	if(b2V==b3V && b3V==b4V && b4V==b5V){
		document.getElementById('b2').style.margin='10px 0px';
		document.getElementById('b3').style.margin='10px 0px';
		document.getElementById('b4').style.margin='10px 0px';
		document.getElementById('b5').style.margin='10px 0px';
	   	document.getElementById('b8').innerHTML ='Four of a kind!';}
	else{;}

	if(b3V==b4V && b4V==b5V && b5V==b6V){
		document.getElementById('b3').style.margin='10px 0px';
		document.getElementById('b4').style.margin='10px 0px';
		document.getElementById('b5').style.margin='10px 0px';
		document.getElementById('b6').style.margin='10px 0px';
	   	document.getElementById('b8').innerHTML ='Four of a kind!';}
	else{;}

	if(b4V==b5V && b5V==b6V && b6V==b7V){
		document.getElementById('b4').style.margin='10px 0px';
		document.getElementById('b5').style.margin='10px 0px';
		document.getElementById('b6').style.margin='10px 0px';
		document.getElementById('b7').style.margin='10px 0px';
	   	document.getElementById('b8').innerHTML ='Four of a kind!';}
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
	var sHandb ='';
        if(checkHand(holdBV, sF1)==true || checkHand(holdBV, sF2)==true ||
	checkHand(holdBV, sF3)==true || checkHand(holdBV, sF4)==true ||
	checkHand(holdBV, sF5)==true || checkHand(holdBV, sF6)==true ||
	checkHand(holdBV, sF7)==true || checkHand(holdBV, sF8)==true ||
	checkHand(holdBV, sF9)==true || checkHand(holdBV, sF10)==true){
		document.getElementById('b1').style.margin='0px 0px';
		document.getElementById('b2').style.margin='0px 0px';
		document.getElementById('b3').style.margin='0px 0px';
		document.getElementById('b4').style.margin='0px 0px';
		document.getElementById('b5').style.margin='0px 0px';
		document.getElementById('b6').style.margin='0px 0px';
		document.getElementById('b7').style.margin='0px 0px';

		document.getElementById('b1').style.color='green';
		document.getElementById('b2').style.color='green';
		document.getElementById('b3').style.color='green';
		document.getElementById('b4').style.color='green';
		document.getElementById('b5').style.color='green';
		document.getElementById('b6').style.color='green';
		document.getElementById('b7').style.color='green';
		document.getElementById('b8').innerHTML='Straight!';
		sHandb='y';}	
	else{;}
	
	if(b1V==b2V-1 && b2V==b3V-1 && b3V==b4V-1 && b4V==b5V-1){
		document.getElementById('b1').style.margin='10px 0px';
		document.getElementById('b2').style.margin='10px 0px';
		document.getElementById('b3').style.margin='10px 0px';
		document.getElementById('b4').style.margin='10px 0px';
		document.getElementById('b5').style.margin='10px 0px';}
	else{;}

	if(b2V==b3V-1 && b3V==b4V-1 && b4V==b5V-1 && b5V==b6V-1){
		document.getElementById('b2').style.margin='10px 0px';
		document.getElementById('b3').style.margin='10px 0px';
		document.getElementById('b4').style.margin='10px 0px';
		document.getElementById('b5').style.margin='10px 0px';
		document.getElementById('b6').style.margin='10px 0px';}
	else{;}

	if(b3V==b4V-1 && b4V==b5V-1 && b5V==b6V-1 && b6V==b7V-1){
		document.getElementById('b3').style.margin='10px 0px';
		document.getElementById('b4').style.margin='10px 0px';
		document.getElementById('b5').style.margin='10px 0px';
		document.getElementById('b6').style.margin='10px 0px';
		document.getElementById('b7').style.margin='10px 0px';}
	else{;}

	var fHandb ='';
	let bFlush = [flush.get(holdB[0]),flush.get(holdB[1]),flush.get(holdB[2]),
			flush.get(holdB[3]),flush.get(holdB[4]),flush.get(holdB[5]), flush.get(holdB[6])];
	let bFlushCheckA = bFlush.filter(x => x == 'A').length;
	let bFlushCheckB = bFlush.filter(x => x == 'B').length;
	let bFlushCheckC = bFlush.filter(x => x == 'C').length;
	let bFlushCheckD = bFlush.filter(x => x == 'D').length;
	if(bFlushCheckA > 4 || bFlushCheckB > 4 || bFlushCheckC > 4  || bFlushCheckD > 4){	
		document.getElementById('b1').style.margin='0px 0px';
		document.getElementById('b2').style.margin='0px 0px';
		document.getElementById('b3').style.margin='0px 0px';
		document.getElementById('b4').style.margin='0px 0px';
		document.getElementById('b5').style.margin='0px 0px';
		document.getElementById('b6').style.margin='0px 0px';
		document.getElementById('b7').style.margin='0px 0px';

		document.getElementById('b1').style.color='blue';
		document.getElementById('b2').style.color='blue';
		document.getElementById('b3').style.color='blue';
		document.getElementById('b4').style.color='blue';
		document.getElementById('b5').style.color='blue';
		document.getElementById('b6').style.color='blue';
		document.getElementById('b7').style.color='blue';
		document.getElementById('b8').innerHTML='Flush!';
		fHandb='y';}
		else{;}

//Straight Flush Check
	if(sHandb=='y' && fHandb=='y'){
	document.getElementById('b8').innerHTML='Straight Flush!';}
	else{;}

//High card
	if(document.getElementById('b8').innerHTML=='' && b1V==1){
	document.getElementById('b8').innerHTML='High card!';
	document.getElementById('b1').style.margin='10px 0px';}
	else{;}

	if(document.getElementById('b8').innerHTML=='' && b1V!==1){
	document.getElementById('b8').innerHTML='High card!';
	document.getElementById('b7').style.margin='10px 0px';}
	else{;}

//Four of a kind color
	if(document.getElementById('b8').innerHTML=='Four of a kind!'){
		document.getElementById('b8').style.color='blue';}
	else{;}

//Full house color
	if(document.getElementById('b8').innerHTML=='Full house!'){
		document.getElementById('b8').style.color='blue';}
	else{;}

//Straight Flush color
	if(document.getElementById('b8').innerHTML=='Straight Flush!'){
		document.getElementById('b8').style.color='blue';}
	else{;}


}

function help() {
	alert('Straight Flush > Four of a kind >  Full house > Flush > Straight > Three of a kind > Two Pairs > Pair > High Card');
}
 
function reload() {
	document.getElementById('a8').style.color='black';
	document.getElementById('b8').style.color='black';
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

