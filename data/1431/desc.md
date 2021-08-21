**<center>NGUỒN: Bài tập thầy Bình ôn Bắc Giang</center>**

Tất cả các đường trong thành phố của Siruseri đều là một chiều. Theo luật của quốc gia này, tại mỗi giao lộ phải có một máy ATM. Điều đáng ngạc nhiên là các cửa hàng chơi điện tử cũng nằm ở các giao lộ, tuy nhiên, không phải tại giao lộ nào cũng có cửa hàng chơi điện tử.

Banditji là một tên trộm nổi tiếng. Hắn quyết định làm một vụ động trời: khoắng sạch tiền trong các máy ATM trên đường đi, sau đó ghé vào một cửa hàng chơi điện tử để thư giản. Nhờ có mạng lưới thông tin rộng rãi, Banditji biết được số tiền có ở mỗi máy ATM ngày hôm đó. Xuất phát từ trung tâm, tên trộm lái xe đi dọc theo các phố, vét sạch tiền ở các ATM gặp trên đường đi. Banditji có thể đi lại nhiều lần trên một số đoạn phố, nhưng sẽ không thu gì được thêm từ các ATM đã bị khoắng trước đó. Lộ trình của Banditji phải kết thúc ở giao lộ có cửa hàng chơi điện tử. Banditji biết cách vạch lộ trình để tổng số tiền trộm được là lớn nhất.

<center><img src="/images/problems/1431/ATM.png" width="400px" /></center>

Ở ví dụ nêu trên hình vẽ, thành phố có ~6~ giao lộ đánh số từ ~1~ đến ~6~, số tiền trong ATM được ghi ở bên cạnh nút. Các nút hình sao chỉ giao lộ có cửa hàng chơi điện tử. Đường chấm chấm cho biết lộ trình của tên trộm. Tổng cộng, hắn đã lấy được ~47~ đồng.

**Yêu cầu:** Cho biết ~n~ – số giao lộ, ~m~ – số đoạn đường nối hai giao lộ, ~p~ – số giao lộ có cửa hàng chơi điện tử và các nơi có cửa hàng, ~a_i~ – số tiền trong ATM đặt ở giao lộ ~i~, ~s~ – giao lộ trung tâm. Hãy xác định tổng số lượng tiền bị trộm ~(n, m ≤ 5\times 10^5, 0 ≤ a_i ≤ 4000)~.

## Dữ liệu vào:
- Dòng đầu tiên chứa hai số nguyên ~n~ và ~m~;
- Mỗi dòng trong ~m~ dòng tiếp theo chứa hai số nguyên ~u~ và ~v~ xác định đường đi từ giao lộ ~u~ tới giao lộ ~v~;
- Dòng thứ ~i~ trong ~n~ dòng tiếp theo chứa số nguyên ~a_i~;
- Dòng thứ ~n+m+2~ chứa hai số nguyên ~s~ và ~p~;
- Dòng cuối cùng chứa ~p~ số nguyên xác định các giao lộ có cửa hàng chơi điện tử.

## Dữ liệu ra:
- Một số nguyên – số tiền bị trộm.

## Ví dụ:
#### Dữ liệu vào:
```
6 7
0 2
2 3
3 5
2 4
4 1
2 6
6 5
10
12
8
16
1
5
0 4
4 3 5 6
```

#### Dữ liệu ra:
```
47
```
**Nguồn:** [Chuyên Sơn La Online Judge](http://csloj.ddns.net/)

**Group giải đáp thắc mắc:** [Lập trình 24h](https://www.facebook.com/groups/1386904321519984)