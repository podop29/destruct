//question 1
//8
//1846

//Question 2
//{yearNeptuneDiscovered: 1846, yearMarsDiscovered: 1659}

//Question 3
  //Your name is Alejandro and you like purple
  //Your name is Melissa and you like green
  //Your name is undefiened and you like green

  //Question 4
  //Maya
  //Marisa
  //Chi

  //Question 5
  //"Raindrops on roses",
  //"whiskers on kittens",
  //['Bright copper kettles', 'warm woolen mittens', 'Brown paper packages tied up with strings']


  //question 6
  var obj = {
    numbers: {
      a: 1,
      b: 2
    }
  };

  const {numbers:{a,b}} = obj;


  //Question 7

//   var arr = [1, 2]
//   [arr[0], arr[1]] = [arr[1], arr[0]]

  

//Question 8

const raceResults = ([first,second,third,...rest]) => ({first,second,third,rest})



console.log(raceResults(['Tom', 'Margaret', 'Allison', 'David', 'Pierre']))
