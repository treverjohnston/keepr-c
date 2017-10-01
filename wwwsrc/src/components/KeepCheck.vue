<template>
    <div class="keepcheck">
        <!-- <v-layout class="elevation-24"> -->
        <v-card>
            <v-flex xs12>
                <img :src="item.url" class="img img-responsive">
            </v-flex>
            <v-flex xs12>
                <v-card-title primary-title class="text-xs-center">
                    <h3 class="headline mb-0">What vault do you want to keep this in?</h3>
                </v-card-title>
                <v-card-title primary-title class="text-xs-center">
                    <div v-for="vault in user.vaults">
                        <v-flex xs12>
                            <p class="vault">{{vault}}</p>
                        </v-flex>
                    </div>
                    <v-card-actions>
                        <v-btn icon>
                            <v-icon>library_add</v-icon>
                            <p>Add a new vault</p>
                        </v-btn>
                    </v-card-actions>
                </v-card-title>
            </v-flex>
        </v-card>
        <!-- </v-layout> -->
    </div>
</template>

<script>
    export default {
        name: 'keepcheck',
        data() {
            return {
            }
        },
        components: {
        },
        computed: {
            item() {
                return this.$store.state.current;
            },
            user() {
                return this.$store.state.info;
            }
        },
        methods: {
        }
    }
</script>
<style scoped>
    .img {
        width: 100%;
        /* height: 100%; */
        /* max-height: 60vh;
    min-height: 50vh; */
    }
</style>