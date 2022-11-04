import {
    html,
    render
} from '../../node_modules/lit-html/lit-html.js';
import * as productService from '../api/data.js';
import {
    createSubmitHandler
} from '../util.js';


const editTemplate = (product, onSubmit) => html `
 <section id="edit-page" class="auth">
        <form @submit=${onSubmit} id="edit">
            <h1 class="title">Edit Post</h1>

            <article class="input-group">
                <label for="title">Post Title</label>
                <input type="title" name="title" id="title" .value=${product.title}>
            </article>

            <article class="input-group">
                <label for="description">Description of the needs </label>
                <input type="text" name="description" id="description" .value=${product.description}>
            </article>

            <article class="input-group">
                <label for="imageUrl"> Needed materials image </label>
                <input type="text" name="imageUrl" id="imageUrl" .value=${product.imageUrl}>
            </article>

            <article class="input-group">
                <label for="address">Address of the orphanage</label>
                <input type="text" name="address" id="address" .value=${product.address}>
            </article>

            <article class="input-group">
                <label for="phone">Phone number of orphanage employee</label>
                <input type="text" name="phone" id="phone" .value=${product.phone}>
            </article>

            <input type="submit" class="btn submit" value="Edit Post">
        </form>
    </section>

`;

export async function editPage(ctx) {
    const productId = ctx.params.id;
    const product = await productService.getById(productId);

    ctx.render(editTemplate(product, createSubmitHandler(ctx, onSubmit)));

}
async function onSubmit(ctx, data, ev) {
    const productId = ctx.params.id;

    if (Object.values(data).some(x => x == '')) {
        return alert('All fields must be completed!');
    }

    await productService.updateData(productId, {
        title: data.title,
        description: data.description,
        imageUrl: data.imageUrl,
        address: data.address,
        phone: data.phone
    });

    ev.target.reset();
    ctx.page.redirect('/details/' + productId);
}