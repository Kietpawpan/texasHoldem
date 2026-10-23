/* Copyright (c) 2023 Montri Kiatphaophan
 * cards.js v1.1.0 | All rights reserved.
 */

const cards = new Map([
  [1, '\u{1F0A1}'], [5, '\u{1F0A2}'], [9, '\u{1F0A3}'], [13, '\u{1F0A4}'], [17, '\u{1F0A5}'], [21, '\u{1F0A6}'], [25, '\u{1F0A7}'],
  [29, '\u{1F0A8}'], [33, '\u{1F0A9}'], [37, '\u{1F0AA}'], [41, '\u{1F0AB}'], [45, '\u{1F0AD}'], [49, '\u{1F0AE}'],

  [2, '\u{1F0B1}'], [6, '\u{1F0B2}'], [10, '\u{1F0B3}'], [14, '\u{1F0B4}'], [18, '\u{1F0B5}'], [22, '\u{1F0B6}'], [26, '\u{1F0B7}'],
  [30, '\u{1F0B8}'], [34, '\u{1F0B9}'], [38, '\u{1F0BA}'], [42, '\u{1F0BB}'], [46, '\u{1F0BD}'], [50, '\u{1F0BE}'],

  [3, '\u{1F0C1}'], [7, '\u{1F0C2}'], [11, '\u{1F0C3}'], [15, '\u{1F0C4}'], [19, '\u{1F0C5}'], [23, '\u{1F0C6}'], [27, '\u{1F0C7}'],
  [31, '\u{1F0C8}'], [35, '\u{1F0C9}'], [39, '\u{1F0CA}'], [43, '\u{1F0CB}'], [47, '\u{1F0CD}'], [51, '\u{1F0CE}'],

  [4, '\u{1F0D1}'], [8, '\u{1F0D2}'], [12, '\u{1F0D3}'], [16, '\u{1F0D4}'], [20, '\u{1F0D5}'], [24, '\u{1F0D6}'], [28, '\u{1F0D7}'],
  [32, '\u{1F0D8}'], [36, '\u{1F0D9}'], [40, '\u{1F0DA}'], [44, '\u{1F0DB}'], [48, '\u{1F0DD}'], [52, '\u{1F0DE}'], [0, '']
]);

const cardsV = new Map([
  [1, 1], [5, 2], [9, 3], [13, 4], [17, 5], [21, 6], [25, 7],
  [29, 8], [33, 9], [37, 10], [41, 11], [45, 12], [49, 13],

  [2, 1], [6, 2], [10, 3], [14, 4], [18, 5], [22, 6], [26, 7],
  [30, 8], [34, 9], [38, 10], [42, 11], [46, 12], [50, 13],

  [3, 1], [7, 2], [11, 3], [15, 4], [19, 5], [23, 6], [27, 7],
  [31, 8], [35, 9], [39, 10], [43, 11], [47, 12], [51, 13],

  [4, 1], [8, 2], [12, 3], [16, 4], [20, 5], [24, 6], [28, 7],
  [32, 8], [36, 9], [40, 10], [44, 11], [48, 12], [52, 13], [0, 0]
]);

const flush = new Map([
  [1, 'A'], [5, 'A'], [9, 'A'], [13, 'A'], [17, 'A'], [21, 'A'], [25, 'A'],
  [29, 'A'], [33, 'A'], [37, 'A'], [41, 'A'], [45, 'A'], [49, 'A'],

  [2, 'B'], [6, 'B'], [10, 'B'], [14, 'B'], [18, 'B'], [22, 'B'], [26, 'B'],
  [30, 'B'], [34, 'B'], [38, 'B'], [42, 'B'], [46, 'B'], [50, 'B'],

  [3, 'C'], [7, 'C'], [11, 'C'], [15, 'C'], [19, 'C'], [23, 'C'], [27, 'C'],
  [31, 'C'], [35, 'C'], [39, 'C'], [43, 'C'], [47, 'C'], [51, 'C'],

  [4, 'D'], [8, 'D'], [12, 'D'], [16, 'D'], [20, 'D'], [24, 'D'], [28, 'D'],
  [32, 'D'], [36, 'D'], [40, 'D'], [44, 'D'], [48, 'D'], [52, 'D'], [0, '']
]);

const redCard1 = [2, 6, 10, 14, 18, 22, 26, 30, 34, 38, 42, 46, 50];
const redCard2 = [3, 7, 11, 15, 19, 23, 27, 31, 35, 39, 43, 47, 51];

// Game state deck
let currentDeck = [];
let dealt = { c1: 0, c2: 0, c6: 0, c7: 0, z1: 0, z2: 0, z3: 0, z4: 0, z5: 0 };

