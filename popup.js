document.addEventListener('DOMContentLoaded', function() {
  // marked.setOptions({ renderer: Renderer() });
  document.getElementById('content').innerHTML =
      marked('I am using __markdown__.');
});

