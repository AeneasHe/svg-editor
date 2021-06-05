// 从localStorage加载数据还原
(function () {
  // 画布上的内容
  const canvasContent = localStorage.getItem("md-canvasContent");
  // 是否暗黑模式
  const isDark = localStorage.getItem("md-darkmode");

  // 如果是暗黑模式，进行切换
  document.body.classList.toggle("inverted", !isDark);

  // 如果画布上还没有内容，直接返回
  if (!canvasContent) return;

  // 解析器
  const parser = new DOMParser();

  // 从文本解析出dom树
  const doc = parser.parseFromString(canvasContent, "image/svg+xml");

  // 取出workarea
  const workarea = document.getElementById("workarea")

  // 挂在内容到workarea
  workarea.appendChild(doc.documentElement);

  // 选中svg图
  const svg = workarea.querySelector("svg");

})();