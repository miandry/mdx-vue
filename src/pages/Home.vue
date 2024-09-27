<template>
   <div class="body-content body-content-lg"> <!-- "body-content-lg" add this class if any cards inside this div has "section-to-header" class -->
            <div class="container">
                <!-- Add-card -->
                <WalletHeader/>
                <!-- Add-card -->
                <!-- Feature-section -->
                <div class="feature-section mb-15">
                    <div class="row gx-3">
                        <div class="col col-sm-6 pb-15">
                            <div class="feature-card feature-card-red">
                                <div class="feature-card-thumb">
                                    <i class="flaticon-expenses"></i>
                                </div>
                                <div class="feature-card-details">
                                    <p>Cours du jour</p>
                                    <h3>669 MGA</h3>
                                </div>
                            </div>
                        </div>
                        <div class="col col-sm-6 pb-15">
                            <div class="feature-card feature-card-violet">
                                <div class="feature-card-thumb">
                                    <i class="flaticon-invoice"></i>
                                </div>
                                <div class="feature-card-details">
                                    <p>Total MGA </p>
                                    <h3> 7.500.00 </h3>
                                </div>
                            </div>
                        </div>
                        <div class="col col-sm-6 pb-15">
                            <div class="feature-card feature-card-violet">
                                <div class="feature-card-thumb">
                                    <i class="flaticon-expenses"></i>
                                </div>
                                <div class="feature-card-details">
                                    <p>Reste MGA </p>
                                    <h3> 7.500.00 </h3>
                                </div>
                            </div>
                        </div>
                         <div class="col col-sm-6 pb-15">
                            <div class="feature-card feature-card-violet">
                                <div class="feature-card-thumb">
                                    <i class="flaticon-income"></i>
                                </div>
                                <div class="feature-card-details">
                                    <p>Date </p>
                                    <h3>09/09/2024</h3>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <!-- Feature-section -->
                <!-- Transaction-section -->
                <div class="transaction-section pb-15">
                    <div class="section-header">
                        <h2>Transactions</h2>
                        <div class="view-all">
                            <a href="transactions.html">View All</a>
                        </div>
                    </div>
                    <div class="transaction-card mb-15">
                        <a href="transaction-details.html">
                            <div class="transaction-card-info">
                                <div class="transaction-info-thumb">
                                    <img src="assets/images/user-2.jpg" alt="user">
                                </div>
                                <div class="transaction-info-text">
                                    <h3>Brenda Davis</h3>
                                    <p>Transfer</p>
                                </div>
                            </div>
                            <div class="transaction-card-det negative-number">
                                -$185.00
                            </div>
                        </a>
                    </div>
                    <div class="transaction-card mb-15">
                        <a href="transaction-details.html">
                            <div class="transaction-card-info">
                                <div class="transaction-info-thumb">
                                    <img src="assets/images/user-cm-logo-1.png" alt="user">
                                </div>
                                <div class="transaction-info-text">
                                    <h3>Appstore Purchase</h3>
                                    <p>App Purchase</p>
                                </div>
                            </div>
                            <div class="transaction-card-det">
                                -$159.99
                            </div>
                        </a>
                    </div>
                    <div class="transaction-card mb-15">
                        <a href="transaction-details.html">
                            <div class="transaction-card-info">
                                <div class="transaction-info-thumb">
                                    <img src="assets/images/user-1.jpg" alt="user">
                                </div>
                                <div class="transaction-info-text">
                                    <h3>Martin Neely</h3>
                                    <p>Transfer</p>
                                </div>
                            </div>
                            <div class="transaction-card-det">
                                +$170.00
                            </div>
                        </a>
                    </div>
                    <div class="transaction-card mb-15">
                        <a href="transaction-details.html">
                            <div class="transaction-card-info">
                                <div class="transaction-info-thumb">
                                    <img src="assets/images/user-3.jpg" alt="user">
                                </div>
                                <div class="transaction-info-text">
                                    <h3>Mary McMillian</h3>
                                    <p>Transfer</p>
                                </div>
                            </div>
                            <div class="transaction-card-det">
                                +$2573.00
                            </div>
                        </a>
                    </div>
                </div>
                <!-- Transaction-section -->
            
            </div>
        </div>


        <!-- Ensure this element exists in the DOM -->

     <div class="modal fade" id="addBalance" tabindex="-1" aria-labelledby="addBalance" aria-hidden="true">
            <div class="modal-dialog">
                <div class="modal-content">
                    <div class="container">
                        <div class="modal-header">
                            <div class="modal-header-title">
                                <i class="flaticon-plus color-blue"></i>
                                <h5 class="modal-title">Add Balance</h5>
                            </div>
                            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div class="modal-body">
                            <form>
                                <div class="form-group mb-15">
                                    <label for="input1" class="form-label">From</label>
                                    <input type="email" class="form-control" id="input1" placeholder="Payoneer Account">
                                </div>
                                <div class="form-group mb-15">
                                    <label for="input2" class="form-label">Enter Amount</label>
                                    <input type="email" class="form-control" id="input2" placeholder="$ 458.00">
                                </div>
                                <div class="form-group mb-15">
                                  <label for="formFile" class="form-label">Default file input example</label>
                                  <input class="form-control" type="file" id="formFile">
                                      <div v-if="imageUrl">
                                        <img :src="imageUrl" alt="Preview Image" />
                                      </div>
                                </div>
                                <button type="submit" class="btn main-btn main-btn-lg full-width">Deposit</button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>

</template>

<script>
import WalletHeader from "../components/home/WalletHeader.vue";

export default {
 name: 'Home',
 components: {
    WalletHeader
  },
};


</script>
