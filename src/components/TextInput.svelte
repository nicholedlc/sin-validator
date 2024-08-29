<script module lang="ts">
  import type { FormEventHandler } from "svelte/elements";
  import { luhnCheck } from "$lib/luhnCheck";
  import { Confetti } from "svelte-confetti";

  export type CardProps = { title?: string };
</script>

<script lang="ts">
  const initialInputStyle =
  "bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 outline-none";
  const validInputStyle = "bg-green-50 border border-green-500 text-green-900 dark:text-green-400 text-sm rounded-lg focus:ring-green-500 focus:border-green-500 block w-full p-2.5 dark:bg-gray-700 dark:border-green-500 outline-none";
  const invalidInputStyle = "bg-red-50 border border-red-500 text-red-900 text-sm rounded-lg focus:ring-red-500 dark:bg-gray-700 focus:border-red-500 block w-full p-2.5 dark:text-red-500 dark:placeholder-red-500 dark:border-red-500 outline-none";

  let text = $state("");
  let isValidSIN = $derived(text.length === 9 && luhnCheck(text));
  let inputStyle = $state(initialInputStyle);
  let inputIcon = $state("");

  const toggleInputStyle = () => {
    if (isValidSIN) {
      inputStyle = validInputStyle
      inputIcon = "✅";
    } else {
      inputStyle = invalidInputStyle
      inputIcon = "❌";
    }
  };

  const inputHandler: FormEventHandler<HTMLInputElement> = (event) => {
    event.currentTarget.value = event.currentTarget.value
      .replace(/\D/g, "")
      .slice(0, 9);
    text = event.currentTarget.value;
  };

  const onBlurHandler: FormEventHandler<HTMLInputElement> = (event) => {
    if (text !== "") toggleInputStyle();
    else {
      inputStyle = initialInputStyle;
      inputIcon = "";
    }
  };

  const onKeyupHandler: FormEventHandler<HTMLInputElement> = (event) => {
    if (text.length === 9) toggleInputStyle();
  };
</script>

<div>
  <label
    for="sin"
    class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
    ><span>Social Insurance Number (SIN)</span>
    <span>{inputIcon}</span>
  </label>
  <input
    type="sin"
    name="sin"
    id="sin"
    oninput={inputHandler}
    onblur={onBlurHandler}
    onkeyup={onKeyupHandler}
    class={inputStyle}
    placeholder="121212121"
    required
  />
  {#if isValidSIN}
    <Confetti xSpread={0.01} />
  {/if}
</div>
