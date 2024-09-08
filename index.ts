document.addEventListener("DOMContentLoaded", () => {
    const accordions = document.querySelectorAll<HTMLButtonElement>('.accordion-btn');

    accordions.forEach(accordion => {
        accordion.addEventListener('click', function () {
            this.classList.toggle('active');
            
            // Get the next sibling element which is the panel
            const panel = this.nextElementSibling as HTMLElement;

            if (panel.style.display === "block") {
                panel.style.display = "none";
            } else {
                panel.style.display = "block";
            }
        });
    });
});
