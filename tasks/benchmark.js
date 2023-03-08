
/* IMPORT */

import benchmark from 'benchloop';
import xxHash64 from '../dist/index.js';

await xxHash64.loadWASM ();

/* MAIN */

benchmark.config ({
  iterations: 1_000_000
});

benchmark ({
  name: 'no-seed',
  fn: () => {
    xxHash64.hash ( 'The quick brown fox jumps over the lazy dog' );
  }
});

benchmark ({
  name: 'seed',
  fn: () => {
    xxHash64.hash ( 'The quick brown fox jumps over the lazy dog', 1337n );
  }
});

benchmark.summary ();
