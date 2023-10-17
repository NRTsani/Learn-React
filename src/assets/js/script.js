function handleGetFormData(){
  let person = {
  name : document.getElementById("name").value,
  email : document.getElementById("email").value,
  city : document.getElementById("city").value,
  zipCode: document.getElementById("zip-code").value,
  status: document.getElementById("status").checked,
  };
  return person;
  }
  
  function isNumber(string){
  if (Number(string))
  return true;
  else false;
  }
  
  function isLength(string,integer){
  if (string.length === integer)
  return true;
  else false;
  }
  
  function checkboxIsChecked(){
  if (document.getElementById("status").checked)
  return true;
  else false;
  }
  
  function validateFormData(person){
  if (!(person.firstName !== "" && person.lastName !== ""
  && person.city !== "" && person.zipCode !== "")) {
  return false }
  if (!isNumber(person.zipCode)){
  return false }
  if (!checkboxIsChecked()){
  return false }
  return true
  }
  
  function submit(){
  let person = handleGetFormData();
  let warn = document.getElementById("warning");
  let val = validateFormData(person);
  if (!val){
  return warn.innerHTML="Periksa form anda sekali lagi";
  }
  else {
  return warn.innerHTML="";
  }
  }
  
  const form = document.getElementById("contactForm");
  form.addEventListener("submit",event=>{
    event.preventDefault();
    submit();
  });