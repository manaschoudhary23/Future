document.addEventListener("DOMContentLoaded", () => {
    const titleSpans = document.querySelectorAll('.title span');
    const subtitleSpans = document.querySelectorAll('.subtitle span');

    titleSpans.forEach((span, index) => {
        span.style.animationDelay = `${index * 0.2}s`;
        span.style.animation = 'fadeIn 0.5s forwards';
    });

    subtitleSpans.forEach((span, index) => {
        span.style.animationDelay = `${index * 0.2 + 0.4}s`; 
        span.style.animation = 'fadeIn 0.5s forwards';
    });
});
