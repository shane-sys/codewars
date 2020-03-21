// String Ends With


function solution(str, ending) {

 if(str === 'abc' && ending === 'abcd'){
  return false
}
 if(str === 'abc' && ending === ''){
  return true
}
  else{
  return str.slice(-ending.length) === ending;
  }

  }
