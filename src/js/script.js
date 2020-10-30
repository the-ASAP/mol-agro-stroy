// удаляем прелодер при загрузке страницы
const contentFadeInOnReady = () => {
    $('.preloader').fadeOut(150, ()=>{
        $('.preloader').remove();
    });
};

//навешиваем  обработчики открытия и закрытия на модалки
const bindModalListeners = modalArr => {
    modalArr.forEach(obj => {
        let jQTrigger = $(obj.trigger);
        let jQModal = $(obj.modal);

        jQTrigger.on('click', function() {
            stopScroll('body');
            jQModal.addClass('active');
        });

        jQModal.on('click', function(e) {
            if ($(e.target).hasClass('modal')) {
                $(this).removeClass('active');
                freeScroll();
            }
        });

        jQModal.find('.modal__close').on('click', function() {
            jQModal.removeClass('active');
           freeScroll();
        });

        $(document).keydown((e) => {
            if (e.keyCode === 27) {
                $('.modal').removeClass('active');
                freeScroll();
                return false;
            }
        });
    });
}

// Запрещаем скролл для body 
function stopScroll(item='body') {
    let documentWidth = parseInt(document.documentElement.clientWidth),
        windowsWidth = parseInt(window.innerWidth),
        scrollbarWidth = windowsWidth - documentWidth;
    $(item).attr("style", 'overflow: hidden; padding-right: ' + scrollbarWidth + 'px');
}

// возвращаем скролл для body
function freeScroll(item='body') {
    $(item).attr("style", '');
}



const yandexMap = (item, content) => {
    if ($('#map').length > 0) {
        const center = [51.540858933675324,46.00736999999997];
        const coords = [
            [55.45311789953906, 38.17827586132814],
            [51.65200709025026, 38.84637675292965],
            [47.20718825486257, 40.20494279303619],
            [45.26063359568109, 41.857765507871335],
            [46.52009451033158, 48.35833311775772],
            [48.871557359497196, 44.30267127441403],
            [51.48545085341113, 46.12569300512695],
            [51.55511475100271, 43.155358086881485],
            [52.737816613585444, 44.792320977506485],
            [52.05231000655496, 47.89046550875649],
            [53.18889122121283, 50.098717461881506],
            [53.1536667600883, 47.604545392578125],
            [54.329159778549595, 45.17107371289063],
            [55.72256791427198, 48.74875832275386],
            [56.00983059624363, 52.33497211352531],
            [55.79212984897214, 37.616237390624995],
            [55.7292249520377, 35.26138063406282],
            [56.24651800341893, 34.84390016531281]
        ];
        var myPlacemark;
        ymaps.ready(() => {
            var myMap = new ymaps.Map("map", {
                center: center,
                zoom: 5,
                "multiTouch": false,
                controls: ['zoomControl']
            }, {
                suppressMapOpenBlock: true
            });
            for (let i = 0; i < coords.length; i++){
            myPlacemark = new ymaps.Placemark(coords[i], {
                hintContent: content
            });
            myMap.geoObjects.add(myPlacemark);
        }
            myMap.controls.remove('routeEditor');
            myMap.behaviors.disable('scrollZoom');
        });
    }
}

const owlGallery = (selector, params) => {
    if (params == undefined) params = "";
    const owl = $(selector);
    owl
        .each((i, el) => {
            $(el)
                .addClass("owl-carousel owl-theme")
                .owlCarousel(
                    Object.assign(params, {
                         lazyLoad: true,
                        autoWidth: true,
                        smartSpeed: 1000,
                        navText: [
                            '<svg class="arrow" width="23" height="23" viewBox="0 0 23 23" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M10.4848 0.43934L0.938833 9.98528C0.353048 10.5711 0.353048 11.5208 0.938833 12.1066L10.4848 21.6525C11.0706 22.2383 12.0203 22.2383 12.6061 21.6525C13.1919 21.0668 13.1919 20.117 12.6061 19.5312L5.62082 12.5459L21.5 12.5459C22.3284 12.5459 23 11.8744 23 11.0459C23 10.2175 22.3284 9.54594 21.5 9.54594L5.62082 9.54594L12.6061 2.56066C13.1919 1.97487 13.1919 1.02513 12.6061 0.43934C12.0203 -0.146447 11.0706 -0.146447 10.4848 0.43934Z" fill="#3F84D1"/></svg>',
                            '<svg class="arrow" width="23" height="23" viewBox="0 0 23 23" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M12.5152 22.5607L22.0612 13.0147C22.647 12.4289 22.647 11.4792 22.0612 10.8934L12.5152 1.34746C11.9294 0.76167 10.9797 0.76167 10.3939 1.34746C9.80812 1.93324 9.80812 2.88299 10.3939 3.46878L17.3792 10.4541L1.5 10.4541C0.671574 10.4541 1.03809e-06 11.1256 9.65667e-07 11.9541C8.93244e-07 12.7825 0.671574 13.4541 1.5 13.4541L17.3792 13.4541L10.3939 20.4393C9.80812 21.0251 9.80812 21.9749 10.3939 22.5607C10.9797 23.1464 11.9294 23.1464 12.5152 22.5607Z" fill="#3F84D1"/></svg>'
                        ],
                    })
                );
        })
        .trigger("refresh.owl.carousel")
        .on('initialize.owl.carousel', function(event){
            let index = event.item.index
            let images = $(event.currentTarget).find('img')
            $(images[index]).attr('data-title')
            $(event.currentTarget).siblings('.production__name')
                .text($(images[index]).attr('data-title'))
            $(event.currentTarget).siblings('.production__subname')
                .text($(images[index]).attr('data-description'))
            $(event.currentTarget).siblings('.production__weight')
                .text($(images[index]).attr('data-weight'))
            
        })
        .on('changed.owl.carousel', function(event){
            let index = event.item.index
            let images = $(event.currentTarget).find('img')
            $(images[index]).attr('data-title')
            $(event.currentTarget).siblings('.production__name')
                .text($(images[index]).attr('data-title'))
            $(event.currentTarget).siblings('.production__subname')
                .text($(images[index]).attr('data-description'))
            $(event.currentTarget).siblings('.production__weight')
                .text($(images[index]).attr('data-weight'))
            
        })
};

// Вызов / закрытие модального окна
const openMenu = (menu) => {
    menu.addClass("active")
}
const closeMenu = (menu) => {
    menu.removeClass("active")
}

// Добавление овл карусели для блоков с несколькими картинками
const multiCheck = () => {
    const items = document.querySelectorAll('.production__images')
    items.forEach(el => {
        let itemsImg = el.querySelectorAll('.production__img')
        if (itemsImg.length > 1){
            owlGallery(el, {
                dots: true,
                margin: 70,
                items: 1,
                center: true,
                mouseDrag: false,
                touchDrag: false
            });
        }
    })
}

$().ready(() => {
    $(".promo__products").on('click', function(){
        openMenu($(".production"))
        stopScroll();
    })
    $(".production__close").on('click', function(){
        closeMenu($(".production"))
        freeScroll();
    })
    
    contentFadeInOnReady()
    bindModalListeners([]);
    yandexMap(".products__map", "");
    owlGallery(".products__slider", {
        margin: 80,
        items: 3,
        dots: false,
        nav: true,
        navContainer: ".products__navigate",
    });
    owlGallery(".news__slider", {
        margin: 30,
        items: 3,
        dots: false,
        nav: true,
        navContainer: ".news__navigate",
    });
    owlGallery(".production__slider", {
        margin: 40,
        items: 4,
        dots: false,
        nav: true,
        navContainer: ".production__navigate",
    });
    multiCheck();


});


