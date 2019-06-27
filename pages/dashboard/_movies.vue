<template>
    <div>
      <button class="button field is-info" 
        @click="modalCreate = true"
        :disabled="checkedRows.length > 0">
        <b-icon icon="upload"></b-icon>
        <span>Agregar</span>
      </button>

      <button class="button field is-success" 
        @click="update()"
        :disabled="checkedRows.length !== 1">
        <b-icon icon="close"></b-icon>
        <span>Actualizar</span>
      </button>

      <button class="button field is-danger" 
        @click="_delete()"
        :disabled="!checkedRows.length">
        <b-icon icon="close"></b-icon>
        <span>Eliminar</span>
      </button>

      <b-table 
        :data="movies"
        :checked-rows.sync="checkedRows"
        :paginated="isPaginated"
        :per-page="perPage"
        :current-page.sync="currentPage"
        :pagination-simple="isPaginationSimple"
        :default-sort-direction="defaultSortDirection"
        default-sort="columns.tags"
        aria-next-label="Next page"
        aria-previous-label="Previous page"
        aria-page-label="Page"
        aria-current-label="Current page"
        checkable>
          <template slot-scope="props">
            <b-table-column field="props.row.tags" label="tags">
              <p v-for="(item, index) in props.row.tags" :key="index">
                {{ item }}
              </p>
            </b-table-column>
            <b-table-column field="props.row.score" label="score" sortable>
              {{ props.row.score }}
            </b-table-column>
            <b-table-column field="props.row.title" label="title" sortable>
              {{ props.row.title }}
            </b-table-column>
            <b-table-column field="props.row.sipnosis" label="sipnosis" width="180" sortable>
              {{ props.row.sipnosis }}
            </b-table-column>
            <b-table-column field="props.row.category" label="category" sortable>
              {{ props.row.category }}
            </b-table-column>
            <b-table-column field="props.row.slug" label="slug" sortable>
              {{ props.row.slug }}
            </b-table-column>
            <b-table-column field="props.row.image" label="image" sortable>
              <img :src="props.row.image" :alt="props.row.slug">
            </b-table-column>
            <b-table-column field="props.row.poster" label="poster" sortable>
               <img :src="props.row.poster" :alt="props.row.poster">
            </b-table-column>
            <b-table-column field="props.row.url" label="url">
              {{ props.row.url }}
            </b-table-column>
          </template>

      </b-table>
      <b-modal :active.sync="modalCreate" has-modal-card>
        <form-movie v-bind:movie="checkedRows"/>
      </b-modal>
    </div>
</template>

<script>
  import FormMovie from '~/components/FormMovie'
  import { mapState, mapMutations, mapActions, mapGetters } from 'vuex'
  import { base } from '../../plugins/base'
  export default {
    mixins: [ base ],
    components: {
      FormMovie
    },
    data() {
        return {
            modalCreate: false,
            isPaginated: true,
            isPaginationSimple: false,
            defaultSortDirection: 'asc',
            currentPage: 50,
            perPage: 50,
            formMovie: {
              title: 'evan@you.com',
              subtitle: 'testing',
              description: '',
              url: '',
              points: '',
              categories: []
            },
            checkedRows: [],
        }
    },
    computed: {
      ...mapGetters(['movies'])
    },
    async asyncData ({ store }) {
      if(store.getters['movies'].length === 0){
        await store.dispatch('get_movies')
      }
    },
    methods: {
      async update() {
        this.modalCreate = true
      },
      async _delete() {
        await this.checkedRows.map(e => {
          this.$store.dispatch('delete_movies', e)
        })
        this.checkedRows = [] 
      }
    }
  }
</script>

<style>
  .table-wrapper {
    overflow-x: auto;
  }
  td.sipnosis {
    width: 120px;
  }
</style>

