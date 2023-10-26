<template>
  <v-container>
    <v-carousel cycle :interval="1000" height="500">
      <v-carousel-item v-for="(item, i) in items" :key="i">
        <v-img :src="item.src" contain></v-img>
      </v-carousel-item>
    </v-carousel>

    <div class="searchBox" style="top: 20px; left: 900px">
      <input
        class="searchInput"
        type="text"
        name=""
        placeholder="Search anime"
      />
      <button class="searchButton" href="#">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="29"
          height="29"
          viewBox="0 0 29 29"
          fill="none"
        >
          <g clip-path="url(#clip0_2_17)">
            <g filter="url(#filter0_d_2_17)">
              <path
                d="M23.7953 23.9182L19.0585 19.1814M19.0585 19.1814C19.8188 18.4211 20.4219 17.5185 20.8333 16.5251C21.2448 15.5318 21.4566 14.4671 21.4566 13.3919C21.4566 12.3167 21.2448 11.252 20.8333 10.2587C20.4219 9.2653 19.8188 8.36271 19.0585 7.60242C18.2982 6.84214 17.3956 6.23905 16.4022 5.82759C15.4089 5.41612 14.3442 5.20435 13.269 5.20435C12.1938 5.20435 11.1291 5.41612 10.1358 5.82759C9.1424 6.23905 8.23981 6.84214 7.47953 7.60242C5.94407 9.13789 5.08145 11.2204 5.08145 13.3919C5.08145 15.5634 5.94407 17.6459 7.47953 19.1814C9.01499 20.7168 11.0975 21.5794 13.269 21.5794C15.4405 21.5794 17.523 20.7168 19.0585 19.1814Z"
                stroke="white"
                stroke-width="3"
                stroke-linecap="round"
                stroke-linejoin="round"
                shape-rendering="crispEdges"
              ></path>
            </g>
          </g>
          <defs>
            <filter
              id="filter0_d_2_17"
              x="-0.418549"
              y="3.70435"
              width="29.7139"
              height="29.7139"
              filterUnits="userSpaceOnUse"
              color-interpolation-filters="sRGB"
            >
              <feFlood flood-opacity="0" result="BackgroundImageFix"></feFlood>
              <feColorMatrix
                in="SourceAlpha"
                type="matrix"
                values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                result="hardAlpha"
              ></feColorMatrix>
              <feOffset dy="4"></feOffset>
              <feGaussianBlur stdDeviation="2"></feGaussianBlur>
              <feComposite in2="hardAlpha" operator="out"></feComposite>
              <feColorMatrix
                type="matrix"
                values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"
              ></feColorMatrix>
              <feBlend
                mode="normal"
                in2="BackgroundImageFix"
                result="effect1_dropShadow_2_17"
              ></feBlend>
              <feBlend
                mode="normal"
                in="SourceGraphic"
                in2="effect1_dropShadow_2_17"
                result="shape"
              ></feBlend>
            </filter>
            <clipPath id="clip0_2_17">
              <rect
                width="28.0702"
                height="28.0702"
                fill="white"
                transform="translate(0.403503 0.526367)"
              ></rect>
            </clipPath>
          </defs>
        </svg>
      </button>
    </div>
    <!-- Product Section Begin -->
    <section class="product spad">
      <div class="container">
        <div class="row">
          <div class="col-lg-8">
            <div class="trending__product">
              <div class="row">
                <div class="col-lg-8 col-md-8 col-sm-8">
                  <div
                    class="section-title"
                    style="color: #ffffff; font-size: 50px"
                  >
                    <h4>Trending Now</h4>
                  </div>
                </div>

<<<<<<< HEAD
                <div class="col-lg-4 col-md-4 col-sm-4"></div>
=======
                <div class="col-lg-4 col-md-4 col-sm-4">
                 
                </div>
>>>>>>> 4a25b1aae0c1fdd1388140efd685cdeae818ca75
              </div>
              <div class="row">
                <div class="col-lg-4 col-md-6 col-sm-6">
                  <div class="product__item">
                    <v-img
                      class="product__item__pic set-bg"
                      src="../../public/img01/trending/trend-1.jpg"
                    >
                      <div class="ep">18 / 18</div>
                      <div class="comment">
                        <i class="fa fa-comments"></i> 11
                      </div>
                      <div class="view"><i class="fa fa-eye"></i> 9141</div>
                    </v-img>
                    <div class="product__item__text">
                      <ul>
                        <li>Active</li>
                        <li>Movie</li>
                      </ul>
                      <h5>
<<<<<<< HEAD
                        <a href="http://localhost:8080/Animedetail">Boruto: Naruto next generations</a>
=======
                        <a href="#">The Seven Deadly Sins: Wrath of the Gods</a>
>>>>>>> 4a25b1aae0c1fdd1388140efd685cdeae818ca75
                      </h5>
                    </div>
                  </div>
                </div>

                <div class="col-lg-4 col-md-6 col-sm-6">
                  <div class="product__item">
                    <v-img
                      class="product__item__pic set-bg"
                      src="../../public/img01/trending/trend-2.jpg"
                    >
                      <div class="ep">18 / 18</div>
                      <div class="comment">
                        <i class="fa fa-comments"></i> 11
                      </div>
                      <div class="view"><i class="fa fa-eye"></i> 9141</div>
                    </v-img>
                    <div class="product__item__text">
                      <ul>
                        <li>Active</li>
                        <li>Movie</li>
                      </ul>
                      <h5>
<<<<<<< HEAD
                        <a href="http://localhost:8080/Animedetail">Gintama Movie 2: Kanketsu-hen - Yorozuya yo Eien
</a>
=======
                        <a href="#">The Seven Deadly Sins: Wrath of the Gods</a>
>>>>>>> 4a25b1aae0c1fdd1388140efd685cdeae818ca75
                      </h5>
                    </div>
                  </div>
                </div>

                <div class="col-lg-4 col-md-6 col-sm-6">
                  <div class="product__item">
                    <v-img
                      class="product__item__pic set-bg"
                      src="../../public/img01/trending/trend-3.jpg"
                    >
                      <div class="ep">18 / 18</div>
                      <div class="comment">
                        <i class="fa fa-comments"></i> 11
                      </div>
                      <div class="view"><i class="fa fa-eye"></i> 9141</div>
                    </v-img>
                    <div class="product__item__text">
                      <ul>
                        <li>Active</li>
                        <li>Movie</li>
                      </ul>
                      <h5>
<<<<<<< HEAD
                        <a href="http://localhost:8080/Animedetail">Shingeki no Kyojin Season 3 Part 2</a>
=======
                        <a href="#">The Seven Deadly Sins: Wrath of the Gods</a>
>>>>>>> 4a25b1aae0c1fdd1388140efd685cdeae818ca75
                      </h5>
                    </div>
                  </div>
                </div>

                <div class="col-lg-4 col-md-6 col-sm-6">
                  <div class="product__item">
                    <v-img
                      class="product__item__pic set-bg"
                      src="../../public/img01/trending/trend-4.jpg"
                    >
                      <div class="ep">18 / 18</div>
                      <div class="comment">
                        <i class="fa fa-comments"></i> 11
                      </div>
                      <div class="view"><i class="fa fa-eye"></i> 9141</div>
                    </v-img>
                    <div class="product__item__text">
                      <ul>
                        <li>Active</li>
                        <li>Movie</li>
                      </ul>
                      <h5>
