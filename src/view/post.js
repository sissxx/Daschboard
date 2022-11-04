import {
    html,
    render
} from '../../node_modules/lit-html/lit-html.js';

import * as productService from '../api/data.js';
import {
    getUserData
} from '../util.js';

const myProductTemplate = (products) => html `

<section id="my-posts-page">
        <h1 class="title">My Posts</h1>

        <!-- Display a div with information about every post (if any)-->
        <div class="my-posts">
            
        ${products.length > 0 
        ? products.map(miniTemplate)
        : html `
          <!-- Display an h1 if there are no posts -->
        <h1 class="title no-posts-title">You have no posts yet!</h1>
        `}
        </div>

    </section>

`;

const miniTemplate = (product) => html `

<div class="post">
    <h2 class="post-title">${product.title}</h2>
    <img class="post-image" src=${product.imageUrl} alt="Material Image">
    <div class="btn-wrapper">
        <a href="/details/${product._id}" class="details-btn btn">Details</a>
    </div>
</div>

`

export async function myProductPage(ctx) {
    const user = getUserData();
    const products = await productService.getMyPosts(user._id);
    ctx.render(myProductTemplate(products));
}