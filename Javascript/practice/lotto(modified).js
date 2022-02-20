const getRandomNumber = () => {
    return Math.floor(Math.random() * 45) + 1;
  };
  
  const start = () => {
    const numberList = []; 
  
    for (let i = 0; i < 6; i++) {
     
      let randomNumber = getRandomNumber();
  
      while (numberList.includes(randomNumber)) {
        randomNumber = getRandomNumber();
      } 
      numberList.push(randomNumber);
    }
  
    numberList.sort((a, b) => a - b);
  
  
    const $lottoNumberList = document.querySelectorAll(".lotto-number"); 
    for (let i = 0; i < $lottoNumberList.length; i++) {

        setTimeout(() =>{

      $lottoNumberList[i].innerText = numberList[i];
    
  
      let colorClass = "";
  
      if (numberList[i] <= 10) {
        colorClass = "yellow";
      } else if (numberList[i] <= 20) {
        colorClass = "blue";
      } else if (numberList[i] <= 30) {
        colorClass = "red";
      } else if (numberList[i] <= 40) {
        colorClass = "gray";
      } else {
        colorClass = "green";
      }
      $lottoNumberList[i].classList = "lotto-number"; 
      $lottoNumberList[i].classList.add(colorClass);
    
    },1000*i+1000)
  
    }

      
    
}

 
  const $bttn = document.querySelector("#bttn");
  $bttn.addEventListener("click", start);

  