document.getElementById('scanButton').addEventListener('click', function() {
    const files = document.getElementById('fileInput').files;
    const resultDiv = document.getElementById('result');
    resultDiv.innerHTML = ''; // تفريغ النتائج القديمة

    if (files.length > 0) {
        let foundVirus = false;

        // افتراض وجود فيروس في الملف (محاكاة)
        for (let i = 0; i < files.length; i++) {
            const file = files[i];
            const fileName = file.name;

            if (fileName.includes('virus')) {
                foundVirus = true;
                resultDiv.innerHTML += `<p>تم اكتشاف فيروس في الملف: ${fileName}</p>`;
            } else {
                resultDiv.innerHTML += `<p>الملف سليم: ${fileName}</p>`;
            }
        }

        // تمكين زر إزالة الفيروسات إذا تم العثور على فيروس
        if (foundVirus) {
            document.getElementById('removeVirusButton').disabled = false;
        } else {
            document.getElementById('removeVirusButton').disabled = true;
        }
    } else {
        resultDiv.innerHTML = '<p>يرجى اختيار الملفات أولاً.</p>';
    }
});

document.getElementById('removeVirusButton').addEventListener('click', function() {
    const resultDiv = document.getElementById('result');
    resultDiv.innerHTML = '<p>تمت إزالة الفيروس بنجاح!</p>';
    document.getElementById('removeVirusButton').disabled = true;
});
