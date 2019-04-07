const nextRoutes = require('next-routes')
const routes = module.exports = nextRoutes()

// routes.add({ name: 'file-create', pattern: '/files/create', page: 'files/form' })
routes.add({ name: 'files-edit', pattern: '/files/:id/edit', page: 'files/form' })
routes.add({ name: 'files-show', pattern: '/files/:id', page: 'files/show' })
routes.add({ name: 'files-create', pattern: '/files/create', page: 'files/create' })






// about  about     /about
// .add('blog', '/blog/:slug')                         // blog   blog      /blog/:slug
// .add('user', '/user/:id', 'profile')                // user   profile   /user/:id
// .add('/:noname/:lang(en|es)/:wow+', 'complex')      // (none) complex   /:noname/:lang(en|es)/:wow+
// .add({name: 'beta', pattern: '/v3', page: 'v3'})    // beta   v3        /v3