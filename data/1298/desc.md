<!--**<center>CSP Open Contest 2</center>**-->

Cho ~N~ thành phố và ~M~ đoàn tàu, đoàn tàu thứ ~i~ xuất phát tại thành phố ~u_i~ tại thời điểm ~l_i~ đến thành phố ~v_i~ tại thời điểm ~r_i~. Để bắt được chuyến tàu ~i~ thì bạn phải ở thành phố ~u_i~ tại thời điểm ~l_i~, và chỉ được xuống tàu vào thời điểm ~r_i~ tại thành phố ~v_i~.

Xuất phát tại thành phố ~1~ vào thời điểm ~0~, bạn muốn đến thành phố ~N~. Chi phí của cả quãng đường được tính như sau:
- Bạn có thể di chuyển từ đoàn tàu ~i~ sang đoàn tàu ~j~ nếu ~v_i = u_j~ và ~r_i ≤ l_j~;
- Mỗi khi chuyển từ tàu ~i~ sang tàu ~j~, khoảng thời gian phải chờ tàu sẽ là ~T = l_j − r_i~, cộng thêm vào tổng chi phí ~A × T^2 + B × T + C~ (~A, B, C~ cho trước).
- Lưu ý kể cả ~T = 0~ cũng phải tính theo công thức trên.
- Khoảng thời gian đợi giữa thời điểm ~0~ và thời điểm bắt đầu tàu đầu tiên cũng coi như thời gian chờ tàu và cũng được cộng thêm vào tổng chi phí như trong công thức trên.
- Nếu bạn đến thành phố ~N~ vào thời điểm ~T~ thì cộng thêm vào chi phí ~A × T~.

**Yêu cầu:** tìm ra tổng chi phí nhỏ nhất có thể khi chọn các đoàn tàu tối ưu.

## Dữ liệu vào:
- Dòng đầu tiên bao gồm ~5~ số nguyên không âm ~n, m, A, B, C~;
- ~m~ dòng sau miêu tả các đoàn tàu, dòng thứ ~i~ có ~4~ số ~u_i, v_i, l_i, r_i~;

Bộ test đảm bảo luôn có thể bắt tàu đi từ ~1~ đến ~N~.

## Dữ liệu ra:
- In ra một số nguyên duy nhất là tổng chi phí nhỏ nhất có thể.

## Ví dụ:
#### Dữ liệu vào:
```
5 4 1 3 6
1 4 2 7
1 4 3 4
4 5 9 10
4 5 6 8
```

#### Dữ liệu ra:
```
42
```

#### Giải thích:
- Chọn tàu ~1~ và tàu ~3~ rồi đến thành phố ~5~ tại thời điểm ~10~.

## Giới hạn:
- Trong tất cả các test: ~1 ≤ B, C ≤ 10^5, l_i < r_i \le 3 × 10^3, u_i ≠ v_i~;
- Subtask ~\#1: 25\%~ số điểm có ~n ≤ 10, m ≤ 20, A ≤ 20~;
- Subtask ~\#2: 30\%~ số điểm khác có ~n ≤ 1000, m ≤ 2000, A ≤ 20~;
- Subtask ~\#3: 25\%~ số điểm khác có ~n ≤ 10^5, m ≤ 3 × 10^5, A = 0~;
- Subtask ~\#4: 20\%~ số điểm còn lại có ~n ≤ 10^5, m ≤ 3 × 10^5, A ≤ 20~.
**Nguồn:** [Chuyên Sơn La Online Judge](http://csloj.ddns.net/)

**Group giải đáp thắc mắc:** [Lập trình 24h](https://www.facebook.com/groups/1386904321519984)