function isRed(cardId) {
  return redCard1.includes(cardId) || redCard2.includes(cardId);
}

function renderCard(elementId, cardId) {
  const el = document.getElementById(elementId);
  el.innerHTML = cards.get(cardId);
  el.style.color = isRed(cardId) ? 'red' : 'black';
}

function shuffleDeck() {
  const deck = Array.from({ length: 52 }, (_, i) => i + 1);
  for (let i = deck.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [deck[i], deck[j]] = [deck[j], deck[i]];
  }
  return deck;
}

function setButtons(holeState, flopState, turnState, riverState) {
  document.getElementById('btnHole').disabled = !holeState;
  document.getElementById('btnFlop').disabled = !flopState;
  document.getElementById('btnTurn').disabled = !turnState;
  document.getElementById('btnRiver').disabled = !riverState;
}

function hole() {
  reload();
  currentDeck = shuffleDeck();

  dealt.c1 = currentDeck.pop();
  dealt.c6 = currentDeck.pop();
  dealt.c2 = currentDeck.pop();
  dealt.c7 = currentDeck.pop();

  renderCard('c1', dealt.c1);
  renderCard('c2', dealt.c2);
  renderCard('c6', dealt.c6);
  renderCard('c7', dealt.c7);

  setButtons(true, true, false, false);
}

function flop() {
  dealt.z1 = currentDeck.pop();
  dealt.z2 = currentDeck.pop();
  dealt.z3 = currentDeck.pop();

  renderCard('z1', dealt.z1);
  renderCard('z2', dealt.z2);
  renderCard('z3', dealt.z3);

  setButtons(true, false, true, false);
}

function turn() {
  dealt.z4 = currentDeck.pop();
  renderCard('z4', dealt.z4);

  setButtons(true, false, false, true);
}

// แปลงแต้มไพ่ (1..13) โดยให้ A มีค่าสูงสุดคือ 14
function pokerRank(cardId) {
  const v = cardsV.get(cardId);
  return v === 1 ? 14 : v;
}

// แปลงดอกไพ่เป็นคะแนนความใหญ่: โพดำ (4) > โพธิ์แดง (3) > ข้าวหลามตัด (2) > ดอกจิก (1)
function suitRank(cardId) {
  return 4 - ((cardId - 1) % 4);
}

// ประเมินไพ่ 5 ใบพร้อมเก็บค่าแต้มและดอกไพ่เพื่อใช้ตัดสินกรณีแต้มเท่ากัน
function evaluate5Cards(fiveIds) {
  const sortedByRankSuit = [...fiveIds].sort((a, b) => pokerRank(b) - pokerRank(a) || suitRank(b) - suitRank(a));
  const ranks = sortedByRankSuit.map(pokerRank);
  const suits = sortedByRankSuit.map(id => flush.get(id));
  const isFlush = suits.every(s => s === suits[0]);

  const uniqueRanks = [...new Set(ranks)];
  let isStraight = false;
  let straightHigh = 0;
  let orderedIdsForSuit = sortedByRankSuit;

  if (uniqueRanks.length === 5) {
    if (ranks[0] - ranks[4] === 4) {
      isStraight = true;
      straightHigh = ranks[0];
    } else if (ranks[0] === 14 && ranks[1] === 5 && ranks[2] === 4 && ranks[3] === 3 && ranks[4] === 2) {
      isStraight = true;
      straightHigh = 5;
      // กรณีเรียงต่ำ A-2-3-4-5 ให้เรียงลำดับความสำคัญจาก 5 ลงไปหา A
      orderedIdsForSuit = [...sortedByRankSuit.slice(1), sortedByRankSuit[0]];
    }
  }

  // จัดกลุ่มไพ่ตามแต้ม
  const groupMap = new Map();
  for (const id of sortedByRankSuit) {
    const r = pokerRank(id);
    if (!groupMap.has(r)) groupMap.set(r, []);
    groupMap.get(r).push(id);
  }

  // เรียงกลุ่มตามจำนวนไพ่ที่ซ้ำกัน (มากไปน้อย) ตามด้วยแต้มไพ่ (มากไปน้อย)
  const groups = [...groupMap.entries()].sort((a, b) => b[1].length - a[1].length || b[0] - a[0]);

  // ลำดับดอกไพ่ตามความสำคัญของกลุ่มไพ่ (เช่น ดอกของไพ่คู่มาก่อนดอกของตัวคุม)
  const groupOrderedIds = groups.flatMap(g => g[1]);
  const groupSuitRanks = groupOrderedIds.map(suitRank);
  const straightSuitRanks = orderedIdsForSuit.map(suitRank);

  if (isFlush && isStraight) {
    if (straightHigh === 14) {
      return { category: 9, name: 'Royal flush!!!', tiebreaker: [14], suitTiebreaker: straightSuitRanks, highlightIds: fiveIds, color: 'blue' };
    }
    return { category: 8, name: 'Straight flush!!', tiebreaker: [straightHigh], suitTiebreaker: straightSuitRanks, highlightIds: fiveIds, color: 'blue' };
  }

  if (groups[0][1].length === 4) {
    return { category: 7, name: 'Four of a kind!', tiebreaker: groups.map(g => g[0]), suitTiebreaker: groupSuitRanks, highlightIds: groups[0][1], color: 'blue' };
  }

  if (groups[0][1].length === 3 && groups[1][1].length === 2) {
    return { category: 6, name: 'Full house!', tiebreaker: groups.map(g => g[0]), suitTiebreaker: groupSuitRanks, highlightIds: fiveIds, color: 'blue' };
  }

  if (isFlush) {
    return { category: 5, name: 'Flush!', tiebreaker: ranks, suitTiebreaker: straightSuitRanks, highlightIds: fiveIds, color: 'blue' };
  }

  if (isStraight) {
    return { category: 4, name: 'Straight!', tiebreaker: [straightHigh], suitTiebreaker: straightSuitRanks, highlightIds: fiveIds, color: 'green' };
  }

  if (groups[0][1].length === 3) {
    return { category: 3, name: 'Three of a kind!', tiebreaker: groups.map(g => g[0]), suitTiebreaker: groupSuitRanks, highlightIds: groups[0][1], color: 'black' };
  }

  if (groups[0][1].length === 2 && groups[1][1].length === 2) {
    const pairIds = [...groups[0][1], ...groups[1][1]];
    return { category: 2, name: 'Two pair!', tiebreaker: groups.map(g => g[0]), suitTiebreaker: groupSuitRanks, highlightIds: pairIds, color: 'black' };
  }

  if (groups[0][1].length === 2) {
    return { category: 1, name: 'One pair!', tiebreaker: groups.map(g => g[0]), suitTiebreaker: groupSuitRanks, highlightIds: groups[0][1], color: 'black' };
  }

  return { category: 0, name: 'High card!', tiebreaker: ranks, suitTiebreaker: groupSuitRanks, highlightIds: [sortedByRankSuit[0]], color: 'black' };
}

