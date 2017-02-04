$(document).ready(function () {

	// $('.search-panel a').hover(function () {
	// 	$(this).parent().toggleClass('active');
	// });

	// $('.weather-panel a').click(function () {
	// 	console.log('test');
	// 	$(this).parent().toggleClass('active');
	// });

	// $('.curr-panel a').click(function () {
	// 	console.log('test');
	// 	$(this).parent().toggleClass('active');
	// });

	  $(".lightSlider").lightSlider({
	  	item:1,
	  	rtl:true,
	  	 mode: "slide",
        autoWidth: false,
        slideMove: 1,
         controls: true,
         pager: false
	  }); 

	  var albumSlider =  $(".lightsliderAlbum").lightSlider({
	  	 item:1,
	  	 rtl:true,
	  	 mode: "slide",
         autoWidth: false,
         slideMove: 1,
         controls: false,
         pager: true,
         loop: true,
          onSliderLoad: function (el) {
			    var totalImages = $(".lSPager").find('li').length;
			    $('.totalAlbumLayers').html(' ' +totalImages);
			    $('.currentAlbumLayer').html(' '+ 1 +' ');

          },
         onAfterSlide: function(el) {
			    var active_index = $(".lSPager").find('li.active').index();
			    SlideDetails(active_index);
			    $('.currentAlbumLayer').html(' '+ ++active_index +' ');
			    
			}
	  }); 

	   function SlideDetails(index) {
	   		$('.albumDetails').find('li').removeClass('active');
	   		$('.albumDetails').find('li').eq(index).addClass('active');
	   };

	   $('.goPrev').click(function () {
	   		albumSlider.goToPrevSlide();
	   		return false;
	   });

	    $('.goNext').click(function () {
	   		albumSlider.goToNextSlide();
	   		return false;
	   });



	  


	 var slider2 = $(".lightSliderMedia").lightSlider({
	  	item:3,
	  	rtl:true,
	  	 mode: "slide",
        autoWidth: false,
        slideMove: 1,
         controls: false,
         pager: false,
         slideMargin: 8
	  }); 

	  var slider = $(".lightSliderPhotos").lightSlider({
	  	item:3,
	  	rtl:true,
	  	 mode: "slide",
        autoWidth: false,
        slideMove: 1,
         controls: false,
         pager: false,
         slideMargin: 8
	  }); 


	  $(".tab-1 .tab-head ul li a").click(function () {

	  		$('.tab-1 .tab-head ul li a').removeClass('active');
	  		var index = $(this).parent().index();
	  		$(this).addClass('active');
	  		$('.tab-1 .tab-list > ul > li').removeClass('active');
	  		$('.tab-1 .tab-list > ul > li').eq(index).addClass('active');
	  		return false;

	  });

	  $(".tab-2 .tab-head ul li a").click(function () {

	  		$('.tab-2 .tab-head ul li a').removeClass('active');
	  		var index = $(this).parent().index();
	  		$(this).addClass('active');
	  		$('.tab-2 .tab-list > ul > li').removeClass('active');
	  		$('.tab-2 .tab-list > ul > li').eq(index).addClass('active');
	  		return false;

	  });

	    $(".tab-3 .tab-head ul li a").click(function () {

	  		$('.tab-3 .tab-head ul li a').removeClass('active');
	  		var index = $(this).parent().index();
	  		$(this).addClass('active');
	  		$('.tab-3 .tab-list > ul > li').removeClass('active');
	  		$('.tab-3 .tab-list > ul > li').eq(index).addClass('active');

	  		slider2.refresh();
	  		slider.refresh();

	  		return false;

	  });
	    
	    $(".tab-4 .tab-head ul li a").click(function () {
		 	return false;
		  });


	   $('.right-nav').click(function() {
	   	
	   	//Video 0
	   	//Photo 1
	   	var index = $('.tab-3 .tab-list > ul > li.active').index();
	   	if(index == 0)
	   	{
			slider2.goToNextSlide(); 
	   	}
	   	else if(index == 1)
	   	{
			slider.goToNextSlide(); 
	   	}

	   	return false;
	   });

	   $('.left-nav').click(function() {
	   	
	   	//Video 0
	   	//Photo 1
	   	var index = $('.tab-3 .tab-list > ul > li.active').index();
	   	if(index == 0)
	   	{
			slider2.goToPrevSlide(); 
	   	}
	   	else if(index == 1)
	   	{
			slider.goToPrevSlide(); 
	   	}

	   	return false;
	   });


	   $('.rolling-div').slimScroll({
	        height: '172px',
	        position: 'left',
		    railVisible: true,
		    railOpacity: 0.1
    	});

});