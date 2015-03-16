/**
 *   Confluence Renderer
 **/

function ConfluenceRenderer() {
  var ConfluenceRenderer = new marked.Renderer();
  // Block-level renderer methods.
  ConfluenceRenderer.code = function(code, lang, escaped) {
    return '{code}\n' + code + '\n{code}';
  };

  ConfluenceRenderer.blockquote = function(quote) {
    return '{quote}\n' + quote + '\n{quote}';
  };
  
  // Renderer.html = function(html) {};
  
  ConfluenceRenderer.heading = function(text, level, raw) {
    return 'h' + level + '. ' + text + '\n';
  };
  
  /*
  Renderer.hr = function() {};
  
  Renderer.list = function(body, ordered) {
    var type = ordered ? 'ol' : 'ul';
    return '<' + type + '>\n' + body + '</' + type + '>\n';
  };
  
  Renderer.listitem = function(text) {
    return '<li>' + text + '</li>\n';
  };
  */

  ConfluenceRenderer.paragraph = function(text) { return text; };

  /*
  Renderer.table = function(header, body) {
    return '<table>\n'
      + '<thead>\n'
      + header
      + '</thead>\n'
      + '<tbody>\n'
      + body
      + '</tbody>\n'
      + '</table>\n';
  };
  
  Renderer.tablerow = function(content) {
    return '<tr>\n' + content + '</tr>\n';
  };
  
  Renderer.tablecell = function(content, flags) {
    var type = flags.header ? 'th' : 'td';
    var tag = flags.align
      ? '<' + type + ' style="text-align:' + flags.align + '">'
      : '<' + type + '>';
    return tag + content + '</' + type + '>\n';
  };
  */
  // Inline-level renderer methods.
  ConfluenceRenderer.strong = function(text) { return '*' + text + '*'; };
  ConfluenceRenderer.em = function(text) { return '_' + text + '_'; };
  ConfluenceRenderer.codespan = function(code) { return '{{' + code + '}}'; };
  ConfluenceRenderer.br = function() { return '\\\\'; };
  ConfluenceRenderer.del = function(text) { return '-' + text + '-'; };
  ConfluenceRenderer.link =
      function(href, title, text) { return '[' + text + '|' + href + ']'; };
  ConfluenceRenderer.image =
      function(href, title, text) { return '!' + href + '!'; };
  return ConfluenceRenderer;
}


