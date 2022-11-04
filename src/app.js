import page from "../node_modules/page/page.mjs";
import {
    addSession
} from './middlewear/session.js';
import {
    addRender
} from './middlewear/render.js';

import {
    logout
} from "./api/users.js";
import {
    dashboardPage
} from "./view/home.js";
import {
    loginPage
} from "./view/login.js";
import {
    registerPage
} from "./view/register.js";
import {
    createPage
} from "./view/create.js";
import {
    detailsPage
} from "./view/details.js";
import {
    editPage
} from "./view/edit.js";
import {
    myProductPage
} from "./view/post.js";


page(addSession);
page(addRender);

page('/', dashboardPage);
page('/login', loginPage);
page('/register', registerPage);
page('/create', createPage);
page('/details/:id', detailsPage);
page('/edit/:id', editPage);
page('/posts', myProductPage);
page('/logout', onLogout);

page.start();

function onLogout(ctx) {
    logout();
    ctx.page.redirect('/');
}