簡單的一個擴展，解鎖網易云音樂對海外 IP 的屏蔽

原理請參見 [Unblock-Youku](https://github.com/Unblocker/Unblock-Youku) 的導論區。

> @fangweizhi :
>
> Just substitute m2.music.126.net with p2.music.126.net, and the problem solves.
> 
> Ref: [Unblock-Youku/488#154246771](https://github.com/Unblocker/Unblock-Youku/issues/488#issuecomment-154246771)

## 安裝

1. 打開 `chrome://extensions/`
2. 勾選右上角「開發人員模式」 (也許不需要?)
3. 把 crx 拖放到窗口安裝即可。
4. 因爲沒做圖標 如果不想看到圖標的話，抓住圖標拖放到右側的菜單按鈕隱藏即可。

## 修改 Hosts
你也可以通過修改 Hosts 的方法解鎖云音樂的海外封鎖。

```text
# 網易云音樂 @美國伺服器 -- 开始
198.47.104.134 m1.music.126.net
198.47.104.134 m2.music.126.net
198.47.104.134 m3.music.126.net
198.47.104.134 m4.music.126.net
198.47.104.134 m5.music.126.net
198.47.104.134 m6.music.126.net
198.47.104.134 m7.music.126.net
198.47.104.134 m8.music.126.net
198.47.104.134 m9.music.126.net
# 網易云音樂 @美國伺服器 -- 结束
```

| 操作系统 | 文件路径 |
| -----: |:------ |
| 视窗系统 | `C:\Windows\System32\drivers\etc\hosts` |
| 其它系统 | `/etc/hosts` |

你需要 Root / 管理員權限修改上述檔案。
