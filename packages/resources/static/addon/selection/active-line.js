(function(e){"object"==typeof exports&&"object"==typeof module?e(require("../../lib/codemirror")):"function"==typeof define&&define.amd?define(["../../lib/codemirror"],e):e(CodeMirror)})(function(e){function h(a){for(var c=0;c<a.state.activeLines.length;c++)a.removeLineClass(a.state.activeLines[c],"wrap","CodeMirror-activeline"),a.removeLineClass(a.state.activeLines[c],"background","CodeMirror-activeline-background"),a.removeLineClass(a.state.activeLines[c],"gutter","CodeMirror-activeline-gutter")}
function n(a,c){if(a.length!=c.length)return!1;for(var b=0;b<a.length;b++)if(a[b]!=c[b])return!1;return!0}function k(a,c){for(var b=[],g=0;g<c.length;g++){var d=c[g],l=a.getOption("styleActiveLine");if("object"==typeof l&&l.nonEmpty?d.anchor.line==d.head.line:d.empty())d=a.getLineHandleVisualStart(d.head.line),b[b.length-1]!=d&&b.push(d)}n(a.state.activeLines,b)||a.operation(function(){h(a);for(var f=0;f<b.length;f++)a.addLineClass(b[f],"wrap","CodeMirror-activeline"),a.addLineClass(b[f],"background",
"CodeMirror-activeline-background"),a.addLineClass(b[f],"gutter","CodeMirror-activeline-gutter");a.state.activeLines=b})}function m(a,c){k(a,c.ranges)}e.defineOption("styleActiveLine",!1,function(a,c,b){b=b==e.Init?!1:b;c!=b&&(b&&(a.off("beforeSelectionChange",m),h(a),delete a.state.activeLines),c&&(a.state.activeLines=[],k(a,a.listSelections()),a.on("beforeSelectionChange",m)))})});