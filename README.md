# lisk-address-search-console
## 使う準備
- [lisk-address-search-console.zip](https://github.com/lisknonanika/lisk-address-search-console/releases/download/v1.0.0/lisk-address-search-console.zip) を好きな場所にダウンロード (例：D:\\)
- lisk-address-search-console.zipを展開
- コマンドプロンプトを起動
- コマンドプロンプトにlisk-address-search-console.exeをドラッグ＆ドロップ

## ヘルプを表示する
### lisk-address-search-console help

## アドレスを検索する
### lisk-address-search-console `type` `word` `continue`
- type: 必須
```
0：前方一致
1：後方一致
2：部分一致
```
- word: 必須
```
すきな単語などを入力
※半角英数のみ
```

- continue: オプション
```
0：見つかったら検索を終了 (デフォルト)
1：見つかっても検索を終了しない
```

### 例1：前方一致でcatを検索する。見つかっても終わらせない。
```
lisk-address-search-console 0 cat 1
```
### 例2：部分一致でdogを検索する。見つかったら終わり。
```
lisk-address-search-console 2 dog 0
または
lisk-address-search-console 2 dog
```

## 検索を終了する
コマンドプロンプトで ` Ctrlキー + Cキー ` を同時押し


## ソースから実行する場合
- ` git clone https://github.com/lisknonanika/lisk-address-search-console.git `
- ` cd lisk-address-search-console `
- ` npm i `
- ` node index.js `
