<template>
  <div id="app">
    <router-view />
  </div>
</template>

<style>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
  font-size: 16px;
  font-family: sans-serif;
}

#app {
  background-color: lightcoral;
  min-height: 100vh;
  min-width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
}
</style>
