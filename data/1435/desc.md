**<center>NGUỒN: Bài tập thầy Bình ôn Bắc Giang</center>**

Nông dân John (FJ) đang gặp vấn đề trong việc trồng cây và anh ta cần bạn giúp tưới nước cho cây một cách đúng đắn. Bạn được cho vị trí của ~N~ giọt nước mưa ~(1≤N≤10^5)~ trên mặt phẳng hai chiều với trục Oy là chiều thẳng đứng còn trục Ox là chiều nằm ngang:
<center><img src="/images/problems/1435/FPOT.png" width="400px" /></center>

Tất cả các giọt nước mưa đều rơi thẳng xuống dưới (xuống trục Ox) với vận tốc ~1~ đơn vị dài/~1~ giây. Bạn cần giúp FJ thiết kế một cái chậu hoa chiều rộng ~W~ đặt dọc theo trục Ox sao cho sự khác nhau giữa thời điểm  giọt mưa đầu tiên rơi vào chậu hoa và thời điểm giọt mưa cuối cùng rơi vào chậu ít nhất phải là ~D~. Những giọt mưa rơi vào cạnh của chậu hoa cũng được tính là rơi vào trong chậu.

Cho biết giá trị của ~D~ và vị trí các giọt nước mưa. Hãy xác định giá trị nhỏ nhất có thể có của ~W~.

## Dữ liệu vào:
- Dòng đầu ghi hai số nguyên ~N, D\ (1≤D≤10^9)~;
- ~N~ dòng sau, mỗi dòng ghi hai số nguyên ~(x,y)~ là toạ độ một giọt nước mưa. Các toạ độ có giá trị trong khoảng từ ~0~ đến ~10^6~.

## Dữ liệu ra:
- Ghi ra một số nguyên là giá trị nhỏ nhất chiều rộng ~W~ của chậu hoa hoặc in ra ~-1~ nếu không thể thiết kế được một chậu nào như vậy.

## Ví dụ:
#### Dữ liệu vào:
```
4 5
6 3
2 4
4 10
12 15
```

#### Dữ liệu ra:
```
2
```

#### Giải thích:
- Chiều rộng nhỏ nhất là ~2~ và đặt tại toạ độ ~x~ từ ~4~ đến ~6~. Khi đó chậu hứng được hai giọt ~\#1~ và ~\#3~. Chênh lệch thời gian là ~10-3=7 > 5~.
**Nguồn:** [Chuyên Sơn La Online Judge](http://csloj.ddns.net/)

**Group giải đáp thắc mắc:** [Lập trình 24h](https://www.facebook.com/groups/1386904321519984)