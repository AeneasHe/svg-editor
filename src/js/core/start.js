// 全局变量
// globals

// svg画布
const svgCanvas = new $.SvgCanvas(document.getElementById("svgcanvas"));
// svg编辑器
const editor = new MD.Editor();

// 编辑器的当前状态
const state = new State();

// 编辑器的对话框
editor.modal = initModal();

// 源码查看器
editor.sourceView = initSourceView();

// 源码碎片：当前选中的SVG对象的源码
editor.sourceFragment = new MD.SourceFragment();


// 编辑器的快捷键
editor.keyboard = new MD.Keyboard();

// 编辑器的菜单
editor.menu = new MD.Menu();

// 编辑器的工具栏
editor.toolbar = new MD.Toolbar();

// 编辑器的标尺
editor.rulers = new MD.Rulers();
// 编辑器的画布
editor.canvas = new MD.Canvas();
// 编辑器的文本
editor.text = new MD.Text();

// 编辑器的属性面板
editor.panel = new MD.Panel();

// 编辑器的放大缩小
editor.zoom = new MD.Zoom();

// 编辑器的画笔
editor.paintBox = {
  fill: new MD.PaintBox('#fill_color', 'fill'),
  stroke: new MD.PaintBox('#stroke_color', 'stroke'),
  canvas: new MD.PaintBox('#canvas_color', 'canvas')
};

// 颜色面板
editor.palette = new MD.Palette();

// 平移
editor.pan = new MD.Pan();

// 导入文件
editor.import = new MD.Import();
editor.contextMenu = new MD.ContextMenu();

// 暗黑/亮白模式
editor.darkmode = new MD.Darkmode();


// bind the selected event to our function that handles updates to the UI
// 将画布的选中事件绑定到编辑器的选中发生变化，触发UI更新
svgCanvas.bind("selected", editor.selectedChanged);
svgCanvas.bind("transition", editor.elementTransition);
svgCanvas.bind("changed", editor.elementChanged);
svgCanvas.bind("exported", editor.exportHandler);
svgCanvas.bind("zoomed", editor.zoom.changed);
svgCanvas.bind("contextset", editor.contextChanged);
svgCanvas.bind("extension_added", editor.extensionAdded);
svgCanvas.textActions.setInputElem($("#text")[0]);

// 复杂图形工具
const shapeLib = svgCanvas.addExtension.apply(this, ["shapes", MD.Shapelib]);
// 颜色选择的滴管工具
const eyedropper = svgCanvas.addExtension.apply(this, ["eyedropper", MD.Eyedropper]);

state.set("canvasId", t("Untitled"));
state.set("canvasMode", state.get("canvasMode"));
svgCanvas.setSvgString(state.get("canvasContent"));
editor.paintBox.fill.setPaint(state.get("canvasFill"));
editor.paintBox.stroke.setPaint(state.get("canvasStroke"));
editor.paintBox.canvas.setPaint(state.get("canvasBackground"));
document.body.classList.remove("loading");
editor.source();

window.onresize = function () {
  console.log("window size change")
}