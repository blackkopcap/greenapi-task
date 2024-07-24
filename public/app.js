async function getSettings() {
    const idInstance = document.getElementById('idInstance').value;
    const apiTokenInstance = document.getElementById('apiTokenInstance').value;
    const response = await fetch(`/getSettings?idInstance=${idInstance}&apiTokenInstance=${apiTokenInstance}`);
    const data = await response.json();
    displayResponse(data);
}

async function getStateInstance() {
    const idInstance = document.getElementById('idInstance').value;
    const apiTokenInstance = document.getElementById('apiTokenInstance').value;
    const response = await fetch(`/getStateInstance?idInstance=${idInstance}&apiTokenInstance=${apiTokenInstance}`);
    const data = await response.json();
    displayResponse(data);
}

async function sendMessage() {
    const idInstance = document.getElementById('idInstance').value;
    const apiTokenInstance = document.getElementById('apiTokenInstance').value;
    const chatId = document.getElementById('sendMessageChatId').value;
    const message = document.getElementById('message').value;
    const response = await fetch(`/sendMessage`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            idInstance,
            apiTokenInstance,
            chatId,
            message,
        }),
    });
    const data = await response.json();
    displayResponse(data);
}

async function sendFileByUrl() {
    const idInstance = document.getElementById('idInstance').value;
    const apiTokenInstance = document.getElementById('apiTokenInstance').value;
    const chatId = document.getElementById('sendFileByUrlChatId').value;
    const urlFile = document.getElementById('urlFile').value;
    const fileName = urlFile.split('/').pop();
    const response = await fetch(`/sendFileByUrl`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            idInstance,
            apiTokenInstance,
            chatId,
            urlFile,
            fileName,
        }),
    });
    const data = await response.json();
    displayResponse(data);
}

function displayResponse(data) {
    const container = document.getElementById('response');
    container.textContent = JSON.stringify(data, null, 2);
    hljs.highlightBlock(container);
}
