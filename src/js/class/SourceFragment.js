MD.SourceFragment = function () {

    $("#tool_source_fragment_save").on("click", function () {
        console.log("---->save")

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

        if (!svgCanvas.setSvgString($('#svg_source_fragment_textarea').val())) {
            // 解析出错

            $.confirm("There were parsing errors in your SVG source.\nRevert back to original SVG source?", function (ok) {
                if (!ok) return false;
                saveChanges();
            });
        } else {
            saveChanges();
        }
    })


    function _show(string) {
        $('#svg_source_fragment_textarea').val(string)
    }

    this.show = _show;

}