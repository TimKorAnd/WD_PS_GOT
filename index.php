<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <link rel="stylesheet" href="style.css">
  <link href="https://fonts.googleapis.com/css?family=Open+Sans" rel="stylesheet">

  <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.3.1/jquery.min.js"></script>
<!--  slick-slider-->
  <link rel="stylesheet" type="text/css" href="https://cdn.jsdelivr.net/npm/slick-carousel@1.8.1/slick/slick.css"/>
  <link rel="stylesheet" type="text/css" href="./plugins/slick-slider-1.8.1/slick-theme.css"/>
  <script type="text/javascript" src="https://cdn.jsdelivr.net/npm/slick-carousel@1.8.1/slick/slick.min.js"></script>
<!--  select2-->
  <link href="https://cdnjs.cloudflare.com/ajax/libs/select2/4.0.8/css/select2.min.css" rel="stylesheet" />


  <title>GOT Form</title>
</head>
<body>
<div class="container">
  <section class="great-house-logo-panel">
    <div class="houses-slider" id="houses-slider">
<!--there are elems will created from js createHousesElemsInSlider($houseSlider);-->
    </div>
  </section>
  <section class="nav-panel">
    <form class="nav-panel__form" id ="reg-form-1" name="form_1">
      <p class="nav-panel__head-title block-element">GAME&nbsp;OF&nbsp;THRONES</p>
      <label class="input__label block-element" for="user-email">Enter your e-mail:</label>
      <input class="nav-panel__input block-element" type="email" name="email" id="user-email"
             placeholder="arya@westeros.com">
      
      <label class="input__label block-element" for="user-password"
             title="should contain at least one upper case letter, one low case letter and one digit">
        Choose secure password:
      </label>
      <small class="nav-panel__small block-element"
            title="should contain at least one upper case letter, one low case letter and one digit">
            Must be at least 8 characters
      </small>
      <input class="nav-panel__input block-element" type="password" name="psw" id="user-password"
             placeholder="password"
             title="should contain at least one upper case letter, one low case letter and one digit">
      
      <div class="nav-panel__custom-checkbox">
        <input type="checkbox" class="nav-panel__checkbox block-element" name="remember-me"
               value="Remember me" id="remember-me-checkbox">
        <label for="remember-me-checkbox" class="nav-panel__label-checkbox block-element">Remember me</label>
      </div>
      <input type="submit" class="nav-panel__submit-button block-element" id="form-1__submit-button" value="Sign up">
    </form>
    <form class="nav-panel__form hidden" id="reg-form-2" action="" name="form-2">
      <p class="nav-panel__head-title block-element">GAME&nbsp;OF&nbsp;THRONES</p>
      <p class="form-2__join-message block-element">You have successfully joined the game.
      Tell us more about yourself.</p>
      <label  class="input__label block-element" for="username">Who are you?</label>
      <small class="nav-panel__small block-element">Alpha-numeric username</small>
      <input class="nav-panel__input block-element" type="text" name="username" id="username"
             placeholder="arya">
      
      <label  class="input__label block-element" id="great-house-label" for="selecthouse">Your Great House</label>
      <select class="nav-panel__select-house nav-panel__input block-element" name="selecthouse" id="selecthouse" size="1">
<!--there are will options appending from js via createHousesOptionsInSelect($houseSelect); -->
      </select>
      
      <label  class="input__label block-element" id="user-wishes-label" for="user-wishes">Your preferences, hobbies, wishes, etc.</label>
      <textarea class="nav-panel__wishes nav-panel__input block-element" name="userwishes" id="user-wishes"
                placeholder="I have a long TOKILL list.."></textarea>
      <input type="submit" class="nav-panel__submit-button block-element" id="form-2__submit-button" value="Save">
    </form>
    <form class="nav-panel__form hidden" id="reg-form-3">
      <div>
        <p class="form-2__join-message">coming soon..</p>
        <input type="submit" class="nav-panel__submit-button block-element" value="Save">
      </div>
    </form>
  </section>
</div>

<script src="https://cdnjs.cloudflare.com/ajax/libs/select2/4.0.8/js/select2.min.js"></script>
<script src="script.js"></script>
</body>
</html>