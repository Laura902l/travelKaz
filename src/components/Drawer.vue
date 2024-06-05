<!-- eslint-disable vue/multi-word-component-names -->
<!-- <template>

          <div  v-for="(menuItem, index) in menuList" :key="index"> 
            <q-item clickable v-ripple>
            <q-btn
              :icon="menuItem.icon"
              flat
              dense
              color="black"
              :to="menuItem.link"
              >{{ menuItem.label }}</q-btn
            >
          </q-item>
          <q-separator :key="'sep' + index" v-if="menuItem.separator" />
          </div>
</template>

<script>
import { ref } from 'vue';

const menuList = [
{
    icon: 'home',
    label: 'Домой',
    separator: false,
    link: '/'
  },
  {
    icon: 'style',
    label: 'Регистрация',
    separator: false,
    link: '/registration'
  },
  {
    icon: 'style',
    label: 'Вход',
    separator: true
  },
  {
    icon: 'eco',
    label: 'Астана',
    separator: false,
    link: '/city/astana'
  },
  {
    icon: 'eco',
    label: 'Алмата',
    separator: false
  },
  {
    icon: 'eco',
    label: 'Шымкент',
    separator: true
  },
  {
    icon: 'eco',
    label: 'Актобе',
    separator: false
  },
  {
    icon: 'eco',
    label: 'Тараз',
    separator: false
  },
  {
    icon: 'eco',
    label: 'Атырау',
    separator: false
  },
  {
    icon: 'eco',
    label: 'Семей',
    separator: true
  },
  {
    icon: 'settings',
    label: 'Настройки',
    separator: false
  },
];

export default {
  setup() {

    return {menuList };
  }
};
</script>

<style>
.closeBtn {
  font-size: 24px;
}
</style> -->
