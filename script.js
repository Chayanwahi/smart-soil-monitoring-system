let moisture = 65;

document.getElementById("moisture").innerText =
moisture + "%";

if(moisture > 50){
    document.getElementById("status").innerText =
    "Healthy 🌱";
}
else{
    document.getElementById("status").innerText =
    "Needs Water ⚠️";
}

document.getElementById("time").innerText =
new Date().toLocaleString();
