<script>
import trash from '@/assets/icons/trash3.svg';

export default {
  name: 'DeleteProductForm',
  props: {
    id: [String, Number] // accept both string and number
  },
  emits: ['productDeleted'], //
  data() {
    return {
      trashIcon: trash,
    };
  },
  methods: {
    async deleteProduct(event) {
      event.preventDefault();
      try {
        const response = await fetch(
          `https://rebuildapi.onrender.com/api/products/${this.id}`,
          {
            method: 'DELETE',
            headers: {
              'Content-Type': 'application/json',
            },
          }
        );

        if (response.ok) {
          this.$emit('productDeleted', this.id);
        }
      } catch (error) {
        console.log(error);
      }
    },
  },
};
</script>


<template>
    <button type="button" @click.stop class="custom-btn" data-bs-toggle="modal" :data-bs-target="`#deleteProductModal-${id}`">
        <img :src="trashIcon" alt="Trash-icon." class="trash-icon bg-danger rounded-circle p-1"> 
      </button>

      <!-- Modal -->
      <div class="modal fade" :id="`deleteProductModal-${id}`" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true" @click.stop>
          <div class="modal-dialog modal-dialog-centered" @click.stop>
              <div class="modal-content" @click.stop>
                    <form name="addProductForm" class="p-3 d-flex flex-column align-items-center" @submit="deleteProduct">
                            <p>Er du sikker på at du vil slette dette produktet?</p>
                            <button type="submit" class="btn btn-danger" data-bs-toggle="modal">Delete</button>
                    </form>
              </div>
          </div>
      </div>
</template>

<style lang="scss" scoped>

.custom-btn {
  background-color: transparent;
  border: none;
}

.trash-icon {
  fill: red;
}
</style>