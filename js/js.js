var indexant = 0;
var chktab;

$(document).ready(function(){
  indexant=0;
  chktab= $('.fixedcontent').map(function(){
    return $(this);
  });
  for (var i = 0; i < chktab.length; i++) {
    if(chktab[i].attr('id')=== indexant.toString()){
      chktab[i].css({'display':'block'})
    }else{
      chktab[i].css({'display':'none'})
    }
  }
$('.supermain').carousel({no_wrap:true, full_width:true});

$('a').on('click', function(){
  indexant=$(this).attr('href').substr(1)-1;
  $('.rotor').removeClass('rotor');
$('span div', this).addClass('rotor');
$('.supermain').carousel('set', indexant);

for (var i = 0; i < chktab.length; i++) {
  if(chktab[i].attr('id')=== indexant.toString()){
    chktab[i].css({'display':'block'})
  }else{
    chktab[i].css({'display':'none'})
  }
}
$('.modalbtn1').on('click',()=>{
  $('#modal1').closeModal();
  $('#modal11').closeModal();
  $('#modal2').openModal();
  $('#modal22').openModal();
});
$('.modalbtn2').on('click',()=>{
  $('#modal2').closeModal();
  $('#modal22').closeModal();
  $('#modal3').openModal();
  $('#modal33').openModal();
});
$('.modalbtn3').on('click',()=>{
  $('#modal3').closeModal();
  $('#modal33').closeModal();
  $('#modal4').openModal();
  $('#modal44').openModal();
});
$('.modalbtn4').on('click',()=>{
  $('#modal4').closeModal();
  $('#modal44').closeModal();
  $('#modal1').openModal();
  $('#modal11').openModal();
});

  })// CLICK HANDLERS
$('.modal-trigger').leanModal();
}); // DOM READY
