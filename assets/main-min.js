function menuBarNav(){var e=document.getElementById("menuBar");"menuBar"===e.className?e.className+=" responsive":e.className="menuBar"}function burgerButton(e){e.classList.toggle("change")}function openTab(e,n){var t=document.getElementsByClassName("tabContent");for(a=0;a<t.length;a++)t[a].style.display="none";document.getElementById(n).style.display="block",document.querySelector(".burgerButton").click(),e.currentTarget.className+=" active",t=document.getElementsByClassName("title");for(var a=0;a<t.length;a++)t[a].innerText=n}$(function(){$("#draggable").draggable()}),window.self!==window.top&&(document.getElementById("window").style.display="none");