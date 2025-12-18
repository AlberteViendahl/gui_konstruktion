<script>
import Grading from "./Grading.vue";
import DeleteProductForm from "./DeleteProductForm.vue";
import UpdateProductForm from "./UpdateProductForm.vue";

export default {
  name: "ProductCard",
  components: {
    Grading,
    DeleteProductForm,
    UpdateProductForm,
  },
  props: {
    id: [String, Number],
    title: String,
    image: String,
    price: [String, Number],
    quantity: {
      type: [String, Number],
      default: 1,
    },
    initialLiked: {
      type: Boolean,
      default: false,
    },
    myProduct: Boolean,
  },
  data() {
    return {
      liked: this.initialLiked,
      prodID: this.id,
    };
  },
  methods: {
    goToProduct() {
      this.$router.push({
        name: "SingleViewProduct",
        params: { id: this.id },
      });
    },
    handleDelete() {
      this.$emit("product-deleted");
    },
    toggleLike() {
      this.liked = !this.liked;
    },
  },
};
</script>

<template>
  <div class="card product-card p-2" @click="goToProduct">
    <img :src="image" class="card-img-top" :alt="title" />

    <div class="card-body d-flex flex-column justify-content-between h-100">
      <div>
        <div class="d-flex align-items-start justify-content-between">
          <h5 class="card-title">{{ title }}</h5>
          <Grading grading="A" />
        </div>
        <p class="text">{{ quantity }} stk</p>
      </div>

      <div class="d-flex justify-content-between align-items-center">
        <p class="card-text p-0 m-0">{{ price }} DKK</p>
        <button class="custom-btn" @click.stop="toggleLike">
          <i v-if="!liked" class="bi bi-heart teal"></i>
          <i v-if="liked" class="bi bi-heart-fill teal"></i>
        </button>
      </div>

      <DeleteProductForm :id="prodID" @product-deleted="handleDelete" />
      <UpdateProductForm :id="prodID" />
    </div>
  </div>
</template>

<style scoped>
.product-card {
  height: 300px;
  border-radius: 0.75rem;
  box-shadow: 0 8px 20px rgba(0, 0, 0, 0.2);
  border: none;
  background-color: #fbf7ef;
}

.card-img-top {
  height: 120px;
  object-fit: cover;
  margin-bottom: 10px;
}

.card-title {
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
}

.teal {
  color: #008080;
  cursor: pointer;
}

.custom-btn {
  background-color: transparent;
  border: none;
}

.card-text,
.text {
  margin: 0;
  padding: 0;
}
</style>
