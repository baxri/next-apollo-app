const nextRoutes = require('next-routes')
const routes = module.exports = nextRoutes()

routes.add({ pattern: '/files/create', page: 'files/form' })
routes.add({ pattern: '/files/:id/edit', page: 'files/form' })
routes.add({ pattern: '/files/:id', page: 'files/show' })






// about  about     /about
// .add('blog', '/blog/:slug')                         // blog   blog      /blog/:slug
// .add('user', '/user/:id', 'profile')                // user   profile   /user/:id
// .add('/:noname/:lang(en|es)/:wow+', 'complex')      // (none) complex   /:noname/:lang(en|es)/:wow+
// .add({name: 'beta', pattern: '/v3', page: 'v3'})    // beta   v3        /v3