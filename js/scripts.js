$('[data-toggle="tooltip"]').tooltip();
 
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

	$('.addPaymentMethod').click(function(){
		$('body').addClass('modal-open');
		$('.sidenav-overlay').addClass('in');
		$('.selectPayment-modal').addClass('in');
	}); 
	$('.close-PaymentModal').click(function(){  
		$('body').removeClass('modal-open'); 
		$('.sidenav-overlay').removeClass('in');
		$('.selectPayment-modal').removeClass('in');
	});
	$('.addVoucher').click(function(){
		$('body').addClass('modal-open');
		$('.sidenav-overlay').addClass('in');
		$('.voucherModal').addClass('in');
	}); 
	$('.close-voucherModal').click(function(){  
		$('body').removeClass('modal-open'); 
		$('.sidenav-overlay').removeClass('in');
		$('.voucherModal').removeClass('in');
	});
	$('.datepicker').datepicker(); 

	$('.setting-tab').click(function(){    
		$('.droppdownSetting').toggleClass('open');
	});

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

function initMap() {
	var uluru = {lat: 43.6678574, lng: -79.3906305 }; 
	var map = new google.maps.Map(
		document.getElementById('map'), {
			zoom: 17, 
			center: uluru,
			mapTypeControlOptions: {
				mapTypeIds: ['roadmap', 'satellite', 'hybrid', 'terrain',
				'styled_map']
			}
		}); 
	var marker = new google.maps.Marker({position: uluru, map: map});  
	var styledMapType = new google.maps.StyledMapType(
		[
		{
			"elementType": "geometry",
			"stylers": [
			{
				"color": "#ebe3cd"
			}
			]
		},
		{
			"elementType": "labels.text.fill",
			"stylers": [
			{
				"color": "#523735"
			}
			]
		},
		{
			"elementType": "labels.text.stroke",
			"stylers": [
			{
				"color": "#f5f1e6"
			}
			]
		},
		{
			"featureType": "administrative",
			"elementType": "geometry.stroke",
			"stylers": [
			{
				"color": "#c9b2a6"
			}
			]
		},
		{
			"featureType": "administrative.land_parcel",
			"elementType": "geometry.stroke",
			"stylers": [
			{
				"color": "#dcd2be"
			}
			]
		},
		{
			"featureType": "administrative.land_parcel",
			"elementType": "labels.text.fill",
			"stylers": [
			{
				"color": "#ae9e90"
			}
			]
		},
		{
			"featureType": "landscape.natural",
			"elementType": "geometry",
			"stylers": [
			{
				"color": "#dfd2ae"
			}
			]
		},
		{
			"featureType": "poi",
			"elementType": "geometry",
			"stylers": [
			{
				"color": "#dfd2ae"
			}
			]
		},
		{
			"featureType": "poi",
			"elementType": "labels.text.fill",
			"stylers": [
			{
				"color": "#93817c"
			}
			]
		},
		{
			"featureType": "poi.park",
			"elementType": "geometry.fill",
			"stylers": [
			{
				"color": "#a5b076"
			}
			]
		},
		{
			"featureType": "poi.park",
			"elementType": "labels.text.fill",
			"stylers": [
			{
				"color": "#447530"
			}
			]
		},
		{
			"featureType": "road",
			"elementType": "geometry",
			"stylers": [
			{
				"color": "#f5f1e6"
			}
			]
		},
		{
			"featureType": "road.arterial",
			"elementType": "geometry",
			"stylers": [
			{
				"color": "#fdfcf8"
			}
			]
		},
		{
			"featureType": "road.highway",
			"elementType": "geometry",
			"stylers": [
			{
				"color": "#f8c967"
			}
			]
		},
		{
			"featureType": "road.highway",
			"elementType": "geometry.stroke",
			"stylers": [
			{
				"color": "#e9bc62"
			}
			]
		},
		{
			"featureType": "road.highway.controlled_access",
			"elementType": "geometry",
			"stylers": [
			{
				"color": "#e98d58"
			}
			]
		},
		{
			"featureType": "road.highway.controlled_access",
			"elementType": "geometry.stroke",
			"stylers": [
			{
				"color": "#db8555"
			}
			]
		},
		{
			"featureType": "road.local",
			"elementType": "labels.text.fill",
			"stylers": [
			{
				"color": "#806b63"
			}
			]
		},
		{
			"featureType": "transit.line",
			"elementType": "geometry",
			"stylers": [
			{
				"color": "#dfd2ae"
			}
			]
		},
		{
			"featureType": "transit.line",
			"elementType": "labels.text.fill",
			"stylers": [
			{
				"color": "#8f7d77"
			}
			]
		},
		{
			"featureType": "transit.line",
			"elementType": "labels.text.stroke",
			"stylers": [
			{
				"color": "#ebe3cd"
			}
			]
		},
		{
			"featureType": "transit.station",
			"elementType": "geometry",
			"stylers": [
			{
				"color": "#dfd2ae"
			}
			]
		},
		{
			"featureType": "water",
			"elementType": "geometry.fill",
			"stylers": [
			{
				"color": "#b9d3c2"
			}
			]
		},
		{
			"featureType": "water",
			"elementType": "labels.text.fill",
			"stylers": [
			{
				"color": "#92998d"
			}
			]
		}
		],
		{name: 'Styled Map'});
	map.mapTypes.set('styled_map', styledMapType);
	map.setMapTypeId('styled_map');

} 
