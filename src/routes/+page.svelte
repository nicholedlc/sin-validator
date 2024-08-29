<script module lang="ts">
  import "../app.css";
  import { luhnCheck } from "$lib/luhnCheck";
  import type { FormEventHandler } from "svelte/elements";

  import Card from "../components/Card.svelte";
</script>

<script lang="ts">
  let text = $state("");
  let isValidSIN = $derived(text.length === 9 && luhnCheck(text));
  const initialClass =
    "bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500";
  let inputStyle = $state(initialClass);
  let inputIcon = $state("");

  const toggleInputStyle = () => {
    if (isValidSIN) {
      inputStyle =
        "bg-green-50 border border-green-500 text-green-900 dark:text-green-400 text-sm rounded-lg focus:ring-green-500 focus:border-green-500 block w-full p-2.5 dark:bg-gray-700 dark:border-green-500";
      inputIcon = "✅";
    } else {
      inputStyle =
        "bg-red-50 border border-red-500 text-sm rounded-lg focus:ring-red-500 dark:bg-gray-700 focus:border-red-500 block w-full p-2.5 dark:border-red-500";
      inputIcon = "❌";
    }
  };

  const inputHandler: FormEventHandler<HTMLInputElement> = (event) => {
    event.currentTarget.value = event.currentTarget.value
      .replace(/\D/g, "")
      .slice(0, 9);
    text = event.currentTarget.value;
  };

  const onFocusHandler: FormEventHandler<HTMLInputElement> = (event) => {
    inputStyle = initialClass;
    inputIcon = "";
  };

  const onBlurHandler: FormEventHandler<HTMLInputElement> = (event) => {
    if (text !== "") toggleInputStyle();
  };

  const onKeyupHandler: FormEventHandler<HTMLInputElement> = (event) => {
    if (text.length === 9) toggleInputStyle();
  };
</script>

<Card title="Validate your SIN">
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
      onfocus={onFocusHandler}
      onkeyup={onKeyupHandler}
      class={inputStyle}
      placeholder="121212121"
      required
    />
  </div>
</Card>
