
        // Toggle chat window
        const chatBtn = document.querySelector('.chat-btn');
        const chatWindow = document.querySelector('.chat-window');
        const closeChat = document.querySelector('.close-chat');
        
        chatBtn.addEventListener('click', () => {
            chatWindow.classList.toggle('active');
        });
        
        closeChat.addEventListener('click', () => {
            chatWindow.classList.remove('active');
        });
        
        // Category scroll arrows
        const scrollLeft = document.querySelector('.scroll-arrow.left');
        const scrollRight = document.querySelector('.scroll-arrow.right');
        const categories = document.querySelector('.categories');
        
        scrollLeft.addEventListener('click', () => {
            categories.scrollBy({ left: -200, behavior: 'smooth' });
        });
        
        scrollRight.addEventListener('click', () => {
            categories.scrollBy({ left: 200, behavior: 'smooth' });
        });
        
        // Mobile menu toggle
        const mobileMenuBtn = document.querySelector('.mobile-menu-btn');
        const navIcons = document.querySelector('.nav-icons');
        
        mobileMenuBtn.addEventListener('click', () => {
            navIcons.style.display = navIcons.style.display === 'flex' ? 'none' : 'flex';
        });
        
        // Responsive adjustments
        function handleResize() {
            if (window.innerWidth > 768) {
                navIcons.style.display = 'flex';
            } else {
                navIcons.style.display = 'none';
            }
        }
        function switchLanguage() {
            window.location.href = "Tamil.html"; // Redirect to English page
        }
        document.querySelectorAll('.buy-now-btn').forEach(button => {
            button.addEventListener('click', function() {
                // Get product details from data attributes
                const productName = this.getAttribute('data-name');
                const productPrice = this.getAttribute('data-price');
                const productUnit = this.getAttribute('data-unit');
                const productImage = this.getAttribute('data-image');
                
                // Store in sessionStorage to pass to pay.html
                sessionStorage.setItem('productName', productName);
                sessionStorage.setItem('productPrice', productPrice);
                sessionStorage.setItem('productUnit', productUnit);
                sessionStorage.setItem('productImage', productImage);
                
                // Redirect to payment page
                window.location.href = 'pay.html';
            });
        });
        
        window.addEventListener('resize', handleResize);
