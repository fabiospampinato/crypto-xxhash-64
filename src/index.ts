
/* IMPORT */

import once from 'once';
import loadHash from 'xxhash-wasm';

/* MAIN */

const xxHash = {

  /* LIFECYCLE API */

  loadWASM: once ( async (): Promise<void> => {

    const {h64, h64Raw} = await loadHash ();

    xxHash.hash = ( input: Uint8Array | string, seed?: bigint ): string => {

      if ( typeof input === 'string' ) {

        return h64 ( input, seed ).toString ( 16 ).padStart ( 16, '0' );

      } else {

        return h64Raw ( input, seed ).toString ( 16 ).padStart ( 16, '0' );

      }

    };

  }),

  /* API */

  hash: ( input: Uint8Array | string, seed?: bigint ): string => {

    throw new Error ( '[xxhash-64] You need to call and await "xxhash64.loadWASM" first' );

  }

};

/* EXPORT */

export default xxHash;
