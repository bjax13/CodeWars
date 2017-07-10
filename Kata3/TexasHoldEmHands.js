function hand(holeCards, communityCards) {

  let removeSuit = (array) =>{
    return array.map((i)=> i[0])
  }

  let sortRanks = (array) =>{
    array = array.sort((a,b)=>{
      if (a === "J") {
        a = 11
      }
      else if (a === "Q") {
        a = 12
      }
      else if (a === "K") {
        a = 13
      }
      else if (a === "A") {
        a = 14
      }
      else if (b === "J") {
        b = 11
      }
      else if (b === "Q") {
        b = 12
      }
      else if (b === "K") {
        b = 13
      }
      else if (b === "A") {
        b = 14
      }

      return b-a;
    })
    return array;
  }

  let cardCount = (array) => {
    let cardCountObj = array.reduce(function (acc, curr) {
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

    cards = sortRanks(cards);
    uniqeCards = cards.filter(function(item, pos, ary) {
        return !pos || item != ary[pos - 1];
    })

    let numCardsObj = cardCount(cards)

    for (let rank in numCardsObj) {
      if (numCardsObj.hasOwnProperty(rank)) {
        if (numCardsObj[rank] === 4) {
          let remainingCard;

          if (rank === uniqeCards[0]) {
            remainingCard = uniqeCards[1]
          } else {
            remainingCard = uniqeCards[0]
          }

          return {
            test: true,
            rank: [rank, remainingCard],
          }
        }
      }
    }
    return {
      test: false,
      rank: null
    }
  }

  let rankTest = checkFourOfAKind(holeCards, communityCards);

  if (rankTest.test === true) {
    console.log(rankTest.suit);
    return {"type":"four-of-a-kind","ranks":rankTest.rank}
  }


  let checkThreeOfAKind = (hole , community) => {
    let cards = hole.concat(community);

    cards = removeSuit(cards)

    cards = sortRanks(cards);
    uniqeCards = cards.filter(function(item, pos, ary) {
        return !pos || item != ary[pos - 1];
    })

    let numCardsObj = cardCount(cards)

    for (let rank in numCardsObj) {
      if (numCardsObj.hasOwnProperty(rank)) {
        if (numCardsObj[rank] === 3) {
          let remainingCard;

          if (rank === uniqeCards[0]) {
            remainingCard = uniqeCards[1] + uniqeCards[2]
          } else {
            remainingCard = uniqeCards[0]
          }

          return {
            test: true,
            rank: [rank, remainingCard],
          }
        }
      }
    }
    return {
      test: false,
      rank: null
    }
  }


  return {type:"TODO", ranks: []};
}



//expected {"type":"nothing","ranks":["A","K","Q","J","9"]}
//console.log(hand([ 'K♠', 'A♦' ],[ 'J♣', 'Q♥', '9♥', '2♥', '3♦' ]));

//expected {"type":"pair","ranks":["Q","K","J","9"]}
//console.log(hand([ 'K♠', 'Q♦' ],[ 'J♣', 'Q♥', '9♥', '2♥', '3♦' ]));

//expected {"type":"four-of-a-kind","ranks":["J","9"]}
console.log(hand([ 'J♦', 'J♠' ],[ '9♦', '5♣', 'J♣', '4♦', 'J♥' ]));
