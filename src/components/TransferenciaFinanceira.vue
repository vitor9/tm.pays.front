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
  
        <button @click="criarNovaTransferencia" type="submit">Realizar Transferência</button>
      </form>
    </div>
  </template>
  
  <script>
import api from '@/services/api';

export default {
  data() {
    return {
      transferencias: [],
      novaTransferencia: {
      },
    };
  },
  methods: {
    async carregarTransferencias() {
      try {
        const response = await api.getTransferencias();
        this.transferencias = response.data;
      } catch (error) {
        console.error('Erro ao carregar transferências:', error);
      }
    },
    async criarNovaTransferencia() {
      try {
        await api.criarTransferencia(this.novaTransferencia);
        this.carregarTransferencias();
      } catch (error) {
        console.error('Erro ao criar nova transferência:', error);
      }
    },
  },
  created() {
    this.carregarTransferencias();
  },
};
  </script>
  
  <style scoped>
  </style>
  