<<<<<<< HEAD
                        <a href="http://localhost:8080/Animedetail">Fullmetal Alchemist: Brotherhood</a>
=======
                        <a href="#">The Seven Deadly Sins: Wrath of the Gods</a>
>>>>>>> 4a25b1aae0c1fdd1388140efd685cdeae818ca75
                      </h5>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div class="col-lg-4 col-md-6 col-sm-8">
            <div class="product__sidebar">
              <div class="product__sidebar__view">
                <div class="section-title">
                  <h5 style="font-size: 20px">Top Views</h5>
                </div>
              </div>

              <div class="filter__gallery">
                <v-img
                  class="product__sidebar__view__item set-bg mix day years"
                  src="../../public/img01/sidebar/tv-1.jpg"
                >
                  <div class="ep">18 / ?</div>
                  <div class="view"><i class="fa fa-eye"></i> 9141</div>
<<<<<<< HEAD
                  <h5><a href="http://localhost:8080/Animedetail">Boruto: Naruto next generations</a></h5>
=======
                  <h5><a href="#">Boruto: Naruto next generations</a></h5>
>>>>>>> 4a25b1aae0c1fdd1388140efd685cdeae818ca75
                </v-img>

                <v-img
                  class="product__sidebar__view__item set-bg mix month week"
                  src="../../public/img01/sidebar/tv-2.jpg"
                >
                  <div class="ep">18 / ?</div>
                  <div class="view"><i class="fa fa-eye"></i> 9141</div>
                  <h5>
<<<<<<< HEAD
                    <a href="http://localhost:8080/Animedetail">The Seven Deadly Sins: Wrath of the Gods</a>
=======
                    <a href="#">The Seven Deadly Sins: Wrath of the Gods</a>
>>>>>>> 4a25b1aae0c1fdd1388140efd685cdeae818ca75
                  </h5>
                </v-img>

                <v-img
                  class="product__sidebar__view__item set-bg mix week years"
                  src="../../public/img01/sidebar/tv-3.jpg"
                >
                  <div class="ep">18 / ?</div>
                  <div class="view"><i class="fa fa-eye"></i> 9141</div>
                  <h5>
<<<<<<< HEAD
                    <a href="http://localhost:8080/Animedetail"
=======
                    <a href="#"
>>>>>>> 4a25b1aae0c1fdd1388140efd685cdeae818ca75
                      >Sword art online alicization war of underworld</a
                    >
                  </h5>
                </v-img>

                <v-img
                  class="product__sidebar__view__item set-bg mix years month"
                  src="../../public/img01/sidebar/tv-4.jpg"
                >
                  <div class="ep">18 / ?</div>
                  <div class="view"><i class="fa fa-eye"></i> 9141</div>
                  <h5>
<<<<<<< HEAD
                    <a href="http://localhost:8080/Animedetail"
=======
                    <a href="#"
>>>>>>> 4a25b1aae0c1fdd1388140efd685cdeae818ca75
                      >Fate/stay night: Heaven's Feel I. presage flower</a
                    >
                  </h5>
                </v-img>

                <v-img
                  class="product__sidebar__view__item set-bg mix day"
                  src="../../public/img01/sidebar/tv-5.jpg"
                >
                  <div class="ep">18 / ?</div>
                  <div class="view"><i class="fa fa-eye"></i> 9141</div>
                  <h5>
<<<<<<< HEAD
                    <a href="http://localhost:8080/Animedetail">Fate stay night unlimited blade works</a>
=======
                    <a href="#">Fate stay night unlimited blade works</a>
>>>>>>> 4a25b1aae0c1fdd1388140efd685cdeae818ca75
                  </h5>
                </v-img>
              </div>
            </div>

            <div class="product__sidebar__comment">
              <div class="section-title">
                <h5>New Comment</h5>
              </div>
              <div class="product__sidebar__comment__item">
                <div class="product__sidebar__comment__item__pic">
                  <img src="../../public/img01/sidebar/comment-1.jpg" alt="" />
                </div>
                <div class="product__sidebar__comment__item__text">
                  <ul>
                    <li>Active</li>
                    <li>Movie</li>
                  </ul>
                  <h5>
<<<<<<< HEAD
                    <a href="http://localhost:8080/Animedetail">The Seven Deadly Sins: Wrath of the Gods</a>
=======
                    <a href="#">The Seven Deadly Sins: Wrath of the Gods</a>
>>>>>>> 4a25b1aae0c1fdd1388140efd685cdeae818ca75
                  </h5>
                  <span><i class="fa fa-eye"></i> 19.141 Viewes</span>
                </div>
              </div>
              <div class="product__sidebar__comment__item">
                <div class="product__sidebar__comment__item__pic">
                  <img src="../../public/img01/sidebar/comment-2.jpg" alt="" />
                </div>
                <div class="product__sidebar__comment__item__text">
                  <ul>
                    <li>Active</li>
                    <li>Movie</li>
                  </ul>
<<<<<<< HEAD
                  <h5><a href="http://localhost:8080/Animedetail">Shirogane Tamashii hen Kouhan sen</a></h5>
=======
                  <h5><a href="#">Shirogane Tamashii hen Kouhan sen</a></h5>
>>>>>>> 4a25b1aae0c1fdd1388140efd685cdeae818ca75
                  <span><i class="fa fa-eye"></i> 19.141 Viewes</span>
                </div>
              </div>
              <div class="product__sidebar__comment__item">
                <div class="product__sidebar__comment__item__pic">
                  <img src="../../public/img01/sidebar/comment-3.jpg" alt="" />
                </div>
                <div class="product__sidebar__comment__item__text">
                  <ul>
                    <li>Active</li>
                    <li>Movie</li>
                  </ul>
<<<<<<< HEAD
                  <h5><a href="http://localhost:8080/Animedetail">Kizumonogatari III: Reiket su-hen</a></h5>
=======
                  <h5><a href="#">Kizumonogatari III: Reiket su-hen</a></h5>
>>>>>>> 4a25b1aae0c1fdd1388140efd685cdeae818ca75
                  <span><i class="fa fa-eye"></i> 19.141 Viewes</span>
                </div>
              </div>
              <div class="product__sidebar__comment__item">
                <div class="product__sidebar__comment__item__pic">
                  <img src="../../public/img01/sidebar/comment-4.jpg" alt="" />
                </div>
                <div class="product__sidebar__comment__item__text">
                  <ul>
                    <li>Active</li>
                    <li>Movie</li>
                  </ul>
<<<<<<< HEAD
                  <h5><a href="http://localhost:8080/Animedetail">Monogatari Series: Second Season</a></h5>
=======
                  <h5><a href="#">Monogatari Series: Second Season</a></h5>
>>>>>>> 4a25b1aae0c1fdd1388140efd685cdeae818ca75
                  <span><i class="fa fa-eye"></i> 19.141 Viewes</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <!-- Product Section End -->
  </v-container>
</template >

