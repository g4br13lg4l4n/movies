export const base = {
  data() {
    return {
      base_url: '',
    }
  },
  mounted() {
    this.base_url = process.env.NODE_ENV !== 'production' ? 'http://localhost:3001' : 'http://digitalfilms.us:3001'
  }
}