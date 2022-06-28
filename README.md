# TYPESCRIPT Learning Notes

`npm install -g typescript` <br/>
`mkdir typescript-notes` <br/>
`cd typescript-notes` <br/>
`touch index.ts` <br/>
`tsc index.ts` This will create index.js and then run `node index.js` <br/>
`tsc --init` This will create a tsconfig file <br/>
Create src and dist folders in the root <br/>
Enable "rootDir": "./src" <br/>
Enable "outDir": "./dist" <br/>
Enable "noEmitOnError": true <br/>
To complile to js, run `tsc` only <br/>

## JS Data Types
number, string, boolean, null, undefined, object
## TypeScript added types
any, unknown, never, enum, tuple
### TS Number representation
`let sales: number = 100_000_000` <br/>
_ is used to separate out digits like , in 100,000,000 <br/>
### Annotation in TS
`let is_complete = false` is valid instead of `let is_complete: boolean = false`