<style>
.temp1 {
  background-color: aliceblue;
  height: 32px;
  width: 120px;
  border-radius: 30px;
  text-align: center;
}
.searchBox {
  display: flex;
  max-width: 230px;

  align-items: center;
  justify-content: space-between;
  gap: 8px;
  background: #fefeff;
  border-radius: 50px;
  position: relative;
}
.searchButton {
  color: white;
  position: absolute;
  right: 8px;
  width: 60px;
  height: 60px;
  border-radius: 50%;
  background: var(
    --gradient-2,
    linear-gradient(90deg, #2af598 0%, #009efd 100%)
  );
  border: 0;
  display: inline-block;
  transition: all 300ms cubic-bezier(0.23, 1, 0.32, 1);
}
/*hover effect*/
button:hover {
  color: #fff;
  background-color: #a8a8a8;
  box-shadow: rgba(0, 0, 0, 0.5) 0 10px 20px;
  transform: translateY(-3px);
}
/*button pressing effect*/
button:active {
  box-shadow: none;
  transform: translateY(0);
}

.searchInput {
  border: none;
  background: none;
  outline: none;
  color: rgb(144, 3, 3);
  font-size: 15px;
  padding: 24px 46px 24px 26px;
}

.product {
  padding-bottom: 60px;
  padding-top: 80px;
}

.product-page {
  padding-top: 60px;
}

.btn__all {
  text-align: right;
  margin-bottom: 30px;
}

.trending__product {
  margin-bottom: 50px;
}

.popular__product {
  margin-bottom: 50px;
}

.recent__product {
  margin-bottom: 50px;
}

.product__item {
  margin-bottom: 30px;
}

.product__item__pic {
  height: 325px;
  position: relative;
  border-radius: 5px;
}

.product__item__pic .ep {
  font-size: 13px;
  color: #ffffff;
  background: #e53637;
  display: inline-block;
  padding: 2px 12px;
  border-radius: 4px;
  position: absolute;
  left: 10px;
  top: 10px;
}

.product__item__pic .comment {
  font-size: 13px;
  color: #ffffff;
  background: #3d3d3d;
  display: inline-block;
  padding: 2px 10px;
  border-radius: 4px;
  position: absolute;
  left: 10px;
  bottom: 10px;
}

.product__item__pic .view {
  font-size: 13px;
  color: #ffffff;
  background: #3d3d3d;
  display: inline-block;
  padding: 2px 10px;
  border-radius: 4px;
  position: absolute;
  right: 10px;
  bottom: 10px;
}

.product__item__text {
  padding-top: 20px;
}

.product__item__text ul {
  margin-bottom: 10px;
}

.product__item__text ul li {
  list-style: none;
  font-size: 10px;
  color: #ffffff;
  font-weight: 700;
  padding: 1px 10px;
  background: rgba(255, 255, 255, 0.2);
  border-radius: 50px;
  display: inline-block;
}

.product__item__text h5 a {
  color: #ffffff;
  font-weight: 700;
  line-height: 26px;
}

.product__sidebar .section-title h5 {
  color: #ffffff;
  font-weight: 600;
  font-family: "Oswald", sans-serif;
  line-height: 21px;
  text-transform: uppercase;
  padding-left: 20px;
  position: relative;
}

.product__sidebar .section-title h5:after {
  position: absolute;
  left: 0;
  top: -6px;
  height: 32px;
  width: 4px;
  background: #e53637;
  content: "";
}

.product__sidebar__view {
  position: relative;
  margin-bottom: 80px;
}

.product__sidebar__view .filter__controls {
  position: absolute;
  right: 0;
  top: -5px;
}

.product__sidebar__view .filter__controls li {
  list-style: none;
  font-size: 13px;
  color: #b7b7b7;
  display: inline-block;
  margin-right: 7px;
  cursor: pointer;
}

.product__sidebar__view .filter__controls li.active {
  color: #ffffff;
}

.product__sidebar__view .filter__controls li:last-child {
  margin-right: 0;
}

.product__sidebar__view__item {
  height: 190px;
  position: relative;
  border-radius: 5px;
  margin-bottom: 20px;
}

.product__sidebar__view__item .ep {
  font-size: 13px;
  color: #ffffff;
  background: #e53637;
  display: inline-block;
  padding: 2px 12px;
  border-radius: 4px;
  position: absolute;
  left: 10px;
  top: 10px;
}

.product__sidebar__view__item .view {
  font-size: 13px;
  color: #ffffff;
  background: #3d3d3d;
  display: inline-block;
  padding: 2px 10px;
  border-radius: 4px;
  position: absolute;
  right: 10px;
  top: 10px;
}

.product__sidebar__view__item h5 {
  position: absolute;
  left: 0;
  bottom: 25px;
  width: 100%;
  padding: 0 30px 0 20px;
}

.product__sidebar__view__item h5 a {
  color: #ffffff;
  font-weight: 700;
  line-height: 26px;
}

.product__sidebar__comment {
  margin-bottom: 35px;
}

.product__sidebar__comment__item {
  margin-bottom: 20px;
  overflow: hidden;
}

.product__sidebar__comment__item__pic {
  float: left;
  margin-right: 15px;
}

.product__sidebar__comment__item__text {
  overflow: hidden;
}

.product__sidebar__comment__item__text ul {
  margin-bottom: 10px;
}

.product__sidebar__comment__item__text ul li {
  list-style: none;
  font-size: 10px;
  color: #ffffff;
  font-weight: 700;
  padding: 1px 10px;
  background: rgba(255, 255, 255, 0.2);
  border-radius: 50px;
  display: inline-block;
}

.product__sidebar__comment__item__text h5 {
  margin-bottom: 10px;
}

.product__sidebar__comment__item__text h5 a {
  color: #ffffff;
  font-weight: 700;
  line-height: 26px;
}

.product__sidebar__comment__item__text span {
  display: block;
  font-size: 13px;
  color: #b7b7b7;
}

.product__page__title {
  border-bottom: 2px solid rgba(255, 255, 255, 0.2);
  padding-bottom: 10px;
  margin-bottom: 30px;
}

.product__page__title .section-title {
  margin-bottom: 0;
}

.product__page__title .product__page__filter {
  text-align: right;
}

.product__page__title .product__page__filter p {
  color: #ffffff;
  display: inline-block;
  margin-bottom: 0;
  margin-right: 16px;
}

.product__page__title .product__page__filter .nice-select {
  float: none;
  display: inline-block;
  font-size: 15px;
  color: #3d3d3d;
  font-weight: 700;
  border-radius: 0;
  padding-left: 15px;
  padding-right: 40px;
  height: 32px;
  line-height: 32px;
}

.product__page__title .product__page__filter .nice-select:after {
  border-bottom: 2px solid #111;
  border-right: 2px solid #111;
  height: 8px;
  top: 47%;
  width: 8px;
  right: 15px;
}

.product__page__title .product__page__filter .nice-select .list {
  margin-top: 0;
  border-radius: 0;
}

.product__pagination {
  padding-top: 15px;
}

.product__pagination a {
  display: inline-block;
  font-size: 15px;
  color: #b7b7b7;
  font-weight: 600;
  height: 50px;
  width: 50px;
  border: 1px solid transparent;
  border-radius: 50%;
  line-height: 48px;
  text-align: center;
  -webkit-transition: all, 0.3s;
  -o-transition: all, 0.3s;
  transition: all, 0.3s;
}

.product__pagination a:hover {
  color: #ffffff;
}

.product__pagination a.current-page {
  border: 1px solid #ffffff;
}

.product__pagination a i {
  color: #b7b7b7;
  font-size: 15px;
}

.anime-details {
  padding-top: 60px;
}

.anime__details__content {
  margin-bottom: 65px;
}

.anime__details__text {
  position: relative;
}

.anime__details__text p {
  color: #b7b7b7;
  font-size: 18px;
  line-height: 30px;
}

.anime__details__pic {
  height: 440px;
  border-radius: 5px;
  position: relative;
}

.anime__details__pic .comment {
  font-size: 13px;
  color: #ffffff;
  background: #3d3d3d;
  display: inline-block;
  padding: 2px 10px;
  border-radius: 4px;
  position: absolute;
  left: 10px;
  bottom: 25px;
}

.anime__details__pic .view {
  font-size: 13px;
  color: #ffffff;
  background: #3d3d3d;
  display: inline-block;
  padding: 2px 10px;
  border-radius: 4px;
  position: absolute;
  right: 10px;
  bottom: 25px;
}

.anime__details__title {
  margin-bottom: 20px;
}

.anime__details__title h3 {
  color: #ffffff;
  font-weight: 700;
  margin-bottom: 13px;
}

.anime__details__title span {
  font-size: 15px;
  color: #b7b7b7;
  display: block;
}

.anime__details__rating {
  text-align: center;
  position: absolute;
  right: 0;
  top: 0;
}

.anime__details__rating .rating i {
  font-size: 24px;
  color: #e89f12;
  display: inline-block;
}

.anime__details__rating span {
  display: block;
  font-size: 18px;
  color: #b7b7b7;
}

.anime__details__widget {
  margin-bottom: 15px;
}

.anime__details__widget ul {
  margin-bottom: 20px;
}

.anime__details__widget ul li {
  list-style: none;
  font-size: 15px;
  color: #ffffff;
  line-height: 30px;
  position: relative;
  padding-left: 18px;
}

.anime__details__widget ul li:before {
  position: absolute;
  left: 0;
  top: 12px;
  height: 6px;
  width: 6px;
  background: #b7b7b7;
  content: "";
}

.anime__details__widget ul li span {
  color: #b7b7b7;
  width: 115px;
  display: inline-block;
}

.anime__details__btn .follow-btn {
  font-size: 13px;
  color: #ffffff;
  background: #e53637;
  display: inline-block;
  font-weight: 700;
  letter-spacing: 2px;
  text-transform: uppercase;
  padding: 14px 20px;
  border-radius: 4px;
  margin-right: 11px;
}

.anime__details__btn .watch-btn span {
  font-size: 13px;
  color: #ffffff;
  background: #e53637;
  display: inline-block;
  font-weight: 700;
  letter-spacing: 2px;
  text-transform: uppercase;
  padding: 14px 20px;
  border-radius: 4px 0 0 4px;
  margin-right: 1px;
}

.anime__details__btn .watch-btn i {
  font-size: 20px;
  display: inline-block;
  background: #e53637;
  padding: 11px 5px 16px 8px;
  color: #ffffff;
  border-radius: 0 4px 4px 0;
}

.anime__details__review {
  margin-bottom: 55px;
}

.anime__review__item {
  overflow: hidden;
  margin-bottom: 15px;
}

.anime__review__item__pic {
  float: left;
  margin-right: 20px;
  position: relative;
}

.anime__review__item__pic:before {
  position: absolute;
  right: -30px;
  top: 15px;
  border-top: 15px solid transparent;
  border-left: 15px solid #1d1e39;
  content: "";
  -webkit-transform: rotate(45deg);
  -ms-transform: rotate(45deg);
  transform: rotate(45deg);
}

.anime__review__item__pic img {
  height: 50px;
  width: 50px;
  border-radius: 50%;
}

.anime__review__item__text {
  overflow: hidden;
  background: #1d1e39;
  padding: 18px 30px 16px 20px;
  border-radius: 10px;
}

.anime__review__item__text h6 {
  color: #ffffff;
  font-weight: 700;
  margin-bottom: 10px;
}

.anime__review__item__text h6 span {
  color: #b7b7b7;
  font-weight: 400;
}

.anime__review__item__text p {
  color: #b7b7b7;
  line-height: 23px;
  margin-bottom: 0;
}

.anime__details__form form textarea {
  width: 100%;
  font-size: 15px;
  color: #b7b7b7;
  padding-left: 20px;
  padding-top: 12px;
  height: 110px;
  border: none;
  border-radius: 5px;
  resize: none;
  margin-bottom: 24px;
}

.anime__details__form form button {
  font-size: 11px;
  color: #ffffff;
  font-weight: 700;
  letter-spacing: 2px;
  text-transform: uppercase;
  background: #e53637;
  border: none;
  padding: 10px 15px;
  border-radius: 2px;
}

/*---------------------
  Anime Watching
-----------------------*/

.anime__video__player {
  margin-bottom: 70px;
}

.anime__video__player .plyr--video {
  border-radius: 5px;
  background: transparent;
}

.anime__video__player .plyr audio,
.anime__video__player .plyr iframe,
.anime__video__player .plyr video {
  width: 102%;
}

.anime__video__player .plyr--full-ui.plyr--video .plyr__control--overlaid {
  display: block;
}

.anime__video__player .plyr--video .plyr__control.plyr__tab-focus,
.anime__video__player .plyr--video .plyr__control:hover,
.anime__video__player .plyr--video .plyr__control[aria-expanded="true"] {
  background: transparent;
}

.anime__video__player .plyr--video .plyr__controls {
  background: transparent;
}

.anime__video__player .plyr--video .plyr__progress__buffer {
  color: transparent;
}

.anime__video__player .plyr--full-ui input[type="range"] {
  color: #ffffff;
}

.anime__video__player
  .plyr__controls
  .plyr__controls__item.plyr__progress__container {
  position: absolute;
  left: 26px;
  bottom: 45px;
  width: calc(100% - 60px);
}

.anime__video__player .plyr__menu {
  margin-right: 70px;
}

.anime__video__player .plyr__controls .plyr__controls__item:first-child {
  position: absolute;
  left: 32px;
  bottom: 8px;
}

.anime__video__player .plyr__controls .plyr__controls__item:last-child {
  position: absolute;
  right: 32px;
  bottom: 8px;
}

.anime__video__player .plyr__volume {
  position: absolute;
  width: auto;
  left: 76px;
  bottom: 8px;
}

.anime__video__player .plyr__controls .plyr__controls__item.plyr__time {
  position: absolute;
  left: 106px;
  bottom: 12px;
}

.anime__video__player .plyr__control--overlaid {
  background: transparent;
  background: var(
    --plyr-video-control-background-hover,
    var(--plyr-color-main, var(--plyr-color-main, transparent))
  );
}

.anime__video__player .plyr__control--overlaid svg {
  height: 60px;
  width: 50px;
}

.anime__details__episodes {
  margin-bottom: 35px;
}

.anime__details__episodes a {
  display: inline-block;
  font-size: 15px;
  color: #ffffff;
  background: rgba(255, 255, 255, 0.2);
  padding: 10px 20px;
  border-radius: 4px;
  margin-right: 15px;
  margin-bottom: 20px;
  -webkit-transition: all, 0.3s;
  -o-transition: all, 0.3s;
  transition: all, 0.3s;
}

.anime__details__episodes a:hover {
  color: #000000;
  background: #ffffff;
}

/*---------------------
  Breadcrumb
-----------------------*/

.breadcrumb-option {
  padding-top: 35px;
}

.breadcrumb__links a {
  font-size: 15px;
  color: #ffffff;
  margin-right: 18px;
  display: inline-block;
  position: relative;
}

.breadcrumb__links a i {
  margin-right: 5px;
  color: #e53637;
}

.breadcrumb__links a:after {
  position: absolute;
  right: -14px;
  top: 0;
  content: "";
  font-family: "FontAwesome";
}

.breadcrumb__links span {
  font-size: 15px;
  color: #b7b7b7;
  display: inline-block;
}

/*---------------------
    Normal Breadcrumb
-----------------------*/

.normal-breadcrumb {
  height: 300px;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
  -webkit-box-pack: center;
  -ms-flex-pack: center;
  justify-content: center;
}

.normal__breadcrumb__text h2 {
  color: #ffffff;
  font-size: 48px;
  font-family: "Oswald", sans-serif;
  font-weight: 700;
  margin-bottom: 22px;
}

.normal__breadcrumb__text p {
  color: #ffffff;
  font-size: 24px;
  margin-bottom: 0;
}

/*---------------------
    Blog
-----------------------*/

.blog {
  padding-top: 70px;
  padding-bottom: 90px;
}

.blog__item {
  height: 580px;
  position: relative;
  margin-left: -10px;
  margin-right: -10px;
  margin-bottom: 10px;
}

.blog__item.small__item {
  height: 285px;
}

.blog__item.small__item .blog__item__text {
  padding: 0 30px;
}

.blog__item.small__item .blog__item__text p {
  margin-bottom: 5px;
}

.blog__item.small__item .blog__item__text h4 a {
  font-size: 20px;
  line-height: 30px;
}

.blog__item__text {
  position: absolute;
  left: 0;
  bottom: 25px;
  text-align: center;
  width: 100%;
  padding: 0 105px;
}

.blog__item__text p {
  color: #ffffff;
  margin-bottom: 12px;
}

.blog__item__text p span {
  color: #e53637;
  margin-right: 5px;
}

.blog__item__text h4 a {
  color: #ffffff;
  line-height: 34px;
}

/*---------------------
  Blog Details
-----------------------*/

.blog-details {
  padding-top: 70px;
}

.blog__details__title {
  text-align: center;
  margin-bottom: 70px;
}

.blog__details__title h6 {
  font-size: 15px;
  color: #ffffff;
  font-weight: 700;
  text-transform: uppercase;
  margin-bottom: 30px;
}

.blog__details__title h6 span {
  color: #b7b7b7;
  font-weight: 400;
  text-transform: none;
}

.blog__details__title h2 {
  color: #ffffff;
  font-size: 48px;
  font-weight: 700;
  line-height: 60px;
  margin-bottom: 38px;
}

.blog__details__title .blog__details__social a {
  display: inline-block;
  font-size: 15px;
  color: #ffffff;
  padding: 16px 35px 14px 20px;
  border-radius: 2px;
  margin-right: 6px;
}

.blog__details__title .blog__details__social a:last-child {
  margin-right: 0;
}

.blog__details__title .blog__details__social a.facebook {
  background: #3b5998;
}

.blog__details__title .blog__details__social a.pinterest {
  background: #ca2027;
}

.blog__details__title .blog__details__social a.linkedin {
  background: #0372b1;
}

.blog__details__title .blog__details__social a.twitter {
  background: #39a1f2;
}

.blog__details__title .blog__details__social a i {
  margin-right: 6px;
}

.blog__details__pic {
  margin-bottom: 30px;
}

.blog__details__pic img {
  min-width: 100%;
}

.blog__details__text {
  margin-bottom: 40px;
}

.blog__details__text p {
  color: #ffffff;
  font-size: 17px;
  line-height: 30px;
}

.blog__details__item__text {
  margin-bottom: 42px;
}

.blog__details__item__text h4 {
  color: #ffffff;
  font-weight: 700;
  margin-bottom: 35px;
}

.blog__details__item__text img {
  min-width: 100%;
  margin-bottom: 26px;
}

.blog__details__item__text p {
  color: #ffffff;
  font-size: 17px;
  line-height: 30px;
  margin-bottom: 0;
}

.blog__details__tags {
  margin-bottom: 60px;
}

.blog__details__tags a {
  display: inline-block;
  color: #b7b7b7;
  font-size: 12px;
  font-weight: 700;
  letter-spacing: 2px;
  text-transform: uppercase;
  background: rgba(255, 255, 255, 0.1);
  border-radius: 2px;
  margin-right: 6px;
  padding: 6px 15px;
  margin-bottom: 10px;
}

.blog__details__tags a:last-child {
  margin-right: 0;
}

.blog__details__btns {
  border-top: 1px solid rgba(255, 255, 255, 0.2);
  border-bottom: 1px solid rgba(255, 255, 255, 0.2);
  padding: 20px 0 15px;
  margin-bottom: 65px;
}

.blog__details__btns__item {
  margin-bottom: 20px;
}

.blog__details__btns__item.next__btn {
  text-align: right;
}

.blog__details__btns__item h5 a {
  font-size: 17px;
  letter-spacing: 2px;
  color: #ffffff;
}

.blog__details__btns__item h5 a span {
  font-size: 30px;
  color: #b7b7b7;
  position: relative;
  top: 8px;
}

.blog__details__comment {
  border-bottom: 1px solid rgba(255, 255, 255, 0.1);
  padding-bottom: 30px;
}

.blog__details__comment h4 {
  color: #ffffff;
  font-weight: 700;
  margin-bottom: 26px;
}

.blog__details__comment__item {
  margin-bottom: 40px;
  overflow: hidden;
}

.blog__details__comment__item.blog__details__comment__item--reply {
  padding-left: 112px;
}

.blog__details__comment__item__pic {
  float: left;
  margin-right: 40px;
}

.blog__details__comment__item__text {
  overflow: hidden;
}

.blog__details__comment__item__text span {
  font-size: 14px;
  color: #b7b7b7;
  display: block;
  margin-bottom: 10px;
}

.blog__details__comment__item__text h5 {
  color: #ffffff;
  font-weight: 700;
  margin-bottom: 10px;
}

.blog__details__comment__item__text p {
  color: #b7b7b7;
  font-size: 14px;
  line-height: 22px;
  margin-bottom: 25px;
}

.blog__details__comment__item__text a {
  display: inline-block;
  color: #ffffff;
  background: rgba(255, 255, 255, 0.1);
  padding: 6px 20px;
  letter-spacing: 2px;
  border-radius: 2px;
  margin-right: 14px;
  -webkit-transition: all, 0.3s;
  -o-transition: all, 0.3s;
  transition: all, 0.3s;
}

.blog__details__comment__item__text a:hover {
  background: #e53637;
}

.blog__details__form {
  padding-top: 50px;
}

.blog__details__form h4 {
  color: #ffffff;
  font-weight: 700;
  margin-bottom: 26px;
}

.blog__details__form form input {
  height: 50px;
  width: 100%;
  background: #ffffff;
  font-size: 15px;
  color: #a6a6a6;
  padding-left: 20px;
  border-radius: 2px;
  border: none;
  margin-bottom: 30px;
}

.blog__details__form form input::-webkit-input-placeholder {
  color: #a6a6a6;
}

.blog__details__form form input::-moz-placeholder {
  color: #a6a6a6;
}

.blog__details__form form input:-ms-input-placeholder {
  color: #a6a6a6;
}

.blog__details__form form input::-ms-input-placeholder {
  color: #a6a6a6;
}

.blog__details__form form input::placeholder {
  color: #a6a6a6;
}

.blog__details__form form textarea {
  height: 115px;
  width: 100%;
  background: #ffffff;
  font-size: 15px;
  color: #a6a6a6;
  padding-left: 20px;
  border-radius: 2px;
  padding-top: 12px;
  resize: none;
  border: none;
  margin-bottom: 34px;
}

.blog__details__form form textarea::-webkit-input-placeholder {
  color: #a6a6a6;
}

.blog__details__form form textarea::-moz-placeholder {
  color: #a6a6a6;
}

.blog__details__form form textarea:-ms-input-placeholder {
  color: #a6a6a6;
}

.blog__details__form form textarea::-ms-input-placeholder {
  color: #a6a6a6;
}

.blog__details__form form textarea::placeholder {
  color: #a6a6a6;
}

/*---------------------
  Login
-----------------------*/

.login {
  padding-top: 130px;
  padding-bottom: 120px;
}

.login__form {
  position: relative;
  padding-left: 145px;
}

.login__form:after {
  position: absolute;
  right: -14px;
  top: -40px;
  height: 330px;
  width: 1px;
  background: rgba(255, 255, 255, 0.2);
  content: "";
}

.login__form h3 {
  color: #ffffff;
  font-weight: 700;
  font-family: "Oswald", sans-serif;
  margin-bottom: 30px;
}

.login__form form .input__item {
  position: relative;
  width: 370px;
  margin-bottom: 20px;
}

.login__form form .input__item:before {
  position: absolute;
  left: 50px;
  top: 10px;
  height: 30px;
  width: 1px;
  background: #b7b7b7;
  content: "";
}

.login__form form .input__item input {
  height: 50px;
  width: 100%;
  font-size: 15px;
  color: #b7b7b7;
  background: #ffffff;
  border: none;
  padding-left: 76px;
}

.login__form form .input__item input::-webkit-input-placeholder {
  color: #b7b7b7;
}

.login__form form .input__item input::-moz-placeholder {
  color: #b7b7b7;
}

.login__form form .input__item input:-ms-input-placeholder {
  color: #b7b7b7;
}

.login__form form .input__item input::-ms-input-placeholder {
  color: #b7b7b7;
}

.login__form form .input__item input::placeholder {
  color: #b7b7b7;
}

.login__form form .input__item span {
  color: #b7b7b7;
  font-size: 20px;
  position: absolute;
  left: 15px;
  top: 13px;
}

.login__form form button {
  border-radius: 0;
  margin-top: 10px;
}

.login__form .forget_pass {
  font-size: 15px;
  color: #ffffff;
  display: inline-block;
  position: absolute;
  right: 60px;
  bottom: 12px;
}

.login__register {
  padding-left: 30px;
}

.login__register h3 {
  color: #ffffff;
  font-weight: 700;
  font-family: "Oswald", sans-serif;
  margin-bottom: 30px;
}

.login__register .primary-btn {
  background: #e53637;
  padding: 12px 42px;
}

.login__social {
  padding-top: 52px;
}

.login__social__links {
  text-align: center;
}

.login__social__links span {
  color: #ffffff;
  display: block;
  font-size: 13px;
  font-weight: 700;
  letter-spacing: 2px;
  text-transform: uppercase;
  margin-bottom: 30px;
}

.login__social__links ul li {
  list-style: none;
  margin-bottom: 15px;
}

.login__social__links ul li:last-child {
  margin-bottom: 0;
}

.login__social__links ul li a {
  color: #ffffff;
  display: block;
  font-size: 13px;
  font-weight: 700;
  letter-spacing: 2px;
  text-transform: uppercase;
  width: 460px;
  padding: 14px 0;
  position: relative;
  margin: 0 auto;
}

.login__social__links ul li a.facebook {
  background: #4267b2;
}

.login__social__links ul li a.google {
  background: #ff4343;
}

.login__social__links ul li a.twitter {
  background: #1da1f2;
}

.login__social__links ul li a i {
  font-size: 20px;
  position: absolute;
  left: 32px;
  top: 14px;
}

/*---------------------
  Sign Up
-----------------------*/

.signup {
  padding-top: 130px;
  padding-bottom: 150px;
}

.signup .login__form:after {
  height: 450px;
}

.signup .login__form h5 {
  font-size: 15px;
  color: #ffffff;
  margin-top: 36px;
}

.signup .login__form h5 a {
  color: #e53637;
  font-weight: 700;
}

.signup .login__social__links {
  text-align: left;
  padding-left: 40px;
}

.signup .login__social__links h3 {
  color: #ffffff;
  font-weight: 700;
  font-family: "Oswald", sans-serif;
  margin-bottom: 30px;
}

.signup .login__social__links ul li a {
  margin: 0;
  text-align: center;
}

/*---------------------
  Footer
-----------------------*/

.footer {
  background: #070720;
  padding-top: 60px;
  padding-bottom: 40px;
  position: relative;
}

.page-up {
  position: absolute;
  left: 50%;
  top: -25px;
  margin-left: -25px;
}

.page-up a {
  display: inline-block;
  font-size: 36px;
  color: #ffffff;
  height: 50px;
  width: 50px;
  background: #e53637;
  line-height: 50px;
  text-align: center;
  border-radius: 50%;
}

.page-up a span {
  position: relative;
  top: 2px;
  left: -1px;
}

.footer__nav {
  text-align: center;
}

.footer__nav ul li {
  list-style: none;
  display: inline-block;
  position: relative;
  margin-right: 40px;
}

.footer__nav ul li:last-child {
  margin-right: 0;
}

.footer__nav ul li a {
  font-size: 15px;
  color: #b7b7b7;
  display: block;
  font-weight: 700;
}

.footer__copyright__text {
  color: #b7b7b7;
  margin-bottom: 0;
  text-align: right;
}

.footer__copyright__text a {
  color: #e53637;
}

/*--------------------------------- Responsive Media Quaries -----------------------------*/

@media only screen and (min-width: 1200px) and (max-width: 1300px) {
  .hero {
    overflow: hidden;
  }
}

@media only screen and (min-width: 1200px) {
  .container {
    max-width: 1170px;
  }
}

/* Medium Device = 1200px */

@media only screen and (min-width: 992px) and (max-width: 1199px) {
  .hero {
    overflow: hidden;
  }
  .login__form {
    position: relative;
    padding-left: 32px;
  }
  .login__social__links ul li a {
    width: 380px;
  }
  .blog__item__text {
    padding: 0 50px;
  }
}

/* Tablet Device = 768px */

@media only screen and (min-width: 768px) and (max-width: 991px) {
  .hero {
    overflow: hidden;
  }
  .header {
    position: relative;
  }
  .header .container {
    position: relative;
  }
  .header__right {
    position: absolute;
    right: 120px;
    top: -42px;
    padding: 0;
  }
  .header__menu {
    display: none;
  }
  .slicknav_menu {
    background: transparent;
    padding: 0;
    display: block;
  }
  .slicknav_nav {
    position: absolute;
    left: 0;
    top: 60px;
    width: 100%;
    background: #ffffff;
    padding: 15px 30px;
    z-index: 9;
  }
  .slicknav_nav ul {
    margin: 0;
  }
  .slicknav_nav .slicknav_row,
  .slicknav_nav a {
    padding: 7px 0;
    margin: 0;
    color: #111111;
    font-weight: 600;
  }
  .slicknav_btn {
    border-radius: 0;
    background-color: #222;
    position: absolute;
    right: 0;
    top: 9px;
  }
  .slicknav_nav .slicknav_arrow {
    color: #111111;
  }
  .slicknav_nav .slicknav_row:hover {
    border-radius: 0;
    background: transparent;
    color: #111111;
  }
  .slicknav_nav a:hover {
    border-radius: 0;
    background: transparent;
    color: #111111;
  }
  .product__sidebar {
    padding-top: 50px;
  }
  .footer__logo {
    text-align: center;
    margin-bottom: 20px;
  }
  .footer__nav {
    margin-bottom: 15px;
  }
  .footer__copyright__text {
    text-align: center;
  }
  .anime__details__widget ul li span {
    width: 90px;
  }
  .anime__details__pic {
    margin-bottom: 40px;
  }
  .anime__details__sidebar {
    padding-top: 50px;
  }
  .login__form {
    padding-left: 0;
    margin-bottom: 40px;
  }
  .login__form:after {
    display: none;
  }
  .login__form form .input__item {
    width: auto;
  }
  .login__register {
    padding-left: 0;
  }
  .signup .login__social__links {
    padding-left: 0;
  }
}

/* Wide Mobile = 480px */

@media only screen and (max-width: 767px) {
  .hero {
    overflow: hidden;
  }
  .header {
    position: relative;
  }
  .header .container {
    position: relative;
  }
  .header__right {
    position: absolute;
    right: 120px;
    top: -42px;
    padding: 0;
  }
  .header__menu {
    display: none;
  }
  .slicknav_menu {
    background: transparent;
    padding: 0;
    display: block;
  }
  .slicknav_nav {
    position: absolute;
    left: 0;
    top: 60px;
    width: 100%;
    background: #ffffff;
    padding: 15px 30px;
    z-index: 9;
  }
  .slicknav_nav ul {
    margin: 0;
  }
  .slicknav_nav .slicknav_row,
  .slicknav_nav a {
    padding: 7px 0;
    margin: 0;
    color: #111111;
    font-weight: 600;
  }
  .slicknav_btn {
    border-radius: 0;
    background-color: #222;
    position: absolute;
    right: 0;
    top: 9px;
  }
  .slicknav_nav .slicknav_arrow {
    color: #111111;
  }
  .slicknav_nav .slicknav_row:hover {
    border-radius: 0;
    background: transparent;
    color: #111111;
  }
  .slicknav_nav a:hover {
    border-radius: 0;
    background: transparent;
    color: #111111;
  }
  .product__sidebar {
    padding-top: 50px;
  }
  .footer__logo {
    text-align: center;
    margin-bottom: 20px;
  }
  .footer__nav {
    margin-bottom: 15px;
  }
  .footer__copyright__text {
    text-align: center;
  }
  .blog__details__title h2 {
    font-size: 34px;
    line-height: normal;
  }
  .anime__details__pic {
    margin-bottom: 40px;
  }
  .anime__details__sidebar {
    padding-top: 50px;
  }
  .btn__all {
    text-align: left;
  }
  .product__page__title .section-title {
    margin-bottom: 30px;
  }
  .product__page__title .product__page__filter {
    text-align: left;
  }
  .anime__details__rating {
    text-align: left;
    position: relative;
    margin-bottom: 20px;
  }
  .blog__details__social {
    overflow: hidden;
  }
  .blog__details__title .blog__details__social a {
    margin-right: 10px;
    margin-bottom: 10px;
    width: calc(50% - 10px);
    float: left;
  }
  .login__form {
    padding-left: 0;
    margin-bottom: 40px;
  }
  .login__form:after {
    display: none;
  }
  .login__form form .input__item {
    width: auto;
  }
  .signup .login__social__links {
    padding-left: 0;
  }
  .login__social__links ul li a {
    width: auto;
  }
  .blog__item__text {
    padding: 0 30px;
  }
  .login__register {
    padding-left: 0;
  }
  .product__sidebar__view .filter__controls li {
    margin-right: 2px;
  }
  .search-model-form input {
    width: 100%;
  }
}

/* Small Device = 320px */

@media only screen and (max-width: 479px) {
  .hero__slider.owl-carousel .owl-nav {
    display: none;
  }
  .hero__items {
    padding: 250px 0 42px 15px;
  }
  .hero__text h2 {
    font-size: 32px;
  }
  .footer__nav ul li {
    margin-right: 10px;
  }
  .anime__details__btn .follow-btn {
    padding: 14px 26px;
    margin-right: 11px;
    margin-bottom: 25px;
  }
  .anime__details__widget ul li span {
    width: 85px;
  }
  .anime__video__player .plyr__volume {
    left: 65px;
  }
  .anime__video__player .plyr__controls .plyr__controls__item.plyr__time {
    left: 95px;
  }
  .anime__video__player .plyr__menu {
    margin-right: 60px;
  }
  .blog__details__title h2 {
    font-size: 30px;
    line-height: normal;
  }
  .blog__details__title .blog__details__social a {
    padding: 16px 25px 14px 20px;
  }
  .blog__details__comment__item.blog__details__comment__item--reply {
    padding-left: 0;
  }
  .blog__details__comment__item__pic {
    margin-right: 25px;
  }
  .blog__details__comment__item__text a {
    margin-right: 6px;
  }
  .login__social__links ul li a i {
    left: 20px;
  }
  .login__form .forget_pass {
    position: relative;
    left: 0;
    bottom: 0;
    margin-top: 25px;
  }
  .header__right a {
    margin-right: 10px;
  }
  .anime__review__item__text h6 span {
    font-size: 12px;
  }
  .anime__review__item__text {
    padding: 18px 20px 20px;
  }
}

/*---------------------
  Helper CSS
-----------------------*/

.section-title {
  margin-bottom: 30px;
}

.section-title h4,
.section-title h5 {
  color: #ffffff;
  font-weight: 600;
  line-height: 21px;
  text-transform: uppercase;
  padding-left: 20px;
  position: relative;
  font-family: "Oswald", sans-serif;
}

.section-title h4:after,
.section-title h5:after {
  position: absolute;
  left: 0;
  top: -6px;
  height: 32px;
  width: 4px;
  background: #e53637;
  content: "";
}

.set-bg {
  background-repeat: no-repeat;
  background-size: cover;
  background-position: top center;
}

.spad {
  padding-top: 100px;
  padding-bottom: 100px;
}

.text-white h1,
.text-white h2,
.text-white h3,
.text-white h4,
.text-white h5,
.text-white h6,
.text-white p,
.text-white span,
.text-white li,
.text-white a {
  color: #fff;
}

/* buttons */

.primary-btn {
  display: inline-block;
  font-size: 13px;
  font-weight: 700;
  text-transform: uppercase;
  color: #ffffff;
  letter-spacing: 2px;
}

.primary-btn span {
  font-size: 18px;
  margin-left: 5px;
  position: relative;
  top: 3px;
}

.site-btn {
  font-size: 13px;
  color: #ffffff;
  background: #e53637;
  font-weight: 700;
  border: none;
  border-radius: 2px;
  letter-spacing: 2px;
  text-transform: uppercase;
  display: inline-block;
  padding: 12px 30px;
}

/* Preloder */

#preloder {
  position: fixed;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  z-index: 999999;
  background: #000;
}

