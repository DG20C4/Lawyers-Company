document.addEventListener('DOMContentLoaded', () => {
    const adminInterfaceBtn = document.getElementById('admin-interface-btn');
    const userInterfaceBtn = document.getElementById('user-interface-btn');

    adminInterfaceBtn.addEventListener('click', () => {
        window.location.href = 'admin-interface.html';
    });

    userInterfaceBtn.addEventListener('click', () => {
        window.location.href = 'user-interface.html';
    });
});
