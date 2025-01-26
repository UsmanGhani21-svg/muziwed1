// Hover effects and video interaction
const videoPages = document.querySelectorAll('.video-page');

videoPages.forEach(page => {
    page.addEventListener('mouseenter', () => {
        const iframe = page.querySelector('iframe');
        const src = iframe.getAttribute('src');
        if (!src.includes('autoplay')) {
            iframe.setAttribute('src', src + '?autoplay=1');  // Start the video when hovered
        }
    });

    page.addEventListener('mouseleave', () => {
        const iframe = page.querySelector('iframe');
        const src = iframe.getAttribute('src');
        iframe.setAttribute('src', src.replace('?autoplay=1', ''));  // Stop the video when mouse leaves
    });
});
