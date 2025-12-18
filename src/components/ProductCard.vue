<script>
import Grading from "./Grading.vue";
import DeleteProductForm from "./DeleteProductForm.vue";
import UpdateProductForm from "./UpdateProductForm.vue";

export default {
  name: "ProductCard",
  components: {
    Grading,
    DeleteProductForm,
    UpdateProductForm

  },
  props: {
    id: String,
    title: String,
    image: String,
    price: [String, Number],
    quantity: {
      type: [String, Number],
      default: 1, // hvis du ikke sender noget, vises "1" automatisk
    },
    initialLiked: {
      type: Boolean,
      default: false
    },
    myProduct: Boolean
  },
  data() {
    return {
      liked: this.initialLiked,
      prodID: this.id
    };
  },
  methods: {
    goToProduct() {
      this.$router.push({
        name: "SingleViewProduct",
        params: { id: this.id },
      });
    },
    handleDelete(){
      this.$emit('product-deleted');
    },
    // Skifter liked mellem true og false. Dette trigger computed property
    // heartClasses → hjertet skifter mellem fyldt og outline.
    toggleLike() {
      this.liked = !this.liked;
    },
  },
  mounted(){
  }
};
</script>

<template>
<!-- Bootstrap card -->
  <div class="product-card p-2 h-100" @click="goToProduct">
   <!-- Her sættes billedet med justeret højde -->
    <img :src="image" class="card-img-top" :alt="title" />
    <div class="card-body" >
      <div class="d-flex align-items-start justify-content-between">
        <h5 class="card-title d-flex justify-content-between align-items-center">
          {{ title }}
        </h5>
        <Grading grading="A" />
      </div>
      <p class="text"> 
          {{ quantity }} stk 
      </p>
      <div class="d-flex justify-content-between align-items-center">
        <p class="card-text p-0 m-0">
            {{ price }} DKK 
        </p>
        <button class="custom-btn" @click.stop="toggleLike">
          <i v-if="!this.liked" class="bi bi-heart teal"></i>
          <i v-if="this.liked" class="bi bi-heart-fill teal"></i>
        </button>
      </div>

      <DeleteProductForm v-if="$route.path === '/profil'" :id="prodID" @product-deleted="handleDelete"/>
      <UpdateProductForm v-if="$route.path === '/profil'" :id="prodID"/>
    </div>
  </div>
</template>

<style scoped>
.product-card {
  padding: 10px; /* luft inde i kortet */
  border-radius: 0.75rem;
  box-shadow: 0 8px 20px rgba(0, 0, 0, 0.2);
  border: none;
  background-color: #FBF7EF;
}
.card-img-top {
  height: 100px;
  object-fit: cover;
}

/* Fyldt hjerte når liked */
.teal {
  color: #008080; /* fyldt teal */
  cursor: pointer;
}

.custom-btn {
  background-color: transparent;
  border: none;
}

.card-title {
  overflow-wrap: break-word;
}

.trash-icon {
  fill: red;
}

</style>
