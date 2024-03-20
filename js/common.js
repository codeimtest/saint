// toggle menu
$('.toggle_button').click(function(){
	$('.toggle_button').toggleClass('active')
	$('aside').toggleClass('active')
	$('body').toggleClass('lock')
})
$('.aside_overlay').click(function(){
	$('.toggle_button').toggleClass('active')
	$('aside').toggleClass('active')
	$('body').toggleClass('lock')
})
// lang list
$('.langlist_ul').hide()
$('.tolbar_lang').click(function(){
	$(this).toggleClass('active')
	$('.langlist_ul').slideToggle('fast')
})



$('.choice_input').click(function(){
	$(this).find('input').focus()
})
$('.val_filters div').click(function(){
	$('.val_filters div').removeClass('active')
	$(this).addClass('active')
})
$('.val_filters_output div').click(function(){
	$('.val_filters_output div').removeClass('active')
	$(this).addClass('active')
	$('.popup').removeClass('active')
})

$(".val_filters_output div").click(function() {
    var imgSrc = $(this).find("img").attr("src");
    var spanText = $(this).find("span").text();
    $(".choice_give_output img").attr("src", imgSrc);
    $(".choice_give_output .choice_input_give_text").text(spanText);
    
    $(".choice_give_input img").attr("src", imgSrc);
    $(".choice_give_input .choice_input_give input").val(spanText);
});

$(".choice_input").click(function() {
    var dropdown = $(this).data("dropdown");
    $(".popup").removeClass("active");
    $(".popup-" + dropdown).addClass("active");
});

$(".popup-get .val_filters_output div").click(function() {
    var imgSrc = $(this).find("img").attr("src");
    var spanText = $(this).find("span").text();
    
    $(".choice_get_output img").attr("src", imgSrc);
    $(".choice_get_output .choice_input_give_text").text(spanText);
    
    $(".choice_get_input img").attr("src", imgSrc);
    $(".choice_get_input .choice_input_get input").val(spanText);
});

$(".exchange_widget_steps_points div").click(function() {
	var index = $(this).index() + 1;
	var percent = (index - 1) * 50; // Шаги делят линию на три равные части
	$(".exchange_widget_steps .line").css("width", percent + "%");
});

    // Скрываем все fieldset, кроме первого
    $(".exchange_widget_fieldsets fieldset:not(:first)").hide();

		$(".next").click(function() {
			// Находим текущий активный шаг
			var currentStep = $(".exchange_widget_steps_points div.current");
	
			// Находим следующий шаг
			var nextStep = currentStep.next("div");
	
			// Находим предыдущий шаг
			var prevStep = currentStep.prev("div");
	
			// Находим текущий видимый fieldset
			var currentFieldset = $(".exchange_widget_fieldsets fieldset:visible");
			
			// Находим следующий fieldset
			var nextFieldset = currentFieldset.next("fieldset");
	
			// Удаляем класс current у всех элементов
			
	
			// Если следующий шаг существует, скрываем текущий и показываем следующий с анимацией
			if (nextStep.length > 0 && nextFieldset.length > 0) {
					nextStep.addClass("current"); // Добавляем класс current следующему шагу
	
					// Скрываем текущий fieldset и показываем следующий с анимацией
					currentFieldset.fadeOut(100, function() {
							nextFieldset.fadeIn(100);
					});
					$("html, body").animate({ scrollTop: nextFieldset.offset().top }, "slow");
			}
	
			// Если следующего шага нет, но есть предыдущий, делаем текущим предыдущий
			else if (prevStep.length > 0) {
					prevStep.addClass("current"); // Добавляем класс current предыдущему шагу
			}
			// Находим текущую полосу прогресса
			var progressLine = $(".line_progress");

			// Если следующий шаг существует
			if (nextStep.length > 0) {

					// Добавляем класс current следующему шагу
					nextStep.addClass("current");
					
					// Определяем ширину прогресса в зависимости от номера шага
					var percent = (nextStep.index() + 1) * 50; // Каждый шаг равен 33.33%
	
					// Устанавливаем ширину прогресса
					progressLine.css("width", percent + "%");
			}
	});
	// Обработчик клика на кнопку .prev
$(".prev").click(function() {
	// Находим текущий активный шаг
	var currentStep = $(".exchange_widget_steps_points div.current");

	// Находим следующий шаг
	var nextStep = currentStep.next("div");

	// Находим предыдущий шаг
	var prevStep = currentStep.prev("div");

	// Находим текущий видимый fieldset
	var currentFieldset = $(".exchange_widget_fieldsets fieldset:visible");
	
	// Находим предыдущий fieldset
	var prevFieldset = currentFieldset.prev("fieldset");

	// Удаляем класс current у всех элементов
	$(".exchange_widget_steps_points div").removeClass("current");

	// Если предыдущий шаг существует, скрываем текущий и показываем предыдущий с анимацией
	if (prevStep.length > 0 && prevFieldset.length > 0) {
			prevStep.addClass("current"); // Добавляем класс current предыдущему шагу

			// Скрываем текущий fieldset и показываем предыдущий с анимацией
			currentFieldset.fadeOut(100, function() {
					prevFieldset.fadeIn(100);
			});
			$(".exchange_widget").animate({ scrollTop: prevFieldset.offset().top }, "slow");
	}
});


// popup
$(document).mouseup(function (e) {
	var container = $(".popup-dialog");
	if (container.has(e.target).length === 0){
			$('.popup').removeClass('active');
			$('body').removeClass('lock');
	}
});
$(".btn-close").click(function() {
	$(this).closest(".popup").removeClass("active");
});