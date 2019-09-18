// function changePadding() {
//   document.parentElement().style.padding = "0px";
// }

$(document).ready(function() {
$('.searcher').keyup(function() {
 let searchInput = $('.searcher').val().toLowerCase();
 console.log(searchInput);
 $('.featherweight > a').each(function(index, element) {
   let info= $(element).attr('data-title').toLowerCase();
   console.log(info);
   if (info.includes(searchInput)) {
     $(element).show();
   } else {
     $(element).hide();
   }
 });
}); })
