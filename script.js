document.getElementById('switch-to-zh').addEventListener('click', () => {
    document.documentElement.lang = 'zh';
    translateToChinese();
});

document.getElementById('switch-to-en').addEventListener('click', () => {
    document.documentElement.lang = 'en';
    translateToEnglish();
});

function translateToChinese() {
    document.getElementById('app-title').textContent = 'DeepSeek AI';
    document.getElementById('login-title').textContent = '登录';
    document.getElementById('register-title').textContent = '注册';
}

function translateToEnglish() {
    document.getElementById('app-title').textContent = 'DeepSeek AI';
    document.getElementById('login-title').textContent = 'Login';
    document.getElementById('register-title').textContent = 'Register';
}

// 默认加载中文
translateToChinese();

// 注册和登录逻辑
document.getElementById('register-btn').addEventListener('click', () => {
    document.getElementById('login-form').style.display = 'none';
    document.getElementById('register-form').style.display = 'block';
});

document.getElementById('register').addEventListener('submit', async (e) => {
    e.preventDefault();
    const email = document.getElementById('register-email').value;
    const password = document.getElementById('register-password').value;

    const response = await fetch('https://your-worker-url/register', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, password })
    });

    const data = await response.json();
    alert(data.message);
});

document.getElementById('login').addEventListener('submit', async (e) => {
    e.preventDefault();
    const email = document.getElementById('login-email').value;
    const password = document.getElementById('login-password').value;

    const response = await fetch('https://your-worker-url/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, password })
    });

    const data = await response.json();
    alert(data.message);
});
