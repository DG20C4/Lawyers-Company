document.getElementById('contactForm').addEventListener('submit', function(event) {
    event.preventDefault();
    const name = document.getElementById('name').value;
    const id = document.getElementById('id').value;
    const email = document.getElementById('email').value;
    
    alert(`Nombre: ${name}\nID: ${id}\nCorreo: ${email}`);
});
