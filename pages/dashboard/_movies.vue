<template>
    <div>
      <button class="button field is-info" @click="modalCreate = true">
          <b-icon icon="upload"></b-icon>
          <span>Agregar</span>
      </button>
      <b-table :data="data" :columns="columns">
          <b-table-column field="options" label="Options">
            <b-button type="is-danger"
                icon-right="delete">
            </b-button>
            <b-button type="is-success"
                icon-right="update">
            </b-button>
          </b-table-column>
      </b-table>

      <b-modal :active.sync="modalCreate" has-modal-card>
        <form-movie/>
      </b-modal>
    </div>
</template>

<script>
  import FormMovie from '~/components/FormMovie'
  export default {
    components: {
      FormMovie
    },
      data() {
          return {
              modalCreate: false,
              formMovie: {
                title: 'evan@you.com',
                subtitle: 'testing',
                description: '',
                url: '',
                points: '',
                categories: []
              },
              data: [
                  { 'id': 1, 'first_name': 'Jesse', 'last_name': 'Simmons', 'date': '2016-10-15 13:43:27', 'gender': 'Male' },
                  { 'id': 2, 'first_name': 'John', 'last_name': 'Jacobs', 'date': '2016-12-15 06:00:53', 'gender': 'Male' },
                  { 'id': 3, 'first_name': 'Tina', 'last_name': 'Gilbert', 'date': '2016-04-26 06:26:28', 'gender': 'Female' },
                  { 'id': 4, 'first_name': 'Clarence', 'last_name': 'Flores', 'date': '2016-04-10 10:28:46', 'gender': 'Male' },
                  { 'id': 5, 'first_name': 'Anne', 'last_name': 'Lee', 'date': '2016-12-06 14:38:38', 'gender': 'Female' }
              ],
              columns: [
                  {
                      field: 'id',
                      label: 'ID',
                      width: '40',
                      numeric: true
                  },
                  {
                      field: 'first_name',
                      label: 'First Name',
                  },
                  {
                      field: 'last_name',
                      label: 'Last Name',
                  },
                  {
                      field: 'date',
                      label: 'Date',
                      centered: true
                  },
                  {
                      field: 'gender',
                      label: 'Gender',
                  },
                  {
                    field: 'options',
                    label: 'Options',
                  }
              ]
          }
      },
      methods: {
        create() {
          console.log('create')
        }
      }
  }
</script>
