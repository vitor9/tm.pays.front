<!-- src/views/Home.vue -->

<template>
    <div>
      <h1>Página Inicial</h1>
      <router-link to="/transferencia">Ir para Transferência Financeira</router-link>
      <router-view></router-view>
    </div>
  </template>
  
  <script>
//   import TransferenciaFinanceira from '@/components/TransferenciaFinanceira.vue';
  
  export default {
    name: 'HomePage',
//    components: {
//      TransferenciaFinanceira,
//    },
  };
  </script>
  