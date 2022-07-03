<template>
  <div class="main">
    <nav>
      <router-link
        to="/"
        active-class="link--active"
        exact
        class="link"
      >Home</router-link>
      <router-link
        to="/users"
        active-class="link--active"
        exact
        class="link"
      >Users</router-link>
    </nav>
    <router-view name="header"></router-view>
    <transition
      name="fade"
      mode="out-in"
      @before-enter="beforeEnter"
    >
      <router-view></router-view>
    </transition>
    <button @click="myAnimation = 'slide'">Slide</button>
    <button @click="myAnimation = 'fade'">Fade</button>
    <p>{{ myAnimation }}</p>
    <button @click="show = !show">切り替え</button>
    <br>
    <button @click="add()">追加</button>
    <ul style="width: 200px; margin: auto;">
      <transition-group name="fade" tag="div">
        <li style="cursor: pointer;"
          v-for="(number, index) in numbers"
          :key="number"
          @click="remove(index)">
          {{ number }}
        </li>
      </transition-group>
      
    </ul>
    <transition
      :css="false"
      @before-enter="beforeEnter"
      @enter="enter"
      @after-enter="afterEnter"
      @enter-cancelled="enterCancelled"
      
      @before-leave="beforeLeave"
      @leave="leave"
      @after-leave="afterLeave"
      @leave-cancelled="leaveCancelled"
    >
      <div class="circle" v-if="show">

      </div>
    </transition>

    <button @click="myComponent = 'ComponentA'">ComponentA</button>
    <button @click="myComponent = 'ComponentB'">ComponentB</button>
    <transition name="fade" mode="out-in">
      <component :is="myComponent"></component>
    </transition>
    <transition name="fade" mode="out-in">
      <p v-if="show" key="bye">さよなら</p>
      <p v-else key="hello">こんにちは</p>
    </transition>

    <transition 
      enter-active-class="animate__animated animate__bounce" 
      leave-active-class="animate__animated animate__shakeX" 
      appear>
      <p v-if="show">HELLO</p>
    </transition>
    <transition :name="myAnimation" appear>
      <p v-if="show">bye</p>
    </transition>
  </div>
</template>

<script>
import ComponentA from './components/ComponentA.vue'
import ComponentB from './components/ComponentB.vue'
export default {
  components: {
    ComponentA,
    ComponentB
  },
  data() {
    return {
      numbers: [0, 1, 2],
      nextNumber: 3,
      show: true,
      myAnimation: '',
      myComponent: "ComponentA"
    }
  },
  methods: {
    randomIndex() {
      return Math.floor(Math.random() * this.numbers.length);
    },
    add() {
      this.numbers.splice(this.randomIndex(), 0, this.nextNumber);
      this.nextNumber += 1;
    },
    remove(index) {
      this.numbers.splice(index, 1);
    },
    beforeEnter(el) {
      el.style.transform = 'scale(0)';
    },
    enter(el, done) {
      let scale = 0;
      const interval = setInterval(() => {
        el.style.transform = `scale(${scale})`;
        scale += 0.1;
        if (scale > 1) {
          clearInterval(interval);
          done();
        }
      }, 20)
    },
    afterEnter() {

    },
    enterCancelled() {

    },
    beforeLeave() {

    },
    leave(el, done) {
      let scale = 1;
      const interval = setInterval(() => {
        el.style.transform = `scale(${scale})`;
        scale -= 0.1;
        if (scale < 0) {
          clearInterval(interval);
          done();
        }
      }, 20)
    },
    afterLeave() {

    },
    leaveCancelled() {

    }
  }

}
</script>

<style scoped>
.link {
  margin-right: 10px;
}
.link--active {
  font-size: 20px;
}
.circle {
  width: 200px;
  height: 200px;
  margin: auto;
  border-radius: 50%;
  background-color: deeppink;
}
.fade-move {
  transition: transform 1s;
}
.fade-enter-active {
  transition: opacity .5s;
}
.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
  opacity: 0;
}
.fade-leave-active {
  transition: opacity .5s;
  position: absolute;
  width: 200px;
}

.slide-enter,
.slide-leave-to {
  opacity: 0;
}
.slide-enter-active {
  animation: slide-in 0.5s;
  transition: opacity 5s;
}
.slide-leave-active {
  animation: slide-in 0.5s reverse;
  transition: opacity 5s;
}

@keyframes slide-in {
  from {
    transform: translateX(100px);
  }
  to {
    transform: translateX(0);
  }
}

.main {
  width: 70%;
  margin: auto;
  padding-top: 5rem;
  text-align: center;
}
</style>