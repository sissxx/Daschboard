import {
    html,
    render
} from '../../node_modules/lit-html/lit-html.js';

import * as productService from '../api/data.js';

const dashboardTemplate = (products) => html `
   <!-- Dashboard -->
   <section id="dashboard-page">
        <h1 class="title">All Posts</h1>

        <!-- Display a div with information about every post (if any)-->
        <div class="all-posts">
            
            ${products.length > 0
                ? products.map(dashboardDatailsTemplate)
                : html `
                 <!-- Display an h1 if there are no posts -->
                    <h1 class="title no-posts-title">No posts yet!</h1>
            `}

        </div>
       
    </section>
`;


const dashboardDatailsTemplate = (product) => html `
<!--  Dashboard Tamplate  -->
<div class="post">
    <h2 class="post-title">${product.title}</h2>
    <img class="post-image" src=${product.imageUrl} alt="Material Image">
    <div class="btn-wrapper">
        <a href="/details/${product._id}" class="details-btn btn">Details</a>
    </div>
</div>

`;

export async function dashboardPage(ctx) {
    const products = await productService.getAllInfo()
    ctx.render(dashboardTemplate(products));
}