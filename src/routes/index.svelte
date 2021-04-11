<script lang="ts">
  import type { LetterGrid } from 'src/schema';
  import { getGrid } from '$lib/api/grid';
  import Puzzle from '$lib/Puzzle.svelte';

  let grid: LetterGrid = getGrid();
</script>

<main>
  <h1>Word Search</h1>

  <Puzzle grid={grid} />
</main>

<style>
  main {
    text-align: center;
    padding: 1em;
    margin: 0 auto;
  }

  h1 {
    color: #ff3e00;
    text-transform: uppercase;
    font-size: 4rem;
    font-weight: 100;
    line-height: 1.1;
    margin: 4rem auto;
    max-width: 14rem;
  }
  @media (min-width: 480px) {
    h1 {
      max-width: none;
    }

    p {
      max-width: none;
    }
  }
</style>
