
var tapbutton = $('.tab-button')
var tapcontent = $('.tab-content')

for (let i = 0; i < tapbutton.length; i++){
    tapbutton.eq(i).on('click', function(){
    tapbutton.removeClass('orange');
    tapbutton.eq(i).addClass('orange');
    tapcontent.removeClass('show');
    tapcontent.eq(i).addClass('show');
        });
}



