**<center>(Đề đề xuất DHBB 2017 của THPT CHUYÊN NGUYỄN TRÃI – HẢI DƯƠNG)</center>**

Hải Dương tổ chức hội chợ nông sản. Dọc đại lộ Tôn Đức Thắng, ban tổ chức đã xây dựng ~m~ gian hàng liền nhau đánh số lần lượt ~1, 2, ..., m~. Tuy nhiên chỉ có ~n~ gian hàng trong số chúng được thuê. Gian hàng thứ ~i~ được thuê có số hiệu ~_x~_i. Không có hai gian hàng được thuê có cùng số hiệu.

Để tiết kiệm chi phí, ban tổ chức chỉ che mưa cho những gian hàng được thuê bằng những tấm bạt. Một tấm bạt phủ được từ gian hàng số hiệu ~u~ đến gian hàng số hiệu ~v~ ~(u ≤ v)~ được coi là có kích thước ~v – u + 1~. Giá của một tấm bạt kích thước ~w~ là ~C_w~. Chú ý rằng những tấm bạt kích thước lớn hơn không nhất thiết phải đắt hơn những tấm bạt kích thước nhỏ hơn.

Hãy giúp ban tổ chức tính số tiền ít nhất để có thể mua bạt che tất cả các gian hàng được thuê. Chú ý rằng trong phương án tối ưu các tấm bạt có thể phủ chồng lên nhau ở một số gian hàng.

## Dữ liệu vào:
- Dòng đầu ghi hai số nguyên dương ~n, m~;
- Dòng thứ hai chứa ~n~ số nguyên dương ~x_1, x_2, …, x_n~;
- Dòng thứ ba chứa ~m~ số nguyên ~C_1, C_2, …, C_m~.

Hai số liên tiếp được ghi cách nhau một dấu cách.

## Dữ liệu ra:
- Một số nguyên duy nhất là tổng chi phí nhỏ nhất mua bạt phủ các gian hàng được thuê.

## Ví dụ:
#### Dữ liệu vào:
```
6 12
1 2 11 8 4 12 
2 3 4 4 8 9 15 16 17 18 19 19
```

#### Dữ liệu ra:
```
9
```

#### Giải thích:
Hình minh họa cho test đề bài:
<center><img src="/images/problems/474/DPMARKET.svg" width=600px></center>

- Có ~12~ gian hàng, các gian màu xám là các gian được thuê. Ở trên sử dụng ba tấm bạt kích thước ~4, 1~ và ~2~

## Giới hạn:
- ~1 ≤ n ≤ 5000; n ≤ m ≤ 10^5; 1 ≤ C_i ≤ 10^6~.