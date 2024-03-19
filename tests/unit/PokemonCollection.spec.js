/* eslint-disable no-undef */
import { shallowMount } from '@vue/test-utils';
import PokemonCollection from '@/components/PokemonCollection.vue';

describe('PokemonCollection.vue', () => {
  let wrapper;
  const pokemonList = [
    { id: 1, name: 'bulbasaur' },
    { id: 2, name: 'ivysaur' },
    { id: 3, name: 'venusaur' },
  ];

  beforeEach(() => {
    wrapper = shallowMount(PokemonCollection, {
      propsData: {
        pokemonList,
        query: '',
      },
    });
  });

  it('renders a list of pokemon', () => {
    const pokemonItems = wrapper.findAllComponents({ name: 'PokemonItem' });
    expect(pokemonItems.length).toBe(pokemonList.length);
  });

  it('opens and closes the PokemonModal when a Pokemon is selected and unselected', async () => {
    wrapper.vm.selectPokemon(pokemonList[0]);
    expect(wrapper.vm.isModalOpen).toBe(true);
    expect(wrapper.vm.selectedPokemon).toEqual(pokemonList[0]);
  
    wrapper.vm.unselect();
    expect(wrapper.vm.isModalOpen).toBe(false);
    expect(wrapper.vm.selectedPokemon).toBe(null);
  });
});