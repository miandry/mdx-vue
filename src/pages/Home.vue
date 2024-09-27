<template>
   <div class="body-content body-content-lg"> <!-- "body-content-lg" add this class if any cards inside this div has "section-to-header" class -->
            <div class="container">
                <!-- Add-card -->
                <div class="add-card section-to-header mb-30">
                    <div class="add-card-inner">
                        <div class="add-card-item add-card-info">
                            <p>Total transfer en cours</p>
                            <h3>1450  RMB </h3>
                        </div>
                        <div class="add-card-item add-balance" data-bs-toggle="modal" data-bs-target="#addBalance">
                            <a href="#"><i class="flaticon-plus"></i></a>
                            <p>Transfer RMB</p>
                        </div>
                    </div>
                </div>
                <!-- Add-card -->
                <!-- Option-section -->
                <div class="option-section mb-15">
                    <div class="row gx-3">
                        <div class="col pb-15">
                            <div class="option-card option-card-violet">
                                <a href="#" data-bs-toggle="modal" data-bs-target="#withdraw">
                                    <div class="option-card-icon">
                                        <i class="flaticon-down-arrow"></i>
                                    </div>
                                    <p>Withdraw</p>
                                </a>
                            </div>
                        </div>
                        <div class="col pb-15">
                            <div class="option-card option-card-yellow">
                                <a href="#" data-bs-toggle="modal" data-bs-target="#sendMoney">
                                    <div class="option-card-icon">
                                        <i class="flaticon-right-arrow"></i>
                                    </div>
                                    <p>Send</p>
                                </a>
                            </div>
                        </div>
                        <div class="col pb-15">
                            <div class="option-card option-card-blue">
                                <a href="my-cards.html">
                                    <div class="option-card-icon">
                                        <i class="flaticon-credit-card"></i>
                                    </div>
                                    <p>Cards</p>
                                </a>
                            </div>
                        </div>
                        <div class="col pb-15">
                            <div class="option-card option-card-red">
                                <a href="#" data-bs-toggle="modal" data-bs-target="#exchange">
                                    <div class="option-card-icon">
                                        <i class="flaticon-exchange-arrows"></i>
                                    </div>
                                    <p>Exchange</p>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
                <!-- Option-section -->
                <!-- Feature-section -->
                <div class="feature-section mb-15">
                    <div class="row gx-3">
                        <div class="col col-sm-6 pb-15">
                            <div class="feature-card feature-card-red">
                                <div class="feature-card-thumb">
                                    <i class="flaticon-income"></i>
                                </div>
                                <div class="feature-card-details">
                                    <p>Income</p>
                                    <h3>$485.50</h3>
                                </div>
                            </div>
                        </div>
                        <div class="col col-sm-6 pb-15">
                            <div class="feature-card feature-card-blue">
                                <div class="feature-card-thumb">
                                    <i class="flaticon-expenses"></i>
                                </div>
                                <div class="feature-card-details">
                                    <p>Expenses</p>
                                    <h3>$95.50</h3>
                                </div>
                            </div>
                        </div>
                        <div class="col col-sm-6 pb-15">
                            <div class="feature-card feature-card-violet">
                                <div class="feature-card-thumb">
                                    <i class="flaticon-invoice"></i>
                                </div>
                                <div class="feature-card-details">
                                    <p>Total Bills</p>
                                    <h3>$75.00</h3>
                                </div>
                            </div>
                        </div>
                        <div class="col col-sm-6 pb-15">
                            <div class="feature-card feature-card-green">
                                <div class="feature-card-thumb">
                                    <i class="flaticon-savings"></i>
                                </div>
                                <div class="feature-card-details">
                                    <p>Savings</p>
                                    <h3>$285.00</h3>
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
                <!-- Monthly-bill-section -->
                <div class="monthly-bill-section pb-15">
                    <div class="section-header">
                        <h2>Monthly Bills</h2>
                        <div class="view-all">
                            <a href="monthly-bills.html">View All</a>
                        </div>
                    </div>
                    <div class="row gx-3">
                        <div class="col-6 pb-15">
                            <div class="monthly-bill-card monthly-bill-card-green">
                                <div class="monthly-bill-thumb">
                                    <img src="assets/images/cm-logo-1.png" alt="logo">
                                </div>
                                <div class="monthly-bill-body">
                                    <h3><a href="#">Envato.com</a></h3>
                                    <p>Debit Services Subscribtion</p>
                                </div>
                                <div class="monthly-bill-footer monthly-bill-action">
                                    <a href="#" class="btn main-btn">Pay Now</a>
                                    <p class="monthly-bill-price">$99.99</p>
                                </div>
                            </div>
                        </div>
                        <div class="col-6 pb-15">
                            <div class="monthly-bill-card monthly-bill-card-green">
                                <div class="monthly-bill-thumb">
                                    <img src="assets/images/cm-logo-2.png" alt="logo">
                                </div>
                                <div class="monthly-bill-body">
                                    <h3><a href="#">Oban.com</a></h3>
                                    <p>Credit Services Subscribtion</p>
                                </div>
                                <div class="monthly-bill-footer monthly-bill-action">
                                    <a href="#" class="btn main-btn">Pay Now</a>
                                    <p class="monthly-bill-price">$75.00</p>
                                </div>
                            </div>
                        </div>
                        <div class="col-6 pb-15">
                            <div class="monthly-bill-card monthly-bill-card-green">
                                <div class="monthly-bill-thumb">
                                    <img src="assets/images/cm-logo-3.png" alt="logo">
                                </div>
                                <div class="monthly-bill-body">
                                    <h3><a href="#">Nezox.com</a></h3>
                                    <p>Internet Monthly Subscribtion</p>
                                </div>
                                <div class="monthly-bill-footer monthly-bill-action">
                                    <a href="#" class="btn main-btn">Pay Now</a>
                                    <p class="monthly-bill-price">$50.50</p>
                                </div>
                            </div>
                        </div>
                        <div class="col-6 pb-15">
                            <div class="monthly-bill-card monthly-bill-card-green">
                                <div class="monthly-bill-thumb">
                                    <img src="assets/images/cm-logo-4.png" alt="logo">
                                </div>
                                <div class="monthly-bill-body">
                                    <h3><a href="#">Depan.com</a></h3>
                                    <p>Depan Monthly Subscribtion</p>
                                </div>
                                <div class="monthly-bill-footer monthly-bill-action">
                                    <a href="#" class="btn main-btn">Pay Now</a>
                                    <p class="monthly-bill-price">$100.99</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <!-- Monthly-bill-section -->
                <!-- Card-section -->
                <div class="card-section pb-15">
                    <div class="section-header">
                        <h2>My Cards</h2>
                        <div class="view-all">
                            <a href="my-cards.html">View All</a>
                        </div>
                    </div>
                    <div class="payment-image-card pb-15">
                        <img src="assets/images/card-1.png" alt="card">
                        <ul class="payment-uploaded-action">
                            <li>
                                <a href="#" data-bs-toggle="modal" data-bs-target="#viewCard">
                                    <i class="icofont-ui-edit"></i>
                                </a>
                            </li>
                            <li>
                                <a href="#" data-bs-toggle="modal" data-bs-target="#deleteCard">
                                    <i class="flaticon-trash"></i>
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
                <!-- Card-section -->
                <!-- Send-money-section -->
                <div class="send-money-section pb-15">
                    <div class="section-header">
                        <h2>Send Money</h2>
                        <div class="view-all">
                            <a href="#">Add New</a>
                        </div>
                    </div>
                    <div class="row gx-3">
                        <div class="col pb-15">
                            <div class="user-card">
                                <a href="#">
                                    <div class="user-card-thumb">
                                        <img src="assets/images/user-1.jpg" alt="user">
                                    </div>
                                    <h3>Brittany</h3>
                                </a>
                            </div>
                        </div>
                        <div class="col pb-15">
                            <div class="user-card">
                                <a href="#">
                                    <div class="user-card-thumb">
                                        <img src="assets/images/user-2.jpg" alt="user">
                                    </div>
                                    <h3>Jablonski</h3>
                                </a>
                            </div>
                        </div>
                        <div class="col pb-15">
                            <div class="user-card">
                                <a href="#">
                                    <div class="user-card-thumb">
                                        <img src="assets/images/user-4.jpg" alt="user">
                                    </div>
                                    <h3>Patricia</h3>
                                </a>
                            </div>
                        </div>
                        <div class="col pb-15">
                            <div class="user-card">
                                <a href="#">
                                    <div class="user-card-thumb">
                                        <img src="assets/images/user-3.jpg" alt="user">
                                    </div>
                                    <h3>Chancey</h3>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
                <!-- Send-money-section -->
                <!-- Saving-goals-section -->
                <div class="saving-goals-section pb-15">
                    <div class="section-header">
                        <h2>Saving Goals</h2>
                        <div class="view-all">
                            <a href="my-savings.html">View All</a>
                        </div>
                    </div>
                    <div class="progress-card progress-card-red mb-15">
                        <div class="progress-card-info">
                            <div class="circular-progress" data-note="50.85">
                                <svg width="55" height="55" class="circle-svg">
                                    <circle cx="28" cy="27" r="25" class="circle-progress circle-progress-path"></circle>
                                    <circle cx="28" cy="27" r="25" class="circle-progress circle-progress-fill"></circle>
                                </svg>
                                <div class="percent">
                                    <span class="percent-int">0</span>%
                                </div>
                            </div>
                            <div class="progress-info-text">
                                <h3>New Gadget</h3>
                                <p>Lifestyle</p>
                            </div>
                        </div>
                        <div class="progress-card-amount">$250.00</div>
                    </div>
                    <div class="progress-card progress-card-blue mb-15">
                        <div class="progress-card-info">
                            <div class="circular-progress" data-note="25">
                                <svg width="55" height="55" class="circle-svg">
                                    <circle cx="28" cy="27" r="25" class="circle-progress circle-progress-path"></circle>
                                    <circle cx="28" cy="27" r="25" class="circle-progress circle-progress-fill"></circle>
                                </svg>
                                <div class="percent">
                                    <span class="percent-int">0</span>%
                                </div>
                            </div>
                            <div class="progress-info-text">
                                <h3>New Apartment</h3>
                                <p>Living</p>
                            </div>
                        </div>
                        <div class="progress-card-amount">$5000.00</div>
                    </div>
                    <div class="progress-card progress-card-green mb-15">
                        <div class="progress-card-info">
                            <div class="circular-progress" data-note="75">
                                <svg width="55" height="55" class="circle-svg">
                                    <circle cx="28" cy="27" r="25" class="circle-progress circle-progress-path"></circle>
                                    <circle cx="28" cy="27" r="25" class="circle-progress circle-progress-fill"></circle>
                                </svg>
                                <div class="percent">
                                    <span class="percent-int">0</span>%
                                </div>
                            </div>
                            <div class="progress-info-text">
                                <h3>Education</h3>
                                <p>Lifestyle</p>
                            </div>
                        </div>
                        <div class="progress-card-amount">$1250.00</div>
                    </div>
                </div>
                <!-- Saving-goals-section -->
                <!-- Latest-news-section -->
                <div class="latest-news-section pb-15">
                    <div class="section-header">
                        <h2>Latest News</h2>
                        <div class="view-all">
                            <a href="blogs.html">View All</a>
                        </div>
                    </div>
                    <div class="row gx-3">
                        <div class="col-6 pb-15">
                            <div class="blog-card">
                                <div class="blog-card-thumb">
                                    <a href="#">
                                        <img src="assets/images/blogs/blog-1.jpg" alt="blog">
                                    </a>
                                </div>
                                <div class="blog-card-details">
                                    <ul class="blog-entry">
                                        <li>Smith Rob</li>
                                        <li>15 Jan, 2024</li>
                                    </ul>
                                    <h3><a href="#">Financing Loans Available To Small Businesses</a></h3>
                                </div>
                            </div>
                        </div>
                        <div class="col-6 pb-15">
                            <div class="blog-card">
                                <div class="blog-card-thumb">
                                    <a href="#">
                                        <img src="assets/images/blogs/blog-2.jpg" alt="blog">
                                    </a>
                                </div>
                                <div class="blog-card-details">
                                    <ul class="blog-entry">
                                        <li>John Doe</li>
                                        <li>13 Jan, 2024</li>
                                    </ul>
                                    <h3><a href="#">Need Financial Help To Open Your New Business</a></h3>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <!-- Latest-news-section -->
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
                                <button type="submit" class="btn main-btn main-btn-lg full-width">Deposit</button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>

</template>

<script>

export default {
  name: 'Home'
};


</script>
