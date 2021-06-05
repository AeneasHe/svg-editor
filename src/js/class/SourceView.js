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