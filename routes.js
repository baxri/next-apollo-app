const nextRoutes = require('next-routes')
const routes = module.exports = nextRoutes()

routes.add({ name: 'folders-edit', pattern: '/folders/:id/edit', page: 'folders/form' })
routes.add({ name: 'folders-show', pattern: '/folders/:id/show', page: 'folders/show' })


// about  about     /about
// .add('blog', '/blog/:slug')                         // blog   blog      /blog/:slug
// .add('user', '/user/:id', 'profile')                // user   profile   /user/:id
// .add('/:noname/:lang(en|es)/:wow+', 'complex')      // (none) complex   /:noname/:lang(en|es)/:wow+
// .add({name: 'beta', pattern: '/v3', page: 'v3'})    // beta   v3        /v3
