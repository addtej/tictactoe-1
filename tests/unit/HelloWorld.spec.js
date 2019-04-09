import { mount } from '@vue/test-utils'
import HelloWorld from '@/components/HelloWorld.vue'

describe('HelloWorld.vue', () => {
  const wrapper = mount(HelloWorld);
  wrapper.setData({
    playerA: true,
    // obj:{
    //   0:null,
    //   1:null,
    //   2:null,
    //   3:null,
    //   4:null,
    //   5:null,
    //   6:null,
    //   7:null,
    //   8:null,
    // },
    // cellEntered: null,
    // undoDisabled: false,
    // playerB:false,
    // playerAPlays:[]
  })
  it('has a cell', () => {
    expect(wrapper.contains('.cell8')).toBe(true)
  })
  it('expect vm', ()=>{
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

  // const cell1 = wrapper.find('.cell8');
  // cell1.trigger('click');
  // expect(wrapper.vm.count).toBe(1)
})

//https://vue-test-utils.vuejs.org/guides/#getting-started
