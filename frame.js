async function createEngine2() {
    const engine2 = new ex.Engine({
        canvasElementId: "canvas2",
        width: 200,
        height: 200,
        backgroundColor: ex.Color.Yellow
    });

    engine2.start();
}

// Only works if the iframes are on the same domain
// Event can use lots of stuff other than strings
// Some caveats apply https://developer.mozilla.org/en-US/docs/Web/API/Window/postMessage
window.onmessage = (event) => {
    console.log(event);
    if (event.data === 'init') {
        createEngine2();
        window.top.postMessage('Engine created in iframe!');
    }
}