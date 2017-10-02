<template>
    <div class="profile">
        <div v-if="loggedIn">
{{vaults}}
        </div>
        <div v-else>
<h1>Need to log in first</h1>
        </div>
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
            vaults(){
                return this.$store.state.userInfo.myVaults
            },
            loggedIn(){
                return this.$store.state.loggedIn
            }
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