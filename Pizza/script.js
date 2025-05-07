document.addEventListener('DOMContentLoaded', function() {
    // Manage Bucket
    const addToBucketButtons = document.querySelectorAll('.add-to-bucket');
    const bucket = [];
    const bucketDisplay = document.querySelector('#bucket-display');

    addToBucketButtons.forEach(button => {
        button.addEventListener('click', function() {
            const name = this.getAttribute('data-name');
            const price = parseFloat(this.getAttribute('data-price'));

            bucket.push({ name, price });
            updateBucketDisplay();
        });
    });

    function updateBucketDisplay() {
        if (bucketDisplay) {
            bucketDisplay.innerHTML = '';
            bucket.forEach(item => {
                const itemElement = document.createElement('li');
                itemElement.textContent = `${item.name} - $${item.price.toFixed(2)}`;
                bucketDisplay.appendChild(itemElement);
            });
            const totalPrice = bucket.reduce((sum, item) => sum + item.price, 0);
            const totalElement = document.createElement('li');
            totalElement.textContent = `Total: $${totalPrice.toFixed(2)}`;
            bucketDisplay.appendChild(totalElement);
        }
    }

    // Handle Rating System
    const ratingStars = document.querySelectorAll('.rating-stars span');
    ratingStars.forEach(star => {
        star.addEventListener('click', function() {
            const rating = this.getAttribute('data-rating');
            ratingStars.forEach(s => s.classList.remove('selected'));
            this.classList.add('selected');
            document.getElementById('ratingValue').value = rating;
        });
    });

    // Handle Feedback Form Submission
    document.getElementById('feedbackForm').addEventListener('submit', function(e) {
        e.preventDefault();
        const name = document.getElementById('name').value;
        const comments = document.getElementById('comments').value;

        const feedbackList = document.getElementById('feedback-list');
        const feedbackItem = document.createElement('li');
        feedbackItem.textContent = `${name}: ${comments}`;
        feedbackList.appendChild(feedbackItem);

        // Clear the form
        document.getElementById('feedbackForm').reset();
    });

    // Handle Payment Submission
    document.getElementById('payment-form').addEventListener('submit', function(e) {
        e.preventDefault();
        // Simulate payment processing
        alert('Payment processing...');
    });

    // Carousel Functionality
    const carouselImages = document.querySelector('.carousel-images');
    const carouselButtons = document.querySelectorAll('.carousel-button');
    let currentIndex = 0;

    carouselButtons.forEach(button => {
        button.addEventListener('click', function() {
            const direction = this.getAttribute('data-direction');
            if (direction === 'next') {
                currentIndex = (currentIndex + 1) % carouselImages.children.length;
            } else {
                currentIndex = (currentIndex - 1 + carouselImages.children.length) % carouselImages.children.length;
            }
            updateCarousel();
        });
    });

    function updateCarousel() {
        const offset = -currentIndex * 100;
        carouselImages.style.transform = `translateX(${offset}%)`;
    }

    // Dynamic Content Loading
    function loadContent() {
        // Simulate loading content
        console.log('Content loaded dynamically');
    }

    loadContent();

    // Event listeners for dynamically added elements
    document.addEventListener('click', function(event) {
        if (event.target.matches('.dynamic-action')) {
            alert('Dynamic action triggered');
        }
    });

    // Modal Functionality
    const modals = document.querySelectorAll('.modal');
    const openModalButtons = document.querySelectorAll('.open-modal');
    const closeModalButtons = document.querySelectorAll('.close-modal');

    openModalButtons.forEach(button => {
        button.addEventListener('click', function() {
            const targetModal = document.querySelector(this.getAttribute('data-target'));
            targetModal.classList.add('show');
        });
    });

    closeModalButtons.forEach(button => {
        button.addEventListener('click', function() {
            this.closest('.modal').classList.remove('show');
        });
    });

    // Tab Navigation
    const tabButtons = document.querySelectorAll('.tab-button');
    const tabContents = document.querySelectorAll('.tab-content');

    tabButtons.forEach(button => {
        button.addEventListener('click', function() {
            const targetContent = document.querySelector(this.getAttribute('data-target'));
            tabContents.forEach(content => content.classList.remove('active'));
            tabButtons.forEach(btn => btn.classList.remove('active'));
            targetContent.classList.add('active');
            this.classList.add('active');
        });
    });

    // Form Validation
    const forms = document.querySelectorAll('form');
    forms.forEach(form => {
        form.addEventListener('submit', function(e) {
            const inputs = this.querySelectorAll('input[required], textarea[required]');
            let isValid = true;
            inputs.forEach(input => {
                if (!input.value.trim()) {
                    input.classList.add('error');
                    isValid = false;
                } else {
                    input.classList.remove('error');
                }
            });
            if (!isValid) {
                e.preventDefault();
                alert('Please fill out all required fields.');
            }
        });
    });

    // Countdown Timer
    function setCountdown(endDate) {
        const countdownElement = document.querySelector('#countdown');
        const targetDate = new Date(endDate).getTime();

        function updateCountdown() {
            const now = new Date().getTime();
            const distance = targetDate - now;
            const days = Math.floor(distance / (1000 * 60 * 60 * 24));
            const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
            const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
            const seconds = Math.floor((distance % (1000 * 60)) / 1000);

            countdownElement.innerHTML = `
                <div>${days} Days</div>
                <div>${hours} Hours</div>
                <div>${minutes} Minutes</div>
                <div>${seconds} Seconds</div>
            `;

            if (distance < 0) {
                clearInterval(interval);
                countdownElement.innerHTML = 'EXPIRED';
            }
        }

        const interval = setInterval(updateCountdown, 1000);
    }

    setCountdown('2024-12-31T23:59:59');

    // Load more content
    const loadMoreButton = document.querySelector('#load-more');
    loadMoreButton.addEventListener('click', function() {
        const moreContent = document.createElement('div');
        moreContent.classList.add('more-content');
        moreContent.innerHTML = '<p>Additional content loaded here...</p>';
        document.querySelector('.content-container').appendChild(moreContent);
    });

    // Handle User Interaction
    document.querySelector('#user-interaction').addEventListener('click', function() {
        alert('User interaction detected');
    });

    // Initialize Map
    function initMap() {
        const mapOptions = {
            center: { lat: 37.7749, lng: -122.4194 },
            zoom: 12
        };
        new google.maps.Map(document.getElementById('map-canvas'), mapOptions);
    }

    initMap();

    // Additional JavaScript Logic
    console.log('JavaScript initialized');

    // Example of a dynamic data fetch
    async function fetchData() {
        try {
            const response = await fetch('https://api.example.com/data');
            const data = await response.json();
            console.log('Data fetched:', data);
        } catch (error) {
            console.error('Error fetching data:', error);
        }
    }

    fetchData();
    
    function initMap() {
        const mapOptions = {
            center: { lat: 0, lng: 0 }, // Default center (0, 0) if you don't want to set a specific location
            zoom: 2 // Adjust zoom level as needed
        };
        new google.maps.Map(document.getElementById('map-canvas'), mapOptions);
    }
    
    // Ensure map is initialized
    window.initMap = initMap;
    
    // Interactive Elements
    const interactiveElements = document.querySelectorAll('.interactive');
    interactiveElements.forEach(element => {
        element.addEventListener('click', function() {
            alert('Interactive element clicked');
        });
    });

    // Complex Animation
    const animateElement = document.querySelector('.animate');
    if (animateElement) {
        animateElement.addEventListener('mouseover', function() {
            this.classList.add('animate__animated', 'animate__bounce');
        });
    }
});
