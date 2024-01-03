(function () {
    'use strict'
    
    // Fetch forms to apply Bootstrap
    const forms = document.querySelectorAll('.validated-form')
    
    // Loop over and prevent submission
    Array.from(forms)
        .forEach(function (form) {
            form.addEventListener('submit', function (event) {
            if (!form.checkValidity()) {
                event.preventDefault()
                event.stopPropagation()
            }
    
                form.classList.add('was-validated')
            }, false)
        })
})()      