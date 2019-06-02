<template>
	<form v-on:submit.prevent="savemovie" enctype="multipart/form-data">
		<div class="modal-card">
			<section class="modal-card-body">
				<b-field label="Título">
					<b-input
						name="title"
						type="text"
						placeholder="Título"
						v-model="movie.title"
						required
					/>
				</b-field>

				<b-field label="Sipnosis">
					<b-input 
						name="sipnosis"
						type="textarea"
						v-model="movie.sipnosis"
						minlength="10"
						maxlength="100"
						placeholder="Descripción de película, serie o anime"
						required>
					</b-input>
				</b-field>
        <div class="column is-4">
          <b-field>
            <b-select placeholder="Categoría" icon="earth" v-model="movie.category" name="category">
              <option value="movie">Película</option>
              <option value="serie">Serie</option>
              <option value="anime">Anime</option>
            </b-select>
          </b-field>
        </div>

        <div class="field">
          <div class="file is-info has-name">
            <label class="file-label">
              <input class="file-input" ref="poster" type="file" name="poster" accept="image/*" placeholder="imagen" @change="handlePoster">
              <span class="file-cta">
                <span class="file-icon">
                  <i class="fas fa-upload"></i>
                </span>
                <span class="file-label">
                  Poster
                </span>
              </span>
              <span class="file-name">
                {{ poster ? poster.name : poster }}
              </span>
            </label>
          </div>
        </div>

        <div class="field">
          <div class="file is-info has-name">
            <label class="file-label">
              <input class="file-input" ref="image" type="file" name="image" accept="image/*" placeholder="Imágen principal" @change="handleImage">
              <span class="file-cta">
                <span class="file-icon">
                  <i class="fas fa-upload"></i>
                </span>
                <span class="file-label">
                  Imagen principal
                </span>
              </span>
              <span class="file-name">
                {{ image ? image.name : image }}
              </span>
            </label>
          </div>
        </div>

        <div class="field">
          <div class="file is-info has-name">
            <label class="file-label">
              <input class="file-input" ref="video" type="file" name="video" accept="video/*" placeholder="Video" @change="handleVideo">
              <span class="file-cta">
                <span class="file-icon">
                  <i class="fas fa-upload"></i>
                </span>
                <span class="file-label">
                  Video
                </span>
              </span>
              <span class="file-name">
                {{ video ? video.name : video }}
              </span>
            </label>
          </div>
        </div>
			</section>
			<footer class="modal-card-foot">
					<button class="button" type="button" @click="$parent.close()">Cerrar</button>
					<button class="button is-info">Guardar</button>
			</footer>
		</div>
    <vue-progress-bar></vue-progress-bar>
	</form>
</template>

<script>
import api from '../plugins/api'
export default {
	data () {
		return {
      video:'',
      image: '',
      poster: '',
			movie: {
        title: 'Mi nueva movie',
        sipnosis: 'Lorem Ipsom contenido de texto de ejemplo ',
      }
		}
	},
	methods: {
		async savemovie () {
      const formData = new FormData()
      formData.append('poster', this.poster)
      formData.append('video', this.video)
      formData.append('image', this.image)
      formData.append('title', this.movie.title)
      formData.append('sipnosis', this.movie.sipnosis)
      formData.append('category', this.movie.category)

      this.$Progress.start()
			await api.post('/movie', formData, { onUploadProgress: uploadEvent => {
          this.$Progress.set(this.progress)
        }
      })
      this.$Progress.finish()
      this.$toast.open({
				message: `Contenido guardado`,
				type: 'is-success',
				position: 'is-bottom'
      })
    },
    handleImage(e){
      this.image = this.$refs.image.files[0]
    },

    handlePoster(e) {
      this.poster = this.$refs.poster.files[0]
    },
    handleVideo(e) {
      this.video = this.$refs.video.files[0]
    },
  }
}
</script>
