<template>
    <div>
      <h2>Transferência Financeira</h2>
  
      <form @submit.prevent="realizarTransferencia">
        <label for="contaOrigem">Conta de Origem:</label>
        <input type="text" v-model="contaOrigem" placeholder="XXXXXXXXXX" required />
  
        <label for="contaDestino">Conta de Destino:</label>
        <input type="text" v-model="contaDestino" placeholder="XXXXXXXXXX" required />
  
        <label for="valorTransferencia">Valor da Transferência:</label>
        <input type="number" v-model="valorTransferencia" required />
  
        <label for="dataTransferencia">Data da Transferência:</label>
        <input type="date" v-model="dataTransferencia" required />
  
        <button type="submit">Realizar Transferência</button>
      </form>
    </div>
  </template>
  
  <script>
  export default {
    name: 'TransferenciaFinanceira',
    data() {
      return {
        contaOrigem: 'XXXXXXXXXX',
        contaDestino: 'XXXXXXXXXX',
        valorTransferencia: null,
        dataTransferencia: null,
      };
    },
    methods: {
      realizarTransferencia() {
        // Lógica para enviar os dados para o backend ou realizar outras ações necessárias
        console.log('Conta de Origem:', this.contaOrigem);
        console.log('Conta de Destino:', this.contaDestino);
        console.log('Valor da Transferência:', this.valorTransferencia);
        console.log('Data da Transferência:', this.dataTransferencia);
  
        // Adicione aqui a lógica para enviar os dados para o backend
      },
    },
  };
  </script>
  
  <style scoped>
  /* Adicione estilos CSS conforme necessário */
  </style>
  