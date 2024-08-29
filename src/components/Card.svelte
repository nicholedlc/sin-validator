<script module lang="ts">
  import type { Snippet } from "svelte";

  export type CardProps = { children?: Snippet, title?: string };
</script>

<script lang="ts">
  const { children, title }: CardProps = $props()
</script>

<div class="flex justify-center items-center h-full">
  <div
    class="w-full max-w-lg p-4 bg-white border border-gray-200 rounded-lg shadow sm:p-6 md:p-8 dark:bg-gray-800 dark:border-gray-700"
  >
    <div class="space-y-6">
      <h5 class="text-xl font-medium text-gray-900 dark:text-white">
        {title}
      </h5>
      <div>
        {#if children}
          {@render children()}
        {/if}
      </div>
    </div>
  </div>
</div>
