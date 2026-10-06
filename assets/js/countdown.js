
document.addEventListener("DOMContentLoaded", () => {
    const counters = document.querySelectorAll(".stats-counter");

    const formatNumber = (value, suffix = "") => {
        if (value >= 1000) {
            return (value / 1000).toFixed(value >= 10000 ? 0 : 1) + "K" + suffix;
        }
        return value + suffix;
    };

    const animateCounter = (counter) => {
        const target = +counter.dataset.target;
        const suffix = counter.dataset.suffix || "";
        let current = 0;
        const duration = 1500;
        const step = target / (duration / 16);

        const update = () => {
            current += step;
            if (current < target) {
                counter.innerText = formatNumber(Math.floor(current));
                requestAnimationFrame(update);
            } else {
                counter.innerText = formatNumber(target, suffix);
            }
        };
        update();
    };

    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                animateCounter(entry.target);
                observer.unobserve(entry.target);
            }
        });
    }, { threshold: 0.6 });

    counters.forEach(counter => observer.observe(counter));
});

