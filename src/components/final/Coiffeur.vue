<template>
    <div class="container-fluid nopad coiffeur">
        <Header></Header>
        <div class="row">
            <div class="left-content col-md-9">
                <div class="row col-md-12 coiffeur-header">
                    <div class="coiffeur-avatar">
                        <img :src="hairdresser.photo_link" />
                    </div>
                </div>
                <div class="row col-md-12 coiffeur-description">
                    <div class="row">
                        <div class="col-md-4">
                            <CardDetails :hairdresser="hairdresser"></CardDetails>
                        </div>
                        <div class="col-md-8">
                            <div class="coiffeur-descriptionContent">
                                <p>
                                    Le Lorem Ipsum est simplement du faux texte employé dans la composition et la mise en page avant impression. Le Lorem Ipsum
                                    est le faux texte standard de l'imprimerie depuis les années 1500, quand un peintre anonyme assembla ensemble
                                    des morceaux de texte pour réaliser un livre spécimen de polices de texte.
                                  </p>
                            </div>
                        </div>
                    </div>
                    <hr>
                    <div class="row coiffeur-appointment">
                        <div class="col-md-6">
                            <div class="appointment-header">Prendre rendez-vous</div>

                            <div class="form-horizontal">
                                <div class="form-group">
                                    <label for="haircut" class="col-md-4 control-label">Vous desirez :</label>
                                    <div class="col-md-8">
                                        <select class="form-control" id="haircut" v-model="haircut">
                                            <option></option>
                                            <option data-price="18">Coupe Homme</option>
                                            <option data-price="25">Coupe Femme</option>
                                        </select>
                                    </div>
                                </div>
                                <div class="form-group">
                                    <label for="addition" class="col-md-4 control-label">Avec ceci :</label>
                                    <div class="col-md-8">
                                        <select class="form-control" id="addition" v-model="addition">
                                            <option></option>
                                            <option data-price="7">Shampooing</option>
                                            <option data-price="13">Shampooing + soin</option>
                                        </select>
                                    </div>
                                </div>
                                <div class="form-group">
                                    <label for="extra" class="col-md-4 control-label">Un extra :</label>
                                    <div class="col-md-8">
                                        <select class="form-control" id="extra" v-model="extra">
                                            <option></option>
                                            <option data-price="3">Laque forte</option>
                                            <option data-price="32">Manucure</option>
                                        </select>
                                    </div>
                                </div>
                                <div class="form-group">
                                    <div class="col-md-12">
                                        <button type="submit" class="btn btn-default">Valider mon rdv</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="col-md-6">
                            <div class="order-recap">
                                <div class="appointment-header">Recapitulatif</div>
                                <p class="order-time">
                                    <span class="order-date">Lundi 16 Fevrier 2017</span>
                                    <br />
                                    <span class="order-timeSlot">15:30 - 16:30</span>
                                </p>
                                <p class="order-products">
                                    <span class="order-haircut">{{haircut}}</span>
                                    <span class="order-addition" v-if="addition != ''"><br />+ {{addition}}</span>
                                    <span class="order-extra" v-if="extra != ''"><br />+ {{extra}}</span>
                                </p>
                                <p class="order-price" v-if="price > 0">{{price}} euros</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="right-content col-md-3">
                <div class="coiffeur-headerMap row">
                    <img src="//s3.amazonaws.com/tereza-landing/Home/photo_map.PNG"></img>
                </div>
                <div class="coiffeur-descriptionAvis">
                    <div class="coiffeur-avisCard row" v-for="review in hairdresser.reviews">
                        <div class="col-md-4 coiffeur-avis-img">
                            <img src="//placehold.it/60x60" alt="">
                        </div>
                        <div class="coiffeur-avisContent col-md-8">
                            <div class="coiffeur-rating">
                                <ul>
                                    <li v-for="i in review.rating"><img src="//s3.amazonaws.com/tereza-landing/Home/Rate.png" alt=""></li>
                                </ul>
                            </div>
                            <div class="coiffeur-comment" v-html="review.comment">
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import CardDetails from '../funnel/CardDetails.vue';
    import Header from '../funnel/Header.vue'
    export default {
        data() {
            return {
                hairdresser: JSON.parse(window.localStorage.getItem('hairdresser')),
                haircut: "",
                addition: "",
                extra: "",
                price: 0
            }
        },
        watch: {
            haircut: function () {
                this.calculateTotal();
            },
            addition: function () {
                this.calculateTotal();
            },
            extra: function () {
                this.calculateTotal();
            },
        },
        methods: {
            calculateTotal: function () {
                var total = 0;
                var haircut = document.getElementById("haircut");
                var addition = document.getElementById("addition");
                var extra = document.getElementById("extra");
                var haircutPrice = parseInt(haircut.options[haircut.selectedIndex].getAttribute('data-price'));
                total += isNaN(haircutPrice) ? 0 : haircutPrice;
                var additionPrice = parseInt(addition.options[addition.selectedIndex].getAttribute('data-price'));
                total += isNaN(additionPrice) ? 0 : additionPrice;
                var extraPrice = parseInt(extra.options[extra.selectedIndex].getAttribute('data-price'));
                total += isNaN(extraPrice) ? 0 : extraPrice;
                this.price = total;
            }
        },
        components: {
            'CardDetails': CardDetails,
            'Header': Header
        }
    }
