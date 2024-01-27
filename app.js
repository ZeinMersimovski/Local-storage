// Функција за зачувување на податоци во локалното складиште
function saveData() {
    const inputData = document.getElementById('dataInput').value;
    
    // Добивање зачуваните податоци од локалното складиште
    const savedData = JSON.parse(localStorage.getItem('savedData')) || [];

    // Додавање новиот податок во низата
    savedData.push(inputData);

    // Зачувување на ажурираните податоци во локалното складиште
    localStorage.setItem('savedData', JSON.stringify(savedData));

    // Прикажување на зачуваните податоци
    displaySavedData();
}

// Функција за прикажување на зачуваните податоци
function displaySavedData() {
    const outputDiv = document.getElementById('output');

    // Добивање зачуваните податоци од локалното складиште
    const savedData = JSON.parse(localStorage.getItem('savedData')) || [];

    // Приказ на зачуваните податоци во HTML
    outputDiv.innerHTML = '<h2>Saved Data:</h2>';
    outputDiv.innerHTML += '<ul>';
    savedData.forEach((item, index) => {
        outputDiv.innerHTML += `<li>${item}<button onclick="deleteData(${index})">Delete</button></li>`;
    });
    outputDiv.innerHTML += '</ul>';
}

// Функција за бришење на зачуван податок
function deleteData(index) {
    const savedData = JSON.parse(localStorage.getItem('savedData')) || [];

    // Бришење на податокот од низата
    savedData.splice(index, 1);

    // Зачувување на ажурираните податоци во локалното складиште
    localStorage.setItem('savedData', JSON.stringify(savedData));

    // Прикажување на зачуваните податоци
    displaySavedData();
}

// Повик на функцијата за прикажување на зачуваните податоци при вчитување на страницата
displaySavedData();
