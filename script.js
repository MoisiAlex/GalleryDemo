const btn=document.querySelector('#dropdownBtn');
const content= document.querySelector('.dropdownContent');

btn.addEventListener('click',function(){
 content.classList.toggle("visible"); 
    
});


window.onclick = function(e) {
  if (!e.target.matches('#dropdownBtn')) {
      if (content.classList.contains("visible")) {
        content.classList.remove("visible");
      }
  }
}
