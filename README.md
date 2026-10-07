# Atividade — Curto-circuito, ||, && e ??

## O que é

Aprendi que `||` e `&&` não retornam necessariamente `true` ou `false`. Eles podem retornar um dos valores usados na expressão.

O `||` verifica o primeiro valor. Se ele for considerado falso, retorna o segundo valor.

O `&&` funciona de outra forma: se o primeiro valor for falso, ele retorna esse valor. Se o primeiro for verdadeiro, ele continua e retorna o segundo.

Também aprendi sobre o `??`, que é usado quando quero verificar se um valor realmente está ausente. Ele só considera `null` e `undefined` como valores ausentes.

A diferença mais importante entre `||` e `??` é que o `||` considera valores como `0` e `""` como falsos, enquanto o `??` aceita esses valores normalmente.

## Testes

Nos testes:

```js
console.log(0 || 10);
```

o resultado foi `10`.

Já:

```js
console.log(0 ?? 10);
```

o resultado foi `0`.

Isso acontece porque `0` é considerado falso pelo `||`, mas não é `null` nem `undefined`, então o `??` mantém o `0`.

Também testei:

```js
function quantidadeA(qtd) {
    return qtd || 1;
}

function quantidadeB(qtd) {
    return qtd ?? 1;
}
```

Quando passei `0` para as duas funções, `quantidadeA(0)` retornou `1`, enquanto `quantidadeB(0)` retornou `0`.

## Conclusão

Entendi que o `||` pode substituir valores considerados falsos, enquanto o `??` é mais específico e só substitui `null` e `undefined`. Por isso, quando `0` ou `""` forem valores válidos, o `??` pode ser mais adequado.