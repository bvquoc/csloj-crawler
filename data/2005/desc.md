**<center>Nguồn:  Free Contest 02</center>**
***<center>Russian Code Cup 2012</center>***

Một lễ hội lớn sắp diễn ra ở Flatland. Vấn đề nảy sinh là tuyến đường giao thông ở Flatland đang xuống cấp nghiêm trọng. Flatland có mạng lưới giao thông gồm ~N~ thành phố, được kết nối bởi ~N – 1~ tuyến đường sao cho có đúng một cách di chuyển (không lặp cạnh) từ một thành phố sang một thành phố khác. Mỗi tuyến đường bị giới hạn bởi giá trị ~c~ là số lượng lượt xe có thể đi qua trước khi con đường bị sập và không thể tiếp tục sử dụng.

Sẽ có một lượng lớn ô tô di chuyển từ thành phố ~c_1~ sang ~c_2~ (họ không cần quay về). Để cứu vãn tình thế, thị trưởng quyết định xây dựng một đường cao tốc không bao giờ hư hại. Đường cao tốc này sẽ kết nối hai thành phố không phải là ~c_1~ và ~c_2~, và trước đó không được trực tiếp nối với nhau bằng một con đường. Hãy xác định lượng xe nhiều nhất có thể di chuyển từ ~c_1~ đến ~c_2~ sau khi xây dựng đường cao tốc một cách tối ưu.

## Dữ liệu vào:
- Dòng đầu tiên chứa ba số nguyên ~n, c_1~ và ~c_2\ (4 ≤ n ≤ 10^5, 1 ≤ c_1, c_2 ≤ N, c_1 \ne c_2)~;
- ~N – 1~ dòng tiếp theo, mỗi dòng chứa ba số nguyên ~u, v, c\ (1 ≤ u, v ≤ N; u \ne v, 1 ≤ c ≤ 1000)~.

## Dữ liệu ra:
- In ra lượng xe nhiều nhất có thể di chuyển.

## Ví dụ:
#### Dữ liệu vào:
```
4 1 4
1 2 10
1 4 10
3 4 5
```

#### Dữ liệu ra:
```
15
```

**Nguồn:** [Chuyên Sơn La Online Judge](http://csloj.ddns.net/)

**Group giải đáp thắc mắc:** [Lập trình 24h](https://www.facebook.com/groups/1386904321519984)