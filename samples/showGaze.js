// helper functions to display gaze information and dot in browser.


// show gaze information on screen.
function showGazeInfoOnDom (gazeInfo) {
    let gazeInfoDiv = document.getElementById("gazeInfo")
    gazeInfoDiv.innerText = `Gaze Information Below
                           \nx: ${gazeInfo.x}
                           \ny: ${gazeInfo.y}
                           `
}

// show gaze dot on screen.
function showGazeDotOnDom (gazeInfo, ctx) {
   
    ctx.fillStyle = '#1AFF00'
    ctx.strokeStyle = '#1AFF00'
    //ctx.clearRect(0, 0, canvas.width, canvas.height )
    ctx.beginPath();
    ctx.arc(gazeInfo.x, gazeInfo.y+200, 10, 0, Math.PI * 2, true);
    //ctx.arc(gazeInfo.x, gazeInfo.y, 10, 0, Math.PI * 2, true);
    ctx.fill();
    //ctx.stroke();

}

function showGaze(gazeInfo,ctx) {
    showGazeInfoOnDom(gazeInfo)
    showGazeDotOnDom(gazeInfo, ctx)
}

export default showGaze