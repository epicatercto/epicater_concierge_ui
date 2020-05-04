$('[data-toggle="tooltip"]').tooltip();
$(document).ready(function() {
	$('.filter2904 input[type="radio"]').click(function() {
		if($(this).attr('id') == 'preOrderLate') {
			$('.pre-day-2920').show();           
		}
		else {
			$('.pre-day-2920').hide();   
		}
	});
});
$(window).on('load',function() {'use strict';
	$(".loader").fadeOut("slow");
});
$('.selectpicker').selectpicker()  

$('.scrollTo').click(function(){
	$('html, body').animate({
		scrollTop: $( $(this).attr('href') ).offset().top
	}, 500);
	return false;
});

$(document).ready(function(){

	$('.show_cart, .fl-shopping, .jss2082').click(function(){
		$('body').addClass('modal-open');
		$('.sidenav-overlay').addClass('in');
		$('.e-cart').addClass('in');
	});
	$('.sidenav-overlay, .back-home').click(function(){
		$('body').removeClass('modal-open');
		$('.sidenav-overlay').removeClass('in');
		$('.e-cart').removeClass('in');
	}); 
	$('.btn-cart').click(function(){
		$('body').addClass('modal-open');
		$('.sidenav-overlay').addClass('in');
		$('.e-cart').addClass('in');
		$('.quickview-modal').hide();
	});
	$('.r-title-f, .r-thumbnail').click(function(){  
		$('body').addClass('modal-open');
		$('.quickview-modal').show();
	});
	$('.mfp-close').click(function(){  
		$('body').removeClass('modal-open');
		$('.quickview-modal').hide();
	});

	$('.more_day').click(function(){
		$('.custom-dl').slideToggle(); 
	}); 
	$('.select-delivery-time').click(function(){
		$('.jss3020').addClass('open-date'); 
	}); 
	$('.jss0120').click(function(){
		$('.jss3020').removeClass('open-date');
		$('.select-delivery-time').hide(); 
		$('.editDT').show();
	}); 
	$('.show-location').click(function(){
		$(this).toggleClass('op');
		$('.jhkshasMap').slideToggle();
	}); 

	$('.datepicker').datepicker(); 

});

$(".Modern-Slider").slick({
	autoplay:true,
	autoplaySpeed:10000,
	loop:true,
	speed:600,
	slidesToShow:2,
	slidesToScroll:1,
	pauseOnHover:false,
	dots:true,
	pauseOnDotsHover:true, 
	draggable:false,
	prevArrow:'<button class="PrevArrow fas fa-arrow-left"></button>',
	nextArrow:'<button class="NextArrow fas fa-arrow-right"></button>', 
}); 



document.addEventListener('DOMContentLoaded', function () {
	if (document.querySelectorAll('#map').length > 0)
	{
		if (document.querySelector('html').lang)
			lang = document.querySelector('html').lang;
		else
			lang = 'en';

		var js_file = document.createElement('script');
		js_file.type = 'text/javascript';
		js_file.src = 'https://maps.googleapis.com/maps/api/js?callback=initMap&signed_in=true&language=' + lang;
		document.getElementsByTagName('head')[0].appendChild(js_file);
	}
});

var map;

function initMap()
{
	map = new google.maps.Map(document.getElementById('map'), {
		center: {lat: 43.6677507, lng: -79.3925033 },
		zoom: 8
	});

	fetch('https://raw.githubusercontent.com/jayshields/google-maps-api-template/master/markers.json')
	.then(function(response){return response.json()})
	.then(plotMarkers);
}

var markers;
var bounds;

function plotMarkers(m)
{
	markers = [];
	bounds = new google.maps.LatLngBounds();

	m.forEach(function (marker) {
		var position = new google.maps.LatLng(marker.lat, marker.lng);

		markers.push(
			new google.maps.Marker({
				position: position,
				map: map,
				animation: google.maps.Animation.DROP
			})
			);

		bounds.extend(position);
	});

	map.fitBounds(bounds);
}