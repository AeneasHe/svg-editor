// 底部颜色面板工具

MD.Palette = function () {
  // 颜色表
  // var palette = [
  //   "#444444", "#482816", "#422C10", "#3B2F0E", "#32320F",
  //   "#293414", "#1F361B", "#153723", "#0C372C", "#083734",
  //   "#0E353B", "#1A333F", "#273141", "#332D40", "#3E2A3C",
  //   "#462735", "#4B252D", "#4D2425", "#4C261D", "#666666",
  //   "#845335", "#7B572D", "#6F5C2A", "#62612C", "#546433",
  //   "#46673D", "#396849", "#306856", "#2D6862", "#33666C",
  //   "#426373", "#535F75", "#645A73", "#74556D", "#805064",
  //   "#884D58", "#8B4D4B", "#894F3F", "#999999", "#C48157",
  //   "#B8874D", "#A98E49", "#97944B", "#849854", "#729C62",
  //   "#619E73", "#559E84", "#529D94", "#5B9BA2", "#6D97AB",
  //   "#8391AE", "#9A8AAB", "#AF84A3", "#BF7E96", "#C97A86",
  //   "#CE7975", "#CC7C65", "#BBBBBB", "#FFB27C", "#FABA6F",
  //   "#E6C36A", "#CFCA6D", "#B8D078", "#A0D58A", "#8CD79F",
  //   "#7DD8B5", "#7AD6CA", "#84D3DB", "#9ACEE6", "#B6C7EA",
  //   "#D3BEE7", "#EDB6DC", "#FFAFCC", "#FFAAB8", "#FFA9A2",
  //   "#FFAC8D", "#DDDDDD", "#FFE7A2", "#FFF093", "#FFFA8D",
  //   "#FFFF91", "#EEFF9F", "#D1FFB4", "#B9FFCE", "#A8FFE9",
  //   "#A4FFFF", "#B1FFFF", "#CBFFFF", "#EDFFFF", "#FFF5FF",
  //   "#FFEBFF", "#FFE2FF", "#FFDCEC", "#FFDBD2", "#FFDFB8"
  // ];
  var palette = [
    "#fde0dc", "#f9bdbb", "#f69988", "#f36c60", "#e84e40", "#e51c23", "#dd191d", "#d01716", "#c41411", "#b0120a", "#ff7997", "#ff5177", "#ff2d6f", "#e00032",
    "#fce4ec", "#f8bbd0", "#f48fb1", "#f06292", "#ec407a", "#e91e63", "#d81b60", "#c2185d", "#ad1457", "#880e4f", "#ff80ab", "#ff4081", "#f50057", "#c51162",
    "#fbe9e7", "#ffccbc", "#ffab91", "#ff8a65", "#ff7043", "#ff5722", "#f4511e", "#e64a19", "#d84315", "#bf360c", "#ff9e80", "#ff6e40", "#ff3d00", "#dd2c00",// 深橙色 deepOrange 
    "#fff3e0", "#ffe0b2", "#ffcc80", "#ffb74d", "#ffa726", "#ff9800", "#fb8c00", "#f57c00", "#ef6c00", "#e65100", "#ffd180", "#ffab40", "#ff9100", "#ff6d00",// 橙色 6bc8f2
    "#fff8e1", "#ffecb3", "#ffe082", "#ffd54f", "#ffca28", "#ffc107", "#ffb300", "#ffa000", "#ff8f00", "#ff6f00", "#ffe57f", "#ffd740", "#ffc400", "#ffab00",// 琥珀色 Amber
    "#fffde7", "#fff9c4", "#fff59d", "#fff176", "#ffee58", "#ffeb3b", "#fdd835", "#fbc02d", "#f9a825", "#f57f17", "#ffff8d", "#ffff00", "#ffea00", "#ffd600",// 黄色 yellow 
    "#f9fbe7", "#f0f4c3", "#e6ee9c", "#dce775", "#d4e157", "#cddc39", "#c0ca33", "#afb42b", "#9e9d24", "#827717", "#f4ff81", "#eeff41", "#c6ff00", "#aeea00",// 青柠 lime
    "#f1f8e9", "#dcedc8", "#c5e1a5", "#aed581", "#9ccc65", "#8bc34a", "#7cb342", "#689f38", "#558b2f", "#33691e", "#ccff90", "#b2ff59", "#76ff03", "#64dd17",
    "#d0f8ce", "#a3e9a4", "#72d572", "#42bd41", "#2baf2b", "#259b24", "#0a8f08", "#0a7e07", "#056f00", "#0d5302", "#a2f78d", "#5af158", "#14e715", "#12c700",
    "#e0f2f1", "#b2dfdb", "#80cbc4", "#4db6ac", "#26a69a", "#009688", "#00897b", "#00796b", "#00695c", "#004d40", "#a7ffeb", "#64ffda", "#1de9b6", "#00bfa5",
    "#e0f7fa", "#b2ebf2", "#80deea", "#4dd0e1", "#26c6da", "#00bcd4", "#00acc1", "#0097a7", "#00838f", "#006064", "#84ffff", "#18ffff", "#00e5ff", "#00b8d4",
    "#e1f5fe", "#b3e5fc", "#81d4fa", "#4fc3f7", "#29b6f6", "#03a9f4", "#039be5", "#0288d1", "#0277bd", "#01579b", "#80d8ff", "#40c4ff", "#00b0ff", "#0091ea",
    "#e7e9fd", "#d0d9ff", "#afbfff", "#91a7ff", "#738ffe", "#5677fc", "#4e6cef", "#455ede", "#3b50ce", "#2a36b1", "#a6baff", "#6889ff", "#4d73ff", "#4d69ff",
    "#e8eaf6", "#c5cae9", "#9fa8da", "#7986cb", "#5c5bc0", "#3f51b5", "#3949ab", "#303f9f", "#283593", "#1a237e", "#8c9eff", "#536dfe", "#3d5afe", "#304ffe",
    "#ede7f6", "#d1c4e9", "#b39ddb", "#9575cd", "#7e57c2", "#673ab7", "#5e35b1", "#512da8", "#4527a0", "#311b92", "#b388ff", "#7c4dff", "#651fff", "#6200ea",
    "#f3e5f5", "#e1bee7", "#ce93d8", "#ba68c8", "#ab47bc", "#9c27b0", "#8e24aa", "#7b1fa2", "#6a1b9a", "#4a148c", "#ea80fc", "#e040fb", "#d500f9", "#aa00ff",
    "#eceff1", "#cfd8dc", "#b0bec5", "#90a4ae", "#78909c", "#607d8b", "#546e7a", "#455a64", "#37474f", "#263238", "#ffffff", "#ffffff", "#ffffff", "#ffffff",
    "#efebe9", "#d7ccc8", "#bcaaa4", "#a1887f", "#8d6e63", "#795548", "#6d4c41", "#5d4037", "#4e342e", "#3e2723", "#20aee5", "#fff21f", "#e4007f", "#6bc8f2",
    "#fafafa", "#f5f5f5", "#eeeeee", "#e0e0e0", "#dbdbdb", "#9e9e9e", "#757575", "#616161", "#424242", "#212121", "#ff0000", "#00ff00", "#0000ff", "#9e9e9e",

  ]

  // 透明，黑色，白色三个基础色
  var str = '<div class="palette_item transparent" data-rgb="none"></div>\
             <div class="palette_item black" data-rgb="#000000"></div>\
             <div class="palette_item white" data-rgb="#ffffff"></div>'

  palette.forEach(function (item, i) {
    str += '<div class="palette_item" style="background-color: ' + item + ';" data-rgb="' + item + '"></div>';
  });

  str += '<div class="palette-rgb" ><form><textarea id="palette-rgb"></textarea></form></div>'

  $('#palette').append(str);

  var toolStroke = document.getElementById('tool_stroke');
  var picking = false;

  $(document).on("mouseup", function () { picking = false; })

  $('#palette').on("mousemove mousedown touchstart touchmove", ".palette_item", function (evt) {

    evt.preventDefault();
    if (evt.type === "mousedown" || evt.type === "touchstart") picking = true;
    if (!picking) return;

    var isStroke = toolStroke.classList.contains('active') || evt.shiftKey;
    var picker = isStroke ? "stroke" : "fill";

    // 取出颜色
    var color = this.getAttribute('data-rgb');
    var paint = null;
    var noUndo = true;

    console.log("color:", color)
    $('#palette-rgb').text(color.toString())

    paint = color === 'none'
      ? new $.jGraduate.Paint()
      : new $.jGraduate.Paint({ alpha: 100, solidColor: color.substr(1) });

    editor.paintBox[picker].setPaint(paint);

    if (isStroke) {
      svgCanvas.setColor('stroke', color, noUndo);
      if (color != 'none' && svgCanvas.getStrokeOpacity() != 1) {
        svgCanvas.setPaintOpacity('stroke', 1.0);
      }
    } else {
      svgCanvas.setColor('fill', color, noUndo);
      if (color != 'none' && svgCanvas.getFillOpacity() != 1) {
        svgCanvas.setPaintOpacity('fill', 1.0);
      }
    }
    editor.source()
  }).bind('contextmenu', function (e) { e.preventDefault() });
};


