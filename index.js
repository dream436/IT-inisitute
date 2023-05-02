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

    var locat = window.location.origin
    window.location.href = `/IT-inisitute/contact.html`

}

function home(){
    // var locat = window.location.origin
    window.location.href = '/IT-inisitute/'
    
}

function about(){
    var locat = window.location.origin
    window.location.href = `/IT-inisitute/aboutus.html`
    
}

function teacher(){
    var locat = window.location.origin
    window.location.href = `/IT-inisitute/teacher.html`
    
}
