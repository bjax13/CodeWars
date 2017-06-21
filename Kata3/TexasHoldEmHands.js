function hand(holeCards, communityCards) {

  let removeSuit = (array) =>{
    return array.map((i)=> i[0])
  }

  let cardCount = (array) => {
    var cardCountObj = array.reduce(function (acc, curr) {
      if (typeof acc[curr] == 'undefined') {
        acc[curr] = 1;
      } else {
        acc[curr] += 1;
      }

      return acc;
    }, {});

    return cardCountObj
  }


  let checkFourOfAKind = (hole , community) => {
    let cards = hole.concat(community);

    cards = removeSuit(cards)

    var numCardsObj = cardCount(cards)

    console.log(numCardsObj);

    for (var rank in numCardsObj) {
      if (numCardsObj.hasOwnProperty(rank)) {
        if (numCardsObj[rank] === 4) {
          console.log('true');
          console.log(rank);
          console.log(numCardsObj[rank]);
        }else {
          console.log(rank);
          console.log(numCardsObj[rank]);
        }

      }
    }

  }

  checkFourOfAKind(holeCards, communityCards)


  return {type:"TODO", ranks: []};
}



//expected {"type":"nothing","ranks":["A","K","Q","J","9"]}
//console.log(hand([ 'K♠', 'A♦' ],[ 'J♣', 'Q♥', '9♥', '2♥', '3♦' ]));

//expected {"type":"pair","ranks":["Q","K","J","9"]}
//console.log(hand([ 'K♠', 'Q♦' ],[ 'J♣', 'Q♥', '9♥', '2♥', '3♦' ]));

//expected {"type":"four-of-a-kind","ranks":["J","9"]}
console.log(hand([ 'J♦', 'J♠' ],[ '9♦', '5♣', 'J♣', '4♦', 'J♥' ]));
