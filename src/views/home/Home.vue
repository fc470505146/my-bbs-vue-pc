<template>
  <div class="home__top">
    <div class="top__wrapper">
      <div class="top__wrapper__search">
        <input
          type="text"
          class="search__line"
          placeholder="搜索版面、帖子、用户"
        />
        <div class="search__icon iconfont">&#xe600;</div>
      </div>
      <div class="top__wrapper__help">帮助中心</div>
    </div>
  </div>
  <div class="base__left">
    <div class="left__title">广州新华</div>
    <div class="left__user">
      <img :src="headImg"  class="user__img">
      <div class="user__input">
        <div class="user__input__username">
          <input type="text" class="user__username" placeholder="请输入用户名">
        </div>
        <div class="user__input__password">
          <input type="password" class="user__password" placeholder="请输入密码">
        </div>
      </div>
      <div class="user__btn">
        <div class="btn user__btn__login">登录</div>
        <div class="btn user__btn__register">注册</div>
      </div>
      <div class="user__findback">找回密码</div>
    </div>
    <div class="left__link">
      <div class="link__list">
        <div class="link__list__item"><span class="item__icon"></span>首页</div>
        <div class="link__list__item"><span class="item__icon"></span>首页</div>
        <div class="link__list__item"><span class="item__icon"></span>首页</div>
        <div class="link__list__item"><span class="item__icon"></span>首页</div>
        <div class="link__list__item"><span class="item__icon"></span>首页</div>

      </div>
    </div>
  </div>
  <div class="home__content"></div>
</template>

<script>
export default {
  name: 'Home',
  setup () {
    const headImg = require('@/assets/img/headShot.png')
    return { headImg }
  }
}
</script>

<style lang="scss" scoped>
.btn{
  border-radius: .1rem;
  padding: .04rem .08rem;
  font-size: .12rem;
  color: white;
}
.btn:hover{
  cursor: pointer;
}
.home__top {
  height: 0.5rem;
  background-color: #eee;
  position: fixed;
  top: 0;
  right: 0;
  left: 0;
  .top__wrapper {
    height: 0.5rem;
    display: flex;
    justify-content: space-between;
    margin-left: 1.6rem;
    padding: 0 0.4rem;
    line-height: 0.5rem;
    color: #959595;
    &__search {
      position: relative;
      .search__line {
        padding: 0 0 0 10px;
        line-height: 0.28rem;
        width: 3.38rem;
        border: 1px solid #e5e5e5;
        border-radius: 5px;
      }
      .search__icon {
        position: absolute;
        right: 0.1rem;
        top: 0;
      }
      .search__icon:hover {
        cursor: pointer;
      }
    }
    &__help {
      font-size: 0.14rem;
    }
    &__help:hover {
      cursor: pointer;
    }
  }
}
.base__left {
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  width: 1.6rem;
  z-index: 1;
  background-color: #293134;
  color: #fff;
  .left__title {
    font-weight: bold;
    height: 0.5rem;
    text-align: center;
    line-height: 0.5rem;
    font-size: 0.2rem;
  }
  .left__user {
    box-sizing: border-box;
    height: 3.5rem;
    background-color: rgb(61, 71, 75);
    padding: .2rem 0;
    text-align: center;
    .user__img{}
    .user__input{
    }
    .user__btn{
      display: flex;
      justify-content: space-around;
    }
  }
  .left__link {
    padding: 0 0.25rem;
    line-height: 0.5rem;
    .link__list {
      &__item {
      }
    }
  }
}
.home__content {
}
</style>
