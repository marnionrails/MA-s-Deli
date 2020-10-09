$(document).ready(function() {
  $("form#leap-year").submit(function(event) {
   event.preventDefault();
   const year = $("input#Year").val();