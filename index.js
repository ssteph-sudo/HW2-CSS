display2.style.display = 'none';

  let myData = [];


  for(let i=0; i< 3; i++) {
      let input = prompt("Enter a fruit:", "fruit");
      myData[i] = input;
  }
	
  let str = '<ul>'

  myData.forEach(function(fruit) {
    str += '<li>'+ fruit + '</li>';
  }); 
  str += '</ul>';
  str += '<input type="submit" onClick = "goNext()">';
  document.getElementById("display1").innerHTML = str;
	
  function goNext(){
	
	
    var myData2= myData.map(function(oneWord) {
    return oneWord.charAt(oneWord.length - 1) + oneWord.substring(1, oneWord.length - 1) + oneWord.charAt(0); });
	
	let str = '<ul>'
	myData2.forEach(function(fruit) {
    str += '<li>'+ fruit + '</li>'; }); 
    str += '</ul>';
	display1.style.display = 'none';
	display2.style.display = 'block';
    document.getElementById("display2").innerHTML = str;


  }


