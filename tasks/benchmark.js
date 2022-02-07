
/* IMPORT */

const {default: xxHash64} = require ( '../dist' );
const benchmark = require ( 'benchloop' );

/* MAIN */

benchmark.defaultOptions = Object.assign ( benchmark.defaultOptions, {
  iterations: 1000000,
  log: 'compact'
});

xxHash64.loadWASM ().then ( () => {

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

});
