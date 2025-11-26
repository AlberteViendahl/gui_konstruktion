<script>
import plus from "@/assets/icons/plus.svg";
import edit from "@/assets/icons/edit-icon.svg";
import pencil from "@/assets/icons/pencil.svg";
export default {
  name: "UpdatedProductForm",
  props: {
    id: String,
  },
  data() {
    return {
      plusSvgPath: plus,
      editSvgPath: edit,
      editIcon: pencil,
      product: {
        prodUserID: 1,
        prodName: "",
        prodDesc: "",
        prodCategory: 1,
        prodAmount: 0,
        prodUnitID: 1,
        prodPrice: 0,
        prodGradeID: 1,
        prodLocation: "",
      },
    };
  },
  methods: {
    async updateProduct(event) {
      event.preventDefault();
      const response = await fetch(
        `http://localhost:8080/api/products/${this.id}`,
        {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(this.product),
        }
      );

      const updatedProduct = await response.json();
      console.log(this.product);
      console.log(updatedProduct);
    },
    async getProduct(event) {
      const response = await fetch(
        `http://localhost:8080/api/products/${this.id}`
      );
      this.product = await response.json();
    },
  },
  mounted() {
    this.getProduct();
  },
};
</script>

<template>
  <button
    type="button"
    @click.stop
    class="custom-btn"
    data-bs-toggle="modal"
    :data-bs-target="`#updateProductModal-${id}`"
  >
    <img :src="editIcon" alt="Plus ikon" class="" />
  </button>

  <!-- Modal -->
  <div
    class="modal fade"
    :id="`updateProductModal-${id}`"
    tabindex="-1"
    aria-labelledby="exampleModalLabel"
    aria-hidden="true"
    @click.stop
  >
    <div class="modal-dialog modal-dialog-centered" @click.stop>
      <div class="modal-content" @click.stop>
        <form name="addProductForm" class="p-3" @submit="updateProduct">
          <div class="mb-3">
            <label for="prodName" class="form-label">Produktnavn</label>
            <input
              type="text"
              v-model="product.prodName"
              class="form-control"
              id="prodName"
              name="prodName"
              aria-describedby="prodName"
            />
            <div id="prodNameHelp" class="form-text">
              Produktnavn skal udfyldes
            </div>
          </div>
          <div class="mb-3">
            <label for="prodDesc" class="form-label">Beskrivelse</label>
            <input
              type="text"
              v-model="product.prodDesc"
              class="form-control"
              id="prodDesc"
              name="prodDesc"
              aria-describedby="prodDesc"
            />
          </div>
          <div class="mb-3">
            <label for="prodAmount" class="form-label">Antal</label>
            <input
              type="number"
              v-model="product.prodAmount"
              class="form-control"
              id="prodAmount"
              name="prodAmount"
              aria-describedby="prodAmount"
            />
          </div>
          <div class="mb-3">
            <label for="prodPrice" class="form-label">Pris</label>
            <input
              type="number"
              v-model="product.prodPrice"
              class="form-control"
              id="prodPrice"
              name="prodPrice"
              aria-describedby="prodPrice"
            />
          </div>
          <div class="mb-3">
            <label for="prodLocation" class="form-label">Lokation</label>
            <input
              type="text"
              v-model="product.prodLocation"
              class="form-control"
              id="prodLocation"
              name="prodLocation"
              aria-describedby="prodLocation"
            />
          </div>
          <button type="submit" class="btn btn-primary">Update</button>
        </form>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.custom-btn {
  padding: 1px 1px;
  // background-color: #008080;
  background-color: transparent;
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
