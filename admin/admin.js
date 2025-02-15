// admin/admin.js
document.addEventListener('DOMContentLoaded', () => {
    // 检查用户是否为管理员
    const token = localStorage.getItem('adminToken');
    if (!token) {
        alert('您没有权限访问管理员后台！');
        window.location.href = '/'; // 重定向到主页
        return;
    }

    // 管理员功能：获取用户列表
    const adminPanel = document.getElementById('adminPanel');
    if (adminPanel) {
        fetch('/api/admin', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ token })
        })
        .then(response => response.json())
        .then(data => {
            adminPanel.innerHTML = '<h2>用户列表</h2>';
            data.forEach(user => {
                adminPanel.innerHTML += `<p>${user.email} - ${user.verified ? '已验证' : '未验证'}</p>`;
            });
        })
        .catch(error => {
            console.error('获取用户列表失败:', error);
            alert('获取用户列表失败！');
        });
    }
});
