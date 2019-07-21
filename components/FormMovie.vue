<template>
	<form v-on:submit.prevent="savemovie" enctype="multipart/form-data">
		<div class="modal-card">
			<section class="modal-card-body">
        <div class="columns is-multiline">
          <div class="column is-12">
            <b-field label="Título">
              <b-input
                name="title"
                type="text"
                placeholder="Título"
                v-model="movie.title"
                required
              />
            </b-field>
          </div>
          <div class="column is-12">
            <b-field label="Sipnosis">
              <b-input 
                name="sipnosis"
                type="textarea"
                v-model="movie.sipnosis"
                minlength="10"
                maxlength="500"
                placeholder="Descripción de película, serie o anime">
              </b-input>
            </b-field>
            
          </div>
          <div class="column is-6">
            <b-field>
              <b-select placeholder="Categoría" icon="earth" v-model="movie.category" name="category">
                <option value="movie">Película</option>
                <option value="serie">Serie</option>
                <option value="anime">Anime</option>
              </b-select>
            </b-field>
          </div>

          <div class="column is-6">
            <b-field label="Tags">
              <b-select placeholder="tags" multiple v-model="movie.tags" name="category">
                <option value="Acción">Acción</option>
                <option value="Drama">Drama</option>
                <option value="Comedia">Comedia</option>
                <option value="Misterio">Misterio</option>
                <option value="Terror">Terror</option>
                <option value="Familiar">Familiar</option>  
                <option value="Infantil">Infantil</option>
                <option value="Crimen">Crimen</option> 
                <option value="Historia">Historia</option>
                <option value="Aventura">Aventura</option>
                <option value="Ciencia ficción">Ciencia ficción</option>
              </b-select>
            </b-field>
          </div>

          
          <div class="column is-4">
            <div class="field">
              <div class="file is-info has-name">
                <label class="file-label">
                  <input class="file-input" ref="poster" type="file" name="poster" accept="image/*" placeholder="imagen" @change="handlePoster">
                  <span class="file-cta">
                    <span class="file-icon">
                      <i class="mdi mdi-upload mdi-24px"></i>
                    </span>
                    <span class="file-label">
                      Poster
                    </span>
                  </span>
                  <span class="file-name">
                    {{ movie.poster ? movie.poster.name : movie.poster }}
                  </span>
                </label>
              </div>
            </div>
          </div>

          <div class="column is-4">
            <div class="field">
              <div class="file is-info has-name">
                <label class="file-label">
                  <input class="file-input" ref="image" type="file" name="image" accept="image/*" placeholder="Imágen principal" @change="handleImage">
                  <span class="file-cta">
                    <span class="file-icon">
                      <i class="mdi mdi-upload mdi-24px"></i>
                    </span>
                    <span class="file-label">
                      Imagen
                    </span>
                  </span>
                  <span class="file-name">
                    {{ movie.image ? movie.image.name : movie.image }}
                  </span>
                </label>
              </div>
            </div>
          </div>
          <div class="column is-4">
            <div class="field">
              <div class="file is-info has-name">
                <label class="file-label">
                  <input class="file-input" ref="video" type="file" name="video" accept="video/*" placeholder="Video" @change="handleVideo">
                  <span class="file-cta">
                    <span class="file-icon">
                      <i class="mdi mdi-upload mdi-24px"/>
                    </span>
                    <span class="file-label">
                      Video
                    </span>
                  </span>
                  <span class="file-name">
                    {{ movie.video ? movie.video.name : movie.video }}
                  </span>
                </label>
              </div>
            </div>
          </div>
        </div>
			</section>
			<footer class="modal-card-foot">
        <button class="button" type="button" @click="$parent.close()">Cerrar</button>
        <button class="button is-info">Guardar</button>
			</footer>
      <b-loading :is-full-page="isFullPage" :active.sync="isLoading" :canCancel="false" :can-cancel="false"> <div class="loading-icon percent"> {{ percent }} % </div>  </b-loading>
      <progress v-if="isLoading" class="progress is-danger" :value="percent" max="100">{{percent}}%</progress>
    </div>
	</form>
</template>

<script>
import api from '../plugins/api'
import { mapState, mapMutations, mapActions, mapGetters } from 'vuex'
export default {
  props: ['update'],
	data () {
		return {
			movie: {
        title: '',
        sipnosis: '',
        video:'',
        image: '',
        poster: '',
        tags:[],
      },
      percent: 0,
      isLoading: false,
      isFullPage: false,
		}
  },
  mounted() {
    if(this.$attrs.movie[0]) {
      this.movie = this.$attrs.movie[0] 
    }
  },
	methods: {
		async savemovie () {
      const formData = new FormData()
      formData.append('title', this.movie.title)
      formData.append('sipnosis', this.movie.sipnosis)
      formData.append('category', this.movie.category)
      formData.append('poster', this.movie.poster)
      formData.append('video', this.movie.video)
      formData.append('image', this.movie.image)
      formData.append('tags', this.movie.tags)

      this.isLoading = true
			let resp = await api.post('/movie', formData, { onUploadProgress: uploadEvent => {
          let percent = parseInt( Math.round( ( uploadEvent.loaded * 100 ) / uploadEvent.total ) )
          this.percent = percent
        }
      })
      
      this.$store.commit('add_movie', resp.data)
      this.$parent.close()
      this.movie = {}
      this.isLoading = false
      this.$toast.open({
				message: `Contenido guardado`,
				type: 'is-success',
				position: 'is-bottom'
      })
    },
    handleImage(e){
      this.movie.image = this.$refs.image.files[0]
    },
    handlePoster(e) {
      this.movie.poster = this.$refs.poster.files[0]
    },
    handleVideo(e) {
      this.movie.video = this.$refs.video.files[0]
    },
  }
}
</script>

<style>
  .percent {
    position: relative;
    font-weight: 600;
    font-size: 1.8em;
    color: #2196F3;
  }
  progress.progress {
    position: fixed;
    left: 0;
    top: 0;
    z-index: 9;
  }
</style>
