/* ═══════════════════════════════════════════════
   LOGIC: SITU Web
   ─────────────────────────────────────────────── */

document.addEventListener('DOMContentLoaded', () => {
    const modal = document.getElementById('modal-integrantes');
    const btnIntegrantes = document.getElementById('btn-integrantes');
    const btnCloseModal = document.getElementById('btn-close-modal');

    // Show Modal
    btnIntegrantes.addEventListener('click', (e) => {
        e.preventDefault();
        modal.classList.add('active');
    });

    // Hide Modal
    btnCloseModal.addEventListener('click', () => {
        modal.classList.remove('active');
    });

    // Close on click outside
    modal.addEventListener('click', (e) => {
        if (e.target === modal) {
            modal.classList.remove('active');
        }
    });

    // Smooth scroll for Propuestas
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth'
                });
            }
        });
    });

    // Intersection Observer for Slide 2 Cards
    const cardObserverOptions = {
        threshold: 0.15
    };

    const cardObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('active');
                // Once animated, we can stop observing this specific element
                cardObserver.unobserve(entry.target);
            }
        });
    }, cardObserverOptions);

    document.querySelectorAll('.info-card, .phase-row, .b2g-card, .stat-box, .action-item').forEach(el => {
        cardObserver.observe(el);
    });
});
