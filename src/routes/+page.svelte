<script module lang="ts">
  import "../app.css";
  import Card from "../components/Card.svelte";
  import TextInput from "../components/TextInput.svelte";
</script>

<svelte:head>
  <title>SIN Validator</title>
</svelte:head>

<Card title="Enter your SIN to validate">
  <TextInput />
</Card>
