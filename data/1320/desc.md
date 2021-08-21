**<center>CSP Open Contest 3</center>**

Bé Đạo hôm nay đến thực tập tại một nhà hàng và hiện tại đang đứng trước một cái bếp ga có ~N~ núm.
<center><img src="/images/problems/1320/STOVE.png" width="250px" /></center>

Mỗi núm ga có thể xoay theo cùng chiều kim đồng hồ hoặc ngược chiều kim đồng hồ với số bước tuỳ ý. Giả sử xoay theo chiều kim đồng hồ ~2~ bước với núm trên thì độ nóng của núm mới là ~3196893~. Với mỗi thao tác bé Đạo có thể vặn một chuỗi các núm liên tiếp theo cùng một chiều và cùng một số lượng bước. Dù xoay bao nhiêu bước trong một lần. thì vẫn tính là một thao tác. Bé Đạo muốn tìm số bước ít nhất sao cho độ nóng của cả ~N~ nút là lớn nhất. Các bạn hãy giúp bạn ấy nhé!

## Dữ liệu vào:
- Dòng đầu tiên bao gồm một số ~N~ là số lượng núm;
- ~N~ dòng sau, dòng thứ ~i + 1~ là số ~k_i~ biểu thị độ nóng ban đầu của núm thứ ~i~.

## Dữ liệu ra:
- Gồm một số duy nhất là số thao tác ít nhất cần thực hiện.

## Ví dụ:
#### Dữ liệu vào:
```
7
3528482
9763459
6523528
7345526
1537354
1834632
7473823
```

#### Dữ liệu ra:
```
5
```

#### Dữ liệu vào:
```
7
5383638
6283637
6484936
1927493
1637478
5373838
6483826
```

#### Dữ liệu ra:
```
4
```

## Giới hạn:
- Trong tất cả các test, các chữ số trên các núm là các số từ 1 đến 9 và ~k_i~ luôn có ~7~ chữ số.
- Subtask ~\#1: 30\%~ số điểm có ~N ≤ 10~;
- Subtask ~\#2: 70\%~ số điểm còn lại có ~N ≤ 500~.
**Nguồn:** [Chuyên Sơn La Online Judge](http://csloj.ddns.net/)

**Group giải đáp thắc mắc:** [Lập trình 24h](https://www.facebook.com/groups/1386904321519984)