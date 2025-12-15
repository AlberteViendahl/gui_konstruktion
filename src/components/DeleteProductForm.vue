<script>
    import trash from '@/assets/icons/trash3.svg';

    export default {
        name: 'DeleteProductForm',
        props: {
            id: String
        },
        data(){
            return {
                trashIcon: trash,
            }
        },
        methods: {
            async deleteProduct(event){
                event.preventDefault();
                try {
                    const response = await fetch(`http://localhost:8080/api/products/${this.id}`, {
                        method: 'DELETE',
                        headers: {
                            'Content-Type': 'application/json'
                        }
                    });

                    const deletedProduct = await response.json();
                    console.log('deletedproduct: ', deletedProduct);
                    
                } catch(error) {
                    console.log(error);
                }
            }
        }
    }
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
                            <button type="submit" class="btn btn-danger">Delete</button>
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