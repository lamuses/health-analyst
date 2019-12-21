## health-analyst
### A light and simple debug tool.

<p align="center">
  <a href="https://npmcharts.com/compare/health-analyst?minimal=true"><img src="https://img.shields.io/npm/dm/health-analyst.svg" alt="Downloads"></a>
  <a href="https://www.npmjs.com/package/health-analyst"><img src="https://img.shields.io/npm/v/health-analyst.svg" alt="Version"></a>
  <a href="https://www.npmjs.com/package/health-analyst"><img src="https://img.shields.io/npm/l/health-analyst.svg" alt="License"></a>
</p>

## Highlights

- A debug tool.

## Install

```console
$ npm install health-analyst
```

## Usage

### Simple
```js
import { Dequote } from 'health-analyst'
const castList = {
  client: palette.red.base,
  server: palette.purple.base,
  stranger: greys.grey.base
}

const debug = Dequote.build(castList)

debug.says('client', '\'Shakespeare\'')
debug.says('server', '\'Dickens\'')
```

### Factorial with pipeline operator
```js
import { Dequote } from 'health-analyst'
const castList = {
  client: palette.red.base,
  server: palette.purple.base,
  stranger: greys.grey.base
}

const debug = Dequote.build(castList)
const says = {
  client: debug.credit('chef'),
  server: debug.credit('aboyeur')
}
'Shakespeare' |> says.client
'Dickens' |> says.server
```

## License

[MIT](http://opensource.org/licenses/MIT)

Copyright (c) 2019-present, Haoyang (Vincent) Wang
