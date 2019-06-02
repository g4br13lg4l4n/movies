import Vue from 'vue'
import VueProgressBar from 'vue-progressbar'

const options = {
  color: '#3173db',
  failedColor: '#ed3c5e',
  thickness: '5px',
  transition: {
    speed: '0.2s',
    opacity: '0.6s',
    termination: 300
  },
  autoRevert: true,
  location: 'top',
  inverse: false
}

Vue.use(VueProgressBar, options)
