// Destructuring allows binding using pattern matching, with support for matching
// arrays and objects. Destructuring is fail-soft, similar to standard object
// lookup foo["bar"], producing undefined values when not found.

// list matching
function getASTNode () {
  return {
    'op': 'anOperation',
    'lhs': {
      'op': 'anotherOperation'
    },
    'rhs': 'anRHS'
  };
}
const [a, , b] = [1,2,3];

// object matching
const { op: a, lhs: { op: b }, rhs: c } = getASTNode()

// object matching shorthand
// binds `op`, `lhs` and `rhs` in scope
const {op, lhs, rhs} = getASTNode()

// Can be used in parameter position
function g({name: x}) {
  console.log(x);
}
g({name: 5})

// Fail-soft destructuring
let [a] = [];
a === undefined;

// Fail-soft destructuring with defaults
let [a = 1] = [];
a === 1;
