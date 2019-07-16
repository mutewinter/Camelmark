if (document.location.href.match(/amazon/)) {
  if (document.getElementById('ASIN')) {
    var asin = document.getElementById('ASIN').value;
    window.open('http://camelcamelcamel.com/product/' + asin, '_blank');
  }  else if (document.getElementsByName('a')[0]) {
    var asin = document.getElementsByName('a')[0].value;
    window.open('http://camelcamelcamel.com/product/' + asin, '_blank');
  } else {
    alert("No ASIN found on this amazon page, make sure you're on a product page");
  }
} else if (document.location.href.match(/newegg/)) {
  var productID;
  if ((productID = document.location.href.match(/=(.*)$/)[1])) {
    window.open('http://camelegg.com/product/' + productID, '_blank');
  } else {
    alert('No product ID found at end of URL.');
  }
} else {
  alert('Camelmark only works on Amazon.com and Newegg.com, sorry!');
}
