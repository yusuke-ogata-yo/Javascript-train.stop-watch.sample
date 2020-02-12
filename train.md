# ストップウォッチを作る

## html
- id="timer"：時刻の標示
- class="btn"：start、stop、resetの標示
- class="controls"：操作ボタンのコンテナ
- class="container"：全体のコンテナ

## css
- body：'Courier New', monospace
- .container：text-align
- #timer：
- .btn：line-height, user-select, cursor
- .controls：flex, justify-content
- .inactive

## javascript
- document.getElementById('idName')
- Date(time)
- Date.now()
- String().PadStart(num, '0')
- elem.textContent = 'text'
- `テンプレートリテラル`
- setTimeout(func, milliSecond)
- elem.classList.add('className')
- elem.classList.remove('className')
- elem.classList.contains() === true
- button.disabled = true