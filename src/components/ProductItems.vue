<template>
    <div class="nav-bar">
        <ul v-if="navStore.filter === 'Indoor'">
            <transition-group
                appear
                class="group"
                tag="div"
                @before-enter="copyBefore"
                @enter="copyEnter"
                            >
                <p v-for="(item, index) in copy" :key="item.text" :data-index="index">
                    <span>
                    {{ item.text }}
                    </span>
                </p>
            </transition-group>
        </ul>
        <ul v-if="navStore.filter === 'Outdoor'">
            <div class="card-group">
                <transition-group
                    appear
                    @before-enter="cardsBefore"
                    @enter="cardsEnter"
                >
                    <div class="card" v-for="(item, index) in cards" :key="index" :data-index="index"></div>
                </transition-group>
            </div>
        </ul>
        <ul v-if="navStore.filter === 'Residential'">
            <li>Residential:</li>
            <li>Grade 3</li>
            <li>PIR</li>
            <li>Dual-Technology</li>
            <li>Laser</li>
            <li>Fibre-Optic</li>
            <li>IR BEAMS</li>
        </ul>
        <ul v-if="navStore.filter === 'Commercial'">
            <li>Commercial:</li>
            <li>Grade 3</li>
            <li>PIR</li>
            <li>Dual-Technology</li>
            <li>Laser</li>
            <li>Fibre-Optic</li>
            <li>IR BEAMS</li>
        </ul>
        <ul v-if="navStore.filter === 'Security'">
            <li>Security:</li>
            <li>PIR</li>
            <li>Dual-Technology</li>
            <li>IR BEAMS</li>
        </ul>
    </div>
</template>
<script>
    import { useNavStore } from '@/stores/navStore';
    import { ref } from 'vue'
    import gsap from 'gsap'
    export default{
        setup() {
            const navStore = useNavStore()
            const copy = ref([
            { text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit'},
            { text: 'sed do eiusmod tempor incididunt ut labore et dolore magna aliqua'},
            { text: 'Ut enim ad minim veniam'},
            { text: 'quis nostrud exercitation ullamco laboris nisi ut'},
            ])
            const cards = ref ([
                { content: 'blue' },
                { content: 'yellow' },
                { content: 'orange' },
                { content: 'pink' },
            ])
            const copyBefore = (el) => {
            const spanElement = el.querySelector('span');
            spanElement.style.transform = 'translateY(100%)';
            }
            const copyEnter = (el, done) => {
            const spanElement = el.querySelector('span');
            gsap.to(spanElement, {
                duration: 0.7,
                y: 0,
                ease: "SlowMo.easeOut",
                onComplete: done,
                delay: el.dataset.index * 0.2
            })
            }
            const cardsBefore = (el) => {
                gsap.set(el, { opacity: 0, x: 100, rotateZ: 5 });
            }
            const cardsEnter = (el) => {
                gsap.to (el, {
                duration: 1,
                opacity: 1,
                rotate: 0,
                ease: "power1.out",
                x: 0,
                delay: el.dataset.index * 0.1
                })
            }
           
           
      
            return { navStore, copy, copyBefore, copyEnter, cards, cardsBefore, cardsEnter }
        }
    }
</script>
<style lang="scss">
    .card-group {
    display: flex;
    }
    .card {
    width: 300px;
    margin-right: 1rem;
    height: 400px;
    background: pink;
    }
    .nav-bar {
        ul {
            display: flex;
            list-style: none;
            margin-left: 0;
            padding-left: 0;
            li {
                margin-right: 1rem;
                &:first-of-type {
                    font-weight: bold;
                }
            }
        }
    }
    .group {
    background: #DFD9CF;
    padding-top: 100px;
    width: 100%;
    text-align: center;
    padding-bottom: 100px;
  }
  p {
    background-color: #DFD9CF;
    overflow: hidden;
    font-size: 20px;
    color: #2B2B26;
  }
  p span {
    display: inline-block;
  }
</style>