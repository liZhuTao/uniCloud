<view class="data-v-204b7686"><view class="search data-v-204b7686"><view class="search-input data-v-204b7686"><image src="{{$root.m0}}" mode="widthFix" class="_img data-v-204b7686"></image><input type="text" placeholder="请输入文字" disabled class="data-v-204b7686"/></view></view><swiper indicator-dots="{{true}}" autoplay="{{true}}" interval="{{3000}}" duration="{{1000}}" circular="{{true}}" indicator-color="rgba(255,255,255)" indicator-active-color="#00ff00" class="data-v-204b7686"><block wx:for="{{banner}}" wx:for-item="item" wx:for-index="index" wx:key="index"><swiper-item class="data-v-204b7686"><view class="swiper-item data-v-204b7686" id="swiper-item"><image class="img-url _img data-v-204b7686" src="{{item.image}}" mode="aspectFill"></image></view></swiper-item></block></swiper></view>