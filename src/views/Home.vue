<template>
  <div class="home">
    <HelloWorld
      msg="Tic Tac Toe"
      :seanConnery="seanConnery"
      :vectorSquare="vectorSquare"
    />
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'

export default {
  name: 'home',
  components: {
    HelloWorld
  },
  data:()=>(
    {
      vectorSquare: '<svg width="100" height="100"><rect width="100" height="100" style="fill:rgb(0,0,255)" /></svg>',
      seanConnery: '<img src="http://tictactoe.trevoralfstad.com/images/o-championship.png" height="70px" width="70px">'
    }
  )
}
</script>
