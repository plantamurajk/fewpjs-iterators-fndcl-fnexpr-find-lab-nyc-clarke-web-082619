const testVar = {}

function testFunc() {
  return "hi"
}

function checkRecord(game){
  return game.result === 'W';
}

function superbowlWin(record){
  let winYear = record.find(function(game) {return game.result === 'W'});
  if (winYear){
    return winYear.year;
  } else {
    return undefined;
  }

  }
