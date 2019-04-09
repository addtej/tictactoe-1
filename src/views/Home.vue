<template>
  <div class="home">
    <TicTacToe
      msg="Tic Tac Toe"
      :seanConnery="seanConnery"
      :vectorSquare="vectorSquare"
    />
  </div>
</template>

<script>
import TicTacToe from '@/components/TicTacToe.vue'

export default {
  name: 'home',
  components: {
    TicTacToe
  },
  data:()=>(
    {
      vectorSquare: '<svg width="100" height="100"><rect width="100" height="100" style="fill:rgb(0,0,255)" /></svg>',
      seanConnery: '<img src="http://tictactoe.trevoralfstad.com/images/o-championship.png" height="70px" width="70px">'
    }
  )
}
</script>
