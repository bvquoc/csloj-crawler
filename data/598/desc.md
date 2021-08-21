Mạng lưới giao thông thành phố gồm ~n~ nút được đánh số từ ~1~ đến ~n~ và ~m~ đường một chiều nối các cặp nút. Để giảm được độ dài của đường đi ngắn nhất giữa hai nút trọng yếu ~s~ và ~t~ khác nhau, một danh sách gồm ~k~ đường hai chiều được đề xuất để xem xét xây dựng.

Nhiệm vụ của bạn là viết một chương trình để chọn ra một đường trong danh sách đề xuất trên để xây dựng sao cho độ dài đường đi ngắn nhất giữa ~s~ và ~t~ (từ ~s~ tới ~t~) là nhỏ nhất.

## Dữ liệu vào:
- Dòng đầu tiên chứa năm số nguyên dương ~n (n ≤ 10000), m (m ≤ 100000), k (k < 300), s (1 ≤ s ≤ n), t (1 ≤ t ≤ n)~ cách nhau bởi dấu cách;
- ~m~ dòng tiếp theo, mỗi dòng chứa ba số nguyên dương ~u, v, c~ cách nhau bởi dấu cách, trong đó ~c~ là độ dài ~(0 < c ≤ 1000)~ của đường một chiều từ nút ~u~ đến nút ~v~;
- ~k~ dòng tiếp theo, mỗi dòng chứa ba số nguyên dương ~x, y~ và ~q\ (q ≤ 1000)~ cách nhau bởi dấu trống, trong đó ~q~ là độ dài của đường hai chiều được đề xuất để nối giữa hai nút ~x~ và ~y~.

## Dữ liệu ra:
- Một dòng duy nhất, ghi ra độ dài nhỏ nhất có thể của đường đi ngắn nhất giữa hai nút trọng yếu sau khi xây dựng xong một đường hai chiều từ danh sách đề xuất. Trường hợp không có đường đi từ ~s~ đến ~t~, ghi ~-1~.

## Ví dụ:
<center><img src="/images/problems/598/MANGGT.svg" width=300px /></center>

#### Dữ liệu vào:
```
4 5 3 1 4
1 2 13
2 3 19
3 1 25
3 4 17
4 1 18
1 3 23
2 3 5
2 4 25
```

#### Dữ liệu ra:
```
35
```
**Nguồn:** [Chuyên Sơn La Online Judge](http://csloj.ddns.net/)

**Group giải đáp thắc mắc:** [Lập trình 24h](https://www.facebook.com/groups/1386904321519984)