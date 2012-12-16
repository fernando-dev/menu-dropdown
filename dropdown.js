(function($) {
	$.fn.MenuDropdown = function(opcoes) {
		var d = {
			tipo: 'click',
			velocidade: 250,
			classcss: 'active',
			classDropdown: 'dropdown'
		};

		var $this = $(this);

		var limpaDropdown = function() {
				$("." + d.classDropdown).each(function() {
					if($(this).css('position') == 'static') return;
					$(this).slideUp(d.velocidade, function() {});
					$(this).parent().removeClass("active");
				});
			}

		var iniciaSelectores = function(selectores) {
				selectores.on(d.tipo, function(e) {
					e.stopPropagation();

					limpaDropdown();

					var $m = $(this).children("." + d.classDropdown);
					if($m.css('display') == "block") {
						$m.slideUp(d.velocidade);
						$(this).removeClass(d.classcss);
					} else {
						$m.slideDown(d.velocidade);
						$(this).addClass(d.classcss);
					}
				});
				$('html').on(d.tipo, function(e) {
					limpaDropdown();
				});
			}

		return this.each(function() {
			if(opcoes) {
				$.extend(d, opcoes)
			}
			iniciaSelectores($this);
		});
	}
})(window.jQuery);