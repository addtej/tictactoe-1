import { mount } from '@vue/test-utils'
import HelloWorld from '@/components/HelloWorld.vue'

describe('HelloWorld.vue', () => {
  const wrapper = mount(HelloWorld);
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
  it('expect vm', ()=>{
    expect(wrapper.vm.undoDisabled).toBeFalsy()
  })
  it('onclick', ()=>{
    const undoButton = wrapper.find('.undoButton');
    undoButton.trigger('click');
    expect(wrapper.vm.playerBPlays).toEqual([])
    expect(wrapper.vm.playerB).toBeTruthy()
    expect(wrapper.vm.playerA).toBeFalsy()
    expect(wrapper.vm.undoDisabled).toBeTruthy()
  })

})

//https://vue-test-utils.vuejs.org/guides/#getting-started
