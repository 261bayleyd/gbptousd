function run(){
  let eoinput = document.getElementById("inputuser").value
  let far = eoinput*1.27 +" USD"
      console.log(far)
  document.getElementById("output").innerHTML=far
}