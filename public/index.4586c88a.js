const o={"/":home,"/contact":contact},n=document.querySelector("#root"),t=window.location.pathname,e="/"===t?t:t.replace(/\/$/,"");n.innerHTML=o[e];window.onpopstate=()=>{const t="/"===window.location.pathname?"/":window.location.pathname.replace(/\/$/,"");n.innerHTML=o[t]};
//# sourceMappingURL=index.4586c88a.js.map
