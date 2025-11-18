const posts = [
    {
        name: "Vincent van Gogh",
        username: "vincey1853",
        location: "Zundert, Netherlands",
        avatar: "images/avatar-vangogh.jpg",
        post: "images/post-vangogh.jpg",
        comment: "just took a few mushrooms lol",
        likes: 21
    },
    {
        name: "Gustave Courbet",
        username: "gus1819",
        location: "Ornans, France",
        avatar: "images/avatar-courbet.jpg",
        post: "images/post-courbet.jpg",
        comment: "i'm feelin a bit stressed tbh",
        likes: 4
    },
        {
        name: "Joseph Ducreux",
        username: "jd1735",
        location: "Paris, France",
        avatar: "images/avatar-ducreux.jpg",
        post: "images/post-ducreux.jpg",
        comment: "gm friends! which coin are YOU stacking up today?? post below and WAGMI!",
        likes: 152
    }
]

let body = document.getElementById("content")
let section = document.getElementById("bodyusers")

function bodyHTML() {
    hero() 
}

function createPostHTML(name, username, location, avatar, post, comment, likes) {
    return `
        <section id="users">
            <div class="online-post">
                <img class="circle-img" src="${avatar}" alt="${name}">
                <div class="text-block">
                    <p class="name">${name}</p>
                    <p>${location}</p>
                </div>
            </div>
            <img  class="img-post" src="${post}"><div class="user-icons">
            <div class="user-icons">
                <img class="icons" src="./images/icon-heart.png">
                <img class="icons" src="./images/icon-comment.png">
                <img class="icons" src="./images/icon-dm.png">
                <p class="likes">${likes} likes</p>
                <p class="comment"><span class="username">${username}</span> ${comment}</p>
            </div>
        </section>
        
        <div class="gray-background"></div>`
            ;
    }

function hero() {

    let html = `
        <hero>
            <img class="logo" src="images/logo.png">
            <img class="circle-img" src="./images/user-avatar.png">
        </hero>
        <hr>`
        
         // Add ALL posts using the function
    for (let item of posts) {
        html += createPostHTML(
            item.name,
            item.username,
            item.location,
            item.avatar,
            item.post,
            item.comment,
            item.likes
        );
    }

    body.innerHTML = html;

}

bodyHTML()
