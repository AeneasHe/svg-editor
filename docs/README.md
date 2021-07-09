SVG编辑器
==========


# 内容

- 页面内容  
[src/index.html](../src/index.html)

# 脚本
## 核心脚本  
- 初始化：[src/core/start.js](../src/core/start.js)  
- 画布：[src/core/svgcanvas.js](../src/core/svgcanvas.js)  
- 编辑器：[src/core/editor.js](../src/core/editor.js)  
- 状态：[src/core/state.js](../src/core/state.js)  
- 从localstorage持久化的内容还原内容：  
[src/core/loading.js](../src/core/loading.js)  



# 样式


# 几个重点函数

- 将画布中的图像同步到源码
editor.source()

- 查看源码  
editor.sourceView.open()

- 保存源码
editor.saveCanvas();