// 今回はクライアントサイドもルーティングもないので何もimportしない
const kv = await Deno.openKv();

await kv.set(['pokemon', 'ブラッキー'], { type: '悪', lebel: 35 });
await kv.set(['pokemon', 'シャワーズ'], { type: '水', level: 26 });
await kv.set(['ブラッキー'], { type: '悪', level: 35 });

const pkmn = await kv.get(['pokemon', 'ブラッキー']);
console.log(pkmn.key);
console.log(pkmn.value);
