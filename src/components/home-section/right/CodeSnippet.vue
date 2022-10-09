<script setup lang="ts">
import hljs from "highlight.js/lib/common"
import hljsVuePlugin from "@highlightjs/vue-plugin"

const highlightjs = hljsVuePlugin.component

const code = `
import { build, code, design } from 'roland'

async function createPortfolio() {
  const theDesign = await design('a beautiful portfolio')
  const theCode = await code(theDesign, 'like a pro')
  build(theCode, 'and preview it')
}

createPortfolio()
`
</script>

<template>
  <div class="container">
    <div class="code-snippet">
      <div class="highlightjs-container">
        <div class="snippet-header">
          <div v-for="i in 3" :key="i" class="circle"></div>
        </div>

        <highlightjs language="javascript" :code="code" class="overflow-auto hide-scrollbar" />
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
@import url("https://fonts.googleapis.com/css2?family=JetBrains+Mono:wght@500&display=swap");
// Stolen design from https://ray.so
.container {
  --frame-background: rgba(0, 0, 0, 0.75);

  border-radius: 12px;
  background: linear-gradient(140deg, rgb(207, 47, 152), rgb(106, 61, 236));
  min-width: 250px;
  max-width: 570px;

  transform: rotateY(-2deg) rotateX(-80deg);
}

.code-snippet {
  position: relative;
  background: var(--frame-background);
  border-radius: inherit;

  .highlightjs-container {
    position: relative;
    padding: 16px;
  }
}

.snippet-header {
  display: flex;
  gap: 8px;

  .circle {
    width: 12px;
    height: 12px;
    border-radius: 6px;
    background-color: #fff3;
  }
}
</style>

<style lang="scss">
.hljs {
  --syntax-string: #e9aefe;
  --syntax-keyword: #6599ff;
  --syntax-definition: #f8518d;

  font-family: "JetBrains Mono", monospace;
  letter-spacing: 0.1px;
  font-size: 14px;
  -webkit-font-smoothing: antialiased;
  color: var(--syntax-definition);

  .hljs-keyword {
    color: var(--syntax-keyword);
  }
  .hljs-string {
    color: var(--syntax-string);
  }
}
</style>
