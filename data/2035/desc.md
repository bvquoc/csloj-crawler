**<center>Nguồn:  Free Contest 05</center>**

John quyết định xem một vài bộ phim kinh dị vào tối nay. Có ~N~ bộ phim, đánh số từ ~0~ đến ~N – 1~. Phim thứ ~k~ có độ dài ~L_k~ và một cảnh kinh dị xuất hiện duy nhất sau khi bộ phim chiếu được ~S_k~ phút.

Tuy nhiên, John thường có thói quen ngủ quên trong khi xem phim. Thói quen này được mô tả bằng một giá trị là “độ sợ”, ban đầu giá trị này là ~74~. Mỗi phút xem phim sẽ làm độ sợ giảm xuống ~1~ đơn vị với tốc độ giảm không đổi (ví dụ, sau ~6~ giây, độ sợ bị giảm ~0.1~). Khi độ sợ giảm xuống dưới ~-0.5~, John sẽ ngủ quên và không thể xem được những cảnh phim còn lại (kể cả trong trường hợp có những cảnh kinh dị phía sau). Để bù lại, mỗi cảnh kinh dị trong phim sẽ ngay lập tức làm tăng độ sợ của John thêm ~47~ đơn vị và giúp cậu có đủ sức xem phim.

John muốn chọn thứ tự xem phim sao cho cậu có thể xem được trọn vẹn nhiều bộ phim nhất. Nếu có nhiều phương án như vậy, thứ tự từ điển của các bộ phim cần xem là nhỏ nhất. Giúp John xác định thứ tự xem phim cần thiết.

## Dữ liệu vào:
- Dòng đầu tiên chứa số nguyên dương ~N\ (N ≤ 7)~ là số bộ phim;
- ~N~ dòng sau, mỗi dòng chứa hai số nguyên ~L_k~ và ~S_k\ (0 < S_k < L_k ≤ 500)~.

## Dữ liệu ra:
- Đưa ra ~N~ dòng là thứ tự xem các bộ phim trong phương án tối ưu;

## Ví dụ:
#### Dữ liệu vào:
```
2
100 1
50 49
```

#### Dữ liệu ra:
```
1
0
```

#### Dữ liệu vào:
```
4
100 77
100 76
100 75
100 74
```

#### Dữ liệu ra:
```
3
0
1
2
```

#### Giải thích:
- Ở test thứ hai, John cần xem bộ phim ~3~ trước để đảm bảo có thể xem được trọn vẹn một bộ phim. Không có cách nào cho kết quả tôt hơn, nên thứ tự ~3,0,1,2~ là thứ tự từ điển nhỏ nhất cần tìm.
**Nguồn:** [Chuyên Sơn La Online Judge](http://csloj.ddns.net/)

**Group giải đáp thắc mắc:** [Lập trình 24h](https://www.facebook.com/groups/1386904321519984)