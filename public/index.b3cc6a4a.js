const o={"/":home,"/about":about,"/contact":contact},n=document.querySelector("#root"),t=window.location.pathname;n.innerHTML=o[t];window.onpopstate=()=>{n.innerHTML=o[window.location.pathname]};
//# sourceMappingURL=index.b3cc6a4a.js.map
