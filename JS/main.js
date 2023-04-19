const hamburge = document.querySelector('.hamburge');
const menuBody = document.querySelector('.header');

hamburge.addEventListener ( 'click' , () => {
   const menuPopup = document.createElement('div');
   menuPopup.className = 'popupMenu';
   menuPopup.innerHTML = `
   <button class="x-bttn">x</button>           
   <ul class="menu-js-links flex">
     <li class="anchors"><a href="./index.html">Home</a></li>
     <li class="anchors"><a href="./about.html">About</a></li>
     <li class="anchors"><a href="#Speakers">Speakers</a></li>
   </ul>
   `;

   menuBody.appendChild(menuPopup);

   const remove = document.querySelector('.x-bttn');
   const anchorList = document.querySelectorAll('.anchors');
   remove.addEventListener('click', () => {
    menuBody.removeChild(menuPopup);
   })

   anchorList.forEach(anchor => {
    anchor.addEventListener('click', () => {
      menuBody.removeChild(menuPopup);
    });
  });

})
