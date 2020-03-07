function twoOldestAges(ages){
  let oldest = ages[0];
  let second = ages[0];
  for (let i = 0; i < ages.length; ++i){
    if (ages[i] > oldest){
      second = oldest;
      oldest = ages[i];
    }
    else if (ages[i] > second){
      second = ages[i];
    }
  }
  return [second, oldest];
}
