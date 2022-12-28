<template>
  <div class="wrapper">
    <h2 class="title" v-show="posts.length">Create Post</h2>
    <form @submit.prevent>
      <input
        :value="newTitle"
        @input="newTitleHandler"
        class="text-field"
        type="text"
        placeholder="Title"
      />
      <textarea
        :value="newDescription"
        @input="newDescriptionHandler"
        class="text-field"
        type="text"
        placeholder="Description"
      />
      <button @click="createPost" class="add-button">Add</button>
    </form>
    <h2 class="title" v-show="posts.length">Posts</h2>
    <div class="post" v-for="post in posts" :key="post.id">
      <div><strong>Title:</strong> {{ post.title }}</div>
      <div><strong>Description: </strong> {{ post.description }}</div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      posts: [
        {
          id: 1,
          title: "The Cheesecake Factory: Use humor and great photos",
          description:
            "The Cheesecake Factory is an American chain of restaurants, localized around the world. If you’re not familiar with it, you may recognize the name from the hit series The Big Bang Theory. They have a large following on Facebook and regularly post about food that’s on their menu.",
        },
        {
          id: 2,
          title: "Tony’s Chocolonely: Show people what’s happening",
          description:
            "Tony Chocolonely is a Dutch company that sells chocolate. Their chocolate bars are quite popular and their mission is to make chocolate 100% slave-free. As they are opinionated, which fits their mission, they often get a lot of engagement on their social posts. A year ago they opened a Chocolate Bar in Amsterdam.",
        },
        {
          id: 3,
          title: "LEGO: Involve your fans and let them get creative",
          description:
            "LEGO has lots of fans around the globe. And a product that people can easily get creative with. For Pride Month they asked people to create something that reflects pride. From all of the pictures they received, they chose a few highlights to share with everyone on Facebook.",
        },
      ],
      newTitle: "",
      newDescription: "",
    };
  },
  methods: {
    createPost() {
      const newPost = {
        id: Date.now(),
        title: this.newTitle,
        description: this.newDescription,
      };
      this.posts.push(newPost);
      this.newTitle = "";
      this.newDescription = "";
    },
    newTitleHandler(event) {
      this.newTitle = event.target.value;
    },
    newDescriptionHandler(event) {
      this.newDescription = event.target.value;
    },
  },
};
</script>

<style>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: Arial, Helvetica, sans-serif;
}

.wrapper {
  max-width: 50%;
  margin: 0 auto;
}

.title {
  padding-top: 15px;
  text-align: center;
}

.post {
  border: 2px solid slateblue;
  padding: 10px;
  margin-top: 15px;
}

.text-field {
  display: block;
  width: 40%;
  max-width: 40%;
  margin: 0 auto;
  margin-top: 20px;
  padding: 10px;
}

.add-button {
  display: block;
  margin: 0 auto;
  margin-top: 10px;
  padding: 5px 30px;
  background-color: transparent;
  border: 1px solid rgb(119, 24, 209);
  border-radius: 5px;
  font-size: 20px;
  color: rgb(119, 24, 209);
  cursor: pointer;
}
</style>
