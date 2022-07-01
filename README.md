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
### Any type in TS
Declare a variable but do not initialize its value eg. `let x` <br/>
In order to disable type checking, set "noImplicitAny": false, in tsconfig (Not recommended)
### Tuple (Fixed Length Array)
Used for arrays with ideally 2 elements (key/value pairs) <br/>
`let user: [number, string] = [1, 'John'];`
### Enums (List of related constants)
`enum Size { Small = 1, Medium, Large };` Medium = 2, Large = 3 in enum initialization <br/>
`let mySize: Size = Size.Medium;` mySize = 2
### Functions
Enable "noUnusedParameters": true, in tsconfig.<br/>
`function calculateTax(income: number): number {return income * 1.2}`<br/>
income parameter type (number) and return type (number) should be defined as good practice. <br/>
If return type is not specified, then void is the return type. <br/>
Enable "noImplicitReturns": true, in tsconfig. Return type of undefined will show an error.<br/>
Enable "noUnusedLocals": true, in tsconfig. Unused local variables will cause an error.<br/>
### Objects
First specify type of Object. <br/>
`type Employee =  {id: number, name: string};`<br/>
`const employee: Employee = {id: 1, name: ""};`<br/>
Since objects can be modified in the Program, optional keys can be added. For eg: `age?: number`. The employee object does not need age key until initialized in the runtime.
### Literal types
`type Name = 'John' | 'Jane';`
`let name: Name = 'John';`<br/>
name can only take 2 values.<br/>
### Nullable
`function sayHello(name: string | null) {console.log("Hello", name)}`