</script>

<style>
    .coiffeur {
        background: black;
        margin: 0 auto;
        padding-top: 8px;
        padding-bottom: 8px;
    }

    .coiffeur > .row {
        max-width: 1280px;
        margin: 0 auto;
    }

    /* left */
    .left-content {
        padding-right: 30px;
    }

    .coiffeur-header {
        background: url('//s3.amazonaws.com/tereza-landing/Home/cover-henri.png') center center;
        background-size: cover;
        border-radius: 8px 8px 0 0;
        padding: 12px;
    }

    .coiffeur-avatar {
        width: 200px;
        height: auto;
        overflow: hidden;
        max-height: 160px;
        border-radius: 8px;
    }

    .coiffeur-avatar img {
        height: 100%;
        width: 100%;
        z-index: 2;
    }

    .coiffeur-description {
        color: #fff;
        background-color: #111;
        padding-top: 8px;
    }

    .coiffeur-descriptionContent {
        font-family: sans-serif;
        font-size: 16px;
    }

    .coiffeur-description button {
        display: block;
        text-align: center;
        margin: 15px auto;
        background: #add7d6;
        color: #333;
        border: none;
        border-radius: 5px;
        font-size: 1.8em;
        font-family: MarketDeco;
    }

    .coiffeur-appointment {
        margin-top: 24px;
    }

    .appointment-header {
        font-size: 32px;
        text-align: center;
        margin-bottom: 24px;
    }

    hr {
        margin: 12px auto;
        width: 75%;
        border-top: 2px solid #666;
    }

    .order-recap {
        background: #444;
        padding: 0 15px;
        padding-bottom: 2px;
        text-transform: uppercase;
        border-radius: 8px;
        font-size: 18px;
    }

    .order-price {
        text-align: right;
    }

    .order-products {
        margin-bottom: 0;
    }

    /* right */
    .coiffeur-headerMap {
        margin-top: 16px;
        margin-bottom: 16px;
    }

    .coiffeur-headerMap img {
        width: 100%;
        height: auto;
        border-radius: 8px;
    }

    .coiffeur-avisCard {
        padding: 5px 0;
        font-size: 11px;
        margin-top: 12px;
    }

    .coiffeur-avisCard .coiffeur-avis-img {
        padding-left: 0;
    }

    .coiffeur-avisCard .coiffeur-avis-img img {
        border-radius: 8px;
        width: 100%;
        height: auto;
    }

    .coiffeur-rating ul {
        margin-bottom: 4px;
    }

    .coiffeur-rating ul {
        padding: 0;
    }

    .coiffeur-rating ul li {
        display: inline;
    }

    .coiffeur-rating ul li img {
        width: 20px;
        background: #fff;
    }

    .coiffeur-avisContent {
        background: #111;
        padding: 6px 15px;
        border-radius: 8px;
    }

    .coiffeur-comment {
        color: #fff;
    }
</style>