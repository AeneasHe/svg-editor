MD.Toolbar = function () {

  // tools left
  $("#tools_left .tool_button").on("click", function () {
    // 获取当前工具的模式
    const mode = this.getAttribute("data-mode");
    state.set("canvasMode", mode)
    if (mode === "shapelib") showShapeLib()
  });

  // 切换工具的模式
  function setMode(mode) {
    $(".tool_button").removeClass("current");
    $("#tool_" + mode).addClass("current");
    $("#workarea").attr("class", mode);
    svgCanvas.setMode(mode);
  }

  function showShapeLib() {
    $("#tools_shapelib").show();
  }

  this.setMode = setMode;
}