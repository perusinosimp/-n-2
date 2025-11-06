document.addEventListener('DOMContentLoaded', () => {
    // Test accounts for each type
    const accounts = {
        admin: [
            { username: 'admin', password: 'admin123' }
        ],
        nongdan: [
            { username: 'nongdan1', password: 'pass123' },
            { username: 'nongdan2', password: 'pass123' }
        ],
        daily: [
            { username: 'daily1', password: 'pass123' },
            { username: 'daily2', password: 'pass123' }
        ],
        sieuthi: [
            { username: 'sieuthi1', password: 'pass123' },
            { username: 'sieuthi2', password: 'pass123' }
        ]
    };

    const loginForm = document.getElementById('loginForm');
    const loginAlert = document.getElementById('loginAlert');

    loginForm.addEventListener('submit', (e) => {
        e.preventDefault();
        
        const accountType = document.getElementById('accountType').value;
        const username = document.getElementById('loginUsername').value;
        const password = document.getElementById('loginPassword').value;

        if (!accountType) {
            showAlert('Vui lòng chọn loại tài khoản', 'error');
            return;
        }

        // Check if account exists and credentials match
        const storedAccounts = JSON.parse(localStorage.getItem('testAccounts') || '[]');
        const userExists = [...accounts[accountType], ...storedAccounts].find(
            acc => acc.username === username && acc.password === password
        );

        if (userExists) {
            showAlert('Đăng nhập thành công!', 'success');
            // Redirect based on account type
            setTimeout(() => {
                switch(accountType) {
                    case 'admin':
                        window.location.href = '../Admin/Admin.html';
                        break;
                    case 'nongdan':
                        window.location.href = '../Nongdan/Nongdan.html';
                        break;
                    case 'daily':
                        window.location.href = '../Daily/Daily.html';
                        break;
                    case 'sieuthi':
                        window.location.href = '../Sieuthi/Sieuthi.html';
                        break;
                }
            }, 1000);
        } else {
            showAlert('Tên đăng nhập hoặc mật khẩu không đúng!', 'error');
        }
    });

    function showAlert(message, type) {
        loginAlert.className = `alert ${type} show`;
        loginAlert.textContent = message;
        
        // Auto hide alert after 5 seconds
        setTimeout(() => {
            loginAlert.classList.remove('show');
        }, 5000);
    }
});