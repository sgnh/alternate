# alternate [![Build Status](https://circleci.com/gh/sgnh/alternate.svg?style=shield&circle-token=b0c8c7397215a338135f17ec7795fdf388ca2316)](https://circleci.com/gh/sgnh/alternate/tree/master)

## Install
```
npm install --save alternate
```

## Usage
```js
const alternate = require('alternate');

const a = new alternate(true, false);
const b = new alternate('one', 'two', 3, 4);
// .next()
a.next() // returns true
a.next() // returns false
a.next() // returns true
a.next() // returns false

// .peek()
a.peek() // returns true
a.peek() // returns true

a.next() // returns true

a.peek() // returns false
a.peek() // returns false

b.next() // returns 'one'
b.next() // returns 'two'
b.next() // returns 3
b.next() // returns 4
b.next() // returns 'one'
```

## Usage with React
```js
import React from 'react';
import Alternate from 'alternate';

const rows = ['row1', 'row2', 'row3', 'row4'];

const Table = () => {
  const alternateRowColor = new Alternate('red', 'yellow');

  return (
    <div>
      {rows.map(row => (
        <div style={{ backgroundColor: alternateRowColor.next() }}>
          {row}
        </div>
      ))}
    </div>
  );
};

export default Table;
```
