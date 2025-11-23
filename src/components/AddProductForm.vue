<script>
import plus from '@/assets/icons/plus.svg';
import edit from '@/assets/icons/edit-icon.svg';
    export default {
        name: 'AddProductForm',
        data(){
            return {
                plusSvgPath: plus,
                editSvgPath: edit,
                newProduct: {
                    prodUserID: 1,
                    prodName: '',
                    prodDesc: '',
                    prodCategory: 1,
                    prodAmount: 0,
                    prodUnitID: 1,
                    prodPrice: 0,
                    prodGradeID: 1,
                    prodLocation: ''
                }
            }
        },
        methods: {
            async createProduct(event){
                event.preventDefault();
                const response = await fetch('http://localhost:8080/api/products', {
                    method: 'POST',
                    headers: {
                    'Content-Type': 'application/json'
                    },
                    body: JSON.stringify(this.newProduct)
                });

                const createdProduct = await response.json();
                console.log(this.newProduct);
                console.log(createdProduct);
            }
        }   
    }
</script>

<template>
    <button type="button" @click.stop class="custom-btn" data-bs-toggle="modal" data-bs-target="#addProductModal">
      <img :src="plusSvgPath" alt="Plus ikon" class="plus-icon rounded-circle bg-primary p-3"> 
    </button>

    <!-- Modal -->
    <div class="modal fade" id="addProductModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true" @click.stop>
        <div class="modal-dialog modal-dialog-centered" @click.stop>
            <div class="modal-content" @click.stop>
                      <form name="addProductForm" class="p-3" @submit="createProduct">
                              <div class="mb-3">
                                  <label for="prodName" class="form-label">prodName</label>
                                  <input type="text" v-model="newProduct.prodName" class="form-control" id="prodName" name="prodName" aria-describedby="prodName">
                                  <div id="prodNameHelp" class="form-text">Enter name of product</div>
                              </div>
                              <div class="mb-3">
                                  <label for="prodDesc" class="form-label">prodDesc</label>
                                  <input type="text" v-model="newProduct.prodDesc" class="form-control" id="prodDesc" name="prodDesc" aria-describedby="prodDesc">
                              </div>
                              <div class="mb-3">
                                  <label for="prodAmount" class="form-label">prodAmount</label>
                                  <input type="number" v-model="newProduct.prodAmount" class="form-control" id="prodAmount" name="prodAmount" aria-describedby="prodAmount">
                              </div>
                              <div class="mb-3">
                                  <label for="prodPrice" class="form-label">prodPrice</label>
                                  <input type="number" v-model="newProduct.prodPrice" class="form-control" id="prodPrice" name="prodPrice" aria-describedby="prodPrice">
                              </div>
                              <div class="mb-3">
                                  <label for="prodLocation" class="form-label">prodLocation</label>
                                  <input type="text" v-model="newProduct.prodLocation" class="form-control" id="prodLocation" name="prodLocation" aria-describedby="prodLocation">
                              </div>
                              <button type="submit" class="btn btn-primary">Create</button>
                      </form>
            </div>
        </div>
    </div>
</template>

<style lang="scss" scoped>
    .custom-btn {
        padding: 1px 1px;
        background-color: #008080;
        border: none;
        border-radius: 50%;
        display: flex;
        align-items: center;
        justify-content: center;
        position: sticky;
        bottom: 80px;
        left: 100%;
    }
</style>