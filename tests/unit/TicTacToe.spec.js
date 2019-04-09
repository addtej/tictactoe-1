import { mount } from '@vue/test-utils'
import TicTacToe from '@/components/TicTacToe.vue'

describe('TicTacToe.vue', () => {
  const wrapper = mount(TicTacToe);
  wrapper.setData({
    playerA: true,
  })
  it('has a cell', () => {
    expect(wrapper.contains('.cell8')).toBe(true)
  })
  it('expect cell to be null before it is clicked', ()=>{
    expect(wrapper.vm.obj[0]).toBeNull()
  })
  it('onclick', ()=>{
    const cell8 = wrapper.find('.cell8');
    cell8.trigger('click');
    expect(wrapper.vm.obj[8]).toEqual('<strong style="color:red; font-size:84px">O</strong>');
    expect(wrapper.vm.playerAPlays).toEqual([8])
  })
  it('onclick check arr', ()=>{
    const cell8 = wrapper.find('.cell8');
    cell8.trigger('click');
    expect(wrapper.vm.playerAPlays).toEqual([8])
  })

})