.loader {
  width: 40px;
  height: 40px;
  position: absolute;
  top: 50%;
  left: 50%;
  margin-top: -13px;
  margin-left: -13px;
  border-radius: 60px;
  animation: loader 0.8s linear infinite;
  -webkit-animation: loader 0.8s linear infinite;
}

@keyframes loader {
  0% {
    -webkit-transform: rotate(0deg);
    transform: rotate(0deg);
    border: 4px solid #f44336;
    border-left-color: transparent;
  }
  50% {
    -webkit-transform: rotate(180deg);
    transform: rotate(180deg);
    border: 4px solid #673ab7;
    border-left-color: transparent;
  }
  100% {
    -webkit-transform: rotate(360deg);
    transform: rotate(360deg);
    border: 4px solid #f44336;
    border-left-color: transparent;
  }
}

@-webkit-keyframes loader {
  0% {
    -webkit-transform: rotate(0deg);
    border: 4px solid #f44336;
    border-left-color: transparent;
  }
  50% {
    -webkit-transform: rotate(180deg);
    border: 4px solid #673ab7;
    border-left-color: transparent;
  }
  100% {
    -webkit-transform: rotate(360deg);
    border: 4px solid #f44336;
    border-left-color: transparent;
  }
}

.spacial-controls {
  position: fixed;
  width: 111px;
  height: 91px;
  top: 0;
  right: 0;
  z-index: 999;
}

