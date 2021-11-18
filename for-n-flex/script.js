

const generateArray = function (amount){
  let returnArray = [];
  /*
  let amountConverted = parseInt(amount);
  amount = amountConverted;
  */
  amount = parseInt(amount);
 /*
 console.log(amount);
 console.log(typeof amount);
 */

  function addZero(thisNum,maxNum){
    let zeros ="";
    for (let j = thisNum.toString().length; j < maxNum.toString().length; j++){
      zeros += "0";
    }
    return zeros;
  }

  // Number.isNaN(amount) !== true;
  if (!Number.isNaN(amount)){
    for (let i = 0; i < amount; i++) {
     returnArray.push(`${addZero(i,amount)}${i}`);
    }
  } else {
      returnArray.push("error");
    }
  return returnArray;
}


function loadEvent() {
  console.log("Az oldal betöltődött");
  /*
  console.log(generateArray("kiskutya"));
  console.log(generateArray("1 kiskutya"));
  console.log(generateArray(100));
  console.log(generateArray("100"));
  console.log(generateArray([100]));
  */

  const root = document.getElementById("root");
  const list = generateArray(72);
  
  if (list[0] !== "error") {
    for (const item of list){
      root.insertAdjacentHTML("beforeend", `<div>${item}</div>`);
    }
  }
}

window.addEventListener("load", loadEvent);

/*  
window.addEventListener("load", function(){
  ez is egy valid megoldás
});

/*  
window.addEventListener("load", _=> {
  ez is egy valid megoldás
});
 */