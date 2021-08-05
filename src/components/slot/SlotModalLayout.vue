<template>
  <div class="modal-container">
    <header>
      <slot name="header2"></slot>
    </header>
    <main>
      <slot name="main"></slot>
    </main>
    <footer>
      <slot name="footer"></slot>
    </footer>
  </div>
</template>
<style scoped>
.modal-container {
  border: 1px solid black;
  background-color: #ddd;
}
</style>
