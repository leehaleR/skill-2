const fileIn = document.getElementById('file-input');
const previewContainer = document.getElementById('banner');
const imagePreview = previewContainer.querySelector('.image-preview');
const textPreview = previewContainer.querySelector('.preview-text');


 
fileIn.addEventListener("change", function() {
    const file = this.files[0];//{
    //     width: 320;
    //     height: 240;
    // };

    if (file) {
        const reader = new FileReader();

        textPreview.style.display = 'none';
        imagePreview.style.display = 'block';

        reader.addEventListener("load", function() {
            imagePreview.setAttribute("src", this.result);
        });

        reader.readAsDataURL(file);
    }
});


// load webcam

// Webcam.set({
//     width: 350,
//     height: 350,
//     image_format:'jpeg',
//     jpeg_quality:90
// })

// Webcam.attach("#camera")




// function take_snapshot() {

// };


Webcam.set({
    width: 220,
    height: 190,
    image_format: 'jpeg',
    jpeg_quality: 100
});
Webcam.attach('#camera');

takeSnapShot = function () {
    Webcam.snap(function (data_uri) {
    document.getElementById('snapShot').innerHTML = 
    '<img src="' + data_uri + '" width="70px" height="50px" />';
    });
}

takeSnapShot = function () {
    Webcam.snap(function (data_uri) {
    downloadImage('arun', data_uri);
    });
}

downloadImage = function (name, datauri) {
    var a = document.createElement('a');
    a.setAttribute('download', name + '.png');
    a.setAttribute('href', datauri);
    a.click();
}