// เปรียบเทียบชุดไพ่: 1. ระดับไพ่ -> 2. แต้มไพ่ -> 3. ดอกไพ่
function compareHands(evalA, evalB) {
  if (evalA.category !== evalB.category) {
    return evalA.category - evalB.category;
  }

  const len = Math.max(evalA.tiebreaker.length, evalB.tiebreaker.length);
  for (let i = 0; i < len; i++) {
    const diff = (evalA.tiebreaker[i] || 0) - (evalB.tiebreaker[i] || 0);
    if (diff !== 0) return diff;
  }

  const sLen = Math.max(evalA.suitTiebreaker.length, evalB.suitTiebreaker.length);
  for (let i = 0; i < sLen; i++) {
    const sDiff = (evalA.suitTiebreaker[i] || 0) - (evalB.suitTiebreaker[i] || 0);
    if (sDiff !== 0) return sDiff;
  }

  return 0;
}

// เปรียบเทียบไพ่ในมือ 2 ใบ (ใช้กรณีไพ่ 5 ใบที่ดีที่สุดมาจากกองกลางล้วนเหมือนกัน)
function compareHoleCards(holeA, holeB) {
  const sortedA = [...holeA].sort((a, b) => pokerRank(b) - pokerRank(a) || suitRank(b) - suitRank(a));
  const sortedB = [...holeB].sort((a, b) => pokerRank(b) - pokerRank(a) || suitRank(b) - suitRank(a));

  for (let i = 0; i < 2; i++) {
    const rDiff = pokerRank(sortedA[i]) - pokerRank(sortedB[i]);
    if (rDiff !== 0) return rDiff;
    const sDiff = suitRank(sortedA[i]) - suitRank(sortedB[i]);
    if (sDiff !== 0) return sDiff;
  }
  return 0;
}

// ค้นหาชุดไพ่ 5 ใบที่ดีที่สุดจาก 7 ใบ
function evaluate7Cards(sevenIds) {
  let bestEval = null;

  for (let i = 0; i < 7; i++) {
    for (let j = i + 1; j < 7; j++) {
      const fiveIds = sevenIds.filter((_, idx) => idx !== i && idx !== j);
      const currentEval = evaluate5Cards(fiveIds);
      if (!bestEval || compareHands(currentEval, bestEval) > 0) {
        bestEval = currentEval;
      }
    }
  }
  return bestEval;
}

