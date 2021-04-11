<script lang="ts">
import type { LetterGrid } from "src/schema";


  export let grid: LetterGrid;
</script>

<style>
  td {
    text-transform: uppercase;
  }

  td:hover {
    background-color: #93C5FD;
    cursor: grab;
  }
</style>

<table>
  {#each grid as row}
  <tr>
    {#each row as col}
      <td>{col}</td>
    {/each}
  </tr>
  {/each}
</table>