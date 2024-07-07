figma.showUI(__html__);
figma.ui.resize(500, 280);

figma.loadAllPagesAsync().then(() => {
  figma.ui.onmessage = async pluginMessage => {
    console.log("Received message:", pluginMessage);
    const nodes:SceneNode[] = [];
   
    const uploadedImg = pluginMessage.imageData
    console.log(uploadedImg)
    // save image as variable
    // use npm package to process image and seperate shapes 
    // create a shape for each shape seperated from npm process
    // use colors from an array to change colors of generated shapes + add displacement
    // display shape in canvas
    // create background for sticker (rectangle for now) + add displacement
    
    figma.viewport.scrollAndZoomIntoView(nodes);
    figma.closePlugin();
  };
}).catch(error => {
  console.error("Error loading pages:", error);
  figma.closePlugin();
});
