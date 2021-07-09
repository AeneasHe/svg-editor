// 选中的对象svg源码编辑器
MD.SourceFragment = function () {

    $("#tool_source_fragment_save").on("click", function () {

        var svgFragment = $('#svg_source_fragment_textarea').val()

        // 解析出svg内容
        var html = $.parseHTML(svgFragment)

        // 提取节点内容
        $.each(html, function (i, el) {
            // 获取标签
            console.log("---->save:", el.nodeName)
            // 获取id
            console.log("---->id:", el.getAttribute('id'))
        });


        var saveChanges = function () {

            console.log("start.js saveChanges")

            // svgCanvas.clearSelection();
            // $('#svg_source_textarea').blur();
            // editor.zoom.multiply(1);
            // editor.rulers.update();
            // editor.paintBox.fill.prep();
            // editor.paintBox.stroke.prep();
            // editor.modal.source.close();
        }

        // if (!svgCanvas.setSvgString($('#svg_source_fragment_textarea').val())) {
        //     // 解析出错

        //     $.confirm("There were parsing errors in your SVG source.\nRevert back to original SVG source?", function (ok) {
        //         if (!ok) return false;
        //         saveChanges();
        //     });
        // } else {
        //     saveChanges();
        // }
    })


    function _show(string) {
        $('#svg_source_fragment_textarea').val(string)
    }

    this.show = _show;

}