ymaps.ready(init);
function init(){
    var myMap = new ymaps.Map("map", {
        center: [55.76012265749781,37.6141991376647],
        zoom: 14,
        controls: []
    });

    var placemark = new ymaps.Placemark([55.76012265749781,37.6141991376647], {}, {
		iconLayout: 'default#image',
		iconImageHref: 'img/map.svg',
		iconImageSize: [20, 20],
		iconImageOffset: [-13, -44]

  });


    var geolocationControl = new ymaps.control.GeolocationControl({
        options: {
            position: {
                right: 10,
                top: 380,
            }
        }
    })
    myMap.controls.add(geolocationControl);

    var zoomControl = new ymaps.control.ZoomControl({
        options: {
            position: {
                top: 315,
                right: 10,
            }
        }
    });
    myMap.controls.add(zoomControl);

    
 /*  myMap.controls.remove('geolocationControl'); */ // удаляем геолокацию
  myMap.controls.remove('searchControl'); // удаляем поиск
  myMap.controls.remove('trafficControl'); // удаляем контроль трафика
  myMap.controls.remove('typeSelector'); // удаляем тип
  myMap.controls.remove('fullscreenControl'); // удаляем кнопку перехода в полноэкранный режим
  /* myMap.controls.remove('zoomControl'); */ // удаляем контрол зуммирования
  myMap.controls.remove('rulerControl'); // удаляем контрол правил
  myMap.behaviors.disable(['scrollZoom']); // отключаем скролл карты (опционально)

  myMap.geoObjects.add(placemark);

  if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)){
    //... отключаем перетаскивание карты
    myMap.behaviors.disable('drag');
  };

}