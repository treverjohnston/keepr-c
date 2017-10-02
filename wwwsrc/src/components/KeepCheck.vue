<template>
    <div class="keepcheck">
        <!-- <v-layout class="elevation-24"> -->
        <v-card>
            <!-- <v-flex xs12>
                <img :src="item.url" class="img img-responsive">
            </v-flex> -->
            <v-flex xs12>
                <v-card-title primary-title class="text-xs-center">
                    <h3 class="headline mb-0">What vault do you want to keep this in?</h3>
                </v-card-title>
                <v-card-title primary-title class="text-xs-center">
                    <div v-for="vault in user.myVaults">
                        <v-flex xs12>
                            <p class="vault">{{vault}}</p>
                        </v-flex>
                    </div>
                </v-card-title>
            </v-flex>
            <v-bottom-sheet>
                <v-btn slot="activator" class="purple" dark>
                    <v-icon>library_add</v-icon>
                    <p>Add a new vault</p>
                </v-btn>
                <v-list>
                    <v-form>
                        <v-text-field label="Name" v-model="name" required></v-text-field>
                        <v-text-field label="Description" v-model="description"></v-text-field>
                    </v-form>
                    <v-btn @click="addVault">
                        Add Vault
                    </v-btn>
                </v-list>
            </v-bottom-sheet>
        </v-card>
        <!-- </v-layout> -->
    </div>
</template>

<script>
    export default {
        name: 'keepcheck',
        data() {
            return {
                name: '',
                description: ''
            }
        },
        components: {
        },
        computed: {
            item() {
                return this.$store.state.current;
            },
            user() {
                return this.$store.state.userInfo;
            }
        },
        methods: {
            addVault() {
                var obj = {
                    Name: this.name,
                    Description: this.description,
                    UserId: this.user.id
                }
                this.$store.dispatch('addVault', obj)
            }
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