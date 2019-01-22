function myFunction()  {
  var element = document.getElementById('barlist');
  if (element.classList) {
    element.classList.toggle('active');
  } else {
    var classes = element.className.split(" ");
    var i = classes.indexOf('active');
    if (i >= 0)
      classes.splice(i, 1);
    else
    classes.push('active');
    element.className = classes.join(' ');
  }
}
