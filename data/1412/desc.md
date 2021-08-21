**<center>ĐỀ KIỂM TRA ĐỘI TUYỂN HSG LẦN 3 - Ôn Hải Phòng T11/2020</center>**

Hội khỏe Phù Đổng toàn quốc của Quốc gia XYZ do Bộ giáo dục, các trường đại học Thể dục thể thao và hội khuyến học Quốc tế tài trợ và tổ chức.

Một trong những thách thức khi tổ chức một sự kiện lớn như vậy là tìm một địa điểm thích hợp cho lễ khai mạc. Một gợi ý phổ biến là chọn một địa điểm để giảm khoảng cách di chuyển cho những đội tuyển tham gia. Do đó, bạn có nhiệm vụ viết một chương trình để tìm một vị trí như vậy.

Giả sử có ~N~ đội tham gia hội khỏe Phù Đổng. Giả sử khách sạn ăn ở của đội tham gia thứ ~i~ nằm ở ~(X_i; Y_i)~ trên mặt phẳng hai chiều. Bạn muốn tìm một địa điểm để tổ chức sự kiện sao cho tổng quãng đường di chuyển là nhỏ nhất. Giả sử địa điểm tổ chức lễ khai mạc được chọn ở ~(X; Y)~, khoảng cách di chuyển của đội tham gia thứ ~i~ là khoảng cách Manhattan giữa ~(X; Y)~ và ~(X_i; Y_i)~, tức là ~|X - X_i| + |Y - Y_i|~.

Nếu có nhiều vị trí mà tổng quãng đường di chuyển được giảm thiểu, bạn phải xuất bất kỳ một trong các tọa độ này. Có thể địa điểm của lễ khai mạc trùng với địa điểm khách sạn của đội tham gia. Tuy nhiên, sự kiện phải được tổ chức tại vị trí ~(X; Y)~ trong đó ~X~ và ~Y~ là các số nguyên.

## Dữ liệu vào:
- Dòng đầu chứa số nguyên dương ~N\ (1 ≤ N ≤ 10^5)~; 
- ~N~ dòng tiếp theo, dòng thứ ~i~ là hai số nguyên ~X_i~ và ~Y_i~;

## Dữ liệu ra:
- Ghi ra hai số nguyên ~X, Y~ là tọa độ của nơi đặt địa điểm.

## Ví dụ:
#### Dữ liệu vào:
```
6
1 0
3 0
5 0
7 0
9 0
11 0
```

#### Dữ liệu ra:
```
7 0
```

#### Dữ liệu vào:
```
9
1 16
3 12
5 6
7 10
9 8
11 4
13 14
15 2
17 18
```

#### Dữ liệu ra:
```
9 10
```

## Giới hạn:
- Subtask ~\#1: 48\%~ số điểm có ~2 ≤ N ≤ 100000, 0 ≤ X_i ≤ 10^9, Y_i = 0~; 
- Subtask ~\#2: 13\%~ số điểm khác có ~2 ≤ N ≤ 1000 0, ≤ X_i; Y_i ≤ 100~;
- Subtask ~\#3: 20\%~ số điểm khác có ~2 ≤ N ≤ 1000 0 ≤ X_i; Y_i ≤ 10^9~;
- Subtask ~\#4: 19\%~ số điểm còn lại có ~2 ≤ N ≤ 100000, 0 ≤ X_i; Y_i ≤ 10^9~.
**Nguồn:** [Chuyên Sơn La Online Judge](http://csloj.ddns.net/)

**Group giải đáp thắc mắc:** [Lập trình 24h](https://www.facebook.com/groups/1386904321519984)