// 今回はクライアントサイドもルーティングもないので何もimportしない
const kv = await Deno.openKv();

await kv.set(['pokemon', 'ブラッキー'], { type: '悪', lebel: 35 });
await kv.set(['pokemon', 'シャワーズ'], { type: '水', level: 26 });
await kv.set(['ブラッキー'], { type: '悪', level: 35 });

const pkmn = await kv.get(['pokemon', 'ブラッキー']);
console.log(pkmn.key);
console.log(pkmn.value);

const pkmns = await kv.list({ prefix: ['pokemon'] });

for await (const pkmn of pkmns) {
  console.log(pkmn.key);
  console.log(pkmn.value);
}

let woter_pokemon = await kv.get(['pokemon', 'シャワーズ']);
console.log(woter_pokemon.key, woter_pokemon.value);

await kv.delete(['pokemon', 'シャワーズ']);

woter_pokemon = await kv.get(['pokemon', 'シャワーズ']);
console.log(woter_pokemon.value);

//出来そうなら
//3階層とか表示すべてしてみるとか試す
