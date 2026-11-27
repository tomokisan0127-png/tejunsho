# 現場ツール集

スマホ・タブレット・PCのブラウザで使う現場向けツールです。データはすべて端末の中で処理し、どこにも送りません。

| ツール | URL | 中身 |
|---|---|---|
| 作業手順書メーカー | https://tomokisan0127-png.github.io/tejunsho/ | 作業手順書（Excel）を作る |
| チェックシート編集 | https://tomokisan0127-png.github.io/checksheet/（別リポジトリ [checksheet](https://github.com/tomokisan0127-png/checksheet)） | 組立チェックシート（Excel）の編集・文章／内容チェック・プレビュー |

## ツールを増やすとき

**ホーム画面に追加するアプリにしたいツールは、リポジトリを分けること。**
手順書メーカーがこのリポジトリの全体（…/tejunsho/ から下）を自分の範囲にしているので、この中にフォルダで置くと「すでにインストールされています」となり、別アプリとして追加できない。

1. GitHubで新しいリポジトリを作る（名前は半角英字。例：`dokonpin`。Public にする）
2. `index.html`（アプリ化するなら `manifest.webmanifest`・`sw.js`・アイコンも）を入れる
3. Settings → Pages で「Deploy from a branch」「main」「/(root)」を選んで Save
4. 1〜2分で `https://tomokisan0127-png.github.io/リポジトリ名/` で開けるようになる

`sw.js` のキャッシュ名は、ツールごとに違う名前で始めること（例：`tejunsho-`、`checksheet-`）。同じアドレス（tomokisan0127-png.github.io）の中で、ほかのツールのキャッシュを消さないため。

アプリにしない（ブラウザで開くだけの）簡単なページなら、このリポジトリの中にフォルダを作って `index.html` を置くだけでもよい。
