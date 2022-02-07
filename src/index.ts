
/* IMPORT */

import loadHash from 'xxhash-wasm';
import once from 'once';

/* MAIN */

const xxHash = {

  /* LIFECYCLE API */

  loadWASM: once ( async (): Promise<void> => {

    const {h64ToString} = await loadHash ();

    xxHash.hash = h64ToString;

  }),

  /* API */

  hash: ( input: string, seed?: bigint ): string => {

    throw new Error ( '[xxhash-64] You need to call and await "xxhash64.loadWASM" first' );

  }

};

/* EXPORT */

export default xxHash
