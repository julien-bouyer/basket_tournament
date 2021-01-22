<template>
  <div>
    <toolbar></toolbar>
    <section>
      <div class="container mt-5 mb-5">
        <router-view></router-view>
      </div>
    </section>
  </div>
</template>

<script>
import toolbar from '@/components/common/toolbar';
export default {
  components: {
    toolbar,
  },
};
</script>
