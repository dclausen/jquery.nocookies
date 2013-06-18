function badBrowser() {
  return $('.no-cookies').length;
}

if (badBrowser()) {
  $(function() {
    $("<div id='browserWarning'><strong>WARNING:</strong> Your browser does not support cookies. The functionality of this website may not work properly because of this. The cookies are not used for tracking purposes or will compromise your privacy in any way. Please see <a href='http://www.whatarecookies.com/enable.asp' target='_blank'>http://www.whatarecookies.com/enable.asp</a> for more information.</div>")
    .css({
      backgroundColor: '#FFDDDD',
      'width': '100%',
      'border-top': 'solid 1px #7F0000',
      'border-bottom': 'solid 1px #7F0000',
      'text-align': 'center',
      padding: '5px 0px 5px 0px'
    })
    .prependTo("body");
  });
}
