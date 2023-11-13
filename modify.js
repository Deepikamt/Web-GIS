require(["esri/views/MapView", "esri/WebMap"], (MapView, WebMap) => {
  const webmap = new WebMap({
    portalItem: {
      id: "d4a2e2c8ea9f496187b7311f973421a6"
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