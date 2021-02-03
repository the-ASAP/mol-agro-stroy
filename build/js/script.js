// удаляем прелодер при загрузке страницы
const contentFadeInOnReady = () => {
    $('.preloader').fadeOut(150, () => {
        $('.preloader').remove();
    });
};

//навешиваем  обработчики открытия и закрытия на модалки
const bindModalListeners = modalArr => {
    modalArr.forEach(obj => {
        let jQTrigger = $(obj.trigger);
        let jQModal = $(obj.modal);

        jQTrigger.on('click', function () {
            jQModal.addClass('active');
        });

        jQModal.on('click', function (e) {
            if ($(e.target).hasClass('modal')) {
                $(this).removeClass('active');
                freeScroll();
            }
        });

        jQModal.find('.modal__close').on('click', function () {
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

// возвращаем скролл для body
function freeScroll(item = 'body') {
    $(item).attr("style", '');
}



const yandexMap = (item, content) => {
    if ($('#simple-map').length > 0) {
        const center = [51.540858933675324, 46.00736999999997];
        const coords = [
            [54.78320144467754, 32.04758660648477],
            [54.51498587344971, 36.26141223294425],
            [53.24463254059305, 34.363565663940385],
            [52.97191574457895, 36.06436152007449],
            [54.63080650769845, 39.736264526611265],
            [52.61079509965, 39.59853325927727],
            [52.72231556605009, 41.45256656719235],
            [56.12994054390806, 40.40597347329085],
            [57.62846744025385, 39.89338444175211],
            [56.32897238565279, 44.004326570068265],
            [56.239439723687184, 43.46152922448722],
            [54.31600612418016, 48.4031646052246],
            [45.037638973426446, 38.97529341827918],
            [51.77059740160962, 55.097068613037095],
            [53.63153195727636, 55.93119553831921],
            [54.737349924029395, 55.95893192797848],
            [54.4822937650648, 53.46625156854246],
            [51.23041691382763, 58.47495855761712],
            [55.16171706375407, 61.40079555297847],
            [56.83996818710426, 60.596249497314325],
            [51.50216710212046,46.124491375488276],
            [53.51071435407704,49.419239031249994],
            [53.20353297421257,50.10345502148435],
            [51.535881103265645,46.03517914306637],
            [55.79792769582924,49.10684395507806],
            [55.757110828165025,52.05474467211909],
            [48.70958864594674,44.517591318359344],
            [47.22458817043838,39.71955346874993],
            [51.77038440072015,55.09689695166015],
            [46.34980864392328,48.030498190429576],
            [55.225964236170796,36.64404976452636],
            [51.6628974608033,39.200342512207015],
            [53.19723950184252,45.018967171875],
            [53.119848805039055,46.60123951318358]
        ];
        var myPlacemark;
        ymaps.ready(() => {
            var myMap = new ymaps.Map("simple-map", {
                center: center,
                zoom: 5,
                "multiTouch": false,
                controls: ['zoomControl']
            }, {
                suppressMapOpenBlock: true
            });
            for (let i = 0; i < coords.length; i++) {
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

const yandexMapCheckbox = (item, content) => {
    if ($('#map').length > 0) {

        const center = [54.59716196616716, 46.762718];

        var bluePlacemark;
        var bluetrigger = true;
        var redPlacemark = [];
        var redtrigger = true;
        var orangePlacemark = [];
        var orangetrigger = false;
        let current = null;
        let markLayout;
        ymaps.ready(() => {
            var myMap = new ymaps.Map("map", {
                center: center,
                zoom: 6,
                "multiTouch": false,
                controls: ['zoomControl']
            }, {
                suppressMapOpenBlock: true
            })





            for (let j = 0; j < $('.contacts__item').length; j++) {
                markLayout = ymaps.templateLayoutFactory.createClass(`<button data-index="` + j + `" class="bluePlaceMark" data-city="` + $('.contacts__item').eq(j).parent().attr('data-name') + `">
                <svg width="39" height="59" viewBox="0 0 39 59" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path fill-rule="evenodd" clip-rule="evenodd" d="M21.4546 39.7064C31.1102 38.6063 38.6205 30.1646 38.6205 19.9139C38.6205 8.91576 29.975 0 19.3102 0C8.64549 0 0 8.91576 0 19.9139C0 30.1642 7.50969 38.6056 17.1647 39.7063C17.1643 39.7244 17.1641 39.7426 17.1641 39.7608V56.4899C17.1641 57.6749 18.1247 58.6355 19.3097 58.6355C20.4946 58.6355 21.4553 57.6749 21.4553 56.4899V39.7608C21.4553 39.7426 21.455 39.7245 21.4546 39.7064ZM28.071 20.4854C28.071 25.3734 24.2285 29.336 19.4886 29.336C14.7487 29.336 10.9062 25.3734 10.9062 20.4854C10.9062 15.5973 14.7487 11.6348 19.4886 11.6348C24.2285 11.6348 28.071 15.5973 28.071 20.4854Z" fill="#1D398D"/>
                </svg>
                    </button>`)
                bluePlacemark = (new ymaps.Placemark([Number($('#' + j).attr('data-coords-n')), Number($('#' + j).attr('data-coords-s'))], {
                    hintContent: content
                }, {
                    iconLayout: markLayout,
                    preset: 'islands#blueIcon'
                }))
                myMap.geoObjects.add(bluePlacemark);
                bluePlacemark.options.set('visible', true);
            }

            for (let i = 0; i < $('.contacts__city').length; i++) {
                markLayout = ymaps.templateLayoutFactory.createClass(`<button data-index="city` + i + `" class="redPlaceMark" data-city="` + $('.contacts__city').eq(i).attr('data-name') + `">
                <svg width="54" height="81" viewBox="0 0 54 81" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M29.5024 54.6044C42.7817 53.0925 53.1108 41.483 53.1108 27.3856C53.1108 12.2609 41.2216 0 26.5554 0C11.8893 0 0 12.2609 0 27.3856C0 41.4811 10.3263 53.0893 23.603 54.6038C23.6024 54.6288 23.6021 54.654 23.6021 54.6791V77.6849C23.6021 79.3145 24.9231 80.6355 26.5527 80.6355C28.1823 80.6355 29.5033 79.3145 29.5033 77.6849V54.6791C29.5033 54.6542 29.503 54.6293 29.5024 54.6044ZM38.6049 28.1714C38.6049 34.8934 33.3208 40.3427 26.8025 40.3427C20.2841 40.3427 15 34.8934 15 28.1714C15 21.4493 20.2841 16 26.8025 16C33.3208 16 38.6049 21.4493 38.6049 28.1714Z" fill="url(#paint0_linear)"/>
<defs>
<linearGradient id="paint0_linear" x1="35.8808" y1="-10.9095" x2="45.0717" y2="90.4947" gradientUnits="userSpaceOnUse">
<stop stop-color="#F98780"/>
<stop offset="1" stop-color="#F74337"/>
</linearGradient>
</defs>
</svg>

                    </button>`)
                bluePlacemark = (new ymaps.Placemark([Number($('#city' + i).attr('data-coords-n')), Number($('#city' + i).attr('data-coords-s'))], {
                    hintContent: content
                }, {
                    iconLayout: markLayout,
                    preset: 'islands#blueIcon'
                }))
                myMap.geoObjects.add(bluePlacemark);
                bluePlacemark.options.set('visible', true);
            }
            for (let i = 0; i < $('.contacts__item-storage').length; i++) {
                markLayout = ymaps.templateLayoutFactory.createClass(`<button data-index="storage` + i + `" class="orangePlaceMark" data-city="` + $('.contacts__item-storage').eq(i).parent().attr('data-name') + `">
                <svg width="39" height="59" viewBox="0 0 39 59" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path fill-rule="evenodd" clip-rule="evenodd" d="M21.4546 39.7064C31.1102 38.6063 38.6205 30.1646 38.6205 19.9139C38.6205 8.91576 29.975 0 19.3102 0C8.64549 0 0 8.91576 0 19.9139C0 30.1642 7.50969 38.6056 17.1647 39.7063C17.1643 39.7244 17.1641 39.7426 17.1641 39.7608V56.4899C17.1641 57.6749 18.1247 58.6355 19.3097 58.6355C20.4946 58.6355 21.4553 57.6749 21.4553 56.4899V39.7608C21.4553 39.7426 21.455 39.7245 21.4546 39.7064ZM28.071 20.4854C28.071 25.3734 24.2285 29.336 19.4886 29.336C14.7487 29.336 10.9062 25.3734 10.9062 20.4854C10.9062 15.5973 14.7487 11.6348 19.4886 11.6348C24.2285 11.6348 28.071 15.5973 28.071 20.4854Z" fill="#FF8F3F"/>
                </svg>
                    </button>`)
                bluePlacemark = (new ymaps.Placemark([Number($('#storage' + i).attr('data-coords-n')), Number($('#storage' + i).attr('data-coords-s'))], {
                    hintContent: content
                }, {
                    iconLayout: markLayout,
                    preset: 'islands#blueIcon'
                }))
                myMap.geoObjects.add(bluePlacemark);
                bluePlacemark.options.set('visible', true);
            }
            myMap.controls.remove('routeEditor');
            myMap.behaviors.disable('scrollZoom');

            setTimeout(() => {
                chooseCity('all')
                checkState(0)
            })



            function chooseCity(value) {
                $('.contacts__city').removeClass('active')

                $(".bluePlaceMark").removeClass('active')
                $('.redPlaceMark').removeClass('active')
                $('.orangePlaceMark').removeClass('active')
                if (value === 'all') {

                    $('.contacts__city').addClass('active')

                    $(".bluePlaceMark").addClass('active')
                    $('.redPlaceMark').addClass('active')
                    $('.orangePlaceMark').addClass('active')

                } else {
                    $('[data-city="' + value + '"]').addClass('active')
                    $('[data-name="' + value + '"]').addClass('active')
                }

            }
            let currentPos = 0;
            let changeCenter = (button) => {
                $('.pressed').removeClass('pressed')
                if ($(button).hasClass('contacts__item') || $(button).hasClass('contacts__item-storage')) {
                    myMap.setCenter([$(button).attr('data-coords-n'), $(button).attr('data-coords-s')], 16, {
                        checkZoomRange: true
                    });
                    $(button).addClass('pressed')
                } else {
                    let attribute = $(button).attr("data-index")
                    myMap.setCenter([$('#' + attribute).attr('data-coords-n'), $('#' + attribute).attr('data-coords-s')], 16, {
                        checkZoomRange: true
                    });
                    currentPos += $('#' + attribute).position().top

                    $('.contacts__menu').scrollTo( $('#' + attribute), 800 );
                    
                    $('#' + attribute).addClass('pressed')
                }
            }


            function checkState(attr) {
                switch (attr) {
                    case 0:
                        $('.orangePlaceMark').removeClass('current')
                        $('.bluePlaceMark').addClass('current')
                        document.querySelectorAll('.contacts__item').forEach(el => {
                            $(el).addClass('active')
                        })
                        document.querySelectorAll('.contacts__item-storage').forEach(el => {
                            $(el).removeClass('active')
                        })
                        document.querySelectorAll('.contacts__city').forEach(el => {
                            $(el).removeClass('hidden')
                        })

                        document.querySelectorAll('.contacts__city.active').forEach(el => {
                            if ($(el).find('.contacts__item').length == 0)
                                $(el).addClass('hidden')
                            else {
                                if (($(el).hasClass('hidden')))
                                    $(el).removeClass('hidden')
                            }
                        })

                        break

                    case 1:

                        $('.orangePlaceMark').addClass('current')
                        $('.bluePlaceMark').removeClass('current')
                        document.querySelectorAll('.contacts__item').forEach(el => {
                            $(el).removeClass('active')
                        })
                        document.querySelectorAll('.contacts__item-storage').forEach(el => {
                            $(el).addClass('active')
                        })
                        document.querySelectorAll('.contacts__city').forEach(el => {
                            if ($(el).find('.contacts__item-storage').index() == -1) {
                                $(el).addClass('hidden')
                            }
                        })
                        document.querySelectorAll('.contacts__city.active').forEach(el => {
                            if ($(el).find('.contacts__item-storage').length == 0)
                                $(el).addClass('hidden')
                            else {
                                if (($(el).hasClass('hidden')))
                                    $(el).removeClass('hidden')
                            }
                        })

                        break
                    default:

                        break
                }
            }
            $(".contact__category").on('click', function () {
                checkState($(this).parent().index())
            })
            $(".contacts__fieldOption").on('click', function () {
                chooseCity($(this).attr('data-name'));
            })
            setTimeout(() => {
                $(".contacts__item, .bluePlaceMark, .orangePlaceMark, .contacts__item-storage, .redPlaceMark").on('click', function () {
                    changeCenter(this);
                })
            })

        });
    }
}

const addId = () => {
    for (let i = 0; i < $('.contacts__item').length; i++) {
        $($('.contacts__item')[i]).attr('id', i)
    }
    for (let i = 0; i < $('.contacts__city').length; i++) {
        $($('.contacts__city')[i]).attr('id', `city` + i)
    }
    for (let i = 0; i < $('.contacts__item-storage').length; i++) {
        $($('.contacts__item-storage')[i]).attr('id', `storage` + i)
    }
}

const yandexMapContact = () => {
    if ($('#map').length > 0) {
        const center = [51.613273072342494, 45.967978999999936];
        const coords = [51.613273072342494, 45.967978999999936]

        var myPlacemark;
        ymaps.ready(() => {
            var myMap = new ymaps.Map("map", {
                center: center,
                zoom: 11,
                "multiTouch": false,
                controls: ['zoomControl']
            }, {
                suppressMapOpenBlock: true
            });

            myPlacemark = new ymaps.Placemark(coords, {}, {
                preset: 'islands#redIcon',
            });
            myMap.geoObjects.add(myPlacemark);

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
                        smartSpeed: 1000,
                        navText: [
                            '<svg class="arrow" width="23" height="23" viewBox="0 0 23 23" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M10.4848 0.43934L0.938833 9.98528C0.353048 10.5711 0.353048 11.5208 0.938833 12.1066L10.4848 21.6525C11.0706 22.2383 12.0203 22.2383 12.6061 21.6525C13.1919 21.0668 13.1919 20.117 12.6061 19.5312L5.62082 12.5459L21.5 12.5459C22.3284 12.5459 23 11.8744 23 11.0459C23 10.2175 22.3284 9.54594 21.5 9.54594L5.62082 9.54594L12.6061 2.56066C13.1919 1.97487 13.1919 1.02513 12.6061 0.43934C12.0203 -0.146447 11.0706 -0.146447 10.4848 0.43934Z" fill="#3F84D1"/></svg>',
                            '<svg class="arrow" width="23" height="23" viewBox="0 0 23 23" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M12.5152 22.5607L22.0612 13.0147C22.647 12.4289 22.647 11.4792 22.0612 10.8934L12.5152 1.34746C11.9294 0.76167 10.9797 0.76167 10.3939 1.34746C9.80812 1.93324 9.80812 2.88299 10.3939 3.46878L17.3792 10.4541L1.5 10.4541C0.671574 10.4541 1.03809e-06 11.1256 9.65667e-07 11.9541C8.93244e-07 12.7825 0.671574 13.4541 1.5 13.4541L17.3792 13.4541L10.3939 20.4393C9.80812 21.0251 9.80812 21.9749 10.3939 22.5607C10.9797 23.1464 11.9294 23.1464 12.5152 22.5607Z" fill="#3F84D1"/></svg>'
                        ],
                    })
                );
        })
        .trigger("refresh.owl.carousel")
};
let test;

const owlGalleryModal = (selector, params) => {
    if (params == undefined) params = "";
    $(selector).addClass("owl-carousel owl-theme")
    test = $(selector).owlCarousel(
        Object.assign(params, {
            lazyLoad: true,
            smartSpeed: 1000,
            navText: [
                '<svg class="arrow" width="23" height="23" viewBox="0 0 23 23" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M10.4848 0.43934L0.938833 9.98528C0.353048 10.5711 0.353048 11.5208 0.938833 12.1066L10.4848 21.6525C11.0706 22.2383 12.0203 22.2383 12.6061 21.6525C13.1919 21.0668 13.1919 20.117 12.6061 19.5312L5.62082 12.5459L21.5 12.5459C22.3284 12.5459 23 11.8744 23 11.0459C23 10.2175 22.3284 9.54594 21.5 9.54594L5.62082 9.54594L12.6061 2.56066C13.1919 1.97487 13.1919 1.02513 12.6061 0.43934C12.0203 -0.146447 11.0706 -0.146447 10.4848 0.43934Z" fill="#3F84D1"/></svg>',
                '<svg class="arrow" width="23" height="23" viewBox="0 0 23 23" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M12.5152 22.5607L22.0612 13.0147C22.647 12.4289 22.647 11.4792 22.0612 10.8934L12.5152 1.34746C11.9294 0.76167 10.9797 0.76167 10.3939 1.34746C9.80812 1.93324 9.80812 2.88299 10.3939 3.46878L17.3792 10.4541L1.5 10.4541C0.671574 10.4541 1.03809e-06 11.1256 9.65667e-07 11.9541C8.93244e-07 12.7825 0.671574 13.4541 1.5 13.4541L17.3792 13.4541L10.3939 20.4393C9.80812 21.0251 9.80812 21.9749 10.3939 22.5607C10.9797 23.1464 11.9294 23.1464 12.5152 22.5607Z" fill="#3F84D1"/></svg>'
            ],
        })
    );

};


const owlGalleryArg = (selector, params) => {
    if (params == undefined) params = "";
    const owl = $(selector);
    owl
        .each((i, el) => {
            $(el)
                .addClass("owl-carousel owl-theme")
                .owlCarousel(
                    Object.assign(params, {
                        lazyLoad: true,
                        smartSpeed: 1000,
                        navText: [
                            '<svg class="arrow" width="23" height="23" viewBox="0 0 23 23" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M10.4848 0.43934L0.938833 9.98528C0.353048 10.5711 0.353048 11.5208 0.938833 12.1066L10.4848 21.6525C11.0706 22.2383 12.0203 22.2383 12.6061 21.6525C13.1919 21.0668 13.1919 20.117 12.6061 19.5312L5.62082 12.5459L21.5 12.5459C22.3284 12.5459 23 11.8744 23 11.0459C23 10.2175 22.3284 9.54594 21.5 9.54594L5.62082 9.54594L12.6061 2.56066C13.1919 1.97487 13.1919 1.02513 12.6061 0.43934C12.0203 -0.146447 11.0706 -0.146447 10.4848 0.43934Z" fill="#3F84D1"/></svg>',
                            '<svg class="arrow" width="23" height="23" viewBox="0 0 23 23" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M12.5152 22.5607L22.0612 13.0147C22.647 12.4289 22.647 11.4792 22.0612 10.8934L12.5152 1.34746C11.9294 0.76167 10.9797 0.76167 10.3939 1.34746C9.80812 1.93324 9.80812 2.88299 10.3939 3.46878L17.3792 10.4541L1.5 10.4541C0.671574 10.4541 1.03809e-06 11.1256 9.65667e-07 11.9541C8.93244e-07 12.7825 0.671574 13.4541 1.5 13.4541L17.3792 13.4541L10.3939 20.4393C9.80812 21.0251 9.80812 21.9749 10.3939 22.5607C10.9797 23.1464 11.9294 23.1464 12.5152 22.5607Z" fill="#3F84D1"/></svg>'
                        ],
                    })
                );
        })
        .trigger("refresh.owl.carousel")
        .on('initialize.owl.carousel', function (event) {
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
        .on('changed.owl.carousel', function (event) {
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

const owlGallerySize = (selector, params) => {
    if (params == undefined) params = "";
    const owl = $(selector);
    owl
        .each((i, el) => {
            $(el)
                .addClass("owl-carousel owl-theme")
                .owlCarousel(
                    Object.assign(params, {
                        lazyLoad: true,
                        smartSpeed: 500,
                        navText: [
                            '<svg class="arrow" width="23" height="23" viewBox="0 0 23 23" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M10.4848 0.43934L0.938833 9.98528C0.353048 10.5711 0.353048 11.5208 0.938833 12.1066L10.4848 21.6525C11.0706 22.2383 12.0203 22.2383 12.6061 21.6525C13.1919 21.0668 13.1919 20.117 12.6061 19.5312L5.62082 12.5459L21.5 12.5459C22.3284 12.5459 23 11.8744 23 11.0459C23 10.2175 22.3284 9.54594 21.5 9.54594L5.62082 9.54594L12.6061 2.56066C13.1919 1.97487 13.1919 1.02513 12.6061 0.43934C12.0203 -0.146447 11.0706 -0.146447 10.4848 0.43934Z" fill="#3F84D1"/></svg>',
                            '<svg class="arrow" width="23" height="23" viewBox="0 0 23 23" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M12.5152 22.5607L22.0612 13.0147C22.647 12.4289 22.647 11.4792 22.0612 10.8934L12.5152 1.34746C11.9294 0.76167 10.9797 0.76167 10.3939 1.34746C9.80812 1.93324 9.80812 2.88299 10.3939 3.46878L17.3792 10.4541L1.5 10.4541C0.671574 10.4541 1.03809e-06 11.1256 9.65667e-07 11.9541C8.93244e-07 12.7825 0.671574 13.4541 1.5 13.4541L17.3792 13.4541L10.3939 20.4393C9.80812 21.0251 9.80812 21.9749 10.3939 22.5607C10.9797 23.1464 11.9294 23.1464 12.5152 22.5607Z" fill="#3F84D1"/></svg>'
                        ],
                    })
                );
        })
        .trigger("refresh.owl.carousel")
        .on('changed.owl.carousel', function (event) {
            $(event.currentTarget).find('.center').removeClass('center')
            const items = $(event.currentTarget).find('.other__link, .products__link')
            $(items[event.item.index + 1]).addClass('center')
        })
};

// Вызов / закрытие модального окна
const openMenu = (menu) => {
    menu.addClass("active")
    offScroll()
}
const closeMenu = (menu) => {
    menu.removeClass("active")
    onScroll()
}

// Добавление овл карусели для блоков с несколькими картинками
const multiCheck = (name) => {
    const items = document.querySelectorAll('.' + name + '__images')
    let marginX;
    if (name != 'item') {
        marginX = 90;
    } else {
        marginX = 250;
    }

    items.forEach(el => {
        let itemsImg = el.querySelectorAll('.' + name + '__img')
        if ((itemsImg.length > 1 && ($('.production__header').length) && document.documentElement.clientWidth > 1024) || (name =='item' && itemsImg.length > 1)) {
            owlGalleryArg(el, {
                dots: true,
                margin: marginX,
                items: 1,
                center: true,
                mouseDrag: false,
                touchDrag: false
            });
        }
    })
}

const productsAppear = () => {
    const items = document.querySelectorAll('.production__item')
    items.forEach(el => {
        if ($(el).hasClass('hidden')) {
            el.style.display = 'none'
        } else
            el.style.display = 'flex'
    })
}

// Выпадающий список на странице с картой
const inputTypeSelect = (item) => {
    const btn = $(item).children("button"),
        box = btn.next("div");
    let input, val;
    let button = $('.selected')

    function closeSelect(btn, box) {
        btn.removeClass("isOpen");
        box.slideUp(200);
        setTimeout(() => $(btn).parent().removeClass("isOpen"), 200)

    }

    btn.on("click", function () {
        input = $(this).siblings("input");

        if (!$(this).hasClass("isOpen")) {

            $(this).parent().addClass("isOpen");
            $(this).addClass("isOpen");
            $(this).next("div").slideDown(200);
        } else {
            closeSelect($(this), box);
        }
    });
    box.find("div").on("click", function () {
        val = $(this).text();
        $(button).removeClass('selected')
        button = this;
        $(button).addClass('selected')
        input.val(val).attr("value", val);
        closeSelect(btn, box);
    });
};



function openBurgerMenu() {
    $('.burger-menu').addClass("active")
}

function closeBurgerMenu() {
    $('.burger-menu').removeClass("active")
}

function showMap() {
    $('#map').addClass("active")
    $('.contacts__hide').addClass("active")
}

function hideMap() {
    $('#map').removeClass("active")
    $('.contacts__hide').removeClass("active")
}

function descriptionSwitch(button) {

    $(button).parent().find('.active').removeClass('active')
    $(button).addClass('active')

    if ($(button).index() == 1) {
        $(".item__composition").removeClass('active')
        $(".item__description").addClass('active')
    } else {
        $(".item__description").removeClass('active')
        $(".item__composition").addClass('active')
    }
}


const hideShowMore = (name) => {
    let subname
    if (name == ".news")
        subname = "__content"
    else subname = "__item"
    let blocks = document.querySelectorAll(name + '__items')
    blocks.forEach(el => {
        if ($(el).find(name + subname).length < 4) {
            $($(el).parent().find(name + '__more')[$(el).index(name + '__items')]).addClass('hidden')
            
        }
    })
}

const hideVarietyButtons = () => {
    if ($('.item__variety').length < 2) {
        $('.item__varieties').addClass('hidden')
    }
}

const getFilters = (page, name) => {
    let item = $('.' + page + '__' + name).parent()
    return ($(item).find('.active'))
}


const hashClick = (item) => {

    $('[data-link="' + item.slice(1) + '"]').trigger("click")
}

const openVideo = () => {
    $('.modal').addClass('active')
}
const closeVideo = (event, container) => {
    if (event.target == $('.modal')[0]) {
        $('.modal').removeClass('active')
        $('.modal__content').empty()
    }
}
const createYouTubeEmbedLink = (btn, container) => {
    let link = $(btn).attr('data-src');
    let linkStart = 'https://www.youtube.com/embed/';
    let linkEnd = '?rel=0&showinfo=0&autoplay=1',
        newLink = linkStart + link.slice(link.indexOf('=') + 1, link.length) + linkEnd;
    $(btn).on('click', function () {
        $(container).append(`<iframe class="modal__iframe" src="${newLink}" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>`);
    })
    setTimeout(() => {
        $(container).find('img').attr('src', 'http://img.youtube.com/vi/' + newLink.slice(newLink.indexOf('embed') + 6, newLink.indexOf('?')) + '/0.jpg')
    })

}

const scrollCheck = () => {
    const scrolled = window.scrollY;
    if (scrolled >= 1200 && !($('.arrow__scroll-top').hasClass('active')) && document.documentElement.clientWidth > 1024) {
        $('.arrow__sroll-top').addClass('active')
    } else if (scrolled < 1200) {
        $('.arrow__sroll-top').removeClass('active')
    }

}

const producerDescroption = () => {
    const item = $('.item__icon').attr('data-producer')
    let text = `Продукция собственного производства в&nbsp;г. Саратов. Формируем культуру здорового питания и&nbsp;изготавливаем продукты с&nbsp;естественными сроками хранения, не&nbsp;применяем консерванты и&nbsp;другие добавки.`
    let fulltext = `Продукция проходит многоступенчатую проверку на&nbsp;соответствие нормам свежести, однородности и&nbsp;жирности. При пастеризации из&nbsp;нее удаляются вредные микроорганизмы и&nbsp;остаются полезные белок и&nbsp;кальции. Поставляется в&nbsp;учреждения дошкольного и&nbsp;школьного питания.`
    if (item == 'krepish') {
        text = 'Детское питание для детей от 6 месяцев. Познакомьте своего малыша с миром молочной продукции с ванилью, ягодными и фруктовыми вкусами.'
        fulltext = `<p> Мы&nbsp;знаем о&nbsp;молочном детском питании все! &laquo;Комбинат Детского питания&raquo; известен российскому потребителю как производитель качественного детского питания, первого молочного прикорма под ТМ&nbsp;&laquo;Крепыш&raquo;. Наша линейка детского питания присутствует в&nbsp;меню на&nbsp;молочных кухнях и&nbsp;во&nbsp;многих больницах, детских учреждениях, а&nbsp;также на&nbsp;полках магазинах многих популярных сетей нашей страны.</p>
        <ul type="disc">
            <li> Мы&nbsp;&mdash; эксперты по&nbsp;детскому питанию; </li>
            <li> Мы&nbsp;сохраняем традиции и&nbsp;качество;  </li>
            <li> Мы&nbsp;используем только выверенную качественную сырьевую базу региональных поставщиков; </li>
        </ul>
        <p> Линейка Крепыш включает в&nbsp;себя творог, творог с&nbsp;наполнителями, кефир, кисломолочный продукт, бифидокефир, биолакт, молочные коктейли. Продукция Крепыш предназначена для кормления малышей от&nbsp;6&nbsp;месяцев.</p>
        `
    } else
    if (item == 'vkusniyDen') {
        text = 'Весь спектр кисломолочных продуктов: творог, кефир, ряженка, снежок, сливки, десерты, сыр и молоко. В ассортименте продукция с шоколадом, ванилью и  ягодными вкусами. Кефир и творог с 0% жирности для любителей низкокалорийной пищи.'
        fulltext = `<p> Уже 13 лет  мы производим  молочную продукцию под торговой маркой «Вкусный День». Линейка продукции включает в себя традиционную молочную продукцию, десертную группу, сыры плавленые. 
        Торговая марка «Вкусный День» — одна из самых узнаваемых и любимых марок на территории Саратовской области. </p> 

        <p> Соответствие высоким технологическим стандартам качества и безопасность продукции — главные условия при производстве нашей продукции, 
        соблюдая которые мы достигли такой большой узнаваемости среди покупателей.Сегодня уже в каждом магазине можно найти ассортимент ТМ «Вкусный День».</p>`
    } else
    if (item == 'voljskiyBereg') {
        text = 'Линейка творожных продуктов с вишней, ванилином, изюмом, курагой и вареной сгущенкой.'
        fulltext = `<p> У&nbsp;нашего покупателя всегда должен быть выбор по&nbsp;цене. Клиенту недостаточно просто видеть товар на&nbsp;полке: он&nbsp;должен понимать,
         что товар лучше, чем у&nbsp;конкурентов. Разные ценовые сегменты, разные вкусы для самых претензионных клиентов, разные продукты (для перекуса, для здорового питания).
          &laquo;Комбинат Детского питания&raquo; анализируя тенденции современного рынка потребления и&nbsp;реагируя на&nbsp;отзывы своих покупателей, решил,
           выпустить новую линейку эконом сегмента под брендом &laquo;Волжский Берег&raquo;. Каждый покупатель точно найдет свою продукцию в&nbsp;разнообразии вкусов. </p>
        
        `
    } else
    if (item == 'znakomiyVkus') {
        text = 'Натуральные творожные десерты с ванилью и сгущенным молоком в вафельных рожках, в виде глазированных батончиков и сырков.'
        fulltext = `<p> Среди наших продуктов есть целая линейка натуральных продуктов: линейка &laquo;Знакомый вкус&raquo;! В&nbsp;которую входит: творог, творожные массы, глазированные сырки, рожки. Линейка состоит из&nbsp;десертной группы премиум сегмента, которая создана из&nbsp;натурального творога, с&nbsp;использованием натурального шоколада. Полностью натуральный молочный продукт!
        Данный проект стартовал в&nbsp;апреле 2019&nbsp;года. За&nbsp;такой короткий срок продукция &laquo;Знакомый Вкус&raquo; заняла свое определенное место среди ценителей натуральной десертной продукции. Вкусовые качества нашего продукта, состав и&nbsp;пищевая ценность не&nbsp;оставят равнодушным ни&nbsp;одного покупателя.</p>`
    } else
    if (item == 'mimimishki') {
        text = 'Творожные сырки с любимыми мультперсонажами. Кеша, Тучка, Ципа и другие герои мультфильма ждут встречи с вашим малышом.'
        fulltext = `
        <p>
        &laquo;Комбинат Детского питания&raquo; анализируя тенденции современного рынка потребления и&nbsp;реагируя на&nbsp;отзывы своих покупателей, 
        решил, используя свои опыт, традиции, стандарты качества, выпустить новую линейку творожных десертов под брендом &laquo;Ми-Ми-Мишки&raquo;.
        </p>
        <p>Наши приемущества:</p>
        <ul type="disc">
            <li> Всероссийская узнаваемость торговой марки благодаря верхним строчкам рейтинга одноименного мультфильма; </li>
            <li> Дизайн упаковки продукта яркий и&nbsp;привлекает внимание детскую аудиторию покупателей; </li>
            <li> Вкусы и&nbsp;наполнители продуктов в&nbsp;новой линейке подобраны на&nbsp;основании вкусовых предпочтений детей от&nbsp;3-х до&nbsp;12&nbsp;лет; </li>
            <li> Упаковка разработана по&nbsp;всем стандартам качества, </li>
            <li> Оптимальное соотношение цена-качество; </li>
            <li> Наши продукты не&nbsp;содержат заменителей молочного жира; </li>
            <li> Детские продукты под ТМ&nbsp;&laquo;Ми-Ми-Мишки&raquo; полностью натуральные, полезные и&nbsp;вкусные! </li>
        </ul>
        `
    }

    $('.item__about').html(text)
    $('.item__description').html(fulltext)
}
let filters = [
    [],
    []
]

let availableCategories = []
const acceptFilters = (type) => {
    let buttons = [
        [25, 26, 27, 28, 29, 30],
        [0, 0, 0, 0, 0, 0]
    ]
    let page = '.production__content'
    let page1 = '.production'
    if ($('.promo').length) {
        page = '.menu__slider'
        page1 = '.menu'
    }

    const items = document.querySelectorAll('.production__item')

    if (document.documentElement.clientWidth > 1024 && !($('.menu__category').length)) {
        if (!filters[0].length && !filters[1].length) {
            items.forEach(el => {
                $(el).removeClass('hidden')
                buttons[1][buttons[0].indexOf(Number($(el).attr('data-category')))]++
            })
        } else if (filters[0].length && !filters[1].length) {
            items.forEach(el => {
                $(el).addClass('hidden')
                for (let i = 0; i < filters[0].length; i++) {
                    if ($(el).attr('data-producer') == filters[0][i])
                        $(el).removeClass('hidden')
                }
                if (!($(el).hasClass('hidden')))
                    buttons[1][buttons[0].indexOf(Number($(el).attr('data-category')))]++
            })
        } else if (!filters[0].length && filters[1].length) {
            items.forEach(el => {
                $(el).addClass('hidden')
                for (let i = 0; i < filters[1].length; i++) {
                    if ($(el).attr('data-category') == Number(filters[1][i]))
                        $(el).removeClass('hidden')
                }
                buttons[1][buttons[0].indexOf(Number($(el).attr('data-category')))]++
            })
        } else {
            items.forEach(el => {
                $(el).addClass('hidden')
                for (let i = 0; i < filters[0].length; i++) {
                    if ($(el).attr('data-producer') == filters[0][i]) {
                        buttons[1][buttons[0].indexOf(Number($(el).attr('data-category')))]++
                        for (let j = 0; j < filters[1].length; j++) {
                            if ($(el).attr('data-category') == Number(filters[1][j]))
                                $(el).removeClass('hidden')
                        }
                    }
                }

            })
        }
    } else {
        if (!filters[0].length && !filters[1].length) {
            items.forEach(el => {
                $(el).removeClass('hidden')
                buttons[1][buttons[0].indexOf(Number($(el).attr('data-category')))]++
            })
        } else if (filters[0].length && !filters[1].length) {
            items.forEach(el => {
                $(el).addClass('hidden')
                for (let i = 0; i < filters[0].length; i++) {
                    if ($(el).attr('data-producer') == filters[0][i])
                        $(el).removeClass('hidden')
                }
                if (!($(el).hasClass('hidden')))
                    buttons[1][buttons[0].indexOf(Number($(el).attr('data-category')))]++
            })
        } else if (!filters[0].length && filters[1].length) {
            items.forEach(el => {
                $(el).addClass('hidden')
                for (let i = 0; i < filters[1].length; i++) {
                    if ($(el).attr('data-category') == Number(filters[1][i]))
                        $(el).removeClass('hidden')
                }
                buttons[1][buttons[0].indexOf(Number($(el).attr('data-category')))]++
            })
        } else {
            items.forEach(el => {
                $(el).addClass('hidden')
                for (let i = 0; i < filters[0].length; i++) {
                    if ($(el).attr('data-producer') == filters[0][i]) {
                        buttons[1][buttons[0].indexOf(Number($(el).attr('data-category')))]++
                        for (let j = 0; j < filters[1].length; j++) {
                            if ($(el).attr('data-category') == Number(filters[1][j]))
                                $(el).removeClass('hidden')
                        }
                    }
                }

            })
        }
        items.forEach(el => {

            if (!($(el).hasClass('hidden'))) {
                $(el).clone().appendTo(page)
            }
        })
    }
    if (type == 0) {
        if (!filters[0].length) {
            $(page1 + '__category').removeClass('hidden')
        } else
            for (let i = 0; i < buttons[0].length; i++) {
                if (buttons[1][i] == 0) {
                    if (!($(page1 + '__category').eq(i).hasClass('hidden')))
                        $(page1 + '__category').eq(i).addClass('hidden')
                    if ($(page1 + '__category').eq(i).hasClass('active'))
                        $(page1 + '__category').eq(i).trigger("click")
                } else
                    $(page1 + '__category').eq(i).removeClass('hidden')

            }
    }
}

function getTransform(el) {
    var results = $(el).css('-webkit-transform').match(/matrix(?:(3d)\(\d+(?:, \d+)*(?:, (\d+))(?:, (\d+))(?:, (\d+)), \d+\)|\(\d+(?:, \d+)*(?:, (\d+))(?:, (\d+))\))/)

    if (!results) return [0, 0, 0];
    if (results[1] == '3d') return results.slice(2, 5);

    results.push(0);
    return results.slice(5, 8);
}

const categoryTrigger = (attr) => {
    if (attr == 'all') {
        filters[1] = []
        let items = $('[data-category="all"]').parent().find('.active')
        for (let i = 0; i < items.length; i++) {
            $(items[i]).removeClass('active')
        }
    }
    if (attr != 'all' && $('[data-category="all"]').length != 0)
        $(('[data-category="all"]')).removeClass('active')
}
const addActiveFilter = (type, attr) => {
    filters[type].push(attr)
    if (type == 1)
        categoryTrigger(attr)
    acceptFilters(type)
}
const removeActiveFilter = (type, attr) => {
    let index = filters[type].indexOf(attr)
    if (index > -1)
        filters[type].splice(index, 1)
    acceptFilters(type)
}
const switchActiveProducer = (btn) => {
    if ($(btn).hasClass('active')) {
        $(btn).removeClass('active')
        removeActiveFilter(0, $(btn).attr('data-producer'))
    } else {
        $(btn).addClass('active')
        addActiveFilter(0, $(btn).attr('data-producer'))
    }
}
const switchActiveCategory = (btn) => {
    if ($(btn).hasClass('active')) {

        removeActiveFilter(1, $(btn).attr('data-category'))
        $(btn).removeClass('active')
    } else {

        addActiveFilter(1, $(btn).attr('data-category'))
        $(btn).addClass('active')
    }
}
const vacancySwitch = (btn) => {
    let height;
    if ($(btn).parent().hasClass('active')) {
        height = '40px'
        $(btn).parent().removeClass('active')
    } else {
        height = $(btn).parent().get(0).scrollHeight
        $(btn).parent().addClass('active')
    }
    $(btn).parent().height(height)
}

const showSwitch = (btn, page, firstheight, title) => {
    let height;
    document.querySelectorAll(page).forEach(el => {
        if ($(el).hasClass('active')) {
            height = firstheight
            $(el).removeClass('active')
            $(btn).text(title)
            $('.recipes__container').removeClass('active')
        } else {
            height = $(el).get(0).scrollHeight
            $(el).addClass('active')
            $(btn).text('Скрыть')
            $('.recipes__container').addClass('active')
        }
        $(el).height(height)
    })

}

const showeAge = () => {
    const date = new Date;
    const age = date.getFullYear() - 2006
    $('.about__age').text(age)
}

const resetFilters = () => {
    document.querySelectorAll('.active').forEach(el => {
        $(el).removeClass('active')
    })
    document.querySelectorAll('.hidden').forEach(el => {
        $(el).removeClass('hidden')
    })
    filters = [
        [],
        []
    ]
}

const offScroll = () => {
    document.body.style.overflow = 'hidden'
}
const onScroll = () => {
    document.body.style.overflow = 'auto'
}

const itemsAutoHeight = (item, container) => {
    $(container).height($(item).outerHeight())
}
const animateInOnScroll = (array) => {
    let screen = $(window),
        height = screen.height(),
        padding = -(height / 2.5); // animation offset px
    $(array).each((i, el) => {
        let item = $(array[i]);
        screen.on('scroll load resize', () => {
          if (item[0].getBoundingClientRect().top - height < padding) {
                item.addClass('scrolled')
            }
        })
    })
}

const formVal = (formSel, urlPhp) => {
    let form = document.querySelector(formSel);
    form.addEventListener('submit', function (e) {
        e.preventDefault();
        formValidate({
            form: form,
            url: urlPhp,
            errorClass: 'error',
            onLoadStart: () => {
                
            },
            onSuccess: () => {
                if (formSel == '.modal__form')
                closeMenu($('.modal'))
                openMenu($(".success"))

            },
            onError: () => {
                alert('Возникла ошибка, пожалуйста, попробуйте позже')
            }
        });
    })
}

/* INPUT TYPE FILE */
function attachFile(inputClass)
{
    let items = document.querySelectorAll(inputClass);
    items.forEach(function(item)
    {
        item.addEventListener('click', function()
        {
            let input = this;
            let label	 = input.previousElementSibling,
                labelVal = label.innerHTML;
            input.addEventListener('change', function(e)
            {
            let fileName = '';
            if( this.files && this.files.length > 1 )
            {
              let arr=[];
              for (let i=0; i<this.files.length; i++)
               {
                 arr.push(this.files[i].name);
               }
              let filesString = arr.join(', ');
              fileName = ( this.getAttribute( 'data-multiple-caption' ) || '' ).replace( '{count}', filesString );
            }
            else
              fileName = e.target.value.split( '\\' ).pop();
        		if( fileName )
              label.innerHTML = fileName;
            else
              label.innerHTML = labelVal;
        	});
        });
    });
}



const mainAnimation = () => {
    $('.header, .promo__content, .promo__about, .promo__video').addClass('scrolled')
}

const setProfession = (btn) => {
    const value = ($(btn).siblings('.career__name').attr('data-value'))
    $('.modal__input.hidden').attr('value', value)
}


$().ready(() => {
    
    if ($('.contacts__header').length)
        addId()
    if ($('.news__header').length)
        itemsAutoHeight('.news__content', '.news__items')
    if ($('.recipes__header').length)
        itemsAutoHeight('.recipes__item', '.recipes__items')
    if ($(".promo").length) {
        $(".promo__border").on('click', function () {
            openVideo()
        })
        $(".modal").on('click', function (event) {
            closeVideo(event, '.modal__content')
        })
    }
    if ($('.promo').length)
        createYouTubeEmbedLink('.promo__border', ".modal__content")
    $(".promo__products").on('click', function () {
        openMenu($(".menu"))
        offScroll();
    })
    $(".menu__close").on('click', function () {
        closeMenu($(".menu"))
        onScroll();
    })
    $(".item__button").on('click', function () {
        descriptionSwitch(this)
    })
    $(".header__menu").on('click', function () {
        openBurgerMenu()
        offScroll();
    })
    $(".header__close").on('click', function () {
        closeBurgerMenu()
        onScroll();
    })

    $(".career__name").on('click', function () {
        vacancySwitch(this)
    })
    $(".career__respond").on('click', function () {
        openMenu($(".modal"))
        setProfession(this);
    })
    $(".modal, .modal__close").on('click', function (event) {
        if (event.target == $('.modal')[0] || event.target == $('.modal__close')[0]) {
            closeMenu($(".modal"))
        }

    })
    $(".success, .success__close").on('click', function (event) {
        if (event.target == $('.success')[0] || event.target == $('.success__close')[0]) {
            closeMenu($(".success"))
        }

    })

    $(".production__reset").on('click', function (event) {
        resetFilters()
    })

    if ($(".production__header").length) {
        scrollCheck();
        window.addEventListener('scroll', () => {
            scrollCheck();
        })

        $(".arrow__sroll-top").on('click', function () {
            $('body,html').animate({
                easing: "swing",
                scrollTop: 0
            }, 800);
        })
    }

    owlGalleryModal(".menu__slider", {
        margin: 40,
        items: 4,
        dots: false,
        nav: true,
        navContainer: ".menu__navigate",
    });

    $(".menu__producer").on('click', function () {
        if (document.documentElement.clientWidth <= 1024 || $('.menu__category')) {
            if (test != undefined)
                test.trigger("destroy.owl.carousel")
            $('.menu__slider').empty()
            switchActiveProducer(this)
            owlGalleryModal(".menu__slider", {
                margin: 40,
                items: 4,
                dots: false,
                nav: true,
                navContainer: ".menu__navigate",
            });

        } else {
            switchActiveProducer(this)
        }


    })
    $(".production__producer").on('click', function () {
        if (document.documentElement.clientWidth <= 1024) {
            if (test != undefined)
                test.trigger("destroy.owl.carousel")
            $('.production__content').empty()
            switchActiveProducer(this)
            owlGalleryModal(".production__content", {
                margin: 40,
                autoWidth: true,
                dots: false,
                nav: true,
                navContainer: ".production__navigate",
            });

        } else {
            switchActiveProducer(this)
        }


    })
    $(".menu__category").on('click', function () {
        if (test != undefined)
            test.trigger("destroy.owl.carousel")
        $('.menu__slider').empty()
        switchActiveCategory(this)
        owlGalleryModal(".menu__slider", {
            margin: 40,
            items: 4,
            dots: false,
            nav: true,
            navContainer: ".menu__navigate",
        });
    })
    $(".production__category").on('click', function () {

        if (document.documentElement.clientWidth <= 1024) {
            if (test != undefined)
                test.trigger("destroy.owl.carousel")
            $('.production__content').empty()
            switchActiveCategory(this)
            owlGalleryModal(".production__content", {
                margin: 40,
                autoWidth: true,
                dots: false,
                nav: true,
                navContainer: ".production__navigate",
            });
        } else {
            switchActiveCategory(this)
        }
    })


    if ('.production__categories') {
        window.addEventListener('hashchange', function () {
            hashClick(window.location.hash)
            $('body,html').animate({
                easing: "swing",
                scrollTop: 0
            }, 800);
        })
        hashClick(window.location.hash)
    }

    $(".awards__more").on('click', function () {
        if (document.documentElement.clientWidth > 660)
            showSwitch(this, '.awards__items', 'calc(18px + 53.9rem)', 'Смотреть все')
        else if (document.documentElement.clientWidth <= 568)
            showSwitch(this, '.awards__items', 'calc(12vw + 60.9rem)', 'Смотреть все')
        else
            showSwitch(this, '.awards__items', 'calc(5vw + 51.9rem)', 'Смотреть все')
    })
    $(".recipes__more").on('click', function () {
        showSwitch(this, '.recipes__items', $('.recipes__item').outerHeight(), 'Все рецепты')
    })
    $(".news__more").on('click', function () {
        showSwitch(this, '.news__items', $('.news__content').outerHeight(), 'Все новости')
    })
    if ($('.news__header').length)
        hideShowMore('.news');
    if ($('.recipes__header').length)
        hideShowMore('.recipes');

    hideVarietyButtons()
    inputTypeSelect($('.contacts__field'))

    bindModalListeners([]);

    if (document.documentElement.clientWidth > 1024)
    $('.parallax-window, .parallax-uniform, .combine__header-parallax').imageScroll({

        // The image to show.
        image: null,

        // The data attribute name for images.
        // Uses the value of this attribute to load the image.
        imageAttribute: 'image',

        // Class added to image holder(s). 
        holderClass: 'imageHolder',

        // The element to which the parallax image(s) will be attached to.
        container: $('body'),

        // The window object which listens to scroll and resize events
        windowObject: $(window),

        // The speed of the parallax effect. 
        speed: 0.85,

        // How many percent of the screen each image should cover. 
        coverRatio: 0.75,

        // The minimum height of the image in pixels.
        holderMinHeight: 200,

        // The maximum height of the image in pixels
        holderMaxHeight: 750,

        // Extra height added to the image. 
        extraHeight: 0,

        // The original width of the image.

        // The original height of the image.

        // Whether or not you want the parallax effect.
        parallax: true,

        // Presents a mobile/tablet friendly version, 
        // no parallax effect and smaller images 
        // (should be used with a mobile/tablet optimized image)
        touch: false

    });
else {
    $('.parallax-window, .parallax-uniform, .combine__header-parallax').imageScroll({

        // The image to show.
        image: null,

        // The data attribute name for images.
        // Uses the value of this attribute to load the image.
        imageAttribute: 'image',

        // Class added to image holder(s). 
        holderClass: 'imageHolder',

        // The element to which the parallax image(s) will be attached to.
        container: $('body'),

        // The window object which listens to scroll and resize events
        windowObject: $(window),

        // The speed of the parallax effect. 
        speed: 0.95,

        // How many percent of the screen each image should cover. 
        coverRatio: 0.75,

        // The minimum height of the image in pixels.
        holderMinHeight: 200,

        // The maximum height of the image in pixels
        holderMaxHeight: 350,

        // Extra height added to the image. 
        extraHeight: 0,

        // The original width of the image.

        // The original height of the image.

        // Whether or not you want the parallax effect.
        parallax: true,

        // Presents a mobile/tablet friendly version, 
        // no parallax effect and smaller images 
        // (should be used with a mobile/tablet optimized image)
        touch: false

    });
}

    if ($('.position__map').length) yandexMap();
    if ($('.contacts__web-map').length) yandexMap();
    if ($('.contacts__map').length) yandexMapCheckbox();
    if ($('.contact__map').length) yandexMapContact();
    if (document.documentElement.clientWidth < 768) {
        $(".contacts__item").on('click', function () {
            showMap();
        })
        $(".contacts__hide").on('click', function () {
            hideMap();
        })
    }
    if (document.documentElement.clientWidth > 1024)
        owlGallerySize(".products__slider", {
            margin: 80,
            items: 3,
            dots: false,
            nav: true,
            navContainer: ".products__navigate",
            loop: true
        });
    else if (document.documentElement.clientWidth < 768)
        owlGallery(".products__slider", {
            margin: 80,
            items: 1,
            autoWidth: true,
            dots: false,
            nav: true,
            navContainer: ".products__navigate",
        });
    else
        owlGallery(".products__slider", {
            margin: 20,
            items: 2,
            autoWidth: false,
            dots: false,
            nav: true,
            navContainer: ".products__navigate",
        });
    if (document.documentElement.clientWidth > 1024) {
        owlGallery(".news__slider", {
            margin: 40,
            items: 3,
            dots: false,
            nav: true,
            navContainer: ".news__navigate",
        });
        owlGallerySize(".other__slider", {
            margin: 36,
            items: 3,
            dots: false,
            nav: true,
            navContainer: ".other__navigate",
            loop: true,
        });
        owlGallerySize(".other__slider", {
            margin: 36,
            items: 3,
            dots: false,
            nav: true,
            navContainer: ".other__navigate",
            loop: true,
        });
        owlGallery(".position__stores, .partnership__stores", {
            margin: 36,
            items: 6,
            dots: false,
            nav: true,
            navContainer: ".position__navigate, .partnership__navigate",
            loop: true,
        });

    } else if (document.documentElement.clientWidth < 768) {
        owlGallery(".news__slider", {
            margin: 36,
            items: 1,
            autoWidth: true,
            dots: false,
            nav: true,
            navContainer: ".news__navigate",
        });
        owlGalleryModal(".production__content", {
            margin: 36,
            items: 2,
            autoWidth: true,
            dots: false,
            nav: true,
            navContainer: ".production__navigate",
        });
        owlGallerySize(".other__slider", {
            margin: 36,
            items: 2,
            autoWidth: true,
            dots: false,
            nav: true,
            navContainer: ".other__navigate",
        });
        owlGallery(".news__items", {
            margin: 36,
            items: 2,
            autoWidth: true,
            dots: false,
            nav: true,
            navContainer: ".news__navigate",
        });
        owlGallery(".recipes__items", {
            margin: 36,
            items: 2,
            autoWidth: true,
            dots: false,
            nav: true,
            navContainer: ".recipes__navigate",
        });
    } else {
        owlGalleryModal(".production__content", {
            margin: 36,
            items: 2,
            autoWidth: true,
            dots: false,
            nav: true,
            navContainer: ".production__navigate",
        });
        owlGallerySize(".other__slider", {
            margin: 36,
            items: 2,
            dots: false,
            nav: true,
            navContainer: ".other__navigate",
        });
        owlGallery(".news__slider", {
            margin: 36,
            items: 1,
            autoWidth: true,
            dots: false,
            nav: true,
            navContainer: ".news__navigate",
        });

    }



    owlGallery(".other-event__slider", {
        margin: 64,
        items: 2,
        autoWidth: true,
        dots: false,
        nav: true,
        navContainer: ".other-event__navigate",
    });
    owlGallery(".other-recipe__slider", {
        margin: 64,
        items: 2,
        autoWidth: true,
        dots: false,
        nav: true,
        navContainer: ".other-recipe__navigate",
    });

    if (document.documentElement.clientWidth < 1024 && document.documentElement.clientWidth >= 768) {
        owlGallery(".position__stores, .partnership__stores", {
            margin: 36,
            items: 5,
            dots: false,
            nav: true,
            navContainer: ".position__navigate, .partnership__navigate",
            loop: true,
        });
    } else if (document.documentElement.clientWidth < 768 && document.documentElement.clientWidth >= 560) {
        owlGallery(".position__stores, .partnership__stores", {
            margin: 36,
            items: 4,
            dots: false,
            nav: true,
            navContainer: ".position__navigate, .partnership__navigate",
            loop: true,
        });
    } else if (document.documentElement.clientWidth < 560) {
        owlGallery(".position__stores, .partnership__stores", {
            margin: 36,
            items: 3,
            dots: false,
            nav: true,
            navContainer: ".position__navigate, .partnership__navigate",
            loop: true,
        });
    }

    if ($('.other__link').length)
        $('.owl-item:not(.cloned)').eq(1).find('.other__link').addClass('center')
    if ($('.products__link').length)
        $('.owl-item:not(.cloned)').eq(1).find('.products__link').addClass('center')
    
        if ($('.promo').length)
    animateInOnScroll([$('.products'), $('.position'), $('.news__container'), $('.footer__container')])
    else {
        $('.footer__container').addClass('scrolled')
    }

    multiCheck('production');
    if ($('.item__header').length)
    multiCheck('item');

    if ($('.combine__header').length)
        showeAge();
    if ($('.item__header').length)
        producerDescroption()
    if ($('.partnership__header').length){
        formVal('.questions__form', 'assets/templates/php/form.php')    
    }
    if ($('.career__header').length){
        formVal('.modal__form', 'assets/templates/php/form_file.php')    
    }
    
    attachFile('.addFile');
    contentFadeInOnReady()
    mainAnimation();
});