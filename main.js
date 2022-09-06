function start() {
    navigator.mediaDevices.getUserMedia({ audio: true });
    classifier = ml5.soundClassifier("https://teachablemachine.withgoogle.com/models/e-sdpbJEj/model.json", modelready);
}
function modelready() {
    console.log("model is ready");
}