.spacial-controls .search-switch {
  display: block;
  height: 100%;
  padding-top: 30px;
  background: #323232;
  text-align: center;
  cursor: pointer;
}

.search-model {
  display: none;
  position: fixed;
  width: 100%;
  height: 100%;
  left: 0;
  top: 0;
  background: #000;
  z-index: 99999;
}

.search-model-form {
  padding: 0 15px;
}

.search-model-form input {
  width: 500px;
  font-size: 40px;
  border: none;
  border-bottom: 2px solid #333;
  background: 0 0;
  color: #999;
}

.search-close-switch {
  position: absolute;
  width: 50px;
  height: 50px;
  background: #333;
  color: #fff;
  text-align: center;
  border-radius: 50%;
  font-size: 28px;
  line-height: 28px;
  top: 30px;
  cursor: pointer;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
  -webkit-box-pack: center;
  -ms-flex-pack: center;
  justify-content: center;
}

/*---------------------
  Header
-----------------------*/

.header {
  background: #070720;
}

.header__logo {
  padding: 20px 0 17px;
}

.header__logo a {
  display: inline-block;
}

.header__menu {
  text-align: center;
}

.header__menu ul li {
  list-style: none;
  display: inline-block;
  position: relative;
  margin-right: 16px;
}

.header__menu ul li.active a {
  background: #e53637;
  color: #ffffff;
}

