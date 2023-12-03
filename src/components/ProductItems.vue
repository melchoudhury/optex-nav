<template>
    <div class="nav-bar">
        <ul v-if="navStore.filter === 'Indoor'">
            <li>Indoor:</li>
            <li>Grade 2</li>
            <li>Grade 3</li>
            <li>PIR</li>
            <li>Dual-Technology</li>
            <li>Laser</li>
        </ul>
        <ul v-if="navStore.filter === 'Outdoor'">
            <li>Outdoor:</li>
            <li>Grade 2</li>
            <li>Grade 3</li>
            <li>PIR</li>
            <li>Fibre-Optic</li>
            <li>Laser</li>
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
    export default{
        setup() {
            const navStore = useNavStore()
            return { navStore }
        }
    }
</script>
<style lang="scss">
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
</style>