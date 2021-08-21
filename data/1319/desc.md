**<center>CSP Open Contest 3</center>**

Cho một bảng số ~val~ gồm ~M~ dòng ~N~ cột, các hàng đánh số từ ~1~ đến ~~, các cột đánh số từ ~1~ đến ~N~. ~val[i][j]~ là số được ghi ở hàng ~i~ cột ~j~.

Một hình chữ nhật được xác định bởi ô trái trên ~(a, b)~ và ô phải dưới ~(c, d)~ trong đó ~a ≤ c~ và ~b ≤ d~ sẽ gồm tất cả các số ~val[i][j]~ thỏa mãn ~a ≤ i ≤ c~ và ~b ≤ j ≤ d~.

**Yêu cầu:** tìm một số ~X~ nhỏ nhất sao cho ~X~ thỏa mãn tất cả ~K~ bộ điều kiện có dạng ~(a, b, c, d, t)~.
- ~(a, b), (c, d)~ là ô trái trên và phải dưới như trên;
- ~t ≤ (c − a + 1) × (d − b + 1)~;
- ~X~ cần phải lớn hơn hoặc bằng ít nhất t số ~val[i][j]~ trong hình chữ nhật xác định bởi ~(a, b), (c, d)~.

## Dữ liệu vào:
- Dòng đầu tiên bao gồm ba số nguyên dương ~M, N, K~;
- ~M~ dòng sau mỗi dòng gồm ~N~ số nguyên dương, số thứ ~j~ trên dòng thứ ~i~ là ~val[i][j]~;
- ~K~ dòng tiếp theo mỗi dòng gồm ~5~ số ~a, b,c, d, t~ là một bộ điều kiện.

## Dữ liệu ra:
- Ghi ra một số duy nhất là ~X~ cần tìm.

## Ví dụ:
#### Dữ liệu vào:
```
3 4 2
1 1 2 3
1 2 3 1
3 1 2 1
1 2 3 4 4
2 2 3 3 2
```

#### Dữ liệu ra:
```
2
```

## Giới hạn:
- Trong mọi test ~val[i][j] ≤ 10^6~;
- Subtask ~\#1: 20\%~ số điểm có ~1 ≤ M, N ≤ 300, K = 1~;
- Subtask ~\#2: 20\%~ số điểm khác có ~1 ≤ M × N ≤ 10^5, K ≤ 10~;
- Subtask ~\#3: 50\%~ số điểm khác có ~1 ≤ M, N ≤ 300, K ≤ 5 × 10^4~;
- Subtask ~\#4: 10\%~ số điểm còn lại có ~1 ≤ M × N ≤ 10^5, K ≤ 5 × 10^4~.