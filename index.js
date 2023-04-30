$(document).ready(function() {
    //responsive menu toggle
    $("#menutoggle").click(function() {
        $('.xs-menu').toggleClass('displaynone');

        });
    //add active class on menu
    $('ul li').click(function(e) {
        e.preventDefault();
        $('li').removeClass('active');
        $(this).addClass('active');
    });
//drop down menu	
        $(".drop-down").hover(function() {
            $('.mega-menu').addClass('display-on');
        });
        $(".drop-down").mouseleave(function() {
            $('.mega-menu').removeClass('display-on');
        });

});





function student (){
    let reqform = document.getElementById('student_reg')

    reqform.classList.add('d-none')
    
}

function openreg (){
    let reqform = document.getElementById('student_reg')
    reqform.classList.remove('d-none')
    reqform.classList.add('d-block')
    
}


function contactpage(){
    window.location.href = '/contact.html'

}

function home(){
    window.location.href = '/'
    
}

function about(){
    window.location.href = '/aboutus.html'
    
}

function teacher(){
    window.location.href = '/teacher.html'
    
}