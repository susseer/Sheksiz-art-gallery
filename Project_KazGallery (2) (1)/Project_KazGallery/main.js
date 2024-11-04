
document.getElementById('search-icon').addEventListener('click', () => {
    const container = document.querySelector('.search-container');
    container.classList.toggle('active');
    const searchBar = document.getElementById('search-bar');
    if (container.classList.contains('active')) {
        searchBar.focus();
    }
});


document.getElementById('search-bar').addEventListener('input', function() {
    const searchResults = document.getElementById('search-results');
    const query = this.value.trim();

    if (query === '') {
        searchResults.classList.add('hidden');
    } else {
        searchResults.classList.remove('hidden');
    } elif {
       this.addEventListener{
        searchResults.innerHTML = '';
       } 
    }
});

const menuIcon = document.querySelector('.menu-icon');
const dropdownMenu = document.getElementById('dropdown-menu');
const dropdownContent = document.querySelector('.dropdown-content');
const dropdownLink = document.querySelector('.dropdown');

menuIcon.addEventListener('click', () => {
    dropdownMenu.classList.toggle('active');
});

document.addEventListener('click', (e) => {
    if (!dropdownMenu.contains(e.target) && !menuIcon.contains(e.target)) {
        dropdownMenu.classList.remove('active');
    }
});

const searchBar = document.getElementById('search-bar');
const searchResults = document.getElementById('search-results');


const searchItems = [
    { name: 'About', link: 'abouteng.html' },
    { name: 'Painters', link: 'painterseng.html' },
    { name: 'Kasteev Museum', link: 'gallerieseng.html' },
    { name: 'National Museum', link: 'gallerieseng.html' },
    { name: 'Nevzorov musuem' , link: 'gallerieseng.html'},
    { name: 'Almaty Gallery', link: 'gallerieseng.html' },
    { name: 'Aisha Galimbaeva', link: 'AGalimbaeva.html' },
    { name: 'Salihtdin Aitbaev', link: 'aitbaev.html' },
    { name: 'Abilkhan Kasteev', link: 'akasteev.html' },
    { name: 'Kamil Mullashev', link: 'kamil.html' },
    { name: 'Sabur Mambeyev', link: 'mambaev.html' },
    { name: 'Zhanatai Shardenov', link: 'Shardenov.html' },
    { name: 'Sergei Kalmikov', link: 'skalmikov.html' },
    { name: 'Bakhtiar Tabiev', link: 'Tabiev.html' },
    { name: 'Zaltzman Pavel', link: 'Zaltsman.html' },
    { name: 'Zhenis Kakenovich', link: 'zhkakenovich.html' },


    { name: 'О нас', link: 'aboutrus.html' },
    { name: 'Художники', link: 'paintersrus.html' },
    { name: 'Музей Кастеева', link: 'galleriesrus.html' },
    { name: 'Национальный Музей', link: 'galleriesrus.html' },
    { name: 'Музей Невзорова', link: 'galleriesrus.html' },
    { name: 'Галерея Алматы', link: 'galleriesrus.html' },
    { name: 'Айша Галимбаева', link: 'AGalimbaevarus.html' },
    { name: 'Салихтин Айтбаев', link: 'aitbaevrus.html' },
    { name: 'Абилхан Кастеев', link: 'akasteevrus.html' },
    { name: 'Камиль Муллашев', link: 'kamilrus.html' },
    { name: 'Сабур Мамбеев', link: 'mambaevrus.html' },
    { name: 'Жанатай Шарденов', link: 'Shardenovrus.html' },
    { name: 'Сергей Калмыков', link: 'skalmikovrus.html' },
    { name: 'Бахтияр Табиев', link: 'Tabievrus.html' },
    { name: 'Зальцман Павел', link: 'Zaltsmainrus.html' },
    { name: 'Женис Какенович', link: 'zhkakenovichrus.html' },


    { name: 'Біз туралы', link: 'aboutkaz.html' },
    { name: 'Суретшілер', link: 'painterskaz.html' },
    { name: 'Қастеев мұражайы', link: 'gallerieskaz.html' },
    { name: 'Қазақстандық Ұлттық мұражайы', link: 'gallerieskaz.html' },
    { name: 'Алматылық Галлерея', link: 'gallerieskaz.html' },
    { name: 'Невзоров мұражайы', link: 'gallerieskaz.html' },
    { name: ' Айша Галимбаева каз', link: 'AGalimbaevakaz.html' },
    { name: 'Салихтин Айтбаев каз', link: 'aitbaevkaz.html' },
    { name: 'Абілхан Қастеев', link: 'akasteevkaz.html' },
    { name: 'Камиль Мулашев каз', link: 'kamilkaz.html' },
    { name: 'Сабур Мәмбеев', link: 'mambaevkaz.html' },
    { name: 'Жаңатай Шарденов', link: 'Shardenovkaz.html' },
    { name: 'Сергей Калмыков каз', link: 'skalmikovkaz.html' },
    { name: 'Бақтияр Табиев', link: 'Tabievkaz.html' },
    { name: 'Зальцман Павел каз', link: 'Zaltsmankaz.html' },
    { name: 'Жеңіс Какенович', link: 'zhkakenovichkaz.html' },
];


searchBar.addEventListener('input', (e) => {
    const query = e.target.value.toLowerCase();
    const filteredItems = searchItems.filter(item => item.name.toLowerCase().includes(query));

 
    searchResults.innerHTML = '';

    if (filteredItems.length === 0 && query.trim() !== '') {
        const noResults = document.createElement('div');
        noResults.textContent = 'No results found';
        noResults.classList.add('no-results');
        searchResults.appendChild(noResults);
    } else {
  
        filteredItems.forEach(item => {
            const link = document.createElement('a');
            link.href = item.link;
            link.textContent = item.name;
            searchResults.appendChild(link);
        });
    }
});

let slideIndex = 1;
let autoSlideInterval;

showSlides(slideIndex);
startAutoSlide();

function changeSlide(n) {
    showSlides(slideIndex += n);
    resetAutoSlide();
}

function currentSlide(n) {
    showSlides(slideIndex = n);
    resetAutoSlide();
}

function showSlides(n) {
    const slides = document.getElementsByClassName("slide");
    const dots = document.getElementsByClassName("dot");

    if (n > slides.length) { slideIndex = 1; }
    if (n < 1) { slideIndex = slides.length; }

    for (let i = 0; i < slides.length; i++) {
        slides[i].classList.remove('active');
    }

    for (let i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }

    slides[slideIndex - 1].classList.add('active');
    dots[slideIndex - 1].className += " active";
}

function startAutoSlide() {
    autoSlideInterval = setInterval(() => {
        changeSlide(1);
    }, 5000); 
}

function resetAutoSlide() {
    clearInterval(autoSlideInterval);
    startAutoSlide();
}

function handleKey(event) {
    if (event.key === 'ArrowLeft') {
        changeSlide(-1);
    } else if (event.key === 'ArrowRight') {
        changeSlide(1);
    }
}

