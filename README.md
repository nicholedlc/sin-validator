# SIN Validator
## Introduction
**SIN Validator** is a web application built with Typescript that checks the validity of a Social Insurance Number (SIN) using the Luhn algorithm.

Check out the [demo application](https://sin-validator-nine.vercel.app/)!

## Get Started
Node version used: `v21.7.3`

### Install dependencies

```bash
npm install
```
Note: You'll see some warnings when you first run install. This is expected because the app is using a release candidate version of Svelte.

### Start the application

  ```bash
  npm run dev

  # or start the server and open the app in a new browser tab
  npm run dev -- --open
  ```

### Run the specs:

  ```bash
  npm run test
  ```


## Assumptions
The Luhn algorithm is a simple checksum formula that distinguishes valid numbers from mistyped or otherwise incorrect numbers. A frontend application is used for the validation logic and no persistence is required since the algorithm does not have any inherent knowledge about whether the number itself is legitimate, nor does it protect against malicious attacks.

## Application design

The SIN Validator application routes to only one page containing one text input field. It accepts up to 9 **numeric** characters, and ignores the following:

- alphabets
- white spaces
- special characters
- any entry after the 9th character

Non-numeric characters are ignored during input (prior to the Luhn check being triggered), so that the user has visibility on which characters are accepted or rejected in real time.

You can also copy & paste any length of text - the input field will automatically take the first 9 valid characters and ignore the rest.

The [Luhn check function](src/lib/luhnCheck.ts) is contained inside the `lib` directory and is only triggered by the input field after the SIN length requirement of 9 characters is met. Realistically, this function can take in any length of string and returns a boolean: `true` if the Luhn checksum is satisfied; otherwise it returns `false`.

I decided to take a more functional approach to the Luhn check, utilizing methods such as `reduce` and avoiding mutation. Performance impact should be insignificant because the calculation is performed on only 9 digits.

I wrote some unit tests for the `luhnCheck` function, using valid numbers from an online Luhn number generator as the mock data. To generate the corresponding invalid numbers, I simply added `1` to the last digit of each valid number, and confirmed that they are now in fact invalid using the same online Luhn checker.

## Tech stack

### Typescript
- Required language. 🎉

### Svelte
- Component-based frontent framework.
- I chose the release candidate version (v5) in order to explore the new API.

### Tailwind
- CSS framework
- Chosen for its design system and ease of use.
- Themes have been added, so you can toggle between light ☀️ and dark 🌒 mode. It uses your system configuration by default.

### Vitest
- Vite-native testing framework, which is built-in with SvelteKit.
- Jest-compatible, but runs much faster. ⚡️
