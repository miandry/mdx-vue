<template>
    <div class="body-content">
            <div class="container">
                <!-- Page-header -->
                <div class="page-header">
                    <div class="page-header-title page-header-item">
                        <h3>Sign In To Oban</h3>
                    </div>
                </div>
                <!-- Page-header -->

                <!-- Authentication-section -->
                <div class="authentication-form pb-15">
                    <form>
                        <div class="form-group pb-15">
                            <label>User Name</label>
                            <div class="input-group">
                                <input type="text" name="name" class="form-control" required placeholder="Alicia Williams">
                                <span class="input-group-text"><i class="flaticon-user-picture"></i></span>
                            </div>
                        </div>
                        <div class="form-group pb-15">
                            <label>Password</label>
                            <div class="input-group">
                                <input type="password" name="password" class="form-control password" required placeholder="**********">
                                <span class="input-group-text reveal">
                                    <i class="flaticon-invisible pass-close"></i>
                                    <i class="flaticon-visibility pass-view"></i>
                                </span>
                            </div>
                        </div>
                        <div class="authentication-account-access pb-15">
                            <div class="authentication-account-access-item">
                                <div class="input-checkbox">
                                    <input type="checkbox" id="check1">
                                    <label for="check1">Remember Me!</label>
                                </div>
                            </div>
                            <div class="authentication-account-access-item">
                                <div class="authentication-link">
                                    <a href="forget-password.html" data-bs-toggle="modal" data-bs-target="#resetPassword">Forget password?</a>
                                </div>
                            </div>
                        </div>
                        <button class="btn main-btn main-btn-lg full-width mb-10">Sign In</button>
                        <a href="#" class="btn main-btn main-btn-lg main-btn-red full-width mb-10"><i class="flaticon-google"></i> Sign In With Google</a>
                    </form>
                    <div class="form-desc">Don’t have an account? <a href="sign-up.html">Sign Up Now!</a></div>
                </div>
                <!-- Authentication-section -->
            </div>
        </div>
</template>

<script>

export default {
  name: 'SignIn'
};
</script>
