$("input").on('input', function(e) {
  window.location = "#search/"+$("#search").val();
  e.preventDefault();
})
