<script>
import plus from "@/assets/icons/plus.svg";
import edit from "@/assets/icons/edit-icon.svg";
import pencil from "@/assets/icons/pencil.svg";
export default {
  name: "UpdatedProductForm",
  props: {
    //This allows you to pass either number or string without triggering the prop type warning.
    id: [String, Number]
  },
  data() {
    return {
      plusSvgPath: plus,
      editSvgPath: edit,
      editIcon: pencil,
      product: {
        //prodUserID: 1,
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
      try{
        event.preventDefault();
        //fra api
      const response = await fetch(
        `https://rebuildapi.onrender.com/api/products/${this.id}`,
        //`http://localhost:8080/api/products/${this.id}`,

        {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(this.product),
        }
      );
    
      const updatedProduct = await response.json();
      return updatedProduct;
      
    } catch(error){
      console.log(error);
      }
    },
    async getProduct(event) {
      const response = await fetch(
          `https://rebuildapi.onrender.com/api/products/${this.id}`,
 // `http://localhost:8080/api/products/${this.id}`
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
  <button type="button" @click.stop class="custom-btn" data-bs-toggle="modal" :data-bs-target="`#updateProductModal-${id}`" >
    <img :src="editIcon" alt="Plus ikon" class="" />
  </button>

  <!-- Modal -->
  <div class="modal fade" :id="`updateProductModal-${id}`" tabindex="-1" aria-hidden="true" aria-label="Åpne skema for at opdatere din bruger" @click.stop >
    <div class="modal-dialog modal-dialog-centered" @click.stop>
      <div class="modal-content" @click.stop>
        <form name="addProductForm" class="p-3" @submit="updateProduct">
          <div class="mb-3">
            <label for="prodName" class="form-label">Produktnavn</label>
            <input type="text" v-model="product.prodName" class="form-control" id="prodName" name="prodName" aria-describedby="prodName" aria-label="Skriv nyt navn på produktet" placeholder="Skriv nyt navn på produktet"/>
          </div>
          <div class="mb-3">
            <label for="prodDesc" class="form-label">Beskrivelse</label>
            <input type="text" v-model="product.prodDesc" class="form-control" id="prodDesc" name="prodDesc" aria-describedby="prodDesc" aria-label="Skriv ny produktbeskrivelse på produktet" placeholder="Skriv ny produktbeskrivelse på produktet"/>
          </div>
          <div class="mb-3">
            <label for="prodAmount" class="form-label">Antal</label>
            <input type="number" v-model="product.prodAmount" class="form-control" id="prodAmount" name="prodAmount" aria-describedby="prodAmount" aria-label="Sæt antal enheder af dit produkt" placeholder="Sæt antal enheder af dit produkt"/>
          </div>
          <div class="mb-3">
            <label for="prodPrice" class="form-label">Pris</label>
            <input type="number" v-model="product.prodPrice" class="form-control" id="prodPrice" name="prodPrice" aria-describedby="prodPrice" aria-label="Sæt pris på dit produkt" placeholder="Sæt pris på dit produkt"/>
          </div>
          <div class="mb-3">
            <label for="prodLocation" class="form-label">Lokation</label>
            <input type="text" v-model="product.prodLocation" class="form-control" id="prodLocation" name="prodLocation" aria-describedby="prodLocation" aria-label="Sæt lokation for dit produkt" placeholder="Sæt lokation for dit produkt"/>
          </div>
          <button type="submit" class="btn btn-primary" aria-label="Opdater produkt">Opdater produkt</button>
        </form>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.custom-btn {
  padding: 1px 1px;
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
