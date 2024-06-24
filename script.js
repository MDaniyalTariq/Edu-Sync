document.addEventListener('DOMContentLoaded', () => {
    const menuToggle = document.querySelector('.checkbox');
    const mobileMenu = document.querySelector('.mobile-menu-items');
    const mobileNavContainer = document.querySelector('.mobile-nav-container');

  
    menuToggle.addEventListener('change', () => {
        if (menuToggle.checked) {
            openMenu();
        } else {
            closeMenu();
        }
    });

    document.addEventListener('click', (event) => {
        const isClickInsideMenu = mobileNavContainer.contains(event.target);
        if (!isClickInsideMenu && menuToggle.checked) {
            closeMenu();
        }
    });

    function openMenu() {
        mobileMenu.style.transform = 'translateX(0)';
    }

    function closeMenu() {
        mobileMenu.style.transform = 'translateX(-150%)';
        menuToggle.checked = false; 
    }
});







document.addEventListener('DOMContentLoaded', (event) => {
    const heroHeading = document.getElementById('hero-heading');
    const phrases = [
        'Empowering Minds',
        'Shaping Futures',
        'Learn Today Lead Tomorrow',
        'Knowledge for a Brighter Future'
    ];
    let currentPhraseIndex = 0;

    function typeWriterEffect() {
        heroHeading.style.animation = 'none'; 
        heroHeading.offsetHeight; 
        heroHeading.style.animation = ''; 

        let text = phrases[currentPhraseIndex];
        let typingSpeed = 150;
        heroHeading.innerHTML = '';
        let i = 0;

        function typeChar() {
            if (i < text.length) {
                heroHeading.innerHTML += text.charAt(i);
                i++;
                setTimeout(typeChar, typingSpeed);
            } else {
                setTimeout(changePhrase, 3000); 
            }
        }

        typeChar();
    }

    function changePhrase() {
        currentPhraseIndex = (currentPhraseIndex + 1) % phrases.length;
        typeWriterEffect();
    }

    typeWriterEffect(); 
});