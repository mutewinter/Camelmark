# Camelmark

A boomarklet to look up items from Amazon.com and Newegg.com on [camelcamelcamel](http://camelcamelcamel.com) and [camelegg](http://camelegg.com) respectively.

# Install

## Desktop

Drag <a href='javascript:if%20(document.location.href.match(/amazon/))%20{if%20(document.getElementById(%27ASIN%27))%20{var%20asin%20=%20document.getElementById(%27ASIN%27).value;document.location%20=%20%27http://camelcamelcamel.com/product/%27%20+%20asin;}%20else%20{alert(%22No%20ASIN%20found%20on%20this%20amazon%20page,%20make%20sure%20you%27re%20on%20a%20product%20page%22);}}%20else%20if%20(document.location.href.match(/newegg/))%20{var%20productID;if%20(productID%20=%20document.location.href.match(/=(.*)$/)[1])%20{document.location%20=%20%27http://camelegg.com/product/%27%20+%20productID;}%20else%20{alert(%27No%20product%20ID%20found%20at%20end%20of%20URL.%27);}}%20else%20{alert(%27Camelmark%20only%20works%20on%20Amazon.com%20and%20Newegg.com,%20sorry!%27);}'>Camelmark</a> into your bookmarks toolbar. You're done.

## Mobile

Make a new bookmark for this page. Copy this into the URL field.

<pre>
javascript:if%20(document.location.href.match(/amazon/))%20{if%20(document.getElementById(%27ASIN%27))%20{var%20asin%20=%20document.getElementById(%27ASIN%27).value;document.location%20=%20%27http://camelcamelcamel.com/product/%27%20+%20asin;}%20else%20{alert(%22No%20ASIN%20found%20on%20this%20amazon%20page,%20make%20sure%20you%27re%20on%20a%20product%20page%22);}}%20else%20if%20(document.location.href.match(/newegg/))%20{var%20productID;if%20(productID%20=%20document.location.href.match(/=(.*)$/)[1])%20{document.location%20=%20%27http://camelegg.com/product/%27%20+%20productID;}%20else%20{alert(%27No%20product%20ID%20found%20at%20end%20of%20URL.%27);}}%20else%20{alert(%27Camelmark%20only%20works%20on%20Amazon.com%20and%20Newegg.com,%20sorry!%27);}
</pre>

# Usage

1. Go to a product on Amazon.com or Newegg.com
2. Click Camelmark
3. Profit

# Special Thanks To

* [John Gruber](http://daringfireball.net/) for his [JavaScript Bookmarklet Builder](http://daringfireball.net/2007/03/javascript_bookmarklet_builder), which I used to create this bookmarklet.
* [Josh Lewis](http://blog.joshlewis.org/) for making the [initial version](http://blog.joshlewis.org/2009/05/06/saving-money-on-amazon-with-camelcamelcamel/) of this bookmarklet that worked with Amazon 
