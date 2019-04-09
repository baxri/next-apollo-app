const nextRoutes = require('next-routes')
const routes = module.exports = nextRoutes()

// Add CRUD routes here just call addResource method
addResource(routes, 'files');

// about  about     /about
// .add('blog', '/blog/:slug')                         // blog   blog      /blog/:slug
// .add('user', '/user/:id', 'profile')                // user   profile   /user/:id
// .add('/:noname/:lang(en|es)/:wow+', 'complex')      // (none) complex   /:noname/:lang(en|es)/:wow+
// .add({name: 'beta', pattern: '/v3', page: 'v3'})    // beta   v3        /v3


function addResource(routes, name) {
    routes.add({ name: `${name}-edit'`, pattern: '/files/:id/edit', page: 'files/form' })
    routes.add({ name: `${name}-show'`, pattern: '/files/:id/show', page: 'files/show' })
}