// HTML ELEMENTS IMG
const lazyImgs = document.querySelectorAll('.lazy');

// INSERSECTION API FROM JS
const observer = new IntersectionObserver( (entries,observer)=> {
    entries.forEach(entrie => {
        if (entrie.isIntersecting){
            let img = entrie.target;
            img.src = img.dataset.src;
            img.classList.remove('loading');
            img.classList.add('loaded');
            observer.unobserve(img);
        };
    });
});

// EXPORT FUNCTION WRAPPER
const LazyLoad = () =>{
    lazyImgs.forEach(img => observer.observe(img));
}

export default LazyLoad;