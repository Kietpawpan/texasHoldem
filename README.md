# texasHoldem
A popular poker game for fun: [Texas Hold'em](https://kietpawpan.github.io/texasHoldem/)

We solved the following key problems:
1. Refer to card unicode in HTML
   ```
   '\u{1F0C1}'
   ```
3. Give technical ID number to each card.
   ```
   const cards = new Map([ 
		[1,'\u{1F0A1}'],[5,'\u{1F0A2}'],[9,'\u{1F0A3}'],[13,'\u{1F0A4}'],[17,'\u{1F0A5}'],[21,'\u{1F0A6}'],[25,'\u{1F0A7}'],
		[29,'\u{1F0A8}'],[33,'\u{1F0A9}'],[37,'\u{1F0AA}'],[41,'\u{1F0AB}'],[45,'\u{1F0AD}'],[49,'\u{1F0AE}'],

		[2,'\u{1F0B1}'],[6,'\u{1F0B2}'],[10,'\u{1F0B3}'],[14,'\u{1F0B4}'],[18,'\u{1F0B5}'],[22,'\u{1F0B6}'],[26,'\u{1F0B7}'],
		[30,'\u{1F0B8}'],[34,'\u{1F0B9}'],[38,'\u{1F0BA}'],[42,'\u{1F0BB}'],[46,'\u{1F0BD}'],[50,'\u{1F0BE}'],

		[3,'\u{1F0C1}'],[7,'\u{1F0C2}'],[11,'\u{1F0C3}'],[15,'\u{1F0C4}'],[19,'\u{1F0C5}'],[23,'\u{1F0C6}'],[27,'\u{1F0C7}'],
		[31,'\u{1F0C8}'],[35,'\u{1F0C9}'],[39,'\u{1F0CA}'],[43,'\u{1F0CB}'],[47,'\u{1F0CD}'],[51,'\u{1F0CE}'],

		[4,'\u{1F0D1}'],[8,'\u{1F0D2}'],[12,'\u{1F0D3}'],[16,'\u{1F0D4}'],[20,'\u{1F0D5}'],[24,'\u{1F0D6}'],[28,'\u{1F0D7}'],
		[32,'\u{1F0D8}'],[36,'\u{1F0D9}'],[40,'\u{1F0DA}'],[44,'\u{1F0DB}'],[48,'\u{1F0DD}'],[52,'\u{1F0DE}'],[0,''],]);
```
```
5. Show the card in the div tag, with style change for red cards.
```
	document.getElementById('c1').innerHTML = cards.get(c1);
	if(redCard1.includes(c1)){document.getElementById('c1').style.color='red';}
	else if(redCard2.includes(c1)){document.getElementById('c1').style.color='red';}
	else{document.getElementById('c1').style.color='black';}

```
   
6. Remove each played card from the suit before the next round begins.
```
	const allCards = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,
			21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,
			41,42,43,44,45,46,47,48,49,50,51,52];

	var c1 = Math.floor(Math.random()*52)+1;

	var c2C = allCards.indexOf(c1);
		if(c2C >-1){allCards.splice(c2C, 1);}

	var c2= allCards[(Math.random()*allCards.length)|0];

```
and more.
