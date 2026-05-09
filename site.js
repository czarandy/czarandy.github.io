document.querySelectorAll('.toggleCourses').forEach(function (btn) {
  btn.addEventListener('click', function () {
    document.querySelector(this.getAttribute('data-toggle')).style.display = 'block';
    this.style.display = 'none';
  });
});

document.querySelectorAll('.footnote').forEach(function (el, idx) {
  var num = idx + 1;
  document.querySelector('.footnotes-header').style.display = 'block';
  var li = document.createElement('li');
  var anchor = document.createElement('a');
  anchor.id = 'fn-' + num;
  li.appendChild(anchor);
  li.appendChild(el.cloneNode(true));
  var backLink = document.createElement('a');
  backLink.href = '#ref-' + num;
  backLink.innerHTML = ' [↩]';
  li.appendChild(backLink);
  document.querySelector('.footnotes').appendChild(li);

  var sup = document.createElement('sup');
  var ref = document.createElement('a');
  ref.id = 'ref-' + num;
  ref.href = '#fn-' + num;
  ref.textContent = num;
  sup.appendChild(ref);
  el.replaceWith(sup);
});
