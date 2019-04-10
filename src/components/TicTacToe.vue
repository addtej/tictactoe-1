<template>
  <div class="hello" style="margin-top:50px;">
    <pre><button class="btn btn-outline-success" v-if="standardMode" style="color:#46B987; font-size:18px; cursor:pointer"  @click="enterCampionShip">Enter Frontenddevlandia</button></pre>
    <pre><button class="btn btn-outline-success" v-if="championshipMode" style="color:#46B987; font-size:18px; cursor:pointer"  @click="enterStandardMode">Enter Standard Mode</button></pre>
    <p>
      <div id="app">
        <div v-if="winnerMessage">
          <center>
            <h1 v-html="WinnerMessageText"></h1>
            <br>
          </center>
        </div>
        <div v-else>
          <div v-if="playerA">
            <h1 class="display-3">
              <span v-if="championshipMode" v-html="seanConnery"> </span>
              <span v-else> O </span>
              <small class="text-muted"> Plays</small>
            </h1>
          </div>
          <div v-else-if="playerB">
            <h1 class="display-3">
              <span v-if="championshipMode" v-html="vectorSquare"> </span>
              <span v-else> X </span>
              <small class="text-muted"> Plays</small>
            </h1>
          </div>
          <br>
          <button class="undoButton btn btn-outline-primary" @click="undo">Undo Move</button>
          <br><br><br><br>
        </div>
        <table>
          <tr>
            <td v-on:click="insertItem(0)" class="cell cell0" id="0"><div v-html="obj[0]"></div></td>
            <td v-on:click="insertItem(1)" class="cell cell1" id="1"><div v-html="obj[1]"></div></td>
            <td v-on:click="insertItem(2)" class="cell cell2" id="2"><div v-html="obj[2]"></div></td>
          </tr>
          <tr>
            <td v-on:click="insertItem(3)" class="cell cell3" id="3"><div v-html="obj[3]"></div></td>
            <td v-on:click="insertItem(4)" class="cell cell4" id="4"><div v-html="obj[4]"></div></td>
            <td v-on:click="insertItem(5)" class="cell cell5" id="5"><div v-html="obj[5]"></div></td>
          </tr>
          <tr>
            <td v-on:click="insertItem(6)" class="cell cell6" id="6"><div v-html="obj[6]"></div></td>
            <td v-on:click="insertItem(7)" class="cell cell7" id="7"><div v-html="obj[7]"></div></td>
            <td v-on:click="insertItem(8)" class="cell cell8" id="8"><div v-html="obj[8]"></div></td>
          </tr>
        </table>
        <br><br>
        <center style="margin-top:400px;"><button class="btn btn-primary restartButton" v-on:click="restartGame"> Restart Game </button></center>
      </div>
    </p>
  </div>
</template>

<script>
import checkWinner from '../models/checkWinner';
import getWinningCombination from '../models/getWinningCombination';
import 'bootstrap'

export default {
  name: 'TicTacToe',
  props: {
    msg: String,
    vectorSquare: String,
    seanConnery: String,
  },
  mounted(){
  },
  methods:{
    undo(){
      if(!this.undoDisabled){
        this.obj[this.cellEntered] = null;
        this.playCount--;
        if(this.playerA){
          this.playerB = true;
          this.playerA = false;
          this.playerBPlays.pop();
        }
        else if(this.playerB){
          this.playerA = true;
          this.playerB = false;
          this.playerAPlays.pop();
        }
        this.undoDisabled = true;
      }
    },
    insertItem(cell){
      this.cellEntered = cell;
      this.undoDisabled = false;
      if(this.playerA && this.obj[cell]===null && !this.winnerMessage){
        if(this.standardMode){
          this.obj[cell] = '<strong style="color:red; font-size:84px">O</strong>';
        }
        else if(this.championshipMode){
          this.obj[cell] = this.seanConnery;
        }
        this.playCount++;
        this.playerAPlays.push(cell);
        this.playerA=false;
        this.playerB =true;
        this.checkIfPlayerWins("O");
      }
      else if(this.playerB && this.obj[cell]===null && !this.winnerMessage){
        if(this.standardMode){
          this.obj[cell] = '<strong style="font-size:84px">X</strong>';
        }
        else if(this.championshipMode){
          this.obj[cell] = this.vectorSquare;
        }
        this.playCount++;
        this.playerBPlays.push(cell);
        this.playerA=true;
        this.playerB=false;
        this.checkIfPlayerWins("X");
      }
    },
    checkIfPlayerWins(player){
      if(player === "O" ){
        if(checkWinner(this.playerAPlays)){
          this.winnerMessage = true;
          if(this.standardMode){
            this.WinnerMessageText = 'O is the Winner! ';
          }
          else if(this.championshipMode){
            this.WinnerMessageText = this.seanConnery + " is the winner!";
          }
          this.playerAScore++;
          let winningComb = getWinningCombination(this.playerAPlays);
          this.styleWinningombinationCells(winningComb);
        }
        else {
          if(this.playCount===9){
            this.winnerMessage = true;
            this.WinnerMessageText = "It is a Draw! ";
          }
        }
      }
      else if(player==="X"){
        if(checkWinner(this.playerBPlays)){
          this.winnerMessage = true;
          if(this.standardMode){
            this.WinnerMessageText = "X is the Winner! ";
          }
          else if(this.championshipMode){
            this.WinnerMessageText = this.vectorSquare + " is the winner!";
          }
          this.playerBScore++;
          let winningComb = getWinningCombination(this.playerBPlays);
          this.styleWinningombinationCells(winningComb);
        }
      }
    },
    styleWinningombinationCells(winningComb){
      winningComb.map(win=>{
        document.querySelector(`.cell${win}`).style.backgroundColor = "#abeadc52"
      })
    },
    restartGame(){
      this.playCount = 0;
      this.winnerMessage = false;
      for(var i=0; i<9; i++){
        this.obj[i]=null;
        document.querySelector(`.cell${i}`).style.backgroundColor = "white"
      }
      this.playerAPlays=[];
      this.playerBPlays=[];
      this.playerA=true;
      this.playerB=false;
    },
    enterCampionShip(){
      this.standardMode = false;
      this.championshipMode = true;
      this.restartGame();
    },
    enterStandardMode(){
      this.standardMode = true;
      this.championshipMode = false;
      this.restartGame();
    }
  },
  data:()=>(
    {
      obj:{
        0:null,
        1:null,
        2:null,
        3:null,
        4:null,
        5:null,
        6:null,
        7:null,
        8:null,
      },
      playerA:true,
      playerB:false,
      playerAPlays:[],
      playerBPlays:[],
      winnerMessage: false,
      WinnerMessageText:"",
      playerAScore: 0,
      playerBScore:0,
      cellEntered: null,
      undoDisabled: false,
      playCount: 0,
      championshipMode: false,
      standardMode: true,
    }
  )
}
</script>

<style lang="scss">
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
.undoButton, .restartButton{
  margin-left: 20px;
}
td {
  border:  2px solid #333;
  height:  126px;
  width:  110px;
  text-align:  center;
  vertical-align:  middle;
  font-size:  70px;
  cursor: pointer;
  }

  table {
  border-collapse: collapse;
  position: absolute;
  left: 50%;
  margin-left: -155px;
  }

  table tr:first-child td {
  border-top: 0;
  }

  table tr:last-child td {
  border-bottom: 0;
  }

  table tr td:first-child {
  border-left: 0;
  }

  table tr td:last-child {
  border-right: 0;
}
</style>
