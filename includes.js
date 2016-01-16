<script>
function myFunction() {
    var newscript = document.getElementsByTagName("head")[0];
    newscript.innerHTML =
newscript.innerHTML + '\n' +
'<link href="//maxcdn.bootstrapcdn.com/bootstrap/3.3.2/css/bootstrap.min.css" rel="stylesheet">' + '\n' 
+ '<!-- Include roboto.css to use the Roboto web font, material.css to include the theme and ripples.css to style the ripple effect -->' + '\n' +
'<link href="/dist/css/roboto.min.css" rel="stylesheet">' + '\n' +
'<link href="/dist/css/material.min.css" rel="stylesheet">' + '\n' +
'<link href="/dist/css/ripples.min.css" rel="stylesheet">' + '\n' +
'<link href="/dist/css/submenu.css" rel="stylesheet">'
+ '\n';
}
</script>