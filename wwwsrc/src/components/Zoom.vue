<template>
    <div class="zoom">
        <v-layout class="elevation-24">
            <v-flex xs12 sm6>
                <img :src="item.url" class="img img-responsive">
            </v-flex>
            <v-flex xs12 sm6 offset-sm2>
                <v-card-title primary-title class="text-xs-center">
                    <h3 class="headline mb-0">{{item.author}}</h3>
                </v-card-title>
                <v-card-title primary-title class="text-xs-center">
                    <div v-for="tag in item.tags">
                        <v-flex xs12>
                            <p class="tag">{{tag}}</p>
                        </v-flex>
                    </div>
                </v-card-title>
                <v-card-actions>
                    <v-btn icon>
                        <v-icon>library_add</v-icon>
                    </v-btn>
                    <v-btn icon>
                        <v-icon>share</v-icon>
                    </v-btn>
                    <v-icon small>play_for_work</v-icon>
                    <p>{{item.keeps}}</p>
                    <v-icon small>visibility</v-icon>
                    <p>{{item.views}}</p>
                </v-card-actions>
            </v-flex>
        </v-layout>
    </div>
</template>

<script>
    export default {
        name: 'zoom',
        data() {
            return {
            }
        },
        components: {
        },
        computed: {
            item() {
                return this.$store.state.current;
            }
        },
        methods: {
        }
    }

</script>
<style scoped>
    .tag {
        margin-right: 1rem;
    }

    .img {
        max-width: 100%;
        /* max-height: 60vh;
    min-height: 50vh; */
    }
</style>