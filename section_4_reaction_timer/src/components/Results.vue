<template>
    <p>Reaction Time - {{ score }} ms</p>
    <div class="rank">{{ rank }}</div>
</template>

<script>
export default {
    props: ['score'],
    data() {
        return {
            rank : null
        }
    },
    mounted() {
        if(this.score < 250) {
            this.rank = 'Ninja Fingers'
        } else if (this.score < 450) {
            this.rank = 'Ninja Kido'
        } else {
            this.rank = 'Lazy laze'
        }
    }
}
</script>

<style>
  .rank {
    font-size: 1.4em;
    color: #0faf87;
    font-weight: bold;
  }
</style>