function e(e,t,o,r){Object.defineProperty(e,t,{get:o,set:r,enumerable:!0,configurable:!0})}function t(e){return e&&e.__esModule?e.default:e}var o="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},r={},n={},i=o.parcelRequired7c6;null==i&&((i=function(e){if(e in r)return r[e].exports;if(e in n){var t=n[e];delete n[e];var o={id:e,exports:{}};return r[e]=o,t.call(o.exports,o,o.exports),o.exports}var i=new Error("Cannot find module '"+e+"'");throw i.code="MODULE_NOT_FOUND",i}).register=function(e,t){n[e]=t},o.parcelRequired7c6=i),i.register("kyEFX",(function(t,o){var r,n;e(t.exports,"register",(function(){return r}),(function(e){return r=e})),e(t.exports,"resolve",(function(){return n}),(function(e){return n=e}));var i={};r=function(e){for(var t=Object.keys(e),o=0;o<t.length;o++)i[t[o]]=e[t[o]]},n=function(e){var t=i[e];if(null==t)throw new Error("Could not resolve bundle with id "+e);return t}})),i.register("g2qaT",(function(e,o){var r=i("iNNh9"),n=i("i3LI5"),a=i("cWWJt"),s=i("FZ9Lk");console.log("my_shopping-list-Серг");document.querySelector(".shopping-title").addEventListener("click",M);let l=S(),d=r.DATA_BOOKS.length,c=j(),u=Math.ceil(d/c),h=x(),g=1,v=0,f=O(),m=1,w=A();console.log("totalBook",d),console.log("perPage",c),console.log("totalPage",u),console.log("currentPage",g),console.log("maxBtn",w),console.log("howManyBtn",f);const p=document.querySelector(".shopping-list"),b=document.querySelector(".empty-book-wrapper"),y=document.querySelector(".shopping-list-btn");let k=[];const L=document.querySelector('[data-turn="first"]'),C=document.querySelector('[data-turn="second"]'),D=document.querySelector('[data-turn="third"]'),_=document.querySelector('[data-turn="rest"]');let B=F();E();document.querySelector('[data-turn="next"]').addEventListener("click",(function(){if(g<u-1){if(g++,u>w)if(m<w-1)B[m-1].classList.remove("turn-active"),m++,B[m-1].classList.add("turn-active");else{let e=w-2;for(let t=0;t<w;t++)t?t===w-1?g===u-1?B[w-1].textContent=g+1:B[t].textContent="...":B[t].textContent=g-e:B[t].textContent="...",e--}else B[m-1].classList.remove("turn-active"),m++,B[m-1].classList.add("turn-active");console.log("currentPage",g),M()}else g<u&&(g++,B[m-1].classList.remove("turn-active"),m++,B[m-1].classList.add("turn-active"),console.log("currentPage",g),M())}));document.querySelector('[data-turn="prev"]').addEventListener("click",(function(){if(1===g)return void console.log("фить <");if(u<=w)return console.log("1."),B[m-1].classList.remove("turn-active"),m--,g--,B[m-1].classList.add("turn-active"),M(),console.log("currentBtn",m),void console.log("currentPage",g);if(m===g)return console.log("2.1."),B[m-1].classList.remove("turn-active"),m--,g--,B[m-1].classList.add("turn-active"),M(),console.log("currentBtn",m),void console.log("currentPage",g);if(m>2)return console.log("2.2.1."),B[m-1].classList.remove("turn-active"),m--,g--,B[m-1].classList.add("turn-active"),M(),console.log("currentBtn",m),void console.log("currentPage",g);console.log("2.2.2."),g--,console.log("currentBtn",m),console.log("currentPage",g);for(let e=0;e<w;e++)e?B[e].textContent=e===w-1?"...":g+e-1:2===g?B[0].textContent=1:B[e].textContent="...";return void M()}));document.querySelector('[data-turn="start"]').addEventListener("click",(function(){if(g<2)return void console.log("Тиць");if(u<=w)return B[m-1].classList.remove("turn-active"),m=1,g=1,B[m-1].classList.add("turn-active"),M(),console.log("currentBtn",m),void console.log("currentPage",g);B[m-1].classList.remove("turn-active"),m=1,g=1,B[m-1].classList.add("turn-active");for(let e=0;e<w;e++)B[e].textContent=e===w-1?"...":g+e;return M(),console.log("currentBtn",m),void console.log("currentPage",g)}));function H(e){for(let e=0;e<v;e++)k[e].removeEventListener("click",H);const t=Number(e.target.dataset.set)+(g-1)*c;if(r.DATA_BOOKS.splice(t,1),d-=1,!d)return void function(){b.classList.remove("is-hidden"),y.classList.add("is-hidden"),p.innerHTML="",B=[L,C,D,_];for(let e=0;e<B.length;e++)B[e].classList.contains("is-hidden")||B[e].classList.add("is-hidden");l=S(),d=r.DATA_BOOKS.length,c=j(),u=Math.ceil(d/c),h=x(),g=1,v=0,f=O(),m=1,w=A(),B=F(),E()}();let o=u;u=Math.ceil(d/c),u<o&&u<=w&&(m>1&&m--,g>1&&g--,console.log("d",m,g),f=O(),E()),h=x(),M()}function M(){if(!d)return void console.log("Книг нет");b.classList.add("is-hidden"),y.classList.remove("is-hidden"),v=d>=g*c?c:h,console.log("numberRender",v);const e=(g-1)*c,o=[];for(let i=0;i<v;i++){const l=`\n            <li class="shopping-item">\n                <div class="item-card-thumb">\n                    <img src="${r.DATA_BOOKS[i+e].coverImage}" alt="book">\n                </div>       \n                <div class="item-card-wrap">\n                    <h3 class="item-card-title">${r.DATA_BOOKS[i+e].title}</h3>\n                    <p class="item-card-category">${r.DATA_BOOKS[i+e].list_name}</p>\n                    <p class="item-card-desc">${r.DATA_BOOKS[i+e].description}</p>       \n                    <div class="item-card-bottom-wrap">\n                        <p class="item-card-author">${r.DATA_BOOKS[i+e].author}</p>\n                        <ul class="item-card-stores-wrap">\n                            <li class="item-card-icons">\n                                <img src=${t(n)} width="32" alt=" ">\n                            </li>\n                            <li class="item-card-icon">\n                                <img src=${t(a)} width="16" alt=" ">\n                            </li>\n                            <li class="item-card-icon">\n                                <img src=${t(s)} width="16" alt=" ">\n                            </li>\n                        </ul>\n                    </div>\n                    <button class="remove-btn" data-set="${i}">${i}</button>\n                </div>\n            </li>\n        `;o[i]=l}const i=o.join("");p.innerHTML=i,k=document.querySelectorAll(".remove-btn");for(let e=0;e<v;e++)k[e].addEventListener("click",H)}function S(){return!(window.innerWidth>767)}function j(){return l?4:3}function x(){return d%c}function O(){return l?u>2?3:u:u>3?4:u}function A(){return l?3:4}function F(){return l?[L,C,_]:[L,C,D,_]}function E(){for(let e=0;e<B.length;e++)B[e].classList.remove("turn-active"),B[e].classList.contains("is-hidden")||B[e].classList.add("is-hidden");if(B[m-1].classList.add("turn-active"),u<=w)for(let e=0;e<f;e++)B[e].classList.remove("is-hidden"),B[e].textContent=e+1;else for(let e=0;e<f;e++){if(B[e].classList.remove("is-hidden"),e===w-1)return void(B[e].textContent="...");B[e].textContent=e+1}}document.querySelector('[data-turn="end"]').addEventListener("click",(function(){if(g===u)return void console.log("Тиць");if(u<=w)return B[m-1].classList.remove("turn-active"),m=f,g=u,B[m-1].classList.add("turn-active"),M(),console.log("currentBtn",m),void console.log("currentPage",g);B[m-1].classList.remove("turn-active"),m=f,g=u,B[m-1].classList.add("turn-active");for(let e=0;e<w;e++)B[e].textContent=0===e?"...":g+e+1-w;return M(),console.log("currentBtn",m),void console.log("currentPage",g)}))})),i.register("iNNh9",(function(t,o){e(t.exports,"DATA_BOOKS",(function(){return r}));const r=[{coverImage:"https://storage.googleapis.com/du-prd/books/images/9780063226050.jpg",title:"1",list_name:"Hardcover Fiction",description:'item-card-desc">David Burroughs was once a devoted father to his three-year-old son Matthew, living a dream life just a short drive away from the working-class suburb where he and his wife, Cheryl, first fell in love--until one fateful night when David woke suddenly to discover Matthew had been murdered while',author:"Harlan Coben"},{coverImage:"https://storage.googleapis.com/du-prd/books/images/9780063226050.jpg",title:"2",list_name:"Hardcover Fiction",description:'item-card-desc">David Burroughs was once a devoted father to his three-year-old son Matthew, living a dream life just a short drive away from the working-class suburb where he and his wife, Cheryl, first fell in love--until one fateful night when David woke suddenly to discover Matthew had been murdered while',author:"Harlan Coben"},{coverImage:"https://storage.googleapis.com/du-prd/books/images/9780063226050.jpg",title:"3",list_name:"Hardcover Fiction",description:'item-card-desc">David Burroughs was once a devoted father to his three-year-old son Matthew, living a dream life just a short drive away from the working-class suburb where he and his wife, Cheryl, first fell in love--until one fateful night when David woke suddenly to discover Matthew had been murdered while',author:"Harlan Coben"},{coverImage:"https://storage.googleapis.com/du-prd/books/images/9780063226050.jpg",title:"4",list_name:"Hardcover Fiction",description:'item-card-desc">David Burroughs was once a devoted father to his three-year-old son Matthew, living a dream life just a short drive away from the working-class suburb where he and his wife, Cheryl, first fell in love--until one fateful night when David woke suddenly to discover Matthew had been murdered while',author:"Harlan Coben"},{coverImage:"https://storage.googleapis.com/du-prd/books/images/9780063226050.jpg",title:"5",list_name:"Hardcover Fiction",description:'item-card-desc">David Burroughs was once a devoted father to his three-year-old son Matthew, living a dream life just a short drive away from the working-class suburb where he and his wife, Cheryl, first fell in love--until one fateful night when David woke suddenly to discover Matthew had been murdered while',author:"Harlan Coben"},{coverImage:"https://storage.googleapis.com/du-prd/books/images/9780063226050.jpg",title:"6",list_name:"Hardcover Fiction",description:'item-card-desc">David Burroughs was once a devoted father to his three-year-old son Matthew, living a dream life just a short drive away from the working-class suburb where he and his wife, Cheryl, first fell in love--until one fateful night when David woke suddenly to discover Matthew had been murdered while',author:"Harlan Coben"},{coverImage:"https://storage.googleapis.com/du-prd/books/images/9780063226050.jpg",title:"7",list_name:"Hardcover Fiction",description:'item-card-desc">David Burroughs was once a devoted father to his three-year-old son Matthew, living a dream life just a short drive away from the working-class suburb where he and his wife, Cheryl, first fell in love--until one fateful night when David woke suddenly to discover Matthew had been murdered while',author:"Harlan Coben"},{coverImage:"https://storage.googleapis.com/du-prd/books/images/9780063226050.jpg",title:"8",list_name:"Hardcover Fiction",description:'item-card-desc">David Burroughs was once a devoted father to his three-year-old son Matthew, living a dream life just a short drive away from the working-class suburb where he and his wife, Cheryl, first fell in love--until one fateful night when David woke suddenly to discover Matthew had been murdered while',author:"Harlan Coben"},{coverImage:"https://storage.googleapis.com/du-prd/books/images/9780063226050.jpg",title:"9",list_name:"Hardcover Fiction",description:'item-card-desc">David Burroughs was once a devoted father to his three-year-old son Matthew, living a dream life just a short drive away from the working-class suburb where he and his wife, Cheryl, first fell in love--until one fateful night when David woke suddenly to discover Matthew had been murdered while',author:"Harlan Coben"},{coverImage:"https://storage.googleapis.com/du-prd/books/images/9780063226050.jpg",title:"10",list_name:"Hardcover Fiction",description:'item-card-desc">David Burroughs was once a devoted father to his three-year-old son Matthew, living a dream life just a short drive away from the working-class suburb where he and his wife, Cheryl, first fell in love--until one fateful night when David woke suddenly to discover Matthew had been murdered while',author:"Harlan Coben"},{coverImage:"https://storage.googleapis.com/du-prd/books/images/9780063226050.jpg",title:"11",list_name:"Hardcover Fiction",description:'item-card-desc">David Burroughs was once a devoted father to his three-year-old son Matthew, living a dream life just a short drive away from the working-class suburb where he and his wife, Cheryl, first fell in love--until one fateful night when David woke suddenly to discover Matthew had been murdered while',author:"Harlan Coben"},{coverImage:"https://storage.googleapis.com/du-prd/books/images/9780063226050.jpg",title:"12",list_name:"Hardcover Fiction",description:'item-card-desc">David Burroughs was once a devoted father to his three-year-old son Matthew, living a dream life just a short drive away from the working-class suburb where he and his wife, Cheryl, first fell in love--until one fateful night when David woke suddenly to discover Matthew had been murdered while',author:"Harlan Coben"}]})),i.register("i3LI5",(function(e,t){e.exports=new URL(i("kyEFX").resolve("aTOk5"),import.meta.url).toString()})),i.register("cWWJt",(function(e,t){e.exports=new URL(i("kyEFX").resolve("eAwa4"),import.meta.url).toString()})),i.register("FZ9Lk",(function(e,t){e.exports=new URL(i("kyEFX").resolve("26dpu"),import.meta.url).toString()})),i("kyEFX").register(JSON.parse('{"cPlFl":"index.e01a7c55.js","aTOk5":"amazon.681e64c0.png","eAwa4":"Book.d2e82142.png","26dpu":"BookShop.19aca9ae.png"}'));
//# sourceMappingURL=index.e01a7c55.js.map