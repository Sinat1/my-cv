document.addEventListener("DOMContentLoaded",(()=>{document.querySelectorAll('a[href^="#"]').forEach((e=>{e.addEventListener("click",(t=>{const o=e.getAttribute("href"),n=document.querySelector(o);n&&(t.preventDefault(),n.scrollIntoView({behavior:"smooth"}),setTimeout((()=>{history.pushState(null,"",window.location.pathname)}),500))}))}))}));
//# sourceMappingURL=index.ba5e60cb.js.map
