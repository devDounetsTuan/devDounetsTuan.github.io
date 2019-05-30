<template>
  <b-row>
    <b-col cols="12">
      <h2>Books List</h2>
      <table class="table">
        <thead>
          <tr>
            <th scope="col">Product ID</th>
            <th>Product Name</th>
            <th>Product Price</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="books in sortedProducts" v-bind:key="books.id">
            <template v-if="editId == books.id">
              <td>
                <input v-model="editBookData.title" type="text">
              </td>
              <td>
                <input v-model="editBookData.author" type="text">
              </td>
              <td>
                <input v-model="editBookData.price" type="text">
              </td>
              <td>
                <span class="icon">
                  <b-btn @click="onEdit(books.id)" class="fa fa-check">Accept</b-btn>
                </span>
                <span class="icon">
                  <b-btn @click="onCancel" class="fa fa-ban">Cancel</b-btn>
                </span>
              </td>
            </template>
            <template v-else>
              <td>{{books.title}}</td>
              <td>{{books.author}}</td>
              <td>{{books.price}}</td>
              <td>
                <a href="#" class="icon">
                  <b-btn v-on:click="onDelete(books.id)" class="fa fa-trash">Delete</b-btn>
                </a>
                <a href="#" class="icon">
                  <b-btn v-on:click="onEdit(books)" class="fa fa-pencil">Edit</b-btn>
                </a>
                <router-link
                  :to="{
                      name:'ProductPage', 
                      params:{id: books.id}
                    }"
                  class="icon"
                >
                  <i class="fa fa-eye"></i>
                </router-link>
              </td>
            </template>
          </tr>
        </tbody>
      </table>
    </b-col>
  </b-row>
</template>

<script>
import firebase from "../firebase";
import router from "../router";

export default {
  name: "BookList",
  data() {
    return {
      fields: {
        title: { label: "Title", sortable: true, class: "text-left" },
        author: { label: "Author", sortable: true, class: "text-left" },
        price: { label: "Price", sortable: true, class: "text-left" },
        actions: { label: "Action", class: "text-center" }
      },
      editId: "",
      books: [],
      editBookData: {
        id: "",
        title: "",
        author: "",
        price: ""
      },
      errors: [],
      ref: firebase.firestore().collection("books")
    };
  },
  created() {
    this.ref.onSnapshot(querySnapshot => {
      this.books = [];
      querySnapshot.forEach(doc => {
        this.books.push({
          id: doc.id,
          title: doc.data().title,
          author: doc.data().author,
          price: doc.data().price
        });
      });
    });
  },
  computed: {
    sortedProducts() {
      console.log(this.books.id);
      return this.books.slice().sort((a, b) => {
        return a.title - b.title;
      });
    }
  },
  methods: {
    /* getProducts() {
      firebase.collection("books")
        .get()
        .then(querySnapshot => {
          const books = [];
          const bookArray = [];
          let i = 0;
          querySnapshot.forEach(doc => {
            bookArray.push(doc.data());
            bookArray[i].id = doc.id;
            bookArray.push(bookArray[i]);
            i++;
          });
          this.books = books;
          console.log(books);
        });
    }, */
    onDelete(id) {
      console.log(firebase);
      firebase
        .firestore()
        .collection("books")
        .doc(id)
        .delete();
    },
    onEdit(books) {
      this.editId = books.id;
      this.editBookData.title = books.title;
      this.editBookData.author = books.author;
      this.editBookData.price = books.price;
      console.log(this.editId);
      console.log(this.editBookData.title);
      console.log(this.editBookData.author);
      console.log(this.editBookData.price);
    },
    onCancel(){
      this.editId = '';
      this.editBookData.title = '';
      this.editBookData.author = '';
      this.editBookData.price = '';
    },
    onEditSubmit (id){
      db.collection("products").doc(id).set(this.editProductData);
      this.editId = '';
      this.editBookData.title = '';
      this.editBookData.author = '';
      this.editBookData.price = '';
    }
  }
};
</script>

<style>
.table {
  width: 96%;
  margin: 0 auto;
}
</style>

   <!--  <template v-if="editId == books." slot="actions" scope="row">
          <td>
            <input v-model="editBookData.title" type="text">
          </td>
          <td>
            <input v-model="editBookData.author" type="text">
          </td>
          <td>
            <input v-model="editBookData.price" type="text">
          </td>
          <td>
            <span class="icon">
              <i @click="onEditSubmit(product.id)" class="fa fa-check"></i>
            </span>
            <span class="icon">
              <i @click="onCancel" class="fa fa-ban"></i>
            </span>
          </td>
        </template>

        <template slot="actions" scope="row">
          <b-btn size="sm" v-on:click="onDelete(row.item.key)">Delete</b-btn>
          <b-btn size="sm" v-on:click="onEdit(row.item)">Edit</b-btn>
          <!--   <b-btn size="sm" @click.stop="details(row.item)">Edit</b-btn>
            <b-btn size="sm" @click.stop="details(row.item)">Details</b-btn>-->