<template>
  <div class="card product-card" @click="goToProduct" style="cursor: pointer;">
    <img :src="image" class="card-img-top" :alt="title">
    <div class="card-body">
      <h6 class="card-title">{{ title }}
        <!-- Rundt ikon uden indhold -->
      <i class="bi bi-circle"> </i></h6>
      <p class="card-text ">{{ quantity }} stk</p>
      <p class="card-text fw-bold">{{ price }} DKK
       <!-- Hjerte ikon med teal fyld ved like -->
        <!-- <i> står oprindeligt for italic i HTML, 
          men i moderne frontend bruges det ofte som et ikonholder.
          den viser <i> et Bootstrap Icon via CSS-klasserne. 
          favorite → egen CSS-klasse, der styrer styling.-->
          <!-- :class er Vue’s binding af dynamiske klasser. 
           @click → binder klik-event til metoden toggleLike()
           .stop → stopper eventet fra at bobbla op. Det betyder, 
           at kortets overordnede klik (fx goToProduct) ikke aktiveres, 
           når man klikker på hjertet.-->
        <i class="favorite bi"
        :class="heartClasses"
        @click.stop="toggleLike"></i>
      </p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ProductCard',
  props: {
    id: String,
    title: String,
    image: String,
    price: [String, Number],
    quantity: { type: [String, Number], default: 1 }
  },
  data() {
    return {
      liked: false, // til at tracke om produktet er favoritter
    }
  },
   computed: {
    // heartClasses - computed property, 
    // der returnerer et objekt med klasser og deres betingelser
    heartClasses() {
      return {
        'bi-heart-fill': this.liked, // fyldt hjerte, hvis liked (true)
        'teal': this.liked,          // teal farve, hvis liked
        'bi-heart': !this.liked      // outline hjerte, hvis ikke liked, uden fyld (false)
      }
    }
  },
  methods: {
    goToProduct() {
      this.$router.push({ 
        name: 'SingleViewProduct', 
        params: { id: this.id } })
    },
    // Skifter liked mellem true og false. Dette trigger computed property 
    // heartClasses → hjertet skifter mellem fyldt og outline.
     toggleLike() {
      this.liked = !this.liked;
    }
  }
}
</script>

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
/* Hjerte ikon styling */
.favorite {
  cursor: pointer;
  float: right;
  font-size: 1.5rem;
  transition: transform 0.2s, color 0.2s;
  color: #008080; /* standard teal */
}

.favorite:hover {
  transform: scale(1.2);
}

/* Fyldt hjerte når liked */
.teal {
  color: #008080; /* fyldt teal */
}
.bi-circle {
  float: right;
}

</style>