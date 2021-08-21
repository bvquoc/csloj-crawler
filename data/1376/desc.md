**<center>NGUỒN: Bài tập thầy Hiếu ôn Hải Phòng T11/2020</center>**

Công ty du lịch XYZ thường tổ chức các tuyến du lịch tham quan $n$ địa điểm được đánh số từ $1$ đến $n$. Các địa điểm du lịch này được nối với nhau không những bởi một hệ thống giao thông đường bộ mà còn cả một hệ thống giao thông đường thuỷ. Có một đoàn khách du lịch muốn đến đặt một tour du lịch xuất phát từ địa điểm $s$ kết thúc ở địa điểm $t$. Đoàn khách du lịch có hai người phụ trách đi lại cho đoàn: ông An phụ trách đi đường bộ còn ông Bình phụ trách đi đường thuỷ.

Để hành trình đem lại nhiều điều thú vị, đoàn khách quyết định ban ngày chỉ đi theo đường bộ còn ban đêm chỉ đi theo đường thuỷ từ một địa điểm này đến một địa điểm khác. Ông An được Công ty XYZ cung cấp cho bản đồ giao thông đường bộ, còn ông Bình được cung cấp bản đồ giao thông đường thuỷ để theo dõi hành trình của đoàn. Hướng dẫn viên du lịch Nguyễn Văn C... (vì lý do tế nhị ta không tiết lộ tên) được giao nhiệm vụ dẫn đường cho đoàn. Hành trình càng dài thì công ty càng có lợi và tất nhiên C càng thu được nhiều tiền thù lao. Thực hiện điều đó không phải là việc dễ dàng vì mỗi ngày C phải báo cáo về lộ trình của đoàn: đầu mỗi buổi sáng C báo cho ông An biết đoàn sẽ đi tới đâu, còn đầu mỗi buổi tối C báo cho ông Bình biết đoàn sẽ đi tới địa điểm nào. Do đó mỗi lần chọn tuyến đường di chuyển C phải chọn tuyến đường bộ (để báo cáo ông An) hoặc 
tuyến đường thuỷ (để báo cáo ông Bình) sao cho độ dài đường đi ngắn nhất đến địa điểm đích phải giảm ngặt (nghĩa là nếu C chọn tuyến đường bộ/thuỷ đi từ $u$ đến $v$ thì trên bản đồ đường bộ/thuỷ độ dài đường đi ngắn nhất từ $u$ đến $t$ phải lớn hơn độ dài đường đi ngắn nhất từ $v$ đến $t$).
<center><img src="/images/problems/1376/TOUR.png" width="800px" /></center>

**Yêu cầu:** Giúp C tìm độ dài của hành trình dài nhất.

## Dữ liệu vào:
- Dòng đầu tiên chứa ba số nguyên $n, s, t$ theo thứ tự là số lượng điểm du lịch, điểm xuất phát và điểm kết thúc của hành trình $(2 ≤ n ≤ 1000; 1 ≤ s, t ≤ n; s ≠ t$).
- Tiếp đến là hai nhóm dòng mô tả bản đồ giao thông đường bộ và bản đồ giao thông đường thuỷ, mỗi nhóm có cấu trúc như sau:
    - Dòng đầu tiên chứa số nguyên $m$ là số lượng tuyến đường trong hệ thống $(n-1 ≤ 
m ≤ 10^5)$;
    - Mỗi dòng trong số $m$ dòng tiếp theo chứa ba số nguyên $u, v, d$ mô tả một tuyến đường (bộ/thuỷ) giữa hai địa điểm $u và $v$ với độ dài $d\ (1 ≤ u, v ≤ n; 1 ≤ d ≤ 10^6)$.

Các tuyến đường kể cả thuỷ lẫn bộ đều cho phép đi theo cả hai chiều. Dữ liệu đảm bảo luôn có cách đi từ một địa điểm bất kỳ đến bất kỳ địa điểm nào trong số các địa điểm còn lại theo hệ thống đường bộ cũng như theo hệ thống đường thuỷ. Đoàn khách du lịch khởi hành từ thành phố xuất phát vào buổi sáng.

## Dữ liệu ra:
- Ghi ra độ dài của hành trình dài nhất tìm được. Nếu C có cách dẫn đoàn khách đi không khi nào tới đích hãy ghi số $-1$.

## Ví dụ:
#### Dữ liệu vào:
```
5 1 5
5
1 2 2
1 4 2
2 3 1
3 4 1
5 3 1
4
1 2 2
2 4 2
2 3 1
2 5 2
```

#### Dữ liệu ra:
```
-1
```

#### Dữ liệu vào:
```
3 1 3
4 
1 2 10
2 3 10
1 3 20
2 3 30
4
2 1 10
1 3 10
1 1 10
2 3 10
```

#### Dữ liệu ra:
```
20
```