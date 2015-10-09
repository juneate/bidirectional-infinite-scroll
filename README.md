#Bi-directional Infinite Scroller

##Overview

Place element containers as children of `.infinite` and they will infinitly scroll in both directions. This was created as an in-class example on October 9th, 2015.

##Issues
If you scroll down quickly, more than one element gets
above the scroll and then eventually we run out of 
elements to move down below. Resolve this by reworking
the code to dynamically move elements (rather than forcing
just one at a time). Also potential to store elements
in an array and not rely on the DOM.