!function(){function e(e,t,r,o){Object.defineProperty(e,t,{get:r,set:o,enumerable:!0,configurable:!0})}function t(e){return e&&e.__esModule?e.default:e}var r="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},o={},n={},i=r.parcelRequired7c6;null==i&&((i=function(e){if(e in o)return o[e].exports;if(e in n){var t=n[e];delete n[e];var r={id:e,exports:{}};return o[e]=r,t.call(r.exports,r,r.exports),r.exports}var i=new Error("Cannot find module '"+e+"'");throw i.code="MODULE_NOT_FOUND",i}).register=function(e,t){n[e]=t},r.parcelRequired7c6=i),i.register("iE7OH",(function(t,r){var o,n;e(t.exports,"register",(function(){return o}),(function(e){return o=e})),e(t.exports,"resolve",(function(){return n}),(function(e){return n=e}));var i={};o=function(e){for(var t=Object.keys(e),r=0;r<t.length;r++)i[t[r]]=e[t[r]]},n=function(e){var t=i[e];if(null==t)throw new Error("Could not resolve bundle with id "+e);return t}})),i.register("98Pwa",(function(e,r){var o=i("j0iwc"),n=i("3J6pr"),a=i("jdteW"),s=i("2uk0R");console.log("my_shopping-list-Серг"),document.querySelector(".shopping-title").addEventListener("click",j);var d=M(),l=o.DATA_BOOKS.length,c=S(),u=Math.ceil(l/c),h=x(),v=1,g=0,f=O(),m=1,w=A();console.log("totalBook",l),console.log("perPage",c),console.log("totalPage",u),console.log("currentPage",v),console.log("maxBtn",w),console.log("howManyBtn",f);var p=document.querySelector(".shopping-list"),b=document.querySelector(".empty-book-wrapper"),y=document.querySelector(".shopping-list-btn"),k=[],L=document.querySelector('[data-turn="first"]'),C=document.querySelector('[data-turn="second"]'),H=document.querySelector('[data-turn="third"]'),B=document.querySelector('[data-turn="rest"]'),D=E();function _(e){for(var t=0;t<g;t++)k[t].removeEventListener("click",_);var r=Number(e.target.dataset.set)+(v-1)*c;if(o.DATA_BOOKS.splice(r,1),l-=1){var n=u;(u=Math.ceil(l/c))<n&&u<=w&&(m>1&&m--,v>1&&v--,console.log("d",m,v),f=O(),T()),h=x(),j()}else!function(){b.classList.remove("is-hidden"),y.classList.add("is-hidden"),p.innerHTML="",D=[L,C,H,B];for(var e=0;e<D.length;e++)D[e].classList.contains("is-hidden")||D[e].classList.add("is-hidden");d=M(),l=o.DATA_BOOKS.length,c=S(),u=Math.ceil(l/c),h=x(),v=1,g=0,f=O(),m=1,w=A(),D=E(),T()}()}function j(){if(l){b.classList.add("is-hidden"),y.classList.remove("is-hidden"),g=l>=v*c?c:h,console.log("numberRender",g);for(var e=(v-1)*c,r=[],i=0;i<g;i++){var d='\n            <li class="shopping-item">\n                <div class="item-card-thumb">\n                    <img src="'.concat(o.DATA_BOOKS[i+e].coverImage,'" alt="book">\n                </div>       \n                <div class="item-card-wrap">\n                    <h3 class="item-card-title">').concat(o.DATA_BOOKS[i+e].title,'</h3>\n                    <p class="item-card-category">').concat(o.DATA_BOOKS[i+e].list_name,'</p>\n                    <p class="item-card-desc">').concat(o.DATA_BOOKS[i+e].description,'</p>       \n                    <div class="item-card-bottom-wrap">\n                        <p class="item-card-author">').concat(o.DATA_BOOKS[i+e].author,'</p>\n                        <ul class="item-card-stores-wrap">\n                            <li class="item-card-icons">\n                                <img src=').concat(t(n),' width="32" alt=" ">\n                            </li>\n                            <li class="item-card-icon">\n                                <img src=').concat(t(a),' width="16" alt=" ">\n                            </li>\n                            <li class="item-card-icon">\n                                <img src=').concat(t(s),' width="16" alt=" ">\n                            </li>\n                        </ul>\n                    </div>\n                    <button class="remove-btn" data-set="').concat(i,'">').concat(i,"</button>\n                </div>\n            </li>\n        ");r[i]=d}var u=r.join("");p.innerHTML=u,k=document.querySelectorAll(".remove-btn");for(var f=0;f<g;f++)k[f].addEventListener("click",_)}else console.log("Книг нет")}function M(){return!(window.innerWidth>767)}function S(){return d?4:3}function x(){return l%c}function O(){return d?u>2?3:u:u>3?4:u}function A(){return d?3:4}function E(){return d?[L,C,B]:[L,C,H,B]}function T(){for(var e=0;e<D.length;e++)D[e].classList.remove("turn-active"),D[e].classList.contains("is-hidden")||D[e].classList.add("is-hidden");if(D[m-1].classList.add("turn-active"),u<=w)for(var t=0;t<f;t++)D[t].classList.remove("is-hidden"),D[t].textContent=t+1;else for(var r=0;r<f;r++){if(D[r].classList.remove("is-hidden"),r===w-1)return void(D[r].textContent="...");D[r].textContent=r+1}}T(),document.querySelector('[data-turn="next"]').addEventListener("click",(function(){if(v<u-1){if(v++,u>w)if(m<w-1)D[m-1].classList.remove("turn-active"),m++,D[m-1].classList.add("turn-active");else for(var e=w-2,t=0;t<w;t++)t?t===w-1?v===u-1?D[w-1].textContent=v+1:D[t].textContent="...":D[t].textContent=v-e:D[t].textContent="...",e--;else D[m-1].classList.remove("turn-active"),m++,D[m-1].classList.add("turn-active");console.log("currentPage",v),j()}else v<u&&(v++,D[m-1].classList.remove("turn-active"),m++,D[m-1].classList.add("turn-active"),console.log("currentPage",v),j())})),document.querySelector('[data-turn="prev"]').addEventListener("click",(function(){if(1===v)return void console.log("фить <");if(u<=w)return console.log("1."),D[m-1].classList.remove("turn-active"),m--,v--,D[m-1].classList.add("turn-active"),j(),console.log("currentBtn",m),void console.log("currentPage",v);if(m===v)return console.log("2.1."),D[m-1].classList.remove("turn-active"),m--,v--,D[m-1].classList.add("turn-active"),j(),console.log("currentBtn",m),void console.log("currentPage",v);if(m>2)return console.log("2.2.1."),D[m-1].classList.remove("turn-active"),m--,v--,D[m-1].classList.add("turn-active"),j(),console.log("currentBtn",m),void console.log("currentPage",v);console.log("2.2.2."),v--,console.log("currentBtn",m),console.log("currentPage",v);for(var e=0;e<w;e++)e?D[e].textContent=e===w-1?"...":v+e-1:2===v?D[0].textContent=1:D[e].textContent="...";return void j()})),document.querySelector('[data-turn="start"]').addEventListener("click",(function(){if(v<2)return void console.log("Тиць");if(u<=w)return D[m-1].classList.remove("turn-active"),v=1,D[(m=1)-1].classList.add("turn-active"),j(),console.log("currentBtn",m),void console.log("currentPage",v);D[m-1].classList.remove("turn-active"),v=1,D[(m=1)-1].classList.add("turn-active");for(var e=0;e<w;e++)D[e].textContent=e===w-1?"...":v+e;return j(),console.log("currentBtn",m),void console.log("currentPage",v)})),document.querySelector('[data-turn="end"]').addEventListener("click",(function(){if(v===u)return void console.log("Тиць");if(u<=w)return D[m-1].classList.remove("turn-active"),v=u,D[(m=f)-1].classList.add("turn-active"),j(),console.log("currentBtn",m),void console.log("currentPage",v);D[m-1].classList.remove("turn-active"),v=u,D[(m=f)-1].classList.add("turn-active");for(var e=0;e<w;e++)D[e].textContent=0===e?"...":v+e+1-w;return j(),console.log("currentBtn",m),void console.log("currentPage",v)}))})),i.register("j0iwc",(function(t,r){e(t.exports,"DATA_BOOKS",(function(){return o}));var o=[{coverImage:"https://storage.googleapis.com/du-prd/books/images/9780063226050.jpg",title:"1",list_name:"Hardcover Fiction",description:'item-card-desc">David Burroughs was once a devoted father to his three-year-old son Matthew, living a dream life just a short drive away from the working-class suburb where he and his wife, Cheryl, first fell in love--until one fateful night when David woke suddenly to discover Matthew had been murdered while',author:"Harlan Coben"},{coverImage:"https://storage.googleapis.com/du-prd/books/images/9780063226050.jpg",title:"2",list_name:"Hardcover Fiction",description:'item-card-desc">David Burroughs was once a devoted father to his three-year-old son Matthew, living a dream life just a short drive away from the working-class suburb where he and his wife, Cheryl, first fell in love--until one fateful night when David woke suddenly to discover Matthew had been murdered while',author:"Harlan Coben"},{coverImage:"https://storage.googleapis.com/du-prd/books/images/9780063226050.jpg",title:"3",list_name:"Hardcover Fiction",description:'item-card-desc">David Burroughs was once a devoted father to his three-year-old son Matthew, living a dream life just a short drive away from the working-class suburb where he and his wife, Cheryl, first fell in love--until one fateful night when David woke suddenly to discover Matthew had been murdered while',author:"Harlan Coben"},{coverImage:"https://storage.googleapis.com/du-prd/books/images/9780063226050.jpg",title:"4",list_name:"Hardcover Fiction",description:'item-card-desc">David Burroughs was once a devoted father to his three-year-old son Matthew, living a dream life just a short drive away from the working-class suburb where he and his wife, Cheryl, first fell in love--until one fateful night when David woke suddenly to discover Matthew had been murdered while',author:"Harlan Coben"},{coverImage:"https://storage.googleapis.com/du-prd/books/images/9780063226050.jpg",title:"5",list_name:"Hardcover Fiction",description:'item-card-desc">David Burroughs was once a devoted father to his three-year-old son Matthew, living a dream life just a short drive away from the working-class suburb where he and his wife, Cheryl, first fell in love--until one fateful night when David woke suddenly to discover Matthew had been murdered while',author:"Harlan Coben"},{coverImage:"https://storage.googleapis.com/du-prd/books/images/9780063226050.jpg",title:"6",list_name:"Hardcover Fiction",description:'item-card-desc">David Burroughs was once a devoted father to his three-year-old son Matthew, living a dream life just a short drive away from the working-class suburb where he and his wife, Cheryl, first fell in love--until one fateful night when David woke suddenly to discover Matthew had been murdered while',author:"Harlan Coben"},{coverImage:"https://storage.googleapis.com/du-prd/books/images/9780063226050.jpg",title:"7",list_name:"Hardcover Fiction",description:'item-card-desc">David Burroughs was once a devoted father to his three-year-old son Matthew, living a dream life just a short drive away from the working-class suburb where he and his wife, Cheryl, first fell in love--until one fateful night when David woke suddenly to discover Matthew had been murdered while',author:"Harlan Coben"},{coverImage:"https://storage.googleapis.com/du-prd/books/images/9780063226050.jpg",title:"8",list_name:"Hardcover Fiction",description:'item-card-desc">David Burroughs was once a devoted father to his three-year-old son Matthew, living a dream life just a short drive away from the working-class suburb where he and his wife, Cheryl, first fell in love--until one fateful night when David woke suddenly to discover Matthew had been murdered while',author:"Harlan Coben"},{coverImage:"https://storage.googleapis.com/du-prd/books/images/9780063226050.jpg",title:"9",list_name:"Hardcover Fiction",description:'item-card-desc">David Burroughs was once a devoted father to his three-year-old son Matthew, living a dream life just a short drive away from the working-class suburb where he and his wife, Cheryl, first fell in love--until one fateful night when David woke suddenly to discover Matthew had been murdered while',author:"Harlan Coben"},{coverImage:"https://storage.googleapis.com/du-prd/books/images/9780063226050.jpg",title:"10",list_name:"Hardcover Fiction",description:'item-card-desc">David Burroughs was once a devoted father to his three-year-old son Matthew, living a dream life just a short drive away from the working-class suburb where he and his wife, Cheryl, first fell in love--until one fateful night when David woke suddenly to discover Matthew had been murdered while',author:"Harlan Coben"},{coverImage:"https://storage.googleapis.com/du-prd/books/images/9780063226050.jpg",title:"11",list_name:"Hardcover Fiction",description:'item-card-desc">David Burroughs was once a devoted father to his three-year-old son Matthew, living a dream life just a short drive away from the working-class suburb where he and his wife, Cheryl, first fell in love--until one fateful night when David woke suddenly to discover Matthew had been murdered while',author:"Harlan Coben"},{coverImage:"https://storage.googleapis.com/du-prd/books/images/9780063226050.jpg",title:"12",list_name:"Hardcover Fiction",description:'item-card-desc">David Burroughs was once a devoted father to his three-year-old son Matthew, living a dream life just a short drive away from the working-class suburb where he and his wife, Cheryl, first fell in love--until one fateful night when David woke suddenly to discover Matthew had been murdered while',author:"Harlan Coben"}]})),i.register("3J6pr",(function(e,t){e.exports=i("aNJCr").getBundleURL("2TdAo")+i("iE7OH").resolve("c2e7b")})),i.register("aNJCr",(function(t,r){var o;e(t.exports,"getBundleURL",(function(){return o}),(function(e){return o=e}));var n={};function i(e){return(""+e).replace(/^((?:https?|file|ftp|(chrome|moz)-extension):\/\/.+)\/[^/]+$/,"$1")+"/"}o=function(e){var t=n[e];return t||(t=function(){try{throw new Error}catch(t){var e=(""+t.stack).match(/(https?|file|ftp|(chrome|moz)-extension):\/\/[^)\n]+/g);if(e)return i(e[2])}return"/"}(),n[e]=t),t}})),i.register("jdteW",(function(e,t){e.exports=i("aNJCr").getBundleURL("2TdAo")+i("iE7OH").resolve("hSNyR")})),i.register("2uk0R",(function(e,t){e.exports=i("aNJCr").getBundleURL("2TdAo")+i("iE7OH").resolve("6VeES")})),i("iE7OH").register(JSON.parse('{"2TdAo":"index.9cf28425.js","c2e7b":"amazon.681e64c0.png","hSNyR":"Book.d2e82142.png","6VeES":"BookShop.19aca9ae.png"}'))}();
//# sourceMappingURL=index.9cf28425.js.map
