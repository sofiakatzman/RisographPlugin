figma.showUI(__html__);
figma.ui.resize(500, 500);

figma.loadAllPagesAsync().then(() => {
  figma.ui.onmessage = async pluginMessage => {
    console.log("Received message:", pluginMessage);
    const nodes:SceneNode[] = [];
   
    // stuff
    
    figma.viewport.scrollAndZoomIntoView(nodes);
    figma.closePlugin();
  };
}).catch(error => {
  console.error("Error loading pages:", error);
  figma.closePlugin();
});
