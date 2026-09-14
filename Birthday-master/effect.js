$(window).load(function(){
	$('.loading').fadeOut('fast');
	$('.container').fadeIn('fast');
});
$('document').ready(function(){
		var vw;
		var customMessages = [
			'Для тебя, Алёна',
			'Сегодня...',
			'этот день особенный',
			'такой же особенный, как и ты',
			'вот почему',
			'Давай сделаем...',
			'самым лучшим праздником когда-либо!!',
			'для самой красивой в моих глазах',
			'и самой близкой моему сердцу',
			'позволь мне поделиться...',
			'счастьем этого дня с тобой',
			'я сделал всё это...',
			'как подарок на день рождения',
			'спасибо за дружбу, которую мы создали',
			'спасибо за наши прекрасные моменты',
			'я желаю тебе только лучшего',
			'и с днём рождения',
			'я люблю тебя'
		];

		$('.message p').each(function(index) {
			if (customMessages[index]) {
				$(this).text(customMessages[index]);
			}
		});

		function placeBalloonRow(animate) {
			var center = $(window).width()/2;
			var gap = Math.min(120, ($(window).width()-120)/5);
			var firstLeft = center - (gap * 2.5);
			var positions = [
				{top:430, left:firstLeft},
				{top:415, left:firstLeft + gap},
				{top:405, left:firstLeft + gap * 2},
				{top:405, left:firstLeft + gap * 3},
				{top:415, left:firstLeft + gap * 4},
				{top:430, left:firstLeft + gap * 5}
			];
			var method = animate ? 'animate' : 'css';
			$('#b11,#b22,#b33,#b44,#b55,#b66').each(function(index) {
				$(this)[method](positions[index], animate ? 500 : undefined);
			});
		}

		$(window).resize(function(){
			$('#b1,#b2,#b3,#b4,#b5,#b6').stop();
			placeBalloonRow(true);
		});

	$('#turn_on').click(function(){
		$('#bulb_yellow').addClass('bulb-glow-yellow');
		$('#bulb_red').addClass('bulb-glow-red');
		$('#bulb_blue').addClass('bulb-glow-blue');
		$('#bulb_green').addClass('bulb-glow-green');
		$('#bulb_pink').addClass('bulb-glow-pink');
		$('#bulb_orange').addClass('bulb-glow-orange');
		$('body').addClass('purple-decor');
		$(this).fadeOut('slow').delay(5000).promise().done(function(){
			$('#play').fadeIn('slow');
		});
	});
	$('#play').click(function(){
		var audio = $('.song')[0];
        audio.play();
        $('#bulb_yellow').addClass('bulb-glow-yellow-after');
		$('#bulb_red').addClass('bulb-glow-red-after');
		$('#bulb_blue').addClass('bulb-glow-blue-after');
		$('#bulb_green').addClass('bulb-glow-green-after');
		$('#bulb_pink').addClass('bulb-glow-pink-after');
		$('#bulb_orange').addClass('bulb-glow-orange-after');
		$('body').removeClass('peach').removeClass('peach-after');
		$('body').css('background-color', '#FF1493');
		$('body').css('background', '#FF1493');
		$('body').addClass('purple-decor');
		$(this).fadeOut('slow').delay(6000).promise().done(function(){
			$('#bannar_coming').fadeIn('slow');
		});
	});

	$('#bannar_coming').click(function(){
		$('body').addClass('purple-decor');
		$('.bannar').addClass('bannar-come');
		$(this).fadeOut('slow').delay(6000).promise().done(function(){
			$('#balloons_flying').fadeIn('slow');
		});
	});

	function loopOne() {
		var randleft = 1000*Math.random();
		var randtop = 500*Math.random();
		$('#b1').animate({left:randleft,bottom:randtop},10000,function(){
			loopOne();
		});
	}
	function loopTwo() {
		var randleft = 1000*Math.random();
		var randtop = 500*Math.random();
		$('#b2').animate({left:randleft,bottom:randtop},10000,function(){
			loopTwo();
		});
	}
	function loopThree() {
		var randleft = 1000*Math.random();
		var randtop = 500*Math.random();
		$('#b3').animate({left:randleft,bottom:randtop},10000,function(){
			loopThree();
		});
	}
	function loopFour() {
		var randleft = 1000*Math.random();
		var randtop = 500*Math.random();
		$('#b4').animate({left:randleft,bottom:randtop},10000,function(){
			loopFour();
		});
	}
	function loopFive() {
		var randleft = 1000*Math.random();
		var randtop = 500*Math.random();
		$('#b5').animate({left:randleft,bottom:randtop},10000,function(){
			loopFive();
		});
	}

	function loopSix() {
		var randleft = 1000*Math.random();
		var randtop = 500*Math.random();
		$('#b6').animate({left:randleft,bottom:randtop},10000,function(){
			loopSix();
		});
	}
	$('#balloons_flying').click(function(){
		$('#b1,#b4,#b5').addClass('balloons-rotate-behaviour-one');
		$('#b2,#b3,#b6').addClass('balloons-rotate-behaviour-two');
		// $('#b3').addClass('balloons-rotate-behaviour-two');
		// $('#b4').addClass('balloons-rotate-behaviour-one');
		// $('#b5').addClass('balloons-rotate-behaviour-one');
		// $('#b6').addClass('balloons-rotate-behaviour-two');
		loopOne();
		loopTwo();
		loopThree();
		loopFour();
		loopFive();
		loopSix();
		
		$(this).fadeOut('slow').delay(5000).promise().done(function(){
			$('#cake_fadein').fadeIn('slow');
		});
	});	

	$('#cake_fadein').click(function(){
		$('.cake').fadeIn('slow');
		$(this).fadeOut('slow').delay(3000).promise().done(function(){
			$('#light_candle').fadeIn('slow');
		});
	});

	$('#light_candle').click(function(){
		$('.fuego').fadeIn('slow');
		$(this).fadeOut('slow').promise().done(function(){
			$('#wish_message').fadeIn('slow');
		});
	});

		
	$('#wish_message').click(function(){
		 vw = $(window).width()/2;

		$('#b1,#b2,#b3,#b4,#b5,#b6').stop();
		$('.balloons').removeClass('balloons-rotate-behaviour-one balloons-rotate-behaviour-two');
		$('#b1').attr('id','b11');
		$('#b2').attr('id','b22')
		$('#b3').attr('id','b33')
		$('#b4').attr('id','b44')
		$('#b5').attr('id','b55')
		$('#b6').attr('id','b66')
		placeBalloonRow(true);
		$('.balloons').css('opacity','0.9');
		$('.balloons h2').fadeIn(3000);
		$(this).fadeOut('slow').delay(3000).promise().done(function(){
			$('#story').fadeIn('slow');
		});
	});
	
	$('#story').click(function(){
		$(this).fadeOut('slow');
		$('body').addClass('message-open');
		$('.balloons').fadeOut(350);
		$('.cake').fadeOut('fast').promise().done(function(){
			$('.message').fadeIn('slow');
		});
		
		var i = 1;
		var totalMessages = $('.message p').length;
		var messageReadTime = 3500;

		function msgLoop () {
			if (i <= totalMessages) {
				var currentMessage = $(".message p:nth-child("+i+")");
				currentMessage.stop(true, true).fadeIn(700).delay(messageReadTime).fadeOut(700, function(){
					i++;
					if (i <= totalMessages) {
						msgLoop();
					} else {
						$('.cake, .balloons').fadeIn('slow');
					}
				});
			}
		}
		
		msgLoop();
		
	});
});




//alert('hello');