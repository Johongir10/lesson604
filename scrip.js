const ekran=document.getElementById("ekran");


function calc(){
    ekran.value=eval(ekran.value);
}
function del(){
    ekran.value=ekran.value.slice(0,-1);
}