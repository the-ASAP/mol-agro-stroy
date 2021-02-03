"use strict";function freeScroll(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"body";$(e).attr("style","")}function openBurgerMenu(){$(".burger-menu").addClass("active")}function closeBurgerMenu(){$(".burger-menu").removeClass("active")}function showMap(){$("#map").addClass("active"),$(".contacts__hide").addClass("active")}function hideMap(){$("#map").removeClass("active"),$(".contacts__hide").removeClass("active")}function descriptionSwitch(e){$(e).parent().find(".active").removeClass("active"),$(e).addClass("active"),1==$(e).index()?($(".item__composition").removeClass("active"),$(".item__description").addClass("active")):($(".item__description").removeClass("active"),$(".item__composition").addClass("active"))}function getTransform(e){var t=$(e).css("-webkit-transform").match(/matrix(?:(3d)\(\d+(?:, \d+)*(?:, (\d+))(?:, (\d+))(?:, (\d+)), \d+\)|\(\d+(?:, \d+)*(?:, (\d+))(?:, (\d+))\))/);return t?"3d"==t[1]?t.slice(2,5):(t.push(0),t.slice(5,8)):[0,0,0]}function attachFile(e){var t=document.querySelectorAll(e);t.forEach(function(e){e.addEventListener("click",function(){var e=this,t=e.previousElementSibling,n=t.innerHTML;e.addEventListener("change",function(e){var a="";if(this.files&&this.files.length>1){for(var o=[],i=0;i<this.files.length;i++)o.push(this.files[i].name);var r=o.join(", ");a=(this.getAttribute("data-multiple-caption")||"").replace("{count}",r)}else a=e.target.value.split("\\").pop();t.innerHTML=a?a:n})})})}var contentFadeInOnReady=function(){$(".preloader").fadeOut(150,function(){$(".preloader").remove()})},bindModalListeners=function(e){e.forEach(function(e){var t=$(e.trigger),n=$(e.modal);t.on("click",function(){n.addClass("active")}),n.on("click",function(e){$(e.target).hasClass("modal")&&($(this).removeClass("active"),freeScroll())}),n.find(".modal__close").on("click",function(){n.removeClass("active"),freeScroll()}),$(document).keydown(function(e){return 27===e.keyCode?($(".modal").removeClass("active"),freeScroll(),!1):void 0})})},yandexMap=function(e,t){if($("#simple-map").length>0){var n,a=[51.540858933675324,46.00736999999997],o=[[54.78320144467754,32.04758660648477],[54.51498587344971,36.26141223294425],[53.24463254059305,34.363565663940385],[52.97191574457895,36.06436152007449],[54.63080650769845,39.736264526611265],[52.61079509965,39.59853325927727],[52.72231556605009,41.45256656719235],[56.12994054390806,40.40597347329085],[57.62846744025385,39.89338444175211],[56.32897238565279,44.004326570068265],[56.239439723687184,43.46152922448722],[54.31600612418016,48.4031646052246],[45.037638973426446,38.97529341827918],[51.77059740160962,55.097068613037095],[53.63153195727636,55.93119553831921],[54.737349924029395,55.95893192797848],[54.4822937650648,53.46625156854246],[51.23041691382763,58.47495855761712],[55.16171706375407,61.40079555297847],[56.83996818710426,60.596249497314325],[51.50216710212046,46.124491375488276],[53.51071435407704,49.419239031249994],[53.20353297421257,50.10345502148435],[51.535881103265645,46.03517914306637],[55.79792769582924,49.10684395507806],[55.757110828165025,52.05474467211909],[48.70958864594674,44.517591318359344],[47.22458817043838,39.71955346874993],[51.77038440072015,55.09689695166015],[46.34980864392328,48.030498190429576],[55.225964236170796,36.64404976452636],[51.6628974608033,39.200342512207015],[53.19723950184252,45.018967171875],[53.119848805039055,46.60123951318358]];ymaps.ready(function(){for(var e=new ymaps.Map("simple-map",{center:a,zoom:5,multiTouch:!1,controls:["zoomControl"]},{suppressMapOpenBlock:!0}),i=0;i<o.length;i++)n=new ymaps.Placemark(o[i],{hintContent:t}),e.geoObjects.add(n);e.controls.remove("routeEditor"),e.behaviors.disable("scrollZoom")})}},yandexMapCheckbox=function(e,t){if($("#map").length>0){var n,a,o=[54.59716196616716,46.762718];ymaps.ready(function(){function e(e){$(".contacts__city").removeClass("active"),$(".bluePlaceMark").removeClass("active"),$(".redPlaceMark").removeClass("active"),$(".orangePlaceMark").removeClass("active"),"all"===e?($(".contacts__city").addClass("active"),$(".bluePlaceMark").addClass("active"),$(".redPlaceMark").addClass("active"),$(".orangePlaceMark").addClass("active")):($('[data-city="'+e+'"]').addClass("active"),$('[data-name="'+e+'"]').addClass("active"))}function i(e){switch(e){case 0:$(".orangePlaceMark").removeClass("current"),$(".bluePlaceMark").addClass("current"),document.querySelectorAll(".contacts__item").forEach(function(e){$(e).addClass("active")}),document.querySelectorAll(".contacts__item-storage").forEach(function(e){$(e).removeClass("active")}),document.querySelectorAll(".contacts__city").forEach(function(e){$(e).removeClass("hidden")}),document.querySelectorAll(".contacts__city.active").forEach(function(e){0==$(e).find(".contacts__item").length?$(e).addClass("hidden"):$(e).hasClass("hidden")&&$(e).removeClass("hidden")});break;case 1:$(".orangePlaceMark").addClass("current"),$(".bluePlaceMark").removeClass("current"),document.querySelectorAll(".contacts__item").forEach(function(e){$(e).removeClass("active")}),document.querySelectorAll(".contacts__item-storage").forEach(function(e){$(e).addClass("active")}),document.querySelectorAll(".contacts__city").forEach(function(e){-1==$(e).find(".contacts__item-storage").index()&&$(e).addClass("hidden")}),document.querySelectorAll(".contacts__city.active").forEach(function(e){0==$(e).find(".contacts__item-storage").length?$(e).addClass("hidden"):$(e).hasClass("hidden")&&$(e).removeClass("hidden")})}}for(var r=new ymaps.Map("map",{center:o,zoom:6,multiTouch:!1,controls:["zoomControl"]},{suppressMapOpenBlock:!0}),s=0;s<$(".contacts__item").length;s++)a=ymaps.templateLayoutFactory.createClass('<button data-index="'+s+'" class="bluePlaceMark" data-city="'+$(".contacts__item").eq(s).parent().attr("data-name")+'">\n                <svg width="39" height="59" viewBox="0 0 39 59" fill="none" xmlns="http://www.w3.org/2000/svg">\n                <path fill-rule="evenodd" clip-rule="evenodd" d="M21.4546 39.7064C31.1102 38.6063 38.6205 30.1646 38.6205 19.9139C38.6205 8.91576 29.975 0 19.3102 0C8.64549 0 0 8.91576 0 19.9139C0 30.1642 7.50969 38.6056 17.1647 39.7063C17.1643 39.7244 17.1641 39.7426 17.1641 39.7608V56.4899C17.1641 57.6749 18.1247 58.6355 19.3097 58.6355C20.4946 58.6355 21.4553 57.6749 21.4553 56.4899V39.7608C21.4553 39.7426 21.455 39.7245 21.4546 39.7064ZM28.071 20.4854C28.071 25.3734 24.2285 29.336 19.4886 29.336C14.7487 29.336 10.9062 25.3734 10.9062 20.4854C10.9062 15.5973 14.7487 11.6348 19.4886 11.6348C24.2285 11.6348 28.071 15.5973 28.071 20.4854Z" fill="#1D398D"/>\n                </svg>\n                    </button>'),n=new ymaps.Placemark([Number($("#"+s).attr("data-coords-n")),Number($("#"+s).attr("data-coords-s"))],{hintContent:t},{iconLayout:a,preset:"islands#blueIcon"}),r.geoObjects.add(n),n.options.set("visible",!0);for(var l=0;l<$(".contacts__city").length;l++)a=ymaps.templateLayoutFactory.createClass('<button data-index="city'+l+'" class="redPlaceMark" data-city="'+$(".contacts__city").eq(l).attr("data-name")+'">\n                <svg width="54" height="81" viewBox="0 0 54 81" fill="none" xmlns="http://www.w3.org/2000/svg">\n<path fill-rule="evenodd" clip-rule="evenodd" d="M29.5024 54.6044C42.7817 53.0925 53.1108 41.483 53.1108 27.3856C53.1108 12.2609 41.2216 0 26.5554 0C11.8893 0 0 12.2609 0 27.3856C0 41.4811 10.3263 53.0893 23.603 54.6038C23.6024 54.6288 23.6021 54.654 23.6021 54.6791V77.6849C23.6021 79.3145 24.9231 80.6355 26.5527 80.6355C28.1823 80.6355 29.5033 79.3145 29.5033 77.6849V54.6791C29.5033 54.6542 29.503 54.6293 29.5024 54.6044ZM38.6049 28.1714C38.6049 34.8934 33.3208 40.3427 26.8025 40.3427C20.2841 40.3427 15 34.8934 15 28.1714C15 21.4493 20.2841 16 26.8025 16C33.3208 16 38.6049 21.4493 38.6049 28.1714Z" fill="url(#paint0_linear)"/>\n<defs>\n<linearGradient id="paint0_linear" x1="35.8808" y1="-10.9095" x2="45.0717" y2="90.4947" gradientUnits="userSpaceOnUse">\n<stop stop-color="#F98780"/>\n<stop offset="1" stop-color="#F74337"/>\n</linearGradient>\n</defs>\n</svg>\n\n                    </button>'),n=new ymaps.Placemark([Number($("#city"+l).attr("data-coords-n")),Number($("#city"+l).attr("data-coords-s"))],{hintContent:t},{iconLayout:a,preset:"islands#blueIcon"}),r.geoObjects.add(n),n.options.set("visible",!0);for(var c=0;c<$(".contacts__item-storage").length;c++)a=ymaps.templateLayoutFactory.createClass('<button data-index="storage'+c+'" class="orangePlaceMark" data-city="'+$(".contacts__item-storage").eq(c).parent().attr("data-name")+'">\n                <svg width="39" height="59" viewBox="0 0 39 59" fill="none" xmlns="http://www.w3.org/2000/svg">\n                <path fill-rule="evenodd" clip-rule="evenodd" d="M21.4546 39.7064C31.1102 38.6063 38.6205 30.1646 38.6205 19.9139C38.6205 8.91576 29.975 0 19.3102 0C8.64549 0 0 8.91576 0 19.9139C0 30.1642 7.50969 38.6056 17.1647 39.7063C17.1643 39.7244 17.1641 39.7426 17.1641 39.7608V56.4899C17.1641 57.6749 18.1247 58.6355 19.3097 58.6355C20.4946 58.6355 21.4553 57.6749 21.4553 56.4899V39.7608C21.4553 39.7426 21.455 39.7245 21.4546 39.7064ZM28.071 20.4854C28.071 25.3734 24.2285 29.336 19.4886 29.336C14.7487 29.336 10.9062 25.3734 10.9062 20.4854C10.9062 15.5973 14.7487 11.6348 19.4886 11.6348C24.2285 11.6348 28.071 15.5973 28.071 20.4854Z" fill="#FF8F3F"/>\n                </svg>\n                    </button>'),n=new ymaps.Placemark([Number($("#storage"+c).attr("data-coords-n")),Number($("#storage"+c).attr("data-coords-s"))],{hintContent:t},{iconLayout:a,preset:"islands#blueIcon"}),r.geoObjects.add(n),n.options.set("visible",!0);r.controls.remove("routeEditor"),r.behaviors.disable("scrollZoom"),setTimeout(function(){e("all"),i(0)});var d=0,u=function(e){if($(".pressed").removeClass("pressed"),$(e).hasClass("contacts__item")||$(e).hasClass("contacts__item-storage"))r.setCenter([$(e).attr("data-coords-n"),$(e).attr("data-coords-s")],16,{checkZoomRange:!0}),$(e).addClass("pressed");else{var t=$(e).attr("data-index");r.setCenter([$("#"+t).attr("data-coords-n"),$("#"+t).attr("data-coords-s")],16,{checkZoomRange:!0}),d+=$("#"+t).position().top,$(".contacts__menu").scrollTo($("#"+t),800),$("#"+t).addClass("pressed")}};$(".contact__category").on("click",function(){i($(this).parent().index())}),$(".contacts__fieldOption").on("click",function(){e($(this).attr("data-name"))}),setTimeout(function(){$(".contacts__item, .bluePlaceMark, .orangePlaceMark, .contacts__item-storage, .redPlaceMark").on("click",function(){u(this)})})})}},addId=function(){for(var e=0;e<$(".contacts__item").length;e++)$($(".contacts__item")[e]).attr("id",e);for(var t=0;t<$(".contacts__city").length;t++)$($(".contacts__city")[t]).attr("id","city"+t);for(var n=0;n<$(".contacts__item-storage").length;n++)$($(".contacts__item-storage")[n]).attr("id","storage"+n)},yandexMapContact=function(){if($("#map").length>0){var e,t=[51.613273072342494,45.967978999999936],n=[51.613273072342494,45.967978999999936];ymaps.ready(function(){var a=new ymaps.Map("map",{center:t,zoom:11,multiTouch:!1,controls:["zoomControl"]},{suppressMapOpenBlock:!0});e=new ymaps.Placemark(n,{},{preset:"islands#redIcon"}),a.geoObjects.add(e),a.controls.remove("routeEditor"),a.behaviors.disable("scrollZoom")})}},owlGallery=function(e,t){void 0==t&&(t="");var n=$(e);n.each(function(e,n){$(n).addClass("owl-carousel owl-theme").owlCarousel(Object.assign(t,{lazyLoad:!0,smartSpeed:1e3,navText:['<svg class="arrow" width="23" height="23" viewBox="0 0 23 23" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M10.4848 0.43934L0.938833 9.98528C0.353048 10.5711 0.353048 11.5208 0.938833 12.1066L10.4848 21.6525C11.0706 22.2383 12.0203 22.2383 12.6061 21.6525C13.1919 21.0668 13.1919 20.117 12.6061 19.5312L5.62082 12.5459L21.5 12.5459C22.3284 12.5459 23 11.8744 23 11.0459C23 10.2175 22.3284 9.54594 21.5 9.54594L5.62082 9.54594L12.6061 2.56066C13.1919 1.97487 13.1919 1.02513 12.6061 0.43934C12.0203 -0.146447 11.0706 -0.146447 10.4848 0.43934Z" fill="#3F84D1"/></svg>','<svg class="arrow" width="23" height="23" viewBox="0 0 23 23" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M12.5152 22.5607L22.0612 13.0147C22.647 12.4289 22.647 11.4792 22.0612 10.8934L12.5152 1.34746C11.9294 0.76167 10.9797 0.76167 10.3939 1.34746C9.80812 1.93324 9.80812 2.88299 10.3939 3.46878L17.3792 10.4541L1.5 10.4541C0.671574 10.4541 1.03809e-06 11.1256 9.65667e-07 11.9541C8.93244e-07 12.7825 0.671574 13.4541 1.5 13.4541L17.3792 13.4541L10.3939 20.4393C9.80812 21.0251 9.80812 21.9749 10.3939 22.5607C10.9797 23.1464 11.9294 23.1464 12.5152 22.5607Z" fill="#3F84D1"/></svg>']}))}).trigger("refresh.owl.carousel")},test,owlGalleryModal=function(e,t){void 0==t&&(t=""),$(e).addClass("owl-carousel owl-theme"),test=$(e).owlCarousel(Object.assign(t,{lazyLoad:!0,smartSpeed:1e3,navText:['<svg class="arrow" width="23" height="23" viewBox="0 0 23 23" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M10.4848 0.43934L0.938833 9.98528C0.353048 10.5711 0.353048 11.5208 0.938833 12.1066L10.4848 21.6525C11.0706 22.2383 12.0203 22.2383 12.6061 21.6525C13.1919 21.0668 13.1919 20.117 12.6061 19.5312L5.62082 12.5459L21.5 12.5459C22.3284 12.5459 23 11.8744 23 11.0459C23 10.2175 22.3284 9.54594 21.5 9.54594L5.62082 9.54594L12.6061 2.56066C13.1919 1.97487 13.1919 1.02513 12.6061 0.43934C12.0203 -0.146447 11.0706 -0.146447 10.4848 0.43934Z" fill="#3F84D1"/></svg>','<svg class="arrow" width="23" height="23" viewBox="0 0 23 23" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M12.5152 22.5607L22.0612 13.0147C22.647 12.4289 22.647 11.4792 22.0612 10.8934L12.5152 1.34746C11.9294 0.76167 10.9797 0.76167 10.3939 1.34746C9.80812 1.93324 9.80812 2.88299 10.3939 3.46878L17.3792 10.4541L1.5 10.4541C0.671574 10.4541 1.03809e-06 11.1256 9.65667e-07 11.9541C8.93244e-07 12.7825 0.671574 13.4541 1.5 13.4541L17.3792 13.4541L10.3939 20.4393C9.80812 21.0251 9.80812 21.9749 10.3939 22.5607C10.9797 23.1464 11.9294 23.1464 12.5152 22.5607Z" fill="#3F84D1"/></svg>']}))},owlGalleryArg=function(e,t){void 0==t&&(t="");var n=$(e);n.each(function(e,n){$(n).addClass("owl-carousel owl-theme").owlCarousel(Object.assign(t,{lazyLoad:!0,smartSpeed:1e3,navText:['<svg class="arrow" width="23" height="23" viewBox="0 0 23 23" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M10.4848 0.43934L0.938833 9.98528C0.353048 10.5711 0.353048 11.5208 0.938833 12.1066L10.4848 21.6525C11.0706 22.2383 12.0203 22.2383 12.6061 21.6525C13.1919 21.0668 13.1919 20.117 12.6061 19.5312L5.62082 12.5459L21.5 12.5459C22.3284 12.5459 23 11.8744 23 11.0459C23 10.2175 22.3284 9.54594 21.5 9.54594L5.62082 9.54594L12.6061 2.56066C13.1919 1.97487 13.1919 1.02513 12.6061 0.43934C12.0203 -0.146447 11.0706 -0.146447 10.4848 0.43934Z" fill="#3F84D1"/></svg>','<svg class="arrow" width="23" height="23" viewBox="0 0 23 23" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M12.5152 22.5607L22.0612 13.0147C22.647 12.4289 22.647 11.4792 22.0612 10.8934L12.5152 1.34746C11.9294 0.76167 10.9797 0.76167 10.3939 1.34746C9.80812 1.93324 9.80812 2.88299 10.3939 3.46878L17.3792 10.4541L1.5 10.4541C0.671574 10.4541 1.03809e-06 11.1256 9.65667e-07 11.9541C8.93244e-07 12.7825 0.671574 13.4541 1.5 13.4541L17.3792 13.4541L10.3939 20.4393C9.80812 21.0251 9.80812 21.9749 10.3939 22.5607C10.9797 23.1464 11.9294 23.1464 12.5152 22.5607Z" fill="#3F84D1"/></svg>']}))}).trigger("refresh.owl.carousel").on("initialize.owl.carousel",function(e){var t=e.item.index,n=$(e.currentTarget).find("img");$(n[t]).attr("data-title"),$(e.currentTarget).siblings(".production__name").text($(n[t]).attr("data-title")),$(e.currentTarget).siblings(".production__subname").text($(n[t]).attr("data-description")),$(e.currentTarget).siblings(".production__weight").text($(n[t]).attr("data-weight"))}).on("changed.owl.carousel",function(e){var t=e.item.index,n=$(e.currentTarget).find("img");$(n[t]).attr("data-title"),$(e.currentTarget).siblings(".production__name").text($(n[t]).attr("data-title")),$(e.currentTarget).siblings(".production__subname").text($(n[t]).attr("data-description")),$(e.currentTarget).siblings(".production__weight").text($(n[t]).attr("data-weight"))})},owlGallerySize=function(e,t){void 0==t&&(t="");var n=$(e);n.each(function(e,n){$(n).addClass("owl-carousel owl-theme").owlCarousel(Object.assign(t,{lazyLoad:!0,smartSpeed:500,navText:['<svg class="arrow" width="23" height="23" viewBox="0 0 23 23" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M10.4848 0.43934L0.938833 9.98528C0.353048 10.5711 0.353048 11.5208 0.938833 12.1066L10.4848 21.6525C11.0706 22.2383 12.0203 22.2383 12.6061 21.6525C13.1919 21.0668 13.1919 20.117 12.6061 19.5312L5.62082 12.5459L21.5 12.5459C22.3284 12.5459 23 11.8744 23 11.0459C23 10.2175 22.3284 9.54594 21.5 9.54594L5.62082 9.54594L12.6061 2.56066C13.1919 1.97487 13.1919 1.02513 12.6061 0.43934C12.0203 -0.146447 11.0706 -0.146447 10.4848 0.43934Z" fill="#3F84D1"/></svg>','<svg class="arrow" width="23" height="23" viewBox="0 0 23 23" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M12.5152 22.5607L22.0612 13.0147C22.647 12.4289 22.647 11.4792 22.0612 10.8934L12.5152 1.34746C11.9294 0.76167 10.9797 0.76167 10.3939 1.34746C9.80812 1.93324 9.80812 2.88299 10.3939 3.46878L17.3792 10.4541L1.5 10.4541C0.671574 10.4541 1.03809e-06 11.1256 9.65667e-07 11.9541C8.93244e-07 12.7825 0.671574 13.4541 1.5 13.4541L17.3792 13.4541L10.3939 20.4393C9.80812 21.0251 9.80812 21.9749 10.3939 22.5607C10.9797 23.1464 11.9294 23.1464 12.5152 22.5607Z" fill="#3F84D1"/></svg>']}))}).trigger("refresh.owl.carousel").on("changed.owl.carousel",function(e){$(e.currentTarget).find(".center").removeClass("center");var t=$(e.currentTarget).find(".other__link, .products__link");$(t[e.item.index+1]).addClass("center")})},openMenu=function(e){e.addClass("active"),offScroll()},closeMenu=function(e){e.removeClass("active"),onScroll()},multiCheck=function(e){var t,n=document.querySelectorAll("."+e+"__images");t="item"!=e?90:250,n.forEach(function(n){var a=n.querySelectorAll("."+e+"__img");(a.length>1&&$(".production__header").length&&document.documentElement.clientWidth>1024||"item"==e&&a.length>1)&&owlGalleryArg(n,{dots:!0,margin:t,items:1,center:!0,mouseDrag:!1,touchDrag:!1})})},productsAppear=function(){var e=document.querySelectorAll(".production__item");e.forEach(function(e){e.style.display=$(e).hasClass("hidden")?"none":"flex"})},inputTypeSelect=function(e){function t(e,t){e.removeClass("isOpen"),t.slideUp(200),setTimeout(function(){return $(e).parent().removeClass("isOpen")},200)}var n,a,o=$(e).children("button"),i=o.next("div"),r=$(".selected");o.on("click",function(){n=$(this).siblings("input"),$(this).hasClass("isOpen")?t($(this),i):($(this).parent().addClass("isOpen"),$(this).addClass("isOpen"),$(this).next("div").slideDown(200))}),i.find("div").on("click",function(){a=$(this).text(),$(r).removeClass("selected"),r=this,$(r).addClass("selected"),n.val(a).attr("value",a),t(o,i)})},hideShowMore=function(e){var t;t=".news"==e?"__content":"__item";var n=document.querySelectorAll(e+"__items");n.forEach(function(n){$(n).find(e+t).length<4&&$($(n).parent().find(e+"__more")[$(n).index(e+"__items")]).addClass("hidden")})},hideVarietyButtons=function(){$(".item__variety").length<2&&$(".item__varieties").addClass("hidden")},getFilters=function(e,t){var n=$("."+e+"__"+t).parent();return $(n).find(".active")},hashClick=function(e){$('[data-link="'+e.slice(1)+'"]').trigger("click")},openVideo=function(){$(".modal").addClass("active")},closeVideo=function(e){e.target==$(".modal")[0]&&($(".modal").removeClass("active"),$(".modal__content").empty())},createYouTubeEmbedLink=function(e,t){var n=$(e).attr("data-src"),a="https://www.youtube.com/embed/",o="?rel=0&showinfo=0&autoplay=1",i=a+n.slice(n.indexOf("=")+1,n.length)+o;$(e).on("click",function(){$(t).append('<iframe class="modal__iframe" src="'.concat(i,'" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>'))}),setTimeout(function(){$(t).find("img").attr("src","http://img.youtube.com/vi/"+i.slice(i.indexOf("embed")+6,i.indexOf("?"))+"/0.jpg")})},scrollCheck=function(){var e=window.scrollY;e>=1200&&!$(".arrow__scroll-top").hasClass("active")&&document.documentElement.clientWidth>1024?$(".arrow__sroll-top").addClass("active"):1200>e&&$(".arrow__sroll-top").removeClass("active")},producerDescroption=function(){var e=$(".item__icon").attr("data-producer"),t="Продукция собственного производства в&nbsp;г. Саратов. Формируем культуру здорового питания и&nbsp;изготавливаем продукты с&nbsp;естественными сроками хранения, не&nbsp;применяем консерванты и&nbsp;другие добавки.",n="Продукция проходит многоступенчатую проверку на&nbsp;соответствие нормам свежести, однородности и&nbsp;жирности. При пастеризации из&nbsp;нее удаляются вредные микроорганизмы и&nbsp;остаются полезные белок и&nbsp;кальции. Поставляется в&nbsp;учреждения дошкольного и&nbsp;школьного питания.";"krepish"==e?(t="Детское питание для детей от 6 месяцев. Познакомьте своего малыша с миром молочной продукции с ванилью, ягодными и фруктовыми вкусами.",n='<p> Мы&nbsp;знаем о&nbsp;молочном детском питании все! &laquo;Комбинат Детского питания&raquo; известен российскому потребителю как производитель качественного детского питания, первого молочного прикорма под ТМ&nbsp;&laquo;Крепыш&raquo;. Наша линейка детского питания присутствует в&nbsp;меню на&nbsp;молочных кухнях и&nbsp;во&nbsp;многих больницах, детских учреждениях, а&nbsp;также на&nbsp;полках магазинах многих популярных сетей нашей страны.</p>\n        <ul type="disc">\n            <li> Мы&nbsp;&mdash; эксперты по&nbsp;детскому питанию; </li>\n            <li> Мы&nbsp;сохраняем традиции и&nbsp;качество;  </li>\n            <li> Мы&nbsp;используем только выверенную качественную сырьевую базу региональных поставщиков; </li>\n        </ul>\n        <p> Линейка Крепыш включает в&nbsp;себя творог, творог с&nbsp;наполнителями, кефир, кисломолочный продукт, бифидокефир, биолакт, молочные коктейли. Продукция Крепыш предназначена для кормления малышей от&nbsp;6&nbsp;месяцев.</p>\n        '):"vkusniyDen"==e?(t="Весь спектр кисломолочных продуктов: творог, кефир, ряженка, снежок, сливки, десерты, сыр и молоко. В ассортименте продукция с шоколадом, ванилью и  ягодными вкусами. Кефир и творог с 0% жирности для любителей низкокалорийной пищи.",n="<p> Уже 13 лет  мы производим  молочную продукцию под торговой маркой «Вкусный День». Линейка продукции включает в себя традиционную молочную продукцию, десертную группу, сыры плавленые. \n        Торговая марка «Вкусный День» — одна из самых узнаваемых и любимых марок на территории Саратовской области. </p> \n\n        <p> Соответствие высоким технологическим стандартам качества и безопасность продукции — главные условия при производстве нашей продукции, \n        соблюдая которые мы достигли такой большой узнаваемости среди покупателей.Сегодня уже в каждом магазине можно найти ассортимент ТМ «Вкусный День».</p>"):"voljskiyBereg"==e?(t="Линейка творожных продуктов с вишней, ванилином, изюмом, курагой и вареной сгущенкой.",n="<p> У&nbsp;нашего покупателя всегда должен быть выбор по&nbsp;цене. Клиенту недостаточно просто видеть товар на&nbsp;полке: он&nbsp;должен понимать,\n         что товар лучше, чем у&nbsp;конкурентов. Разные ценовые сегменты, разные вкусы для самых претензионных клиентов, разные продукты (для перекуса, для здорового питания).\n          &laquo;Комбинат Детского питания&raquo; анализируя тенденции современного рынка потребления и&nbsp;реагируя на&nbsp;отзывы своих покупателей, решил,\n           выпустить новую линейку эконом сегмента под брендом &laquo;Волжский Берег&raquo;. Каждый покупатель точно найдет свою продукцию в&nbsp;разнообразии вкусов. </p>\n        \n        "):"znakomiyVkus"==e?(t="Натуральные творожные десерты с ванилью и сгущенным молоком в вафельных рожках, в виде глазированных батончиков и сырков.",n="<p> Среди наших продуктов есть целая линейка натуральных продуктов: линейка &laquo;Знакомый вкус&raquo;! В&nbsp;которую входит: творог, творожные массы, глазированные сырки, рожки. Линейка состоит из&nbsp;десертной группы премиум сегмента, которая создана из&nbsp;натурального творога, с&nbsp;использованием натурального шоколада. Полностью натуральный молочный продукт!\n        Данный проект стартовал в&nbsp;апреле 2019&nbsp;года. За&nbsp;такой короткий срок продукция &laquo;Знакомый Вкус&raquo; заняла свое определенное место среди ценителей натуральной десертной продукции. Вкусовые качества нашего продукта, состав и&nbsp;пищевая ценность не&nbsp;оставят равнодушным ни&nbsp;одного покупателя.</p>"):"mimimishki"==e&&(t="Творожные сырки с любимыми мультперсонажами. Кеша, Тучка, Ципа и другие герои мультфильма ждут встречи с вашим малышом.",n='\n        <p>\n        &laquo;Комбинат Детского питания&raquo; анализируя тенденции современного рынка потребления и&nbsp;реагируя на&nbsp;отзывы своих покупателей, \n        решил, используя свои опыт, традиции, стандарты качества, выпустить новую линейку творожных десертов под брендом &laquo;Ми-Ми-Мишки&raquo;.\n        </p>\n        <p>Наши приемущества:</p>\n        <ul type="disc">\n            <li> Всероссийская узнаваемость торговой марки благодаря верхним строчкам рейтинга одноименного мультфильма; </li>\n            <li> Дизайн упаковки продукта яркий и&nbsp;привлекает внимание детскую аудиторию покупателей; </li>\n            <li> Вкусы и&nbsp;наполнители продуктов в&nbsp;новой линейке подобраны на&nbsp;основании вкусовых предпочтений детей от&nbsp;3-х до&nbsp;12&nbsp;лет; </li>\n            <li> Упаковка разработана по&nbsp;всем стандартам качества, </li>\n            <li> Оптимальное соотношение цена-качество; </li>\n            <li> Наши продукты не&nbsp;содержат заменителей молочного жира; </li>\n            <li> Детские продукты под ТМ&nbsp;&laquo;Ми-Ми-Мишки&raquo; полностью натуральные, полезные и&nbsp;вкусные! </li>\n        </ul>\n        '),$(".item__about").html(t),$(".item__description").html(n)},filters=[[],[]],availableCategories=[],acceptFilters=function(e){var t=[[25,26,27,28,29,30],[0,0,0,0,0,0]],n=".production__content",a=".production";$(".promo").length&&(n=".menu__slider",a=".menu");var o=document.querySelectorAll(".production__item");if(document.documentElement.clientWidth>1024&&!$(".menu__category").length?o.forEach(filters[0].length||filters[1].length?filters[0].length&&!filters[1].length?function(e){$(e).addClass("hidden");for(var n=0;n<filters[0].length;n++)$(e).attr("data-producer")==filters[0][n]&&$(e).removeClass("hidden");$(e).hasClass("hidden")||t[1][t[0].indexOf(Number($(e).attr("data-category")))]++}:!filters[0].length&&filters[1].length?function(e){$(e).addClass("hidden");for(var n=0;n<filters[1].length;n++)$(e).attr("data-category")==Number(filters[1][n])&&$(e).removeClass("hidden");t[1][t[0].indexOf(Number($(e).attr("data-category")))]++}:function(e){$(e).addClass("hidden");for(var n=0;n<filters[0].length;n++)if($(e).attr("data-producer")==filters[0][n]){t[1][t[0].indexOf(Number($(e).attr("data-category")))]++;for(var a=0;a<filters[1].length;a++)$(e).attr("data-category")==Number(filters[1][a])&&$(e).removeClass("hidden")}}:function(e){$(e).removeClass("hidden"),t[1][t[0].indexOf(Number($(e).attr("data-category")))]++}):(o.forEach(filters[0].length||filters[1].length?filters[0].length&&!filters[1].length?function(e){$(e).addClass("hidden");for(var n=0;n<filters[0].length;n++)$(e).attr("data-producer")==filters[0][n]&&$(e).removeClass("hidden");$(e).hasClass("hidden")||t[1][t[0].indexOf(Number($(e).attr("data-category")))]++}:!filters[0].length&&filters[1].length?function(e){$(e).addClass("hidden");for(var n=0;n<filters[1].length;n++)$(e).attr("data-category")==Number(filters[1][n])&&$(e).removeClass("hidden");t[1][t[0].indexOf(Number($(e).attr("data-category")))]++}:function(e){$(e).addClass("hidden");for(var n=0;n<filters[0].length;n++)if($(e).attr("data-producer")==filters[0][n]){t[1][t[0].indexOf(Number($(e).attr("data-category")))]++;for(var a=0;a<filters[1].length;a++)$(e).attr("data-category")==Number(filters[1][a])&&$(e).removeClass("hidden")}}:function(e){$(e).removeClass("hidden"),t[1][t[0].indexOf(Number($(e).attr("data-category")))]++}),o.forEach(function(e){$(e).hasClass("hidden")||$(e).clone().appendTo(n)})),0==e)if(filters[0].length)for(var i=0;i<t[0].length;i++)0==t[1][i]?($(a+"__category").eq(i).hasClass("hidden")||$(a+"__category").eq(i).addClass("hidden"),$(a+"__category").eq(i).hasClass("active")&&$(a+"__category").eq(i).trigger("click")):$(a+"__category").eq(i).removeClass("hidden");else $(a+"__category").removeClass("hidden")},categoryTrigger=function(e){if("all"==e){filters[1]=[];for(var t=$('[data-category="all"]').parent().find(".active"),n=0;n<t.length;n++)$(t[n]).removeClass("active")}"all"!=e&&0!=$('[data-category="all"]').length&&$('[data-category="all"]').removeClass("active")},addActiveFilter=function(e,t){filters[e].push(t),1==e&&categoryTrigger(t),acceptFilters(e)},removeActiveFilter=function(e,t){var n=filters[e].indexOf(t);n>-1&&filters[e].splice(n,1),acceptFilters(e)},switchActiveProducer=function(e){$(e).hasClass("active")?($(e).removeClass("active"),removeActiveFilter(0,$(e).attr("data-producer"))):($(e).addClass("active"),addActiveFilter(0,$(e).attr("data-producer")))},switchActiveCategory=function(e){$(e).hasClass("active")?(removeActiveFilter(1,$(e).attr("data-category")),$(e).removeClass("active")):(addActiveFilter(1,$(e).attr("data-category")),$(e).addClass("active"))},vacancySwitch=function(e){var t;$(e).parent().hasClass("active")?(t="40px",$(e).parent().removeClass("active")):(t=$(e).parent().get(0).scrollHeight,$(e).parent().addClass("active")),$(e).parent().height(t)},showSwitch=function(e,t,n,a){var o;document.querySelectorAll(t).forEach(function(t){$(t).hasClass("active")?(o=n,$(t).removeClass("active"),$(e).text(a),$(".recipes__container").removeClass("active")):(o=$(t).get(0).scrollHeight,$(t).addClass("active"),$(e).text("Скрыть"),$(".recipes__container").addClass("active")),$(t).height(o)})},showeAge=function(){var e=new Date,t=e.getFullYear()-2006;$(".about__age").text(t)},resetFilters=function(){document.querySelectorAll(".active").forEach(function(e){$(e).removeClass("active")}),document.querySelectorAll(".hidden").forEach(function(e){$(e).removeClass("hidden")}),filters=[[],[]]},offScroll=function(){document.body.style.overflow="hidden"},onScroll=function(){document.body.style.overflow="auto"},itemsAutoHeight=function(e,t){$(t).height($(e).outerHeight())},animateInOnScroll=function(e){var t=$(window),n=t.height(),a=-(n/2.5);$(e).each(function(o){var i=$(e[o]);t.on("scroll load resize",function(){i[0].getBoundingClientRect().top-n<a&&i.addClass("scrolled")})})},formVal=function(e,t){var n=document.querySelector(e);n.addEventListener("submit",function(a){a.preventDefault(),formValidate({form:n,url:t,errorClass:"error",onLoadStart:function(){},onSuccess:function(){".modal__form"==e&&closeMenu($(".modal")),openMenu($(".success"))},onError:function(){alert("Возникла ошибка, пожалуйста, попробуйте позже")}})})},mainAnimation=function(){$(".header, .promo__content, .promo__about, .promo__video").addClass("scrolled")},setProfession=function(e){var t=$(e).siblings(".career__name").attr("data-value");$(".modal__input.hidden").attr("value",t)};$().ready(function(){$(".contacts__header").length&&addId(),$(".news__header").length&&itemsAutoHeight(".news__content",".news__items"),$(".recipes__header").length&&itemsAutoHeight(".recipes__item",".recipes__items"),$(".promo").length&&($(".promo__border").on("click",function(){openVideo()}),$(".modal").on("click",function(e){closeVideo(e,".modal__content");

})),$(".promo").length&&createYouTubeEmbedLink(".promo__border",".modal__content"),$(".promo__products").on("click",function(){openMenu($(".menu")),offScroll()}),$(".menu__close").on("click",function(){closeMenu($(".menu")),onScroll()}),$(".item__button").on("click",function(){descriptionSwitch(this)}),$(".header__menu").on("click",function(){openBurgerMenu(),offScroll()}),$(".header__close").on("click",function(){closeBurgerMenu(),onScroll()}),$(".career__name").on("click",function(){vacancySwitch(this)}),$(".career__respond").on("click",function(){openMenu($(".modal")),setProfession(this)}),$(".modal, .modal__close").on("click",function(e){(e.target==$(".modal")[0]||e.target==$(".modal__close")[0])&&closeMenu($(".modal"))}),$(".success, .success__close").on("click",function(e){(e.target==$(".success")[0]||e.target==$(".success__close")[0])&&closeMenu($(".success"))}),$(".production__reset").on("click",function(){resetFilters()}),$(".production__header").length&&(scrollCheck(),window.addEventListener("scroll",function(){scrollCheck()}),$(".arrow__sroll-top").on("click",function(){$("body,html").animate({easing:"swing",scrollTop:0},800)})),owlGalleryModal(".menu__slider",{margin:40,items:4,dots:!1,nav:!0,navContainer:".menu__navigate"}),$(".menu__producer").on("click",function(){document.documentElement.clientWidth<=1024||$(".menu__category")?(void 0!=test&&test.trigger("destroy.owl.carousel"),$(".menu__slider").empty(),switchActiveProducer(this),owlGalleryModal(".menu__slider",{margin:40,items:4,dots:!1,nav:!0,navContainer:".menu__navigate"})):switchActiveProducer(this)}),$(".production__producer").on("click",function(){document.documentElement.clientWidth<=1024?(void 0!=test&&test.trigger("destroy.owl.carousel"),$(".production__content").empty(),switchActiveProducer(this),owlGalleryModal(".production__content",{margin:40,autoWidth:!0,dots:!1,nav:!0,navContainer:".production__navigate"})):switchActiveProducer(this)}),$(".menu__category").on("click",function(){void 0!=test&&test.trigger("destroy.owl.carousel"),$(".menu__slider").empty(),switchActiveCategory(this),owlGalleryModal(".menu__slider",{margin:40,items:4,dots:!1,nav:!0,navContainer:".menu__navigate"})}),$(".production__category").on("click",function(){document.documentElement.clientWidth<=1024?(void 0!=test&&test.trigger("destroy.owl.carousel"),$(".production__content").empty(),switchActiveCategory(this),owlGalleryModal(".production__content",{margin:40,autoWidth:!0,dots:!1,nav:!0,navContainer:".production__navigate"})):switchActiveCategory(this)}),window.addEventListener("hashchange",function(){hashClick(window.location.hash),$("body,html").animate({easing:"swing",scrollTop:0},800)}),hashClick(window.location.hash),$(".awards__more").on("click",function(){document.documentElement.clientWidth>660?showSwitch(this,".awards__items","calc(18px + 53.9rem)","Смотреть все"):document.documentElement.clientWidth<=568?showSwitch(this,".awards__items","calc(12vw + 60.9rem)","Смотреть все"):showSwitch(this,".awards__items","calc(5vw + 51.9rem)","Смотреть все")}),$(".recipes__more").on("click",function(){showSwitch(this,".recipes__items",$(".recipes__item").outerHeight(),"Все рецепты")}),$(".news__more").on("click",function(){showSwitch(this,".news__items",$(".news__content").outerHeight(),"Все новости")}),$(".news__header").length&&hideShowMore(".news"),$(".recipes__header").length&&hideShowMore(".recipes"),hideVarietyButtons(),inputTypeSelect($(".contacts__field")),bindModalListeners([]),$(".parallax-window, .parallax-uniform, .combine__header-parallax").imageScroll(document.documentElement.clientWidth>1024?{image:null,imageAttribute:"image",holderClass:"imageHolder",container:$("body"),windowObject:$(window),speed:.85,coverRatio:.75,holderMinHeight:200,holderMaxHeight:750,extraHeight:0,parallax:!0,touch:!1}:{image:null,imageAttribute:"image",holderClass:"imageHolder",container:$("body"),windowObject:$(window),speed:.95,coverRatio:.75,holderMinHeight:200,holderMaxHeight:350,extraHeight:0,parallax:!0,touch:!1}),$(".position__map").length&&yandexMap(),$(".contacts__web-map").length&&yandexMap(),$(".contacts__map").length&&yandexMapCheckbox(),$(".contact__map").length&&yandexMapContact(),document.documentElement.clientWidth<768&&($(".contacts__item").on("click",function(){showMap()}),$(".contacts__hide").on("click",function(){hideMap()})),document.documentElement.clientWidth>1024?owlGallerySize(".products__slider",{margin:80,items:3,dots:!1,nav:!0,navContainer:".products__navigate",loop:!0}):document.documentElement.clientWidth<768?owlGallery(".products__slider",{margin:80,items:1,autoWidth:!0,dots:!1,nav:!0,navContainer:".products__navigate"}):owlGallery(".products__slider",{margin:20,items:2,autoWidth:!1,dots:!1,nav:!0,navContainer:".products__navigate"}),document.documentElement.clientWidth>1024?(owlGallery(".news__slider",{margin:40,items:3,dots:!1,nav:!0,navContainer:".news__navigate"}),owlGallerySize(".other__slider",{margin:36,items:3,dots:!1,nav:!0,navContainer:".other__navigate",loop:!0}),owlGallerySize(".other__slider",{margin:36,items:3,dots:!1,nav:!0,navContainer:".other__navigate",loop:!0}),owlGallery(".position__stores, .partnership__stores",{margin:36,items:6,dots:!1,nav:!0,navContainer:".position__navigate, .partnership__navigate",loop:!0})):document.documentElement.clientWidth<768?(owlGallery(".news__slider",{margin:36,items:1,autoWidth:!0,dots:!1,nav:!0,navContainer:".news__navigate"}),owlGalleryModal(".production__content",{margin:36,items:2,autoWidth:!0,dots:!1,nav:!0,navContainer:".production__navigate"}),owlGallerySize(".other__slider",{margin:36,items:2,autoWidth:!0,dots:!1,nav:!0,navContainer:".other__navigate"}),owlGallery(".news__items",{margin:36,items:2,autoWidth:!0,dots:!1,nav:!0,navContainer:".news__navigate"}),owlGallery(".recipes__items",{margin:36,items:2,autoWidth:!0,dots:!1,nav:!0,navContainer:".recipes__navigate"})):(owlGalleryModal(".production__content",{margin:36,items:2,autoWidth:!0,dots:!1,nav:!0,navContainer:".production__navigate"}),owlGallerySize(".other__slider",{margin:36,items:2,dots:!1,nav:!0,navContainer:".other__navigate"}),owlGallery(".news__slider",{margin:36,items:1,autoWidth:!0,dots:!1,nav:!0,navContainer:".news__navigate"})),owlGallery(".other-event__slider",{margin:64,items:2,autoWidth:!0,dots:!1,nav:!0,navContainer:".other-event__navigate"}),owlGallery(".other-recipe__slider",{margin:64,items:2,autoWidth:!0,dots:!1,nav:!0,navContainer:".other-recipe__navigate"}),document.documentElement.clientWidth<1024&&document.documentElement.clientWidth>=768?owlGallery(".position__stores, .partnership__stores",{margin:36,items:5,dots:!1,nav:!0,navContainer:".position__navigate, .partnership__navigate",loop:!0}):document.documentElement.clientWidth<768&&document.documentElement.clientWidth>=560?owlGallery(".position__stores, .partnership__stores",{margin:36,items:4,dots:!1,nav:!0,navContainer:".position__navigate, .partnership__navigate",loop:!0}):document.documentElement.clientWidth<560&&owlGallery(".position__stores, .partnership__stores",{margin:36,items:3,dots:!1,nav:!0,navContainer:".position__navigate, .partnership__navigate",loop:!0}),$(".other__link").length&&$(".owl-item:not(.cloned)").eq(1).find(".other__link").addClass("center"),$(".products__link").length&&$(".owl-item:not(.cloned)").eq(1).find(".products__link").addClass("center"),$(".promo").length?animateInOnScroll([$(".products"),$(".position"),$(".news__container"),$(".footer__container")]):$(".footer__container").addClass("scrolled"),multiCheck("production"),$(".item__header").length&&multiCheck("item"),$(".combine__header").length&&showeAge(),$(".item__header").length&&producerDescroption(),$(".partnership__header").length&&formVal(".questions__form","assets/templates/php/form.php"),$(".career__header").length&&formVal(".modal__form","assets/templates/php/form_file.php"),attachFile(".addFile"),contentFadeInOnReady(),mainAnimation()});