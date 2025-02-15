// script.js
// 语言切换逻辑
function switchLanguage(lang) {
    if (lang === 'en-US') {
        document.documentElement.lang = 'en-US';
        document.querySelector('h1').textContent = 'Welcome';
        document.querySelector('button:nth-child(2)').textContent = 'Switch to Chinese';
        document.querySelector('a[href="login.html"]').textContent = 'Login';
        document.querySelector('a[href="register.html"]').textContent = 'Register';
    } else {
        document.documentElement.lang = 'zh-CN';
        document.querySelector('h1').textContent = '欢迎使用';
        document.querySelector('button:nth-child(2)').textContent = '切换到英文';
        document.querySelector('a[href="login.html"]').textContent = '登录';
        document.querySelector('a[href="register.html"]').textContent = '注册';
    }
}

// 表单提交逻辑
document.addEventListener('DOMContentLoaded', () => {
    const loginForm = document.getElementById('loginForm');
    const registerForm = document.getElementById('registerForm');

    if (loginForm) {
        loginForm.addEventListener('submit', async (e) => {
            e.preventDefault();
            const email = loginForm.elements['email'].value;
            const password = loginForm.elements['password'].value;

            const response = await fetch('/api/login', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ email, password })
            });

            if (response.ok) {
                alert('登录成功！');
            } else {
                alert('登录失败，请检查邮箱和密码。');
            }
        });
    }

    if (registerForm) {
        registerForm.addEventListener('submit', async (e) => {
            e.preventDefault();
            const email = registerForm.elements['email'].value;
            const password = registerForm.elements['password'].value;

            const response = await fetch('/api/register', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ email, password })
            });

            if (response.ok) {
                alert('注册成功，请检查邮箱验证。');
            } else {
                alert('注册失败，邮箱可能已被注册。');
            }
        });
    }
});
