$('.slider1').slick({
	
	slidesToShow: 5,
	speed: 700,

	

});
$('.slider2').slick({
	
	slidesPerRow: 2,
	speed: 700,
	rows:2,

	

	

});


let tab = function () {
	let tabNav = document.querySelectorAll('.tabs_nav__items');
	let tabContent = document.querySelectorAll('.tabs');
	let tabName;

	tabNav.forEach(item => {
		item.addEventListener('click', selectTabNav);
	});

	function selectTabNav() {
		tabNav.forEach(item => {
			item.classList.remove('is_active');
		});
		this.classList.add('is_active');
		tabName = this.getAttribute('data-tab-name');
		selectTabContent(tabName);
	}

	function selectTabContent(tabName) {
		tabContent.forEach(item => {
			item.classList.contains(tabName)? item.classList.add('is_active') : item.classList.remove('is_active');
		});
	}
}

tab();