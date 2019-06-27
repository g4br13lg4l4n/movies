import Vue from 'vue'
import VueProgressBar from 'vue-progressbar'

const options = {
  color: '#2196F3',
  failedColor: '#2196F3',
  thickness: '5px',
  transition: {
    speed: '0.2s',
    opacity: '0.6s',
    termination: 10000
  },
  autoRevert: true,
  location: 'top',
  inverse: false
}

Vue.use(VueProgressBar, options)
