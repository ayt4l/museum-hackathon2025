// Browser distrubution of the A-Frame component.
(function () {
  if (!AFRAME) {
    console.error('Component attempted to register before AFRAME was available.');
    return;
  }

  // Register all components here.
  var components = {
    stereo: require('/Users/4/Profession IT - 2025/js/index').stereo_component,
    stereocam: require('/Users/4/Profession IT - 2025/js/index').stereocam_component
  };

  Object.keys(components).forEach(function (name) {
    if (AFRAME.aframeCore) {
      AFRAME.aframeCore.registerComponent(name, components[name]);
    } else {
      AFRAME.registerComponent(name, components[name]);
    }
  });
})();
