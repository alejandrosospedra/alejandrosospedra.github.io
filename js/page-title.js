function pageTitle() {
    var pageTitle = document.title;
    
    if(pageTitle === 'Portfolio')
        pageTitle = 'STOCK';
    else if (pageTitle === 'Viajes')
        pageTitle = 'VIAJES';
    else if (pageTitle === 'Hoteles')
        pageTitle = 'HOTELES';
    else
        pageTitle = 'SERVICIOS';

    $('.gallery.gallery--carousel.gallery--on').children().append("<div class='centered'>"+ pageTitle +"</div")
    console.log("pageTitle se ha ejecutado");
}