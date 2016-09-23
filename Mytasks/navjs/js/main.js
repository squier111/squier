window.onload = function() {
  // полифиллы для closest и matches IE11
(function() {
  // проверяем поддержку
  if (!Element.prototype.closest) {

    // реализуем
    Element.prototype.closest = function(css) {
      var node = this;

      while (node) {
        if (node.matches(css)) return node;
        else node = node.parentElement;
      }
      return null;
    };
  }
})();
(function() {
  // проверяем поддержку
  if (!Element.prototype.matches) {
    // определяем свойство
    Element.prototype.matches = Element.prototype.matchesSelector ||
      Element.prototype.webkitMatchesSelector ||
      Element.prototype.mozMatchesSelector ||
      Element.prototype.msMatchesSelector;
  }

})();


(function drawMenu() {
	var mainNav = document.createElement('ul');
	mainNav.classList.add("nav");
	var mainNavSize = 8;
	var menuText = [ 'Главная' , 'Меню', 'Статьи' ,'Ссылки','Характеристики', 'Отзывы','возможности', 'оформить заказ']

	for (var i = 0; i < mainNavSize; i++) {
		var li = document.createElement('li');
		var a = document.createElement('a');
			a.setAttribute('href', '#');
			mainNav.appendChild(li);
			li.appendChild(a);
			for (var m = 0; m < menuText.length; m++) {
					if ( i% 8 == m ) {
					a.textContent = menuText[m];
				}
			}
			var subNav = document.createElement('ul');
			subNav.classList.add("subnav");
				for (var k = 0; k < mainNavSize; k++) {
					var subNavli = document.createElement('li');
					var subNava = document.createElement('a');
					subNava.setAttribute('href', '#');
					subNav.appendChild(subNavli);
					subNavli.appendChild(subNava);
				}
			li.appendChild(subNav);
	}
	document.body.appendChild(mainNav);
	var elem = document.querySelectorAll('.subnav li a');
	for (var j = 0; j < elem.length; j++) {
		for (var m = 0; m < menuText.length; m++) {
			if ( j% 8 == m ) {
				elem[j].textContent = menuText[m];
			}

		}
	};
	var menuItem = document.querySelectorAll('.nav');
	var menuItemA = document.querySelectorAll('.nav>li>a');
	var subNavAll = document.querySelectorAll('.subnav');
	for (var n = 0; n < subNavAll .length; n++) {
			subNavAll[0].classList.add('active');
	}
	for (var m = 0; m < menuItemA.length; m++) {
		menuItemA[m].onclick = function() {
			var subNav = this.nextElementSibling;
			for (var n = 0; n < subNavAll .length; n++) {
				subNavAll[n].classList.remove('active');
			}
		 	subNav.classList.toggle('active');
		}
	}
	document.onclick = function(e) {
		if ( e.target.closest('.nav')) {
			return;
		} else {
			for (var n = 0; n < subNavAll .length; n++) {
				subNavAll[n].classList.remove('active');
			}
		}
	}
})();



};
