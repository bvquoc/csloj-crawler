<center><img src="/images/problems/365/UNCLEHO.jpg" width=500px></center>

Thành Phố Sơn La đang khởi công xây dựng khu Tượng Đài Bác Hồ. Để san lấp mặt bằng, Ban Quản Lý dự án đã huy động các xe tải chở đất từ các ngọn đồi xung quanh Thành Phố về đổ vào đây. Cán bộ giám sát thi công đã ghi được danh sách ~n~ xe đất, đánh số từ ~1~ đến ~n~. Xe thứ ~i~ chở được khối lượng đất là số nguyên không âm ~w_i~ ~(dm^3)~. Để thanh toán tiền cho các đội xe, Ban Quản Lý dự án có ~k~ cặp số nguyên dương ~u, v~, với mỗi cặp số ~u, v~ cần tính tổng khối lượng đất của các xe từ chỉ số ~u~ đến chỉ số ~v~ (tức là ~w_u + w_{u + 1} + … + w_v~).  Bạn hãy lập chương trình giúp Ban Quản Lý dự án tính các tổng này.

## Dữ liệu vào:
- Dòng đầu chứa hai số nguyên dương ~n~ và ~k~;
- Dòng thứ hai chứa ~n~ số nguyên không âm ~w_1, w_2, …, w_n~;
- ~k~ dòng tiếp theo, mỗi dòng chứa hai số nguyên dương ~u, v~.

Hai số liên tiếp trên một dòng được ghi cách nhau một dấu cách.

## Dữ liệu ra:
- Ghi trên một dòng ~k~ số nguyên theo thứ tự là đáp số của bài toán ứng với ~k~ cặp số ~u, v~. Hai số liên tiếp được ghi cách nhau một dấu cách.

## Ví dụ:
#### Dữ liệu vào:
```
5 2
1 2 3 4 5
1 5
2 4
```

#### Dữ liệu ra:
```
15 9
```

## Giới hạn:
- ~1 ≤ n, k ≤ 10^5; 1 ≤ u ≤ v ≤ n;  0 ≤ w_i ≤ 10^5~.
**Nguồn:** [Chuyên Sơn La Online Judge](http://csloj.ddns.net/)

**Group giải đáp thắc mắc:** [Lập trình 24h](https://www.facebook.com/groups/1386904321519984)