<template>
    <div id="carddetails">
        <div class="card-infos">
            <div class="card-name">
                <p>{{ hairdresser.name }}</p>
            </div>
            <div class="card-rating">
                <ul>
                    <li><img src="https://s3.amazonaws.com/tereza-landing/Home/Rate.png" alt=""></li>
                    <li><img src="https://s3.amazonaws.com/tereza-landing/Home/Rate.png" alt=""></li>
                    <li><img src="https://s3.amazonaws.com/tereza-landing/Home/Rate.png" alt=""></li>
                    <li><img src="https://s3.amazonaws.com/tereza-landing/Home/Rate.png" alt=""></li>
                    <li><img src="https://s3.amazonaws.com/tereza-landing/Home/Rate.png" alt=""></li>
                </ul>
            </div>
            <div class="card-coordinates">
                <p class="card-address">{{ hairdresser.street }} <br> {{ hairdresser.cp }} {{ hairdresser.city }}</p>
                <ul class="card-tags">
                    <li v-for="tag in hairdresser.tags">{{tag}}</li>
                </ul>
            </div>
            <div class="card-benefits">
                <div class="card-benef"></div>
                <div class="card-benef"></div>
                <div class="card-benef"></div>
            </div>
        </div>
    </div>
</template>

<style scoped>
.card-name p {
  font-size: 22px;
  margin-bottom: 0;
}

.card-cta {
  font-size: 1.7em;
  text-align: center;
}

ul.card-tags {
  width: 100%;
  font-size: 10px;
}

.card-rating ul {
    margin-bottom: 4px;
}

.card-tags, .card-rating ul {
  padding: 0;
}

.card-rating ul li {
  display: inline;
}

.card-rating ul li img {
  width: 20px;
  background: #fff;
}

.card-tags {
  margin-bottom: 25px;
}

.card-tags li {
  display: inline-block;
  border: 1px solid #add7d6;
  border-radius: 3px;
  border-radius: 3px;
  padding: 1px 3px;
  margin-top: 2px;
  margin-bottom: 2px;
  margin-right: 6px;
}
</style>

<script>
    export default {
        data() {
            return {
            }
        },
        props: [
            'hairdresser'
        ]
    }
</script>