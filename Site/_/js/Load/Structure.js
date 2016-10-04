function loadElements() {
    cargarHeader();
}

function cargarHeader() {

    var header = document.createElement('header');
    header.innerHTML =  header.innerHTML + '<nav class="navbar navbar-default navbar-fixed-top" role="navigation">';
    header.innerHTML =  header.innerHTML + '    <div class="container">';
    header.innerHTML =  header.innerHTML + '        <div class="row">';
    header.innerHTML =  header.innerHTML + '            <div class="col col-sm-12">';
    header.innerHTML =  header.innerHTML + '                <div class="navbar-header">';
    header.innerHTML =  header.innerHTML + '                    <div class="visible-xs panel-mobile">';
    header.innerHTML =  header.innerHTML + '                        <a href="shop_view_cart.html">Cart</a>';
    header.innerHTML =  header.innerHTML + '                        <span>|</span>';
    header.innerHTML =  header.innerHTML + '                        <a href="quanta_coffee_shop.html">Shop</a>';
    header.innerHTML =  header.innerHTML + '                        <span>|</span>';
    header.innerHTML =  header.innerHTML + '                        <a href="#" class="md-trigger" data-modal="login-modal" onclick="return false;">Login</a>';
    header.innerHTML =  header.innerHTML + '                     </div>';
    header.innerHTML =  header.innerHTML + '                     <button type="button" class="navbar-toggle" data-toggle="collapse" data-target="#mynavbar">';
    header.innerHTML =  header.innerHTML + '                        <span class="sr-only">Toggle navigation</span>';
    header.innerHTML =  header.innerHTML + '                        <span class="icon-bars"></span>';
    header.innerHTML =  header.innerHTML + '                        <span class="icon-bars"></span>';
    header.innerHTML =  header.innerHTML + '                        <span class="icon-bars"></span>';
    header.innerHTML =  header.innerHTML + '                     </button>';
    header.innerHTML =  header.innerHTML + '                     <a class="navbar-brand" href="../index.html"><img src="../_/images/INDEX/HEADER/LOGO/SEARCH_BLACK.png" alt="Logo"></a>';                                              
    header.innerHTML =  header.innerHTML + '                </div>';
    header.innerHTML =  header.innerHTML + '                <div class="collapse navbar-collapse" id="mynavbar">';
    header.innerHTML =  header.innerHTML + '                        <div class="left-cell">';
    header.innerHTML =  header.innerHTML + '                            <ul class="nav navbar-nav">';
    header.innerHTML =  header.innerHTML + '                                <li class="active dropdown">';
    header.innerHTML =  header.innerHTML + '                                    <a href="../index.html" data-toggle="dropdown">';
    header.innerHTML =  header.innerHTML + '                                        <p class="quantaMenuBlack quantaBold">Home</p>';
    header.innerHTML =  header.innerHTML + '                                    </a>';
    header.innerHTML =  header.innerHTML + '                                    <ul class="dropdown-menu quantaCalibri">';
    header.innerHTML =  header.innerHTML + '                                        <li>';
    header.innerHTML =  header.innerHTML + '                                            <a class="menuTitle" href="../index.html"><h4 class="quantaMenu quantaBold">HOME</h4></a>';
    header.innerHTML =  header.innerHTML + '                                        </li>';
    header.innerHTML =  header.innerHTML + '                                        <li><a href="../index.html#vertical_slider">Process</a></li>';
    header.innerHTML =  header.innerHTML + '                                        <li><a href="../index.html#drinks">Barista Center</a></li>';
    header.innerHTML =  header.innerHTML + '                                        <li><a href="../index.html#farm">Farms</a></li>';
    header.innerHTML =  header.innerHTML + '                                    </ul>';
    header.innerHTML =  header.innerHTML + '                                </li>';
    header.innerHTML =  header.innerHTML + '                                <li class="dropdown">';
    header.innerHTML =  header.innerHTML + '                                    <a href="../quanta_coffee_farm.html"><p class="quantaMenuBlack quantaBold">Farms</p></a>';
    header.innerHTML =  header.innerHTML + '                                </li>';
    header.innerHTML =  header.innerHTML + '                                <li class="dropdown"><a href="../quanta_coffee_shop.html" class="dropdown-toggle" data-toggle="dropdown"><p class="quantaMenuBlack quantaBold">Shop</p></a>';
    header.innerHTML =  header.innerHTML + '                                   <ul class="dropdown-menu quantaCalibri">';
    header.innerHTML =  header.innerHTML + '                                <li>';
    header.innerHTML =  header.innerHTML + '                                            <a class="menuTitle" href="../quanta_coffee_shop.html">';
    header.innerHTML =  header.innerHTML + '                                                <h4 class="quantaMenu quantaBold">';
    header.innerHTML =  header.innerHTML + '                                                    Shop';
    header.innerHTML =  header.innerHTML + '                                               </h4>';
    header.innerHTML =  header.innerHTML + '                                           </a>';
    header.innerHTML =  header.innerHTML + '                                       </li>';
    header.innerHTML =  header.innerHTML + '                                       <li><a href="../quanta_coffee_shop.html">Quanta Coffee Shop</a></li>';
    header.innerHTML =  header.innerHTML + '                                        <li><a href="../shop_view_cart.html">View Cart</a></li>';
    header.innerHTML =  header.innerHTML + '                                        <li><a href="../checkout.html">Checkout</a></li>';
    header.innerHTML =  header.innerHTML + '                                    </ul>';
    header.innerHTML =  header.innerHTML + '                                </li>';
    header.innerHTML =  header.innerHTML + '                                <li class="dropdown">';
    header.innerHTML =  header.innerHTML + '                                    <a href="../quanta_coffee_company.html">';
    header.innerHTML =  header.innerHTML + '                                       <p class="quantaMenuBlack quantaBold">About Us</p>';
    header.innerHTML =  header.innerHTML + '                                    </a>';
    header.innerHTML =  header.innerHTML + '                                </li>';
    header.innerHTML =  header.innerHTML + '                                <li class="dropdown">';
    header.innerHTML =  header.innerHTML + '                                    <a href="../contact.html">';
    header.innerHTML =  header.innerHTML + '                                        <p class="quantaMenuBlack quantaBold">Contact Us</p>';
    header.innerHTML =  header.innerHTML + '                                    </a>';
    header.innerHTML =  header.innerHTML + '                                </li>';
    header.innerHTML =  header.innerHTML + '                            </ul>';
    header.innerHTML =  header.innerHTML + '                      </div>';
    header.innerHTML =  header.innerHTML + '                        <div class="right-cell">';
    header.innerHTML =  header.innerHTML + '                            <form class="nav navbar-form navbar-right navbar-nav1">';
    header.innerHTML =  header.innerHTML + '                               <ul class="list-inline">';
    header.innerHTML =  header.innerHTML + '                                   <li class="dropdown hidden-mobile">';
    header.innerHTML =  header.innerHTML + '                                        <a href="../index.html" class="dropdown-toggle" data-toggle="dropdown">';
    header.innerHTML =  header.innerHTML + '                                            <img src="../_/images/INDEX/LOGO/colombia-icon.png">';
    header.innerHTML =  header.innerHTML + '                                       </a>';
    header.innerHTML =  header.innerHTML + '                                    </li>';
    header.innerHTML =  header.innerHTML + '                                    <li class="hidden-mobile">';
    header.innerHTML =  header.innerHTML + '                                       <a href="#" class="md-trigger" data-modal="login-modal" onclick="return false;">Login</a>';
    header.innerHTML =  header.innerHTML + '                                    </li>';
    header.innerHTML =  header.innerHTML + '                                   <li class="hidden-mobile">';
    header.innerHTML =  header.innerHTML + '                                        <a class="cart-click">Cart / $<span id="subtotal-price">0</span></a>';
    header.innerHTML =  header.innerHTML + '                                    </li>';
    header.innerHTML =  header.innerHTML + '                                    <li class="hidden-mobile bag">';
    header.innerHTML =  header.innerHTML + '                                        <a href="#" class="cart-click">';
    header.innerHTML =  header.innerHTML + '                                           <i class="icon-shop">';
    header.innerHTML =  header.innerHTML + '                                                <span id="cantidad">0</span>';
    header.innerHTML =  header.innerHTML + '                                           </i>';
    header.innerHTML =  header.innerHTML + '                                       </a>';
    header.innerHTML =  header.innerHTML + '                                   </li>';
    header.innerHTML =  header.innerHTML + '                               </ul>';
    header.innerHTML =  header.innerHTML + '                               <div style="margin-top:10px"></div>';
    header.innerHTML =  header.innerHTML + '                                <ul class="list-inline social">';
    header.innerHTML =  header.innerHTML + '                                  <li><a onclick="return false;" data-modal="modal_snapchat" class="md-trigger"><img src="../_/images/HEADER/LOGO/SNAPCHAT.png" title="Snapchat"></a></li>';
    header.innerHTML =  header.innerHTML + '                                    <li><a href="https://www.instagram.com/quanta_coffee/" class="icon-instagram-1" title="Instagram" target="_blank"></a> </li>';
    header.innerHTML =  header.innerHTML + '                                   <li><a class="icon-facebook" href="https://www.facebook.com/quantacoffee?fref=ts" title="Facebook" target="_blank"></a></li>';
    header.innerHTML =  header.innerHTML + '                                    <li><a class="icon-gplus" href="#" title="Google plus" target="_blank"></a></li>';
    header.innerHTML =  header.innerHTML + '                                    <li><a class="icon-twitter" href="https://twitter.com/quantacoffee" title="Twitter" target="_blank"></a></li>';
    header.innerHTML =  header.innerHTML + '                                   <li><a class="icon-mail-1" href="mailto:info@quantacoffee.com" title="email"></a></li>';
    header.innerHTML =  header.innerHTML + '                                </ul>';                                   
    header.innerHTML =  header.innerHTML + '                            </form>';
    header.innerHTML =  header.innerHTML + '                        </div>';
    header.innerHTML =  header.innerHTML + '                    </div>';
    header.innerHTML =  header.innerHTML + '                    <div id="popupitem" class="cart-popup hide-me-first">';
    header.innerHTML =  header.innerHTML + '                        <div id="popup-bottom-info" class="popup-bottom-info">';
    header.innerHTML =  header.innerHTML + '                            <div class="popup-subtotal">';
    header.innerHTML =  header.innerHTML + '                                Cart Sub Total <span class="popup-subtotal-price">$<span id="popup-subtotal-price">0</span></span>';
    header.innerHTML =  header.innerHTML + '                            </div>';
    header.innerHTML =  header.innerHTML + '                             <div>';
    header.innerHTML =  header.innerHTML + '                            <a href="../shop_view_cart.html" class="popup-view-cart">View Cart</a>';
    header.innerHTML =  header.innerHTML + '                            </div>';
    header.innerHTML =  header.innerHTML + '                            <div>';
    header.innerHTML =  header.innerHTML + '                               <a href="../checkout.html" class="popup-button-proceed">Proceed to Checkout</a>';
    header.innerHTML =  header.innerHTML + '                            </div>';
    header.innerHTML =  header.innerHTML + '                       </div>';
    header.innerHTML =  header.innerHTML + '                   </div>';
    header.innerHTML =  header.innerHTML + '                </div>';
    header.innerHTML =  header.innerHTML + '            </div>';
    header.innerHTML =  header.innerHTML + '        </div>';
    header.innerHTML =  header.innerHTML + '    </nav>';
     
    var headerI = document.getElementById('header');
    headerI.appendChild(header);

}

function cargarNav() {
    document.getElementById('nav').innerHTML = link.querySelector('#navI').innerHTML;
}

function cargarFooter() {
    document.getElementById('footer').innerHTML = link.querySelector('#footerI').innerHTML;
}