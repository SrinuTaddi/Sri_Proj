// Custom JS

// nav collapse
const navItems = document.querySelectorAll('.nav-item');
const navMenu = document.querySelector('#navMenu');
navItems.forEach(li => {
    li.addEventListener('click', () => {
        let ww = window.innerWidth;
        if (ww < 992){
        let bsToggle = new bootstrap.Collapse(navMenu);
        bsToggle.hide();
        }
    })
})

// owl carousal Home
$(document).ready(function(){
    $('#slider .owl-carousel').owlCarousel({
        items:1,
        dots:true,
        autoplay:true,
        loop:true,
        autoplayHoverPause:true
    });

    //  Top Sale Owl carousel
    $('#top-sale .owl-carousel').owlCarousel({
        dots: false,
        nav: true,
        loop: true,
        autoplay: true,
        autoplayHoverPause: true,
        responsive: {
            0: {
                items: 1
            },
            600: {
                items: 3
            },
            992: {
                items: 5
            }
        }

    });

    // Isotope 
    let grid = $('#category .grid').isotope({
        // options
        itemSelector: '.grid-item',
        layoutMode: 'fitRows'
    });
    // filter items on button click
    $('#filters').on('click', 'button', function(){
        let filterValue = $(this).attr('data-filter');
        grid.isotope({filter: filterValue});
        removeActiveFilter();
        $(this).addClass('active-filter');
    });
});

//  Remove Active Filter Class 

function removeActiveFilter(){
    const buttons = document.querySelectorAll('#filters button');
    buttons.forEach(btn => {
        btn.classList.remove('active-filter');
    });
}

// Products Quality Up & Down

$(document).ready(function(){

    let qtyUp = $('.qty .qty-up');
    let qtyDown = $('.qty .qty-down');
    let limitQty = 10;

    qtyUp.click(function(e){
        // alert('You clicked PLUS')
        let parentEle = $(this).parent();
        let qtyInput =  parentEle.find('input');
        let qytVal = parseInt(qtyInput.val());
        if(qytVal < limitQty){
            let udVal = qytVal + 1;
            qtyInput.val(udVal);
        }
    })
    qtyDown.click(function(e){
        // alert('You clicked MINUS')
        let parentEle = $(this).parent();
        let qtyInput =  parentEle.find('input');
        let qytVal = parseInt(qtyInput.val());
        if(qytVal > 1){
            let udVal = qytVal - 1;
            qtyInput.val(udVal);
        }
    })
})