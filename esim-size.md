# eSIM 占用大小统计

| 运营商            | 大小 (KiB) | 容量: 64 | 容量: 384 | 容量: 1024 |
| ------------- | ------- | ------ | ------- | -------- |
| TEL-U             | 10.33   | 6      | 37      | 99       |
| Redteago          | 10.55   | 6      | 36      | 97       |
| Simyo             | 12.16   | 5      | 31      | 84       |
| giffgaff          | 16.13   | 3      | 23      | 63       |
| JP                | 17.69   | 3      | 22      | 60       |
| 3 Hong Kong       | 19.67   | 3      | 20      | 55       |
| Yesim             | 20.57   | 3      | 18      | 49       |
| Ubigi             | 21.12   | 3      | 18      | 48       |
| SMART             | 22.49   | 2      | 16      | 43       |
| Elisa (ESIM Plus) | 23.44   | 2      | 16      | 43       |
| T-mobile CZ       | 24.41   | 2      | 15      | 41       |
| Google Fi         | 27.22   | 1      | 14      | 38       |
| One NZ            | 31.05   | 1      | 12      | 34       |
| Jetpacglobal      | 33.30   | 1      | 11      | 30       |
| BetterRoaming     | 34.58   | 1      | 11      | 29       |
| Telia (Super) *   | 42.63   | 1      | 9       | 24       |
| Vodafone IE       | 44.63   | 1      | 9       | 24       |
| CMLink GDS        | 45.91   | 1      | 9       | 24       |
| T-mobile USA      | 46.81   | 1      | 8       | 21       |
| lifecell          | 46.85   | 1      | 8       | 21       |
| 3 UK              | 47.60   | 1      | 8      | 21       |
| Red Bull Mobile   | 47.84   | 1      | 8       | 21       |
| Eskimo            | 54.37   | 1      | 7       | 18       |
| Vodafone UK       | 56.57   | 1      | 6       | 18       |
| Vodafone DE       | 57.21   | 1      | 6       | 17       |
| Lycamobile UK     | 58.80   | 1      | 6       | 17       |
| Clubsim           | 65.22   | 0      | 5       | 15       |
| CTM               | 70.14   | 0      | 5       | 14       |
| Digicel LC        | 91.61   | 0      | 3       | 9        |

注：
1. 目前有群友报告 5ber.eSIM 中写入 Red Bull Mobile 的 eSIM Profile 可能出现覆盖固件的问题，会导致整张 5ber 卡片写入的数据全部丢失，请谨慎使用
2. eid 为 `890860` 开头的 5ber.eSIM 和 eSIM.me 无法正常写入 One NZ 的 eSIM Profile
3. 5ber.eSIM 中存入 eSIM Profile 相较于其他介质会占用更多的空间 ~~，具体原因和占用倍数不详~~ ，据说是卡密钥长度问题，每个配置文件都会膨胀 11-15K，建议将所有大小增加 15K 后再估算空间。表格中标注有`*`号的项，说明此项在 5ber.eSIM 中测试得出
