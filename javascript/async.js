const btn = document.getElementById('btn');
const quoteEl = document.getElementById('quote');
const charEl = document.getElementById('character');
const inputEl = document.getElementById('animeInput');

inputEl.addEventListener('input', () => {
    inputEl.value = inputEl.value
});


function randomAnime() {
  let animeList = ["Naruto", "One Piece", "Attack on Titan"];
  let randomIndex = Math.floor(Math.random() * animeList.length);
  let chosenAnime = animeList[randomIndex];
  return chosenAnime;
}


async function fetchQuotes() {
    try {
        let response = await fetch(`https://api.animechan.io/v1/quotes?anime=${inputEl.value}`);
        let json = await response.json();
        if (response.status === 429) {
            throw new Error("Rate limit exceeded. Please wait a bit.");
        }
          const random = json.data[Math.floor(Math.random() * json.data.length)];
        return {
        quote : random.content,
        character : random.character.name,
        anime : random.anime.name
        };
    } catch (err) {
        console.error("Error fetching quote:", err.message);
        return {
            quote: "Anime not available sorry!",
            character: "Zani"
        };
    }
}


btn.addEventListener('click', async () => {
    btn.disabled = true;
    let data = await fetchQuotes();
    displayQuotes(data);
    setTimeout(() => {
        btn.disabled = false;
    }, 5000);
});

function displayQuotes(data) {
    quoteEl.innerHTML = data.quote;
     if (data.anime) {
        charEl.innerHTML = `-${data.character} (${data.anime})`;
    } else {
        charEl.innerHTML = `-${data.character}`;
    }
}
      // Add loading state and animations
      btn.addEventListener("click", function () {
        btn.classList.add("loading");
        btn.textContent = "Loading...";

        // Remove show class for fade out effect
        quote.classList.remove("show");
        character.classList.remove("show");

        // Reset after animation (this should sync with your JS)
        setTimeout(() => {
          btn.classList.remove("loading");
          btn.textContent = "Generate Quote";
          quote.classList.add("show");
          character.classList.add("show");
        }, 1000);
      });

      // Initial show state
      quote.classList.add("show");
      character.classList.add("show");





      // for input btn

      document.addEventListener('DOMContentLoaded', function() {
    const input = document.getElementById('animeInput');
    const particlesContainer = document.querySelector('.input-particles');
    
    // Create floating particles on focus
    function createParticles() {
        const particleCount = 12;
        
        // Clear existing particles
        particlesContainer.innerHTML = '';
        
        for (let i = 0; i < particleCount; i++) {
            const particle = document.createElement('div');
            particle.className = 'particle';
            
            // Random positioning
            particle.style.left = Math.random() * 100 + '%';
            particle.style.top = Math.random() * 100 + '%';
            
            // Random animation delay and duration
            particle.style.animationDelay = Math.random() * 2 + 's';
            particle.style.animationDuration = (Math.random() * 2 + 3) + 's';
            
            particlesContainer.appendChild(particle);
        }
    }
    
    // Clear particles
    function clearParticles() {
        setTimeout(() => {
            particlesContainer.innerHTML = '';
        }, 500);
    }
    
    // Handle focus events
    input.addEventListener('focus', function() {
        createParticles();
    });
    
    // Handle blur events
    input.addEventListener('blur', function() {
        clearParticles();
    });
    
    // Add typing effect
    input.addEventListener('input', function() {
        input.classList.add('typing');
        setTimeout(() => {
            input.classList.remove('typing');
        }, 100);
    });
    
    // Handle keypress for enhanced feedback
    input.addEventListener('keypress', function(e) {
        // Create ripple effect
        const ripple = document.createElement('div');
        ripple.style.position = 'absolute';
        ripple.style.left = '50%';
        ripple.style.top = '50%';
        ripple.style.width = '4px';
        ripple.style.height = '4px';
        ripple.style.background = 'rgba(255, 0, 128, 0.8)';
        ripple.style.borderRadius = '50%';
        ripple.style.transform = 'translate(-50%, -50%)';
        ripple.style.pointerEvents = 'none';
        ripple.style.zIndex = '3';
        
        // Add ripple animation
        ripple.style.animation = 'rippleEffect 0.6s ease-out forwards';
        
        input.parentElement.appendChild(ripple);
        
        // Remove ripple after animation
        setTimeout(() => {
            ripple.remove();
        }, 600);
    });
    
    // Add ripple effect CSS dynamically
    const style = document.createElement('style');
    style.textContent = `
        @keyframes rippleEffect {
            0% {
                transform: translate(-50%, -50%) scale(0);
                opacity: 1;
            }
            100% {
                transform: translate(-50%, -50%) scale(8);
                opacity: 0;
            }
        }
    `;
    document.head.appendChild(style);
    
    // Enhanced hover effects
    input.addEventListener('mouseenter', function() {
        if (!input.matches(':focus')) {
            input.style.transform = 'translateY(-1px) scale(1.01)';
        }
    });
    
    input.addEventListener('mouseleave', function() {
        if (!input.matches(':focus')) {
            input.style.transform = 'translateY(0) scale(1)';
        }
    });
    
    // Smooth transition back to normal state on blur
    input.addEventListener('blur', function() {
        input.style.transform = 'translateY(0) scale(1)';
    });
});