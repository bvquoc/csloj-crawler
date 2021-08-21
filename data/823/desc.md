Vua Hùng thứ I cai trị đất nước Văn Lang hết mực yêu thương dân. Với chính sách cấp gạo cho người dân theo nhu cấu sử dụng, nhà Vua đã ra lệnh cho các quan xây dựng một số điểm cấp gạo để thuận tiện cho người dân đi nhận gạo. Người dân đất nước Văn Lang sinh sống thành từng làng dọc theo một trục đường chính (mà ta coi như một trục tọa độ), có tất cả ~n~ làng đánh số từ ~1~ đến ~n~, làng thứ ~i~ có tọa độ là số nguyên ~x_i~ và có số dân là số nguyên dương ~s_i~ ~(i = 1, 2, …, n)~. Nhà Vua muốn xây dựng ~k~ điểm cấp gạo, mỗi điểm cấp gạo sẽ nằm ở ~1~ làng nào đó (để tiện cho việc trông coi, bảo vệ kho gạo). Người dân khi đi nhận gạo, gần điểm cấp gạo nào sẽ tới điểm cấp gạo đó, độ vất vả của mỗi người dân sẽ bằng khoảng cách từ làng họ sống đến điểm cấp gạo gần làng đó nhất. Độ vất vả của cả đất nước sẽ bằng tổng độ vất vả của mỗi người dẫn. 
Nhà Vua rất thương dân nên muốn xây dựng k điểm cấp gạo sao cho độ vất vả của cả đất nước là nhỏ nhất có thể.

**Yêu cầu:** Tính toán độ vất vả của cả đất nước Văn Lang nếu xây dựng ~k~ điểm cấp gạo hợp lý nhất.

## Dữ liệu vào:
- Dòng đầu chứa hai số nguyên dương ~n~ và ~k~;
- Dòng thứ hai nghi ~n~ số nguyên ~x_1, x_2, …, x_n~;
- Dòng thứ ba nghi ~n~ số nguyên dương ~s_1, s_2, …, s_n~.

Hai số liên tiếp trên một dòng được ghi cách nhau một dấu cách.

## Dữ liệu ra:
- Ghi ra một số nguyên duy nhất là độ vất vả nhỏ nhất của đất nước Văn Lang.

## Ví dụ:
#### Dữ liệu vào:
```
4 2
1 2 3 5
1 2 2 3
```

#### Dữ liệu ra:
```
3
```

#### Giải thích:
- Hai điểm cấp gạo được đặt ở ngôi làng số ~2~ và số ~4~. Người dân ở các ngôi làng số ~1, 2, 3~ sẽ đến điểm cấp gạo số ~1~ nhận gạo (độ vất vả là ~1 + 2 = 3~), người dân ở ngôi làng số ~4~ sẽ nhận gạo ở điểm cấp gạo số ~2~. Tổng độ vất vả là ~3~.

## Ràng buộc:
- Có ~40\%~ số test của bài có ~1 ≤ k ≤ n ≤ 20, 0 ≤ x_i ≤ 10^3, 1 ≤ s_i ≤ 10^3~
- Có ~20\%~ số test của bài có ~1 ≤ n ≤ 100, 1 ≤ k ≤ 30, k ≤ n, 0 ≤ x_i ≤ 10^6, 1 ≤ s_i ≤ 10^3~
- Có ~40\%~ số test của bài có ~1 ≤ n ≤ 1000, 1 ≤ k ≤ 30, k ≤ n, 0 ≤ x_i ≤ 10^9, 1 ≤ s_i ≤ 10^5~
**Nguồn:** [Chuyên Sơn La Online Judge](http://csloj.ddns.net/)

**Group giải đáp thắc mắc:** [Lập trình 24h](https://www.facebook.com/groups/1386904321519984)