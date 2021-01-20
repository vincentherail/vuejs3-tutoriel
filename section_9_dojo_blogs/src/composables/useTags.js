// take in array of posts
// create a new tag
// add the tags of each post to the tag set
// return a single array of tags based on the set

import { ref } from 'vue'

const useTags = (posts) => {

    const tags = ref([])
    // Set est une sorte d'array à entrée unique
    const tagSet = new Set()

    posts.forEach(post => {
        post.tags.forEach(tag => tagSet.add(tag))
    });

    //utilise le spreadoperator pour injecter le set dans l'array tags
    tags.value = [...tagSet]

    return { tags }
}

export default useTags