var section = $('.board section');
var tab = $('.tab');

tab.on('click', function(e){
  e.preventDefault();
  section.removeClass('tab-act');
  $(this).parent().parent().addClass('tab-act');
})
// on 은 멀티 이벤트를 대입할 수 있다.
// click을 사용할 수 있는 이유는 tab은 a 태그로 되어있기 때문이다.
// e 는 발생한 event를 기억하고 있을 것임
// preventDefault는 기본 이벤트를 지움
//  $(this).parent().parent(); 메소드 체인이라고 부름 