function displayPlayerResult(prefix, sortedSevenIds, evaluation) {
  for (let i = 0; i < 7; i++) {
    const slotId = prefix + (i + 1);
    const cardId = sortedSevenIds[i];
    const el = document.getElementById(slotId);

    renderCard(slotId, cardId);

    if (evaluation.category === 4) {
      el.style.color = 'green';
    } else if (evaluation.category === 5 || evaluation.category === 8 || evaluation.category === 9) {
      el.style.color = 'blue';
    }

    if (evaluation.highlightIds.includes(cardId)) {
      el.style.margin = '10px 0px';
    } else {
      el.style.margin = '0px 0px';
    }
  }

  const labelEl = document.getElementById(prefix + '8');
  labelEl.innerHTML = evaluation.name;
  labelEl.style.color = evaluation.color;
}

function river() {
  dealt.z5 = currentDeck.pop();
  renderCard('z5', dealt.z5);

  const holdA = [dealt.c1, dealt.c2, dealt.z1, dealt.z2, dealt.z3, dealt.z4, dealt.z5].sort((a, b) => a - b);
  const holdB = [dealt.c6, dealt.c7, dealt.z1, dealt.z2, dealt.z3, dealt.z4, dealt.z5].sort((a, b) => a - b);

  const evalA = evaluate7Cards(holdA);
  const evalB = evaluate7Cards(holdB);

  // หาไพ่ใบสูงสุดในมือของแต่ละฝ่าย (เทียบแต้มแล้วเทียบดอก)
  const highHoleA = (pokerRank(dealt.c1) > pokerRank(dealt.c2) || (pokerRank(dealt.c1) === pokerRank(dealt.c2) && suitRank(dealt.c1) > suitRank(dealt.c2))) ? dealt.c1 : dealt.c2;
  const highHoleB = (pokerRank(dealt.c6) > pokerRank(dealt.c7) || (pokerRank(dealt.c6) === pokerRank(dealt.c7) && suitRank(dealt.c6) > suitRank(dealt.c7))) ? dealt.c6 : dealt.c7;

  // หากได้ High card ให้ขยับไพ่ใบสูงสุดในมือลงมาแสดง
  if (evalA.category === 0) {
    evalA.highlightIds = [highHoleA];
  }
  if (evalB.category === 0) {
    evalB.highlightIds = [highHoleB];
  }

  displayPlayerResult('a', holdA, evalA);
  displayPlayerResult('b', holdB, evalB);

  const winA = document.getElementById('a9');
  const winB = document.getElementById('b9');

  let comparison = compareHands(evalA, evalB);

  // กรณีได้ High card ทั้งคู่ หรือใช้ไพ่กองกลางชุดเดียวกันจนแต้มและดอกเท่ากัน ให้ตัดสินด้วยไพ่ในมือ
  if ((evalA.category === 0 && evalB.category === 0) || comparison === 0) {
    comparison = compareHoleCards([dealt.c1, dealt.c2], [dealt.c6, dealt.c7]);
  }

  if (comparison > 0) {
    winA.innerHTML = 'Win';
    winA.style.background = '#1f1f1f';
    winA.style.color = '#ffffff';
  } else {
    winB.innerHTML = 'Win';
    winB.style.background = '#1f1f1f';
    winB.style.color = '#ffffff';
  }

  setButtons(true, false, false, false);
}


function help() {
  alert('Royal flush > Straight flush > Four of a kind > Full house > Flush > Straight > Three of a kind > Two pair > One pair > High card');
}

function reload() {
  const winA = document.getElementById('a9');
  const winB = document.getElementById('b9');
  winA.innerHTML = '';
  winB.innerHTML = '';
  winA.style.background = 'transparent';
  winB.style.background = 'transparent';

  document.getElementById('a8').innerHTML = '';
  document.getElementById('b8').innerHTML = '';
  document.getElementById('a8').style.color = 'black';
  document.getElementById('b8').style.color = 'black';

  const backCards = ['z1', 'z2', 'z3', 'z4', 'z5', 'c1', 'c2', 'c6', 'c7'];
  backCards.forEach(id => {
    const el = document.getElementById(id);
    el.innerHTML = '\u{1F0A0}';
    el.style.color = 'blue';
  });

  const emptySlots = [
    'c3', 'c4', 'c5', 'c8', 'c9', 'c10',
    'a1', 'a2', 'a3', 'a4', 'a5', 'a6', 'a7',
    'b1', 'b2', 'b3', 'b4', 'b5', 'b6', 'b7'
  ];
  emptySlots.forEach(id => {
    const el = document.getElementById(id);
    el.innerHTML = cards.get(0);
    el.style.margin = '0px 0px';
  });

  setButtons(true, false, false, false);
}

window.onload = reload;
