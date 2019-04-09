import { mount } from '@vue/test-utils'
import TicTacToe from '@/components/TicTacToe.vue'

describe('TicTacToe.vue - Undo feature', () => {
  const wrapper = mount(TicTacToe);
  wrapper.setData({
    playerA: true,
    playerB: false,
    obj:{
      0:null,
      1:"0",
      2:null,
      3:null,
      4:null,
      5:"X",
      6:null,
      7:null,
      8:null,
    },
    cellEntered: 5,
    playerBPlays:[5]
  })
  it('has a undo button', () => {
    expect(wrapper.contains('.undoButton')).toBe(true)
  })
  it('expect undo button be enabled', ()=>{
    expect(wrapper.vm.undoDisabled).toBeFalsy()
  })
  it('on clicking the undo button', ()=>{
    const undoButton = wrapper.find('.undoButton');
    undoButton.trigger('click');
    expect(wrapper.vm.playerBPlays).toEqual([])
    expect(wrapper.vm.playerB).toBeTruthy()
    expect(wrapper.vm.playerA).toBeFalsy()
    expect(wrapper.vm.undoDisabled).toBeTruthy()
  })
})
