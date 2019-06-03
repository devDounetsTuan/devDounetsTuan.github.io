<template>
  <div class="products">
    <h1>Add a new product</h1>
    <div class="card">
      <div class="card-body">
        <form class="form-inline" v-on:submit.prevent="onSubmit">
          <div class="form-group">
            <label>Title</label>
            <input
              v-model="book.title"
              type="text"
              class="form-control ml-sm-2 mr-sm-4 my-2"
              required
            >
          </div>
          <div class="form-group">
            <label>Author</label>
            <input
              v-model="book.author"
              type="text"
              class="form-control ml-sm-2 mr-sm-4 my-2"
              required
            >
          </div>
          <div class="form-group">
            <label>Price</label>
            <input
              v-model="book.price"
              type="text"
              class="form-control ml-sm-2 mr-sm-4 my-2"
              required
            >
          </div>
          <div class="ml-auto text-right">
            <button type="submit" class="btn btn-primary my-2">Add</button>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>
<script>
import firebase from "../firebase";
import router from "../router";
export default {
  name: "Add Book",
  data() {
    return {
      book: {},
      ref: firebase.firestore().collection("books")
    };
  },
  methods: {
    onSubmit(evt) {
      evt.preventDefault();
      this.ref.add(this.book).then(() => {
        router.push({
          name: "BookList"
        });
      });
    }
  }
};
</script>