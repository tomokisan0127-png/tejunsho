# 現場ツール集

スマホ・タブレット・PCのブラウザで使う現場向けツールです。データはすべて端末の中で処理し、どこにも送りません。

| ツール | URL | 中身 |
|---|---|---|
| 作業手順書メーカー | https://tomokisan0127-png.github.io/tejunsho/ | 作業手順書（Excel）を作る |
| チェックシート編集 | https://tomokisan0127-png.github.io/tejunsho/checksheet/ | 組立チェックシート（Excel）の編集・文章／内容チェック・プレビュー |

## ツールを増やすとき

1. このリポジトリの中に、ツール名のフォルダ（半角英字。例：`dokonpin`）を作る
2. そのフォルダに `index.html` を入れる（アプリ化する場合は `manifest.webmanifest`・`sw.js`・アイコンも同じフォルダに）
3. 1〜2分で `https://tomokisan0127-png.github.io/tejunsho/フォルダ名/` で開けるようになる

`sw.js` のキャッシュ名は、ツールごとに違う名前で始めること（例：`tejunsho-`、`checksheet-`）。ほかのツールのキャッシュを消さないため。
