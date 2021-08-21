Ban ra đề đang viết chương trình sinh test cho một bài về đồ thị. Họ cần sinh một đơn đồ thị vô hướng ~n~ đỉnh ~m~ cạnh. Thuật toán sinh như sau:

1. Nếu đã lấy đủ ~m~ cạnh thì dừng;
2. Gọi ~E~ là tập các cặp ~(u, v)~ với ~u < v~ và ~u~ đang không kề với ~v~, tức ~E~ là tập các cạnh chưa có trong đồ thị;
3. Sắp xếp ~E~ theo thứ tự từ điển (~(u, v)~ đứng trước ~(x, y)~ nếu hoặc là ~u < x~ hoặc là ~u = x~ và ~v < y~);
4. Chọn một số tự nhiên ~i~ trong phạm vi từ ~1~ đến ~|E|~;
5. Nạp cạnh thứ ~i~ trong ~E~ vào đồ thị, lặp lại bước ~1~.

Cho biết các số được chọn ở bước thứ ~4~, hãy giúp ban ra đề in ra các cạnh của đồ thị. Lưu ý, các loại chỉ số trong bài đều được đánh số bắt đầu từ ~1~.

## Dữ liệu vào:
- Dòng đầu chứa hai số nguyên dương ~n, m~ là số đỉnh và số cạnh của đồ thị;
- ~m~ dòng tiếp theo, dòng thứ ~t~ chứa một số nguyên dương ~i_t~ là số được chọn ở bước thứ ~4~ của lần lặp thứ ~t~.

## Dữ liệu ra:
- In ra ~m~ cạnh được chọn theo thứ tự chọn của thuật toán. Với mỗi cạnh, in ra hai đỉnh trên một dòng cách nhau bởi dấu cách, đỉnh bé hơn phải được in trước.

## Ví dụ:
#### Dữ liệu vào:
```
4 4
3 3 1 3
```

#### Dữ liệu ra:
```
1 4
2 3
1 2
3 4
```

#### Giải thích:
- Ban đầu ~E = \{(1, 2), (1, 3), (1, 4), (2, 3), (2, 4), (3, 4)\}~ nên cạnh thứ ~3~ là ~(1, 4)~;
- Tiếp theo ~E = \{(1, 2), (1, 3), (2, 3), (2, 4), (3, 4)\}~ nên cạnh thứ 3 là ~(2, 3)~;
- Tiếp theo ~E = \{(1, 2), (1, 3), (2, 4), (3, 4)\}~ nên cạnh thứ ~1~ là ~(1, 2)~;
- Tiếp theo E = ~\{(1, 3), (2, 4), (3, 4)\}~ nên cạnh thứ ~3~ là ~(3, 4)~.

## Giới hạn:
- Trong tất cả các test: ~1 ≤ n ≤ 10^9, 1 ≤ m ≤ 10^5~;
- Có ~10\%~ số điểm có ~1 ≤ n, m ≤ 500~;
- ~30\%~ số điểm tiếp theo có ~1 ≤ m ≤ 500~;
- ~30\%~ số điểm tiếp theo có ~1 ≤ n ≤ 500~;
- ~30\%~ số điểm còn lại không có ràng buộc gì thêm.
**Nguồn:** [Chuyên Sơn La Online Judge](http://csloj.ddns.net/)

**Group giải đáp thắc mắc:** [Lập trình 24h](https://www.facebook.com/groups/1386904321519984)