**<center>ĐỀ KIỂM TRA ĐỘI TUYỂN HSG LẦN 2 Day 1- Hải Phòng 2020</center>**

Cho ~N~ thùng nước đặt liên tiếp nhau, được đánh số từ ~1~ đến ~N~. 
- Thùng số ~i~ có dung tích là ~A_i~ lít ~(1≤ i≤ N)~;
- Tại mỗi thùng đều có một vòi nước chảy với lưu lựợng giống nhau là ~K~ lít/giây.;
- Khi thùng thứ ~i~ đầy nước ~(1\le i < N)~ thì nước từ vòi tại thùng ~i~ sẽ chảy qua thùng ~i + 1~. Khi thùng thứ ~N~ đầy nước thì nước sẽ chảy ra ngoài.

**Yêu cầu:**
- Tìm số nguyên tương ứng với thời gian sớm nhất để thùng thứ ~N~ đầy nước?
- Tìm số nguyên tương ứng với thời gian sớm nhất để tất cả các thùng đầy nước?

**Lưu ý:** chỉ cần tìm thời gian nguyên sớm nhất (ví dụ thời gian tìm được là ~1.33~ thì kết quả in ra sẽ là ~2~).

## Dữ liệu vào:
- Dòng đầu chứa hai số nguyên dương ~N, K\ (N≤10^5; K≤10^9)~;
- Dòng thứ hai chứa ~N~ số nguyên dương ~A_1, A_2, .…, A_N\ (1≤ A_i ≤10^9, ∀i=1,… n)~.

## Dữ liệu vào:
- In ra hai số nguyên không âm lần lượt là thời gian sớm nhất để thùng thứ ~N~ đầy nước và thời gian sớm nhất để tất cả các thùng đầy nước (hai số ngăn cách nhau bởi khoảng trống).

## Ví dụ:
#### Dữ liệu vào:
```
4 2
1 2 3 4
```

#### Dữ liệu ra:
```
2 2
```

#### Giải thích:
- Hai kết quả là ~1.25~ và ~1.25~.

#### Dữ liệu vào:
```
4 3
10 7 3 2
```

#### Dữ liệu ra:
```
1 4
```

#### Giải thích:
- Hai kết quả là ~0.6667~ và ~3.3333~.