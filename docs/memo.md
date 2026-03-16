# 用語など

- sqlite3 : SQLiteデータベースを操作するためのライブラリ

## 学んだ概念（Qiita記事より）

### バックエンド基礎
- **バックエンド**: クライアントからのリクエストを受け取り、ロジックを実行し、レスポンスを返すサーバー側。Webサーバーが中心。
- **Node.js**: JavaScriptのランタイム。JavaScriptを実行可能にするシステム。
- **Express**: Node.jsのWebフレームワーク。バックエンド開発を容易にする。
- **TypeScript**: JavaScriptに型を追加した言語。エラーを事前に検出可能。トランスパイルが必要。
- **トランスパイル**: TypeScriptをJavaScriptに変換（tscコマンド）。
- **npm**: Node.jsのパッケージマネージャー。パッケージインストール・管理。
  - dependencies: 本番環境で必要なパッケージ。
  - devDependencies: 開発時のみ必要なパッケージ（TypeScript, tsxなど）。
- **開発環境 vs 本番環境**: 開発時は高速・エラー検出重視。本番時は最適化・高速化重視。

### API開発
- **CRUD**: データベースの基本操作（Create作成, Read読み取り, Update更新, Delete削除）。
- **HTTPメソッド**: 
  - GET: データ取得（Read）。
  - POST: データ作成（Create）。
  - PUT: データ更新（Update）。
  - DELETE: データ削除（Delete）。
- **REST API**: Web APIの標準仕様。リソースベースの設計（例: /cats/:id）。
- **SQLite**: ファイルベースの軽量データベース。サーバー不要。
- **ORM (Object-Relational Mapping)**: データベースをオブジェクトとして扱う。SQLを抽象化（例: Prisma）。

### 抽象化
- **抽象化**: 複雑な処理を隠し、シンプルな操作を提供。本質に集中可能。
- **tsx**: TypeScriptを直接実行。トランスパイル不要（内部でesbuild使用）。watchモードで自動再実行。
- **npm-scripts**: コマンドをエイリアス化（例: npm run dev, npm run build, npm run start）。
- **Prisma**: ORMツール。SQLをオブジェクト操作に変換。型安全。
