<template>
    <div class="profile">
        hello world
    </div>
</template>

<script>
    export default {
        name: 'profile',
        data() {
            return {
            }
        },
        components: {
        },
        computed: {
            info() {
                return this.$store.state.userInfo
            },
        },
        methods: {
        },
        mounted() {
        }
    }

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>