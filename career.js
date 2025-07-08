document.addEventListener('DOMContentLoaded', function() {
             
            document.querySelectorAll('a[href^="#"]').forEach(anchor => {
                anchor.addEventListener('click', function (e) {
                    e.preventDefault();
                    document.querySelector(this.getAttribute('href')).scrollIntoView({
                        behavior: 'smooth'
                    });
                });
            });

           
            const steps = document.querySelectorAll('.pathway-step');
            steps.forEach((step, index) => {
                setTimeout(() => {
                    step.classList.add('animate-fade-in');
                }, index * 200);
            });

             
            const ctaButtons = document.querySelectorAll('.cta-demo');
            ctaButtons.forEach(button => {
                button.addEventListener('click', function() {
                    // alert('Thanks for your .');
                });
            });
        });