.header__menu ul li:hover a {
  color: #ffffff;
}

.header__menu ul li:hover .dropdown {
  top: 62px;
  opacity: 1;
  visibility: visible;
}

.header__menu ul li:hover .dropdown li a {
  background: transparent;
}

.header__menu ul li:last-child {
  margin-right: 0;
}

.header__menu ul li .dropdown {
  position: absolute;
  left: 0;
  top: 82px;
  width: 150px;
  background: #ffffff;
  text-align: left;
  padding: 5px 0;
  z-index: 9;
  opacity: 0;
  visibility: hidden;
  -webkit-transition: all, 0.3s;
  -o-transition: all, 0.3s;
  transition: all, 0.3s;
}

.header__menu ul li .dropdown li {
  display: block;
  margin-right: 0;
}

.header__menu ul li .dropdown li a {
  font-size: 14px;
  color: #111111;
  font-weight: 500;
  padding: 5px 20px;
}

.header__menu ul li a {
  font-size: 15px;
  color: #b7b7b7;
  display: block;
  font-weight: 700;
  -webkit-transition: all, 0.5s;
  -o-transition: all, 0.5s;
  transition: all, 0.5s;
  padding: 20px;
}

.header__menu ul li a span {
  position: relative;
  font-size: 17px;
  top: 2px;
}

