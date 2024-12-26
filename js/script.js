document.addEventListener('DOMContentLoaded', () => {
    console.log("Sayfa yüklendi!");

    // Butona tıklama olayı
    const button = document.querySelector('#myButton');
    if (button) {
        button.addEventListener('click', () => {
            alert("Butona tıkladınız!");
        });
    }

    // Form gönderme işlemi
    const form = document.getElementById('contactForm');
    if (form) {
        form.addEventListener('submit', (event) => {
            const name = document.getElementById('name').value.trim();
            const email = document.getElementById('email').value.trim();
            const message = document.getElementById('message').value.trim();

            // Ad kontrolü
            if (!name) {
                alert("Lütfen adınızı giriniz.");
                event.preventDefault(); // Formun gönderilmesini engeller
                return;
            }

            // E-posta kontrolü
            if (!email || !email.includes('@')) {
                alert("Geçerli bir e-posta adresi giriniz.");
                event.preventDefault();
                return;
            }

            // Mesaj uzunluğu kontrolü
            if (message.length < 10) {
                alert("Mesajınız en az 10 karakter olmalıdır.");
                event.preventDefault();
                return;
            }

            alert("Mesajınız başarıyla gönderildi!");
        });
    }

    // Sidebar aç/kapat işlemi
    const sidebar = document.getElementById('sidebar');
    const menuIcon = document.getElementById('menu-icon');
    const main = document.querySelector('main');

    if (menuIcon && sidebar && main) {
        menuIcon.addEventListener('click', () => {
            sidebar.classList.toggle('active'); // Sidebar aç/kapat
            main.classList.toggle('active'); // İçeriği sağa kaydır/kaydırma
        });
    }
});

