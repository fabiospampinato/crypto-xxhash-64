# Crypto xxHash-64

Fastest isomorphic xxHash-64 hash function.

Today this is just a thin wrapper over [`xxhash-wasm`](https://github.com/jungomi/xxhash-wasm)'s `h64ToString` function. This dependency may be swapped for another one under the hood in the future, if a faster implementation pops up.

## Install

```sh
npm install --save crypto-xxhash-64
```

## Usage

```ts
import xxHash64 from 'crypto-xxhash-64';

await xxHash64.loadWASM (); // First of all you need to load the WASM instance and wait for it

xxHash64.hash ( 'The quick brown fox jumps over the lazy dog' ); // => '0b242d361fda71bc'
xxHash64.hash ( 'The quick brown fox jumps over the lazy dog', 1337n ); // => '13f15a4352aa35ef'
```

## License

MIT © Fabio Spampinato
