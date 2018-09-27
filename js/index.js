$(function(){
	var year = $('.input');
	var sentence = $('.description-flex-container').find('p');
	$(year).click(function(){
		var t = $(this),
				ind = t.index(),
				matchedS = $(sentence).eq(ind);
		
		$(t).add(matchedS).addClass('active');
		$(year).not(t).add($(sentence).not(matchedS)).removeClass('active');
	});
});