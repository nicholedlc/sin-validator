<script lang="ts">
  import { luhnCheck } from "$lib/luhnCheck";
  import type { FormEventHandler } from "svelte/elements";

  let text = $state("");
  let isValidLuhn = $derived(luhnCheck(text));

  const inputHandler: FormEventHandler<HTMLInputElement> = (event) => {
    event.currentTarget.value = event.currentTarget.value
      .replace(/\D/g, "")
      .slice(0, 9);
    text = event.currentTarget.value;
  };
</script>

<div>
  <label for="sin">Social Insurance Number (SIN)</label>
  <br />
  <input name="sin" oninput={inputHandler} />
  <span>{text !== "" && isValidLuhn ? "✅" : "❌"}</span>
</div>
