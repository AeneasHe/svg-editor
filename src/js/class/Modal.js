// 对话框

MD.Modal = function (config) {

  const el = document.createElement("div");
  el.classList.add("modal", "hidden");

  const item = document.createElement("div");
  item.innerHTML = config.html;
  item.classList.add("modal-item");
  el.appendChild(item);

  el.addEventListener("click", close);

  item.addEventListener("click", function (e) {
    e.stopPropagation();
  });

  document.body.appendChild(el);



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

function initModal() {
  return {
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
}