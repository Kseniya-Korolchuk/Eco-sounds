const audio = document.querySelector('audio');
const player = document.querySelector('.player');
const playBtn = document.querySelector('.play-btn');
const birdLink = document.querySelectorAll('.nav-link');
const playPauseIcon = document.querySelector('.icon-play');
let isPlay = false;


/*КЭШИРУЕМ ИЗОБРАЖЕНИЯ*/

window.onload = preloadImages(['./assets/img/drozd.jpg',
                                './assets/img/javoronok.jpg',
                                './assets/img/slavka.jpg',
                                './assets/img/solovey.jpg',
                                './assets/img/zaryanka.jpg'
                                ]);

function preloadImages(array) {
    for (let i = 0; i < array.length; i++) {
        let img = new Image();
    }
}

/*ЗАПУСКАЕМ И ОСТАНАВЛИВАЕМ АУДИО КНОПКОЙ */
playBtn.addEventListener('click', playAudio);
function playAudio() {
    if (!isPlay == true) {
        playBtn.classList.toggle('active');
        changeButton();
        audio.play();
        isPlay = true;
    }
    else{
        audio.pause();
        playBtn.classList.remove('active');
        changeButton();
        isPlay = false;
    }
}

/*ПЕРЕКЛЮЧАЕМ ПЛЕЕР*/
birdLink.forEach(function (link){
    link.addEventListener('click', function(event){
        if(event.target.classList.contains('active')){
            playAudio();
        }
        else if(!event.target.classList.contains('active')) {
            audio.setAttribute('autoplay', 'autoplay');
            isPlay = true;
            let name = event.target.dataset.link;
            changeAudio(name);
            changeImg(name);
            removeClass(birdLink, 'active');
            event.target.classList.add('active');
            playBtn.classList.add('active');
            changeButton();
        }
        
    });
});

/*МЕНЯЕМ ВИД КНОПКИ*/
function changeButton() {
    if (playBtn.classList.contains('active')) {
        playPauseIcon.firstElementChild.setAttribute('xlink:href', './assets/icons/sprite.svg#pause');
    } 
    else {
        playPauseIcon.firstElementChild.setAttribute('xlink:href', './assets/icons/sprite.svg#play');
    }
}

/*МЕНЯЕМ КАРТИНКУ*/
function changeImg(link) {
    player.setAttribute('style', `background-image: url(./assets/img/${link}.jpg)`)
}

/*МЕНЯЕМ АУДИО*/
function changeAudio(link) {
    audio.setAttribute('src', `./assets/audio/${link}.mp3`);
}

/*УДАЛЯЕМ ЛИШНИЕ КЛАССЫ*/
function removeClass(collection, className) {
    collection.forEach(item => item.classList.remove(className));
}



console.log(`Score 60/70\n
- Верстка\n
[X] - есть не меньше пяти интерактивных элементов, с которыми пользователи могут взаимодействовать. \n
[X] - Изменение внешнего вида самого элемента и состояния курсора при наведении, плавные анимации +5\n
[X] - в футере приложения есть ссылка на гитхаб автора приложения, год создания приложения, логотип курса со ссылкой на курс +5\n
[X] - При кликах по интерактивным элементам меняется изображение +10\n
[X] - При кликах по интерактивным элементам меняется звук +10\n
[X] - Активный в данный момент интерактивный элемент выделяется стилем +10\n
- Кнопка Play/Pause\n
[X] - есть кнопка Play/Pause, при клике по которой можно запустить или остановить проигрывание звука +10\n
[X] - внешний вид и функционал кнопки Play/Pause изменяется в зависимости от того, проигрывается ли в данный момент звук\n
[-] - Очень высокое качество оформления приложения и/или дополнительный не предусмотренный в задании функционал, \n
улучшающий качество приложения - 0`);