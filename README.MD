## 更新
已经失效，大侠请继续。

单纯的替换地址已经无效了，所有歌曲全面飘灰。

请改用 [JixunMoe/proxy-163](https://github.com/JixunMoe/proxy-163)。

## 说明
簡單的一個擴展，解鎖網易云音樂對海外 IP 的屏蔽

原理請參見 [Unblock-Youku](https://github.com/Unblocker/Unblock-Youku) 的導論區。

> @fangweizhi :
>
> Just substitute m2.music.126.net with p2.music.126.net, and the problem solves.
>
> Ref: [Unblock-Youku/488#154246771](https://github.com/Unblocker/Unblock-Youku/issues/488#issuecomment-154246771)

下載：[Release 頁面](https://github.com/JixunMoe/unblock-163/releases)

## 安裝

1. 打開 `chrome://extensions/`
2. 勾選右上角「開發人員模式」 (也許不需要?)
3. 把 crx 拖放到窗口安裝即可。
4. 因爲沒做圖標 如果不想看到圖標的話，抓住圖標拖放到右側的菜單按鈕隱藏即可。
5. 如果使用的是官方版本的 Chrome，您可能需要每次啓動時重新執行一次安裝操作。您可以換用 Chromium。

如果有人願意上傳 crx 到 Chrome 商店的話就更好了 :D

## 修改 Hosts
如果不希望使用擴展，您也可以通過修改 Hosts 的方法解鎖云音樂的海外封鎖。

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

# 網易云音樂 @网通伺服器 -- 开始
112.90.246.49 m10.music.126.net
# 網易云音樂 @网通伺服器 -- 结束
```

| 操作系統 | 檔案路徑 |
| -----: |:------ |
| 視窗系統 | `C:\Windows\System32\drivers\etc\hosts` |
| 其它系統 | `/etc/hosts` |

你需要 Root / 管理員權限修改上述檔案。
