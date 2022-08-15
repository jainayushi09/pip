const videoElement = document.getElementById('video');
const button= document.getElementById('button');

//promt to select the media stream, pass to video element and then Play
async function selectMediaStream (){
    try {
        const mediaStream = await navigator.mediaDevices.getDisplayMedia();
        videoElement.srcObject = mediaStream;
        videoElement.onloadedmetadata =() => {
            videoElement.play();
        }

    } catch (error) {
        console.log('Whoops error here !', error)
    }
}

// add Button event listener
 button.addEventListener ('click', async () =>{
      button.disabled = true;
     await videoElement.requestPictureInPicture();
     button.disabled = false;
 });

//on load 
selectMediaStream();