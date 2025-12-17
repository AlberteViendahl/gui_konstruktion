<script>
import plus from "@/assets/icons/plus.svg";
import edit from "@/assets/icons/edit-icon.svg";
export default {
  name: "AddProductForm",
  data() {
    return {
      plusSvgPath: plus,
      editSvgPath: edit,
      newProduct: {
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
    async createProduct(event) {
      try {
        event.preventDefault();
        const response = await fetch("http://localhost:8080/api/products", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(this.newProduct),
        });
        if(response.ok){
          return createdProduct = await response.json();
        }

      } catch(error){
        console.log(error);
      }
    },
  },
};
</script>
<template>
  <button type="button" @click.stop class="custom-btn" data-bs-toggle="modal" data-bs-target="#addProductModal">
    <img :src="plusSvgPath" alt="Plus ikon" class="plus-icon rounded-circle bg-primary p-3" />
  </button>
  <!-- Modal -->
  <div class="modal fade" id="addProductModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true" @click.stop>
    <div class="modal-dialog modal-dialog-centered" @click.stop>
      <div class="modal-content" @click.stop>
        <form name="addProductForm" class="p-3" @submit="createProduct">
          <div class="mb-3">
            <label for="prodName" class="form-label">Produktnavn</label>
            <input type="text" v-model="newProduct.prodName" class="form-control" id="prodName" name="prodName" aria-describedby="prodName" aria-label="Skriv navn på produktet" placeholder="Skriv navn på produktet" />
          </div>
          <div class="mb-3">
            <label for="prodDesc" class="form-label">Produktbeskrivelse</label>
            <input type="text" v-model="newProduct.prodDesc" class="form-control" id="prodDesc" name="prodDesc" aria-describedby="prodDesc" aria-label="Lægg til en beskrivelse af produktet" placeholder="Lægg til en beskrivelse af produktet"/>
          </div>
          <div class="mb-3">
            <label for="prodAmount" class="form-label">Antall enheder</label>
            <input type="number" v-model="newProduct.prodAmount" class="form-control" id="prodAmount" name="prodAmount" aria-describedby="prodAmount" aria-label="Sæt antall enheder af dit produkt" placeholder="Sæt antall enheder af dit produkt"/>
          </div>
          <div class="mb-3">
            <label for="prodPrice" class="form-label">Pris</label>
            <input type="number" v-model="newProduct.prodPrice" class="form-control" id="prodPrice" name="prodPrice" aria-describedby="prodPrice" aria-label="Sæt prisen for dit produkt" placeholder="Sæt prisen for dit produkt"/>
          </div>
          <div class="mb-3">
            <label for="prodLocation" class="form-label">Lokation</label>
            <input type="text" v-model="newProduct.prodLocation" class="form-control" id="prodLocation" name="prodLocation" aria-describedby="prodLocation" aria-label="Sæt lokation for dit produkt" placeholder="Sæt lokation for dit produkt"/>
          </div>
          <button data-bs-toggle="modal" type="submit" class="btn btn-primary" aria-label="Opret nyt produkt">Lægg til produkt</button>
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
