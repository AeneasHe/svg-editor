// 全局变量
// globals

// svg画布
const svgCanvas = new $.SvgCanvas(document.getElementById("svgcanvas"));
// svg编辑器
const editor = new MD.Editor();

// 编辑器的当前状态
const state = new State();

// 编辑器的对话框
editor.modal = {
  about: new MD.Modal({
    html: `
      <h1>About this application</h1>
      <p>Method Draw is a simple <a href="https://github.com/methodofaction/Method-Draw">open source</a> vector drawing application. Method Draw was forked from <a href="https://github.com/SVG-Edit/svgedit">SVG-Edit</a> several years ago with the goal of improving and modernizing the interface.</p>
      <p>At this time (2021), the author (<a href="http://method.ac/writing">Mark MacKay</a>) is working on improving stability and improving the codebase, which contains a lot of legacy practices. The goal is to create a vector editor suitable for simple graphic design tasks.</p>
      `
  }),
  // // 查看源码的对话框
  // source: new MD.Modal({
  //   // 初始模版
  //   html: `
  //     <div id="svg_source_editor">
  //       <div id="svg_source_overlay" class="overlay"></div>
  //       <div id="svg_source_container">
  //         <form>
  //           <textarea id="svg_source_textarea" spellcheck="false"></textarea>
  //         </form>
  //         <div id="tool_source_back" class="toolbar_button">
  //           <button id="tool_source_cancel" class="cancel">Cancel</button>
  //           <button id="tool_source_save" class="ok">Apply Changes</button>
  //         </div>
  //       </div>
  //   </div>`,
  //   js: function (el) {
  //     el.children[0].classList.add("modal-item-source");
  //     // 注入事件，保存源码
  //     el.querySelector("#tool_source_save").addEventListener("click", function () {

  //       var saveChanges = function () {

  //         console.log("start.js saveChanges")

  //         svgCanvas.clearSelection();
  //         $('#svg_source_textarea').blur();
  //         editor.zoom.multiply(1);
  //         editor.rulers.update();
  //         editor.paintBox.fill.prep();
  //         editor.paintBox.stroke.prep();
  //         editor.modal.source.close();
  //       }

  //       if (!svgCanvas.setSvgString($('#svg_source_textarea').val())) {
  //         $.confirm("There were parsing errors in your SVG source.\nRevert back to original SVG source?", function (ok) {
  //           if (!ok) return false;
  //           saveChanges();
  //         });
  //       } else {
  //         saveChanges();
  //       }
  //     })
  //     // 取消保存
  //     el.querySelector("#tool_source_cancel").addEventListener("click", function () {
  //       editor.modal.source.close();
  //     });
  //   }
  // }),
  // 配置对话框
  configure: new MD.Modal({
    html: `
      <h1>Configuration</h1>
      <div id="configuration">
        <button class="warning">Erase all data</button>
        </div>
      </div>`,
    js: function (el) {
      const input = el.querySelector("#configuration button.warning");
      input.addEventListener("click", function () {
        state.clean();
      })
    }
  }),
  // 捐赠对话框
  donate: new MD.Modal({
    html: `
      <h1>Donate</h1>
      <p>
        Method Draw relies on your generous donations for continued development.
        <a href="https://method.ac/donate/">Donate now</a> if you find this application useful.
      </p>`
  }),
  // 快捷键对话框
  shortcuts: new MD.Modal({
    html: `
      <h1>Shortcuts</h1>
      <div id="shortcuts"></div>`,
    js: function (el) {
      el.children[0].classList.add("modal-item-wide");
    }
  })
};

editor.sourceView = {

  // 查看源码的对话框
  source: new MD.SourceView({
    // 初始模版
    html: `
      <div id="svg_source_editor">
        <div id="svg_source_overlay" class="overlay"></div>
        <div id="svg_source_container">
          <form>
            <textarea id="svg_source_textarea" spellcheck="false"></textarea>
          </form>
          <div id="tool_source_back" class="toolbar_button">
            <button id="tool_source_cancel" class="cancel">Refresh</button>
            <button id="tool_source_save" class="ok">Apply Changes</button>
          </div>
        </div>
    </div>`,
    js: function (el) {
      el.children[0].classList.add("source-view-item-source");
      // 注入事件，保存源码
      el.querySelector("#tool_source_save").addEventListener("click", function () {

        var saveChanges = function () {

          console.log("start.js saveChanges")

          svgCanvas.clearSelection();
          $('#svg_source_textarea').blur();
          editor.zoom.multiply(1);
          editor.rulers.update();
          editor.paintBox.fill.prep();
          editor.paintBox.stroke.prep();
          //editor.sourceView.source.close();
        }

        if (!svgCanvas.setSvgString($('#svg_source_textarea').val())) {
          $.confirm("There were parsing errors in your SVG source.\nRevert back to original SVG source?", function (ok) {
            if (!ok) return false;
            saveChanges();
          });
        } else {
          saveChanges();
        }
      })
      // 取消保存
      el.querySelector("#tool_source_cancel").addEventListener("click", function () {
        //editor.sourceView.source.close();
        editor.source()
      });
    }
  }),

};


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

// 绑定碎片
editor.sourceFragment = new MD.SourceFragment();

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
