// PokemonCollection.spec.js
import { shallowMount } from '@vue/test-utils';
import PokemonCollection from '@/components/PokemonCollection.vue';
import { describe } from 'jest';
import { it } from 'jest';
import { beforeEach } from 'jest';
import { expect } from 'jest';

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

  it('filters the list of pokemon based on the search query', async () => {
    await wrapper.setProps({ query: 'ivysaur' });
    const pokemonItems = wrapper.findAllComponents({ name: 'PokemonItem' });
    expect(pokemonItems.length).toBe(1);
  });

  it('emits "showInvalidInput" event when the search query returns no results', async () => {
    await wrapper.setProps({ query: 'nonexistentpokemon' });
    expect(wrapper.emitted().showInvalidInput).toBeTruthy();
  });

  it('opens and closes the PokemonModal when a Pokemon is selected and unselected', async () => {
    wrapper.vm.selectPokemon(pokemonList[0]);
    expect(wrapper.vm.isModalOpen).toBe(true);
    expect(wrapper.vm.selectedPokemon).toBe(pokemonList[0]);

    wrapper.vm.unselect();
    expect(wrapper.vm.isModalOpen).toBe(false);
    expect(wrapper.vm.selectedPokemon).toBe(null);
  });
});