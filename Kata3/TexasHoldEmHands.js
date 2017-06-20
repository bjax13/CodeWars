function hand(holeCards, communityCards) {
  console.log(holeCards);
  console.log(communityCards);





  return {type:"TODO", ranks: []};
}



//expected {"type":"nothing","ranks":["A","K","Q","J","9"]}
console.log(hand([ 'K♠', 'A♦' ],[ 'J♣', 'Q♥', '9♥', '2♥', '3♦' ]));

//expected {"type":"pair","ranks":["Q","K","J","9"]}
console.log(hand([ 'K♠', 'Q♦' ]));
