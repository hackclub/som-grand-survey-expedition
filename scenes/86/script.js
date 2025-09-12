/// <reference path="ref.d.ts"

function getRandomInt(max) {
    return Math.floor(Math.random() * max)
}

function loadVideos() {
    /** @type {Video[]} */
    const sidebarVids = [
        {
            name: 'Splorgon 5',
            author: 'Utkarsh Kumar',
            projectId: 1,
            thumbnail: `/scenes/86/assets/neighbors/01.png`,
        },
        {
            name: 'Just a Real Nice Pond',
            author: 'Irtaza',
            projectId: 22,
            thumbnail: `https://picsum.photos/seed/${getRandomInt(212894126948)}/1280/720`,
        },
    ]

    for (const video of sidebarVids) {
        const element =
            `<a class="thumbnail" href="/scenes/${video.projectId}">` +
            `<img src="${video.thumbnail}" height="128"/>` +
            `<div class="textcontent">` +
            `<span class="title">&lbrack;${video.projectId}&rbrack; ${video.name}</span>` +
            `<span class="author">${video.author}</span>` +
            `</div>` +
            `</a>`
        const videosList = document.getElementById('recommended')
        videosList.innerHTML += element
    }
}

function loadComments() {
    /** @type {Comment[]} */
    const comments = [
        {
            content: 'What are you drinking?',
            author: 'carpet_owner21',
            replies: [
                {
                    content: 'Great Question! It is in fact a cup of tea.',
                    author: 'fancy_plant'
                },
                {
                    tagged: 'fancy_plant',
                    content: "But you're a plant,, isn't tea made of plants??",
                    author: 'carpet_owner21'
                },
                {
                    tagged: 'carpet_owner21',
                    content: "That is true. This, however, is a special kind of tea! It's made of meat.",
                    author: 'fancy_plant'
                },
                {
                    tagged: 'fancy_plant',
                    content: "I'm unsubscribing.",
                    author: 'carpet_owner'
                }
            ]
        },
        {
            author: 'explorer.exe',
            content: 'First',
            replies: [
                {
                    content: 'nuh uh',
                    author: 'xX_epixgamer_Xx'
                }
            ]
        }
    ]

    for(const comment of comments) {
        let element = `<span class="comment"><b>&lt; ${comment.author} &gt;</b> ${comment.content}</span>`
        for(const reply of comment.replies ?? []) {
            const replyEl = `<span class="comment reply"><b>&lt; ${reply.author} &gt;</b> ${reply.tagged ? '@' + reply.tagged : ''} ${reply.content}</span>`
            element += replyEl
        }
        const commentsList = document.getElementById('commentsection')
        commentsList.innerHTML += element
    }
}

document.addEventListener('DOMContentLoaded', () => {
    loadVideos()
    loadComments()
})
