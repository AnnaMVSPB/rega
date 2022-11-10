const formRega = document.querySelector('#formRega');
const formAdd = document.querySelector('#form');
if (formAdd) {
  formAdd.addEventListener('submit', async (e) => {
    e.preventDefault();
    const {
      title, url, important, action, method,
    } = e.target;
    const response = await fetch(action, {
      method,
      headers: { 'Content-type': 'application/json' },
      body: JSON.stringify({
        title: title.value,
        url: url.value,
        important: important.checked,
      }),
    });
    const data = await response.json();
    const card = `
            <li key=${data.id} class=${data.important ? 'todo__card important' : 'todo__card'}>
              <h3>${data.title}</h3>
              <img src=${data.url} alt="4to-to" />
            </li>
    `;
    document.querySelector('.todo__list').insertAdjacentHTML('beforeend', card);
    // if (data.message === 'ssuuccceesss') {
    // }
  });
}
if (formRega) {
  formRega.addEventListener('submit', async (e) => {
    e.preventDefault();
    console.log(e.target);
    const { name, password, email } = e.target;
    const res = await fetch('/auth/reg', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ name: name.value, password: password.value, email: email.value }),
    });
    const data = await res.json();
    if (data.url) {
      window.location.assign(data.url);
    } else {
      document.querySelector('.errorReg').innerHTML = data.message;
    }
  });
}

document.querySelector('.todo__list').addEventListener('click', async (e) => {
  if (e.target.classList.contains('btn')) {
    const { id } = e.target.closest('li');
    const response = await fetch(`/todos/${id}`, {
      method: 'delete',
    });
    const data = await response.json();
    if (data) {
      e.target.closest('li').remove();
    }
  }
});


