<template>
  <div class="add-card section-to-header mb-30">
    <div class="add-card-inner">
      <div class="add-card-item add-card-info">
        <p>Total transfer en cours</p>
        <h3>1450 RMB</h3>
      </div>
      <div
        class="add-card-item add-balance"
        data-bs-toggle="modal"
        data-bs-target="#addBalance"
      >
        <a href="#"><i class="flaticon-plus"></i></a>
        <p>Ajout Transfer</p>
      </div>
    </div>
  </div>

  <div
    class="modal fade"
    id="addBalance"
    tabindex="-1"
    aria-labelledby="addBalance"
    aria-hidden="true"
  >
    <div class="modal-dialog">
      <div class="modal-content">
        <div class="container">
          <div class="modal-header">
            <div class="modal-header-title">
              <i class="flaticon-plus color-blue"></i>
              <h5 class="modal-title">Add Balance</h5>
            </div>
            <button
              type="button"
              class="btn-close"
              data-bs-dismiss="modal"
              aria-label="Close"
            ></button>
          </div>
          <div class="modal-body">
            <form  @submit.prevent="submitForm">
              <div class="form-group mb-15">
                  <label for="input1" class="form-label">Select a Client</label>

                <!-- Use Vue-Multiselect component -->
                <multiselect
                  v-model="client"
                  :options="clients"
                  :searchable="true"
                  placeholder="Select a client"
                  label="name"
                  track-by="name"
                >
                </multiselect>
              </div>
              <div class="form-group mb-15">
                <label for="input2" class="form-label">Enter Amount</label>
                <input
                  type="text"
                  v-model="montant"
                  class="form-control"
                  id="input2"
                  placeholder=" 458.00 RMB"
                />
              </div>
              <div class="form-group mb-15">
                <label for="formFile" class="form-label"
                  >Qrcode</label
                >
                <input
                  class="form-control"
                  type="file"
                  @change="onFileChange"
                  id="formFile"
                />
                <div v-if="imageUrl">
                  <img :src="imageUrl" alt="Preview Image" />
                </div>
              </div>
              <button type="submit" class="btn main-btn main-btn-lg full-width">
                Deposit
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import Multiselect from "vue-multiselect";
import "vue-multiselect/dist/vue-multiselect.min.css";  // Import the default CSS
import axios from 'axios';


export default {
  name: "WalletHeader",
  components: {
     Multiselect
  },
  data() {
    return {
      imageUrl: null, // Holds the image URL for preview
      montant: null,
      client: null,
      clients: [
        { name: "United States" },
        { name: "Canada" },
        { name: "United Kingdom" },
        { name: "Germany" },
        { name: "Australia" },
        { name: "India" },
        { name: "Japan" }
      ]
    };
  },
  methods: {
    onFileChange(event) {
      const file = event.target.files[0];
      if (file && file.type.startsWith("image/")) {
        this.imageUrl = URL.createObjectURL(file); // Create a preview URL
      } else {
        this.imageUrl = null; // If no image or incorrect format, remove the preview
      }
    },
    async submitForm() {
    const formData = {
        montant: this.montant,
        image : this.imageUrl,
        client : this.client
      };
      try {
        const response = await axios.post('https://example.com/api/submit', formData);
        this.responseMessage = response.data.message || 'Form submitted successfully!';
      } catch (error) {
        this.responseMessage = 'An error occurred. Please try again.';
        console.error(error);
      }
    }
  },
  beforeUnmount() {
    // Revoke the object URL to free up memory
    if (this.imageUrl) {
      URL.revokeObjectURL(this.imageUrl);
    }
  },
};
</script>
<style>
img {
  max-width: 30%;
}
</style>
