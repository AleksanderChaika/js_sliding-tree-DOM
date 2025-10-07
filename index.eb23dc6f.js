document.querySelectorAll("li").forEach(function(e){var t=e.querySelector("ul");if(t){var n=e.firstChild,i=document.createElement("span");i.textContent=n.textContent.trim(),e.replaceChild(i,n),i.addEventListener("click",function(e){e.stopPropagation(),t.hidden=!t.hidden})}});
//# sourceMappingURL=index.eb23dc6f.js.map
