function nav() {
    
  let menu = document.querySelector('.menu-toggle');
  let nav = document.querySelector('.nav');

  menu.addEventListener('click', function(){
    nav.classList.toggle('mobile');
    this.toggle("is-active");
  });

    
};

export default nav();