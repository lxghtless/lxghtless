#!/usr/bin/env node

console.log(
    JSON.parse(
        require('fs').readFileSync(
            'package.json',
            {encoding: 'utf-8'}
        )
    ).description
)
