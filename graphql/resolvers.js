module.exports = {
    Query: {
        hello: () => 'world',
        books: () => {
            return [
                { id: 1, title: "test 1" },
                { id: 2, title: "test 2" },
                { id: 3, title: "test 3" },
                { id: 4, title: "test 4" },
            ]
        },
        book: (root, { id }) => {
            return { id: 4, title: "test 1" };
        }
    }
};;