<template>
    <div class="login">
        <div v-if="logged">
            <v-container fluid>
                <v-flex xs12>
                    <p>Add New Keep/Vault</p>
                    <v-btn @click="logout">Logout</v-btn>
                </v-flex>
            </v-container>
        </div>
        <div v-else>
            <v-container fluid>
                <v-layout>
                    <v-flex xs12>
                        <v-btn @click.stop="login = true, register = false">Login</v-btn>
                        <v-btn @click.stop="register = true, login = false">Register</v-btn>
                    </v-flex>
                </v-layout>
            </v-container>
            <v-card v-if="register" light class="elevation-0">
                <v-container grid-list-md>
                    <v-layout row wrap>
                        <v-flex xs12>
                            <v-text-field box label="Full Name" v-model="name"></v-text-field>
                        </v-flex>
                        <v-flex xs12>
                            <v-text-field box label="Email address" v-model="email"></v-text-field>
                        </v-flex>
                        <v-flex xs12>
                            <v-text-field name="input-10-1" label="Enter your password" hint="At least 8 characters" v-model="password" min="8" :append-icon="e1 ? 'visibility' : 'visibility_off'"
                                :append-icon-cb="() => (e1 = !e1)" :type="e1 ? 'password' : 'text'" counter></v-text-field>
                        </v-flex>
                        <v-flex xs12>
                            <v-text-field name="input-10-1" label="Confirm your password" hint="At least 8 characters" v-model="confirmPassword" min="8"
                                :append-icon="e1 ? 'visibility' : 'visibility_off'" :append-icon-cb="() => (e1 = !e1)" :type="e1 ? 'password' : 'text'"
                                counter></v-text-field>
                        </v-flex>
                        <v-btn @click="registering">Continue</v-btn>
                    </v-layout>
                </v-container>
            </v-card>
            <v-card v-if="login" light class="elevation-0">
                <v-container grid-list-md>
                    <v-layout row wrap>
                        <v-flex xs12>
                            <v-text-field box label="Email address" v-model="email"></v-text-field>
                        </v-flex>
                        <v-flex xs12>
                            <v-text-field name="input-10-1" label="Enter your password" hint="At least 8 characters" v-model="password" min="8" :append-icon="e1 ? 'visibility' : 'visibility_off'"
                                :append-icon-cb="() => (e1 = !e1)" :type="e1 ? 'password' : 'text'" counter></v-text-field>
                        </v-flex>
                        <v-btn @click="logging">Continue</v-btn>
                    </v-layout>
                </v-container>
            </v-card>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'login',
        data() {
            return {
                login: false,
                register: false,
                e1: true,
                name: '',
                email: '',
                password: '',
                confirmPassword: '',
                loggedIn: false
            }
        },
        components: {
        },
        computed: {
            logged(){
                return this.$store.state.loggedIn
            }
        },
        methods: {
            logging(){
                var obj = {
                    email: this.email,
                    password: this.password
                }
                this.$store.dispatch('login', obj)
            },
            registering(){
                console.log("attempting")
                var obj = {
                    email: this.email,
                    name: this.name,
                    password: this.password,
                    confirmPassword: this.confirmPassword
                }
                this.$store.dispatch('createAccount', obj)
            },
            logout(){
                this.$store.dispatch('logout')
            }
        },
        mounted() {
        }
    }

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>