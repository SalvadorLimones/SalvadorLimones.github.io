/*

"Hagyományos:"
function functionName(paramenter){
  parameter === "Argument as a string";
};
meghívás: functionName("Argument as a string");

"Anoním":
const argument ="Argument saved in a variable";

const functionName = function (parameter){
  parameter === "Argument saved in a variable"
};
meghívás: functionName(argument);

"Arrow":
const functionName = (parameter1,parameter2) => {
  parameter1 ==== 1;
  parameter2 ==== 2;
};
meghívás: functionName(1,2);

 */
const inputElement = (type,name,title) =>{
  return `
    <div>
      <label>${title}</label>      
      <input type="${type}" name="${name}">
    </div>
  `;
};
const selectElement = (type,name,title,options) =>{
  let optionsToSelect = "";
  for (const o of options) {
    optionsToSelect += `
    <option>${o}</option>;
    `;
  }
  return `
    <div>
      <label>${title}</label>      
      <${type} name="${name}">
        ${optionsToSelect}
      </${type}>
    </div>
  `;
};

const formElement = `
  <form id="form">
    ${inputElement("text","firstName","Keresztneved")}
    ${inputElement("file","profilePicture","Profilképed")}
    ${inputElement("email","personalEmail","Email címed")}
    ${inputElement("checkbox","newsLetter","Hírlevelet szeretnél kapni")}
    ${inputElement("checkbox","terms","Elfogadom a felhasználási feltételeket")}
    ${selectElement("select","where","Hol hallottál rólunk?", ["interneten","ismerőstől","egyéb"])}
    <button>Ok</button>
  </form>  
`;

const formSubmit = (event) =>{
  event.preventDefault();
  const et = event.target ;
  console.log(et);
  et.classList.add("submitted");
  let selectValue = et.querySelector(`select[name="where"]`).value;
  console.log(selectValue);
}

const inputUpdate = (event) =>{
  if (event.target.getAttribute("name") === "firstName"){
    document.getElementById("inputValue").innerHTML = event.target.value;
    /* csak akkor updatelje, ha az input value a name (getAttribute)*/
  };
  console.log(event.target.parentNode.parentNode);
  console.log(event.target.closest("#form"));
}

function loadEvent() {
  const root = document.getElementById("root");
  root.insertAdjacentHTML("afterbegin", formElement);
  root.insertAdjacentHTML("afterbegin", `
  <div id="inputValue"></div>
  `);
  
  const form = document.getElementById("form");
  form.addEventListener("submit", formSubmit);
  form.insertAdjacentHTML("afterbegin", `
    <h3>w7 Form Template</h3>
  `);
  
  const inputList = form.querySelectorAll("input");
  for (const input of inputList) {
    input.addEventListener("input", inputUpdate);
  };
}

window.addEventListener("load", loadEvent);