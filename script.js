document.addEventListener('DOMContentLoaded', () => {
    const button = document.getElementById('nedenButton');
    const answer = document.getElementById('answer');
    let surpriseReady = false;
    
    // Gizli ses ve görüntü elementlerini oluştur
    const surpriseSound = new Audio('./media/surprise_effect.mp3');
    surpriseSound.loop = true;
    
    const surpriseImage = document.createElement('img');
    surpriseImage.src = './media/surprise_image.png';
    surpriseImage.className = 'surprise-effect hidden';
    document.body.appendChild(surpriseImage);

    // Flash efekti için container oluştur
    const flashContainer = document.createElement('div');
    flashContainer.className = 'flash-container';
    document.body.appendChild(flashContainer);

    button.addEventListener('click', () => {
        if (!surpriseReady) {
            surpriseReady = true;
            button.style.animation = 'shake 0.5s ease';
            button.textContent = 'Emin misin?';
        } else {
            surpriseSound.volume = 0.7;
            surpriseSound.play();
            
            surpriseImage.classList.remove('hidden');
            flashContainer.classList.add('flash-effect');
            document.body.style.overflow = 'hidden';
            
            setTimeout(() => {
                surpriseSound.pause();
                surpriseSound.currentTime = 0;
                flashContainer.classList.remove('flash-effect');
                surpriseImage.classList.add('hidden');
                document.body.style.overflow = 'auto';
                
                surpriseReady = false;
                button.textContent = 'Göster';
                button.style.display = 'none';
                answer.classList.add('show');
            }, 10000);
        }
        
        setTimeout(() => {
            button.style.animation = '';
        }, 500);
    });

    answer.addEventListener('click', () => {
        answer.style.transform = 'scale(0)';
        answer.style.transition = 'transform 0.5s ease';
        
        setTimeout(() => {
            location.reload();
        }, 500);
    });
}); 