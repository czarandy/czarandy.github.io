$('.toggleCourses').click(function(event) {
  $($(this).attr('data-toggle')).show();
  $(this).hide();
  event.preventDefault();
});

$('.footnote').map(function(idx, el) {
  $('.footnotes-header').show();
  ++idx;
  el = $(el);
  var li = $('<li><a name="fn-idx"></li>'.replace('idx', idx)).append(el.clone());
  $('.footnotes').append(li);
  li.append(' [<a href="#ref-idx">&#8617;</a>]'.replace('idx', idx));
  el.replaceWith('<sup><a name="ref-idx" href="#fn-idx">idx</a></sup>'.replace(/idx/g, idx));
});
