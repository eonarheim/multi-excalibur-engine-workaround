async function createEngines() {
    createEngine1();
    const frame = document.getElementById('frame');// as HTMLIFrameElement;
    frame.onload = () => {
        frame.contentWindow.postMessage('init', '*');
    }
}

// listen to communication from iframe
window.onmessage = (event) => {
    console.log(event.data);
}

async function createEngine1() {
  const image1 = new ex.ImageSource("https://picsum.photos/200");
  const actor1 = new ex.Actor({
    pos: ex.vec(100, 100),
    width: 50,
    height: 50,
    color: ex.Color.Red
  });
  const engine1 = new ex.Engine({
    canvasElementId: "canvas1",
    width: 200,
    height: 200,
    backgroundColor: ex.Color.Green
  });
  await image1.load();
  engine1.add(actor1);
  actor1.graphics.use(image1.toSprite());
  engine1.start();
  window.engine1 = engine1;
}

createEngines();