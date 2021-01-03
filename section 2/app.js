// création de la Vue app
const app = Vue.createApp({
    data() {
        return {
            showBooks: true,
            title: 'The Final Empire',
            author: 'brandon Sanderson',
            age: 45
        }
    },
    methods: {
        toggleShowBooks() {
            this.showBooks = !this.showBooks
        }
    }
})

// montera l'app dans la div  id = app
app.mount('#app')