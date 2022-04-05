
/* IMPORT */

import {describe} from 'fava';
import xxHash from '../dist/index.js';

/* MAIN */

describe ( 'Crypto xxHash-64', it => {

  it ( 'correctly calculates hashes', async t => {

    await xxHash.loadWASM ();

    const tests = [
      [
        'The quick brown fox jumps over the lazy dog',
        undefined,
        '0b242d361fda71bc'
      ],
      [
        'The quick brown fox jumps over the lazy cog',
        undefined,
        '2dcf47703493b6ca'
      ],
      [
        '',
        undefined,
        'ef46db3751d8e999'
      ],
      [
        'The quick brown fox jumps over the lazy dog',
        0n,
        '0b242d361fda71bc'
      ],
      [
        'The quick brown fox jumps over the lazy cog',
        0n,
        '2dcf47703493b6ca'
      ],
      [
        '',
        0n,
        'ef46db3751d8e999'
      ],
      [
        'The quick brown fox jumps over the lazy dog',
        1337n,
        '13f15a4352aa35ef'
      ],
      [
        'The quick brown fox jumps over the lazy cog',
        1337n,
        '3befda45efda2608'
      ],
      [
        '',
        1337n,
        '07cefd03d4bb7d3f'
      ]
    ];

    for ( const [input, seed, output] of tests ) {

      t.is ( xxHash.hash ( input, seed ), output );
      t.is ( xxHash.hash ( Buffer.from ( input ), seed ), output );

    }

  });

});
