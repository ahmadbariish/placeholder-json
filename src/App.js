function getPost(userId) {
    let request = new XMLHttpRequest();
    request.open(`GET`, `https://jsonplaceholder.typicode.com/posts?userId=${userId}`);
    request.responseType = "json";
    request.send();
    request.onload = function () {
        if (request.status >= 200 && request.status < 300) {
            let posts = request.response;
            document.getElementById('post').innerHTML = "";
            for (post of posts) {
                let content = `
                <div class="user w-5/6 mx-auto bg-slate-100 my-3 rounded-2xl px-5 py-3 shadow-lg">
                    <h1 class="text-base font-bold">${post.title}</h1>
                    <h3>${post.body}</h3>
                </div>
                `
                document.getElementById('post').innerHTML += `${content}`;
            }
        } else {
            alert('erro in server')
        }
    }
}

function getUser() {
    let request = new XMLHttpRequest();
    request.open(`GET`, `https://jsonplaceholder.typicode.com/users`);
    request.responseType = "json";
    request.send();
    request.onload = function () {
        if (request.status >= 200 && request.status < 300) {
            let users = request.response;
            document.getElementById('users').innerHTML = "";
            for (user of users) {
                let content = `
                <div onclick="userClicked(${user.id},this)" class="user w-4/5 cursor-pointer ml-auto mr-auto bg-slate-100 my-3 rounded-2xl px-5 py-3 shadow-lg">
                    <h1 class="text-base font-bold">${user.name}</h1>
                    <h3>${user.email}</h3>
                </div>
                `
                document.getElementById('users').innerHTML += `${content}`;
            }
        } else {
            alert('erro in server')
        }
    }
}


function userClicked(id, st) {
    getPost(id);
    st.classList.add("br")
}

getUser();