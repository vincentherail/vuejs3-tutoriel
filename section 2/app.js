// création de la Vue app
const app = Vue.createApp({
    data() {
        return {
            url: 'http://www.thenetninja.co.uk',
            books: [
                {title: 'Hey', author: 'GRAND', img: 'assets/1.jpg', isFav: true},
                {title: 'Ho', author: 'PETIT', img: 'assets/2.jpg', isFav: false},
                {title: 'Ha', author: 'MOYEN', img: 'assets/3.jpg', isFav: true}
            ]
        }
    },
    methods: {
        toggleClass(book) {
            book.isFav = !book.isFav
        }
    },
    computed: {
        filteredBooks() {
            return this.books.filter((book) => book.isFav)
        }
    }
})

// montera l'app dans la div  id = app
app.mount('#app')