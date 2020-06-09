export default {
    data () {
    return {
        drawer: true,
        items: [
        { title: 'Home', icon: 'mdi-home-city' },
        { title: 'My Account', icon: 'mdi-account' },
        { title: 'Users', icon: 'mdi-account-group-outline' },
        ],
        mini: true,
    }
}
}



  export default {
    data: () => ({
      loading: false,
      selection: 1,
    }),

    methods: {
      reserve () {
        this.loading = true

        setTimeout(() => (this.loading = false), 2000)
      },
    },
  }

 export default {
    data: () => ({
        dialog: false,
    }),
}