.header__right {
  text-align: right;
  padding: 20px 0 15px;
}

.header__right a {
  display: inline-block;
  font-size: 18px;
  color: #ffffff;
  margin-right: 30px;
}

.header__right a:last-child {
  margin-right: 0;
}

.slicknav_menu {
  display: none;
}
.button {
  height: 50px;
  width: 200px;
  position: relative;
  background-color: transparent;
  cursor: pointer;
  border: 2px solid #252525;
  overflow: hidden;
  border-radius: 30px;
  color: #333;
  transition: all 0.5s ease-in-out;
}

.btn-txt {
  z-index: 1;
  font-weight: 800;
  letter-spacing: 4px;
}

.type1::after {
  content: "";
  position: absolute;
  left: 0;
  top: 0;
  transition: all 0.5s ease-in-out;
  background-color: #333;
  border-radius: 30px;
  visibility: hidden;
  height: 10px;
  width: 10px;
  z-index: -1;
}

.button:hover {
  box-shadow: 1px 1px 200px #252525;
  color: #fff;
  border: none;
}

.type1:hover::after {
  visibility: visible;
  transform: scale(100) translateX(2px);
}
</style>

<script>
export default {
  data() {
    return {
      items: [
        {
          src: require("D:/Anime/workshop/public/img/posanime/3674ce60-bff9-11ed-9adc-01e4c0b4f407_webp_original.jpg"),
        },
        {
          src: require("D:/Anime/workshop/public/img/posanime/yourname.jpg"),
        },
        {
          src: require("D:/Anime/workshop/public/img/posanime/sword-art-online.jpg"),
        },
        {
<<<<<<< HEAD
          src: require("D:/Anime/workshop/public/img/posanime/naruto-shippuden-rxxyiybobk8m0q7u.jpg"),
=======
          src:  require("D:/Anime/workshop/public/img/posanime/naruto-shippuden-rxxyiybobk8m0q7u.jpg"),
>>>>>>> 4a25b1aae0c1fdd1388140efd685cdeae818ca75
        },
      ],
      loading: false, // คุณควรกำหนด loading เป็น false ใน data หรือกำหนดค่าเริ่มต้นที่ต้องการ
    };
  },
  methods: {
    reserve() {
      this.loading = true;
      setTimeout(() => (this.loading = false), 2000);
    },
  },
  expandInput() {
    // Handle input expansion here
  },
  focusInput() {
    // Handle input focus here
  },
  resetInput() {
    // Handle input reset here
  },
};
</script>





