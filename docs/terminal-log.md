# Terminal Log
学習中に実行したコマンドや，その結果・気づきを記録するためのログ．

---

## 📝 目的
- TypeScript を用いたバックエンド開発を学ぶ
- TypeScript の環境構築
- Expressでバックエンドに入門

---

## 💻 実行したコマンド
```bash
$ node index.ts # Node.jsはTypescriptを実行できない

# トランスパイルしてJavascriptに変換
$ tsc index.ts

# Javescriptを実行
$ node index.js
My name is Meiyu, I'm 23 years old.

# npmを利用するためにプロジェクトを初期化
$ npm init -y

# Express をインストール
$ npm install express

# typescript パッケージを開発環境用にインストール
$ npm i --save-dev typescript
$ npm i --save-dev @types/express

# server.tsをトランスパイル
$ tsc server.ts

# server.jsを実行
$ node server.js

# 新しいターミナルで文字列を取得
$ curl -X GET http://localhost:3000

# その後GET，POST, PUT，DELETEリクエストを送信し，挙動を確認した．


```

---