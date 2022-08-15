function sliders(dir) {
    
    // '.feedback-slider-item', 'horizontal', '.main-prev-btn', '.main-next-btn'
    let slideIndex = 1,
    paused = false;

    const items = document.querySelectorAll('.present-slider-items');

        function showSlides(n) {
            if(n > items.length) {
                slideIndex = 1;
            }
            if(n < 1){
                slideIndex = items.length;
            }
            items.forEach(item => {
                item.classList.add("animated");
                item.style.display = "none";
            });

            items[slideIndex - 1].style.display = 'block';
        }

        showSlides(slideIndex);

        function plusSlides(n){
            showSlides(slideIndex += n);
        }

        try {
            const prevBtn = document.querySelector('.main-prev-btn'),
            nextBtn = document.querySelector('.main-next-btn');
            prevBtn.addEventListener('click', () => {
                plusSlides(-1);
                items[slideIndex - 1].classList.remove('animated');
                items[slideIndex - 1].classList.add('animated');
            });
            nextBtn.addEventListener('click',() => {
                plusSlides(1);
                items[slideIndex - 1].classList.remove('animated');
                items[slideIndex - 1].classList.add('animated');
            });
        }catch(e){}

        function activateAnimation() {
                if(dir === 'horizontal'){
                    paused = setInterval(function() {
                        plusSlides(1);
                        items[slideIndex - 1].classList.add('animated');
                    },3500);
                    }else{
                        paused = setInterval(function() {
                            plusSlides(1);
                            items[slideIndex - 1].classList.remove('animated');
                            items[slideIndex - 1].classList.add('animated');
                        },3500);
                    }
        }
        activateAnimation();

        items[0].parentNode.addEventListener('mouseenter', () => {
            clearInterval(paused);
        });

        items[0].parentNode.addEventListener('mouseleave', () => {
            activateAnimation();
        });

};

export default sliders();