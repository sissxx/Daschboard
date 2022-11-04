import {
    html,
    nothing
} from '../../node_modules/lit-html/lit-html.js';

import * as productService from '../api/data.js';


const detailsTemplate = (product, onDelete) => html `


<section id="details-page">
        <h1 class="title">Post Details</h1>

        <div id="container">
            <div id="details">
                <div class="image-wrapper">
                    <img src=${product.imageUrl} alt="Material Image" class="post-image">
                </div>
                <div class="info">
                    <h2 class="title post-title">${product.title}</h2>
                    <p class="post-description">Description: ${product.description}</p>
                    <p class="post-address">Address: ${product.address}</p>
                    <p class="post-number">Phone number: ${product.phone}</p>


                    <!--Edit and Delete are only for creator-->
                    <div class="btns">

            ${product.isOwner
                ? html `
                    <a href="/edit/${product._id}" class="edit-btn btn">Edit</a>
                    <a @click=${onDelete} href="javascript:void(0)" class="delete-btn btn">Delete</a>
                    `
                :  html `
                <!--Bonus - Only for logged-in users ( not authors )-->
                    <a href="/" class="donate-btn btn">Back</a>
                `
            }

                    </div>
                </div>
            </div>
        </div>
    </section>

`;

export async function detailsPage(ctx) {
    const productId = ctx.params.id;
    const product = await productService.getById(productId);

    if (ctx.user) {
        product.isOwner = ctx.user._id == product._ownerId;
    } 

    ctx.render(detailsTemplate(product, onDelete));

    async function onDelete() {
        const choice = confirm(`Are you sure to delete ${product.title}?`);

        if (choice) {
            await productService.deleteById(productId);
            ctx.page.redirect('/');
        };
    }
}



