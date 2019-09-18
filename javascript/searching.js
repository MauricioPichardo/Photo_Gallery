




 $(document).ready(function() {
$('.searcher').keyup(function() {
  let searchInput = $('.searcher').val().toLowerCase();
  console.log(searchInput);
  $('.featherweight > a').each(function(index, element) {
    let caption = $(element).attr('data-title').toLowerCase();
    console.log(caption);
    if (caption.includes(searchInput)) {
      $(element).show();
    } else {
      $(element).hide();
    }
  });
}); })
