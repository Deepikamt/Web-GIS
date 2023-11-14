require(["esri/views/MapView", "esri/WebMap"], (MapView, WebMap) => {
  const webmap = new WebMap({
    portalItem: {
      id: "f0a139ac14f143ddbc6042bc93d05531"
    }
  });

  const view = new MapView({
    map: webmap,
    container: "viewDiv"
  });

  // Add event listener to the button
  const clickButton = document.getElementById("clickButton");
  clickButton.addEventListener("click", function () {
    // Zoom in by increasing the zoom level
    view.zoom += 1;
  });
});