import {
    render,
    html
} from '../../node_modules/lit-html/lit-html.js';


const navTemp = (user) => html `
<h1><a href="/">Orphelp</a></h1>        
    <nav>
        <a href="/">Dashboard</a>
        
            ${user
                ? html `
                <!-- Ако има логнат --->
                <div id="user">
                    <a href="/posts">My Posts</a>
                    <a href="/create">Create Post</a>
                    <a href="/logout">Logout</a>
                </div>
            `
                : html `
                <!-- Ако няма логнат --->
                <div id="guest">
                    <a href="/login">Login</a>
                    <a href="/register">Register</a>
                </div>
            `}
    </nav>
`;

const header = document.querySelector('.nav-bar');
const main = document.getElementById('main-content');

function ctxRender(content) {
    render(content, main);
}

export function addRender(ctx, next) {
    render(navTemp(ctx.user), header);
    ctx.render = ctxRender;
    next();
}