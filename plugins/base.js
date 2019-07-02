export const base = {
  data() {
    return {
      base_url: '',
    }
  },
  mounted() {
    this.base_url = process.env.NODE_ENV !== 'production' ? '//localhost:3001' : 'https://digitalfilms.us:3001'
  }
}