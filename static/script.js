async function loadData(){

    const response = await fetch("/api/sensor-data");
    const data = await response.json();

    document.getElementById("moisture").innerText =
        data.moisture + "%";

    document.getElementById("temperature").innerText =
        data.temperature + "°C";

    document.getElementById("status").innerText =
        data.status;
}

loadData();

setInterval(loadData, 5000);
