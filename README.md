# lisk-address-search-sonsole
## つかいかた
- build/lisk-address-search-console.zipを好きな場所にダウンロード (例：D:\\)
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
