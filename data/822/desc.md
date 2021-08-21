Vua Hùng thứ I cai trị nhà nước Văn Lang có nhiều chính sách rất ưu việt. Ngoài việc cấp số định danh các nhân để dễ quản lý, nhà Vua còn có chính sách quản lý gạo tập trung và cấp phát cho người dân theo nhu cầu dùng. Hàng tháng, mỗi người dân sẽ đưa ra nhu cầu dùng gạo của mình và nhà vua sẽ cấp cho họ theo đúng nhu cầu đó. Số gạo trong kho của nhà Vua không hạn chế, tuy nhiên, vào thời bấy giờ còn dùng cân đĩa thăng bằng để cân (để cân một khối lượng gạo nào đó ta sẽ chọn một số quả cân có tổng khối lượng đúng bằng số gạo cần cân đặt lên một bên đĩa cân và múc gạo đặt lên đĩa cân còn lại sao cho cân thăng bằng). Như vậy, có thể có những yêu cầu về khối lượng gạo không thể cân được (do không chọn được những quả cân có tổng khối lượng bằng khối lượng gạo cần cân).

Cho biết cân của nhà vua có ~m~ quả cân có khối lượng lần lượt là ~w_1, w_2, …, w_m~. Nhà Vua nhận được ~n~ yêu cầu về khối lượng gạo của người dân là ~a_1, a_2, …, a_n~. Nhà Vua cần thông báo ngay cho người dân biết những yêu cầu nào có thể đáp ứng được, những yêu cầu nào không thể đáp ứng (do không cân được), em hãy giúp nhà vua tính toán việc đó.

## Dữ liệu vào:
- Dòng đầu chứa hai số nguyên dương ~m, n~;
- Dòng thứ hai chứa ~m~ số nguyên dương ~w_1, w_2, …, w_m~;
- Dòng thứ ba chứa ~n~ số nguyên dương ~a_1, a_2, …, a_n~.

Hai số liên tiếp trên một dòng được ghi cách nhau một dấu cách.

## Dữ liệu ra:
- Ghi ra một xâu nhị phân có độ dài ~n~. Ký tự thứ ~i~ (tính từ trái sang, ký tự đầu tiên là ký tự thứ ~1~) là `1` nếu nhu cầu gạo thứ ~i~ là cân được và là `0` nếu nhu cầu gạo thứ ~i~ là không cân được.

## Ví dụ:
#### Dữ liệu vào:
```
3 4
1 2 5
1 2 3 4
```

#### Dữ liệu ra:
```
1110
```

## Giới hạn:
- Có ~20\%~ số test ứng với ~20\%~ số điểm của bài có ~1 ≤ m ≤ 10, 1 ≤ n ≤ 1000, 1 ≤ w_i, a_i ≤ 10^9~ 
- Có ~20\%~ số test ứng với ~20\%~ số điểm của bài có ~1 ≤ m ≤ 20, 1 ≤ n ≤ 10, 1 ≤ w_i, a_i ≤ 10^9~ 
- Có ~20\%~ số test ứng với ~20\%~ số điểm của bài có ~1 ≤ m ≤ 20, 1 ≤ n ≤ 10^5, 1 ≤ w_i, a_i ≤ 10^6~
- Có ~40\%~ số test ứng với ~40\%~ số điểm của bài có ~1 ≤ m ≤ 20, 1 ≤ n ≤ 10^5, 1 ≤ wi_, a_i ≤ 10^9~.
**Nguồn:** [Chuyên Sơn La Online Judge](http://csloj.ddns.net/)

**Group giải đáp thắc mắc:** [Lập trình 24h](https://www.facebook.com/groups/1386904321519984)