$('#btnone').click(function(){
    
    let divone = $('#divone');

    
    divone.animate({
        width:'400px'
    })
    divone.animate({
        height:'400px'
    }
    
    )
    $('#btntwo').toggleClass('btnon')
    $('#btnone').toggleClass('btntwo')
}) 
$('#btntwo').click(function(){
    let divone = $('#divone');

    divone.animate({
        height:'200px'
    }
    
    ) 
    divone.animate({
        width:'200px'
    })
    
    $('#btntwo').toggleClass('btnon')
    $('#btnone').toggleClass('btntwo')
   
})




$('.fa-solid').click(function(){
    
    $('form').toggleClass('formtwo')
    $('input').toggleClass('inputon')
    
})

$('.show').click(function(){
    $('.htwo').toggleClass('don')
    $('.ptwo').toggleClass('don')
    $('.show').toggleClass('dnone')
    $('.hide').toggleClass('don')
})
$('.hide').click(function(){
    $('.htwo').toggleClass('don')
    $('.ptwo').toggleClass('don')
    $('.show').toggleClass('dnone')
    $('.hide').toggleClass('don')
})
