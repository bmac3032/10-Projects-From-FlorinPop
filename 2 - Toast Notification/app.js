const btn = document.getElementById('btn');
const container = document.getElementById('container')


btn.addEventListener('click', createNotif);

function createNotif()  {
    const notif = document.createElement('div');

    notif.classList.add('toast');

    notif.innerHTML = '<p>This is a notification!</p>';
    container.appendChild(notif);

    setTimeout(() => {
        notif.remove()
    }, 1350)
}