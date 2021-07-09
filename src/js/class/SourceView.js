// 源码

MD.SourceView = function (config) {

  const el = document.createElement("div");

  el.classList.add("source-view", "hidden");

  const item = document.createElement("div");
  item.innerHTML = config.html;
  item.classList.add("source-view-item");
  el.appendChild(item);

  // el.addEventListener("click", close);

  item.addEventListener("click", function (e) {
    e.stopPropagation();
  });

  // 将元素挂载到末尾
  //document.body.appendChild(el);
  document.querySelector("#svg_panel").appendChild(el);



  function open() {
    el.classList.remove("hidden");
  }

  function close() {
    el.classList.add("hidden");
  }

  function confirm(cb) {
    if (cb) cb();
    close();
  }

  this.open = open;
  this.close = close;
  this.confirm = confirm;
  this.cb = config.cb || function () { };
  this.el = el;

  if (config.js) {
    const el = this.el;
    config.js(el);
  }

  return this

}


function initSourceView() {

  return new MD.SourceView({
    // 初始模版
    html: `
      <div id="svg_source_editor">
        <div id="svg_source_overlay" class="overlay"></div>
        <div id="svg_source_container">
          <form>
            <textarea id="svg_source_textarea" spellcheck="false" contentEditable="true"></textarea>
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
          //editor.sourceView.close();
        }

        var saveSuccess = svgCanvas.setSvgString($('#svg_source_textarea').val());
        if (saveSuccess) {
          saveChanges();
        } else {
          // 尝试保存，如果出错给出提示
          $.confirm("There were parsing errors in your SVG source.\nRevert back to original SVG source?", function (ok) {
            if (!ok) return false;
            saveChanges();
          });
        }
      })
      // 取消保存
      el.querySelector("#tool_source_cancel").addEventListener("click", function () {
        //editor.sourceView.close();
        editor.source()
      });
    }
  })
}