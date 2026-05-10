document.addEventListener('DOMContentLoaded', () => {
    const qrText = document.getElementById('qr-text');
    const generateBtn = document.getElementById('generate-btn');
    const qrContainer = document.getElementById('qr-code-container');
    const downloadContainer = document.getElementById('download-container');
    const downloadBtn = document.getElementById('download-btn');

    let qrcode = null;

    generateBtn.addEventListener('click', () => {
        const text = qrText.value.trim();

        if (text === "") {
            alert("Per favore, inserisci un testo o un link!");
            return;
        }

        // Pulisce il container precedente
        qrContainer.innerHTML = "";
        downloadContainer.style.display = "none";

        // Crea il nuovo QR Code
        qrcode = new QRCode(qrContainer, {
            text: text,
            width: 200,
            height: 200,
            colorDark: "#000000",
            colorLight: "#ffffff",
            correctLevel: QRCode.CorrectLevel.H
        });

        // Mostra il pulsante di download dopo un breve delay per permettere la generazione
        setTimeout(() => {
            const qrImg = qrContainer.querySelector('img');
            if (qrImg) {
                downloadContainer.style.display = "block";
            }
        }, 100);
    });

    downloadBtn.addEventListener('click', () => {
        const qrImg = qrContainer.querySelector('img');
        if (qrImg) {
            const link = document.createElement('a');
            link.href = qrImg.src;
            link.download = 'qrcode.png';
            link.click();
        }
    });
});
