function showPage(pageId) {
  document.getElementById('home').style.display = 'none';
  document.getElementById('clip').style.display = 'none';

  document.getElementById(pageId).style.display = 'block';
}
