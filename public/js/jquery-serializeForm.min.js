/*! jquery-serializeForm - v1.2.1 - 2013-11-06
 * http://danheberden.com/
 * Copyright (c) 2013 Dan Heberden
 * Licensed MIT
**/
!function(a){a.fn.serializeForm=function(){if(this.length<1)return!1;var b={},c=b,d=':input[type!="checkbox"][type!="radio"], input:checked',e=function(){if(!this.disabled){var d=this.name.replace(/\[([^\]]+)?\]/g,",$1").split(","),e=d.length-1,f=a(this);if(d[0]){for(var g=0;e>g;g++)c=c[d[g]]=c[d[g]]||(""===d[g+1]||"0"===d[g+1]?[]:{});void 0!==c.length?c.push(f.val()):c[d[e]]=f.val(),c=b}}};return this.filter(d).each(e),this.find(d).each(e),b}}(jQuery);