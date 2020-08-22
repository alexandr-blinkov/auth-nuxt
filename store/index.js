import uuid from 'uuid/v4'

export const state = () => ({

})
export const getters = {
    loggedInUser(state) {
        return state.auth.user
    }
}
export const actions = {
    async saveUser(context, {
        username,
        email,
        password,
        photo
    }) {
        const data = {
            id: uuid(),
            username,
            email,
            password,
            photo,
            timestamp: new Date().getTime()
        }
        try {
            await this.$axios.post('/api/register', data)
        } catch (error) {
            console.error(error)
        }
    }
}