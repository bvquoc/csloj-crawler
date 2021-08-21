**<center>Nguồn:  Free Contest 02</center>**

Erwin trưng bày ~N~ viên kim cương, viên thứ ~i~ nằm tại tọa độ ~(x_i, y_i)~ và có màu ~c_i~ trong số ~K~ màu có thể có. Để ăn trộm số kim cương này, Lupin đã chế tạo ra một thiết bị đặc biệt: một cánh tay robot có thể lấy kim cương mà không kích hoạt hệ thống báo động. Robot được sử dụng duy nhất một lần bằng cách như sau:
- Chọn hai điểm ~A~ và ~B~ có cùng tung độ.
- Hai tay robot sẽ ngắm đến hai điểm ~A~ và ~B~.
- Robot sẽ gắp toàn bộ các viên kim cương nằm phía dưới đoạn thẳng nối ~A~ và ~B~ (kể cả biên).
Xem hình minh họa dưới đây:
<center><img src="/images/problems/2009/jewel.png" width=500px></center>

Để đảm bảo vụ trộm không bị phát hiện, Lupin đã chọn phương án an toàn: tập kim cương hắn sắp sửa lấy không chứa đủ ~K~ màu.

Xác định xem Lupin có thể ăn trộm được nhiều nhất bao nhiêu viên kim cương?

## Dữ liệu vào:
Dòng đầu tiên chứa một số nguyên dương là số lượng test. Mỗi bộ test được định dạng như sau:
- Dòng đầu tiên chứa hai số nguyên ~N~ và ~K\ (2 ≤ K ≤ N ≤ 200000)~;
- ~N~ dòng tiếp theo, mỗi dòng chứa ba số nguyên ~x_i, y_i, c_i~ là tọa độ và màu của viên kim cương thứ ~i~ ~(1 ≤ x_i, y_i ≤ 10^9, 1 ≤ c_i ≤ K)~. Mỗi màu sẽ có ít nhất một viên kim cương.

## Dữ liệu ra:
- Với mỗi test, in ra số lượng kim cương nhiều nhất có thể lấy được.

## Ví dụ:
#### Dữ liệu vào:
```
1
10 3
1 2 3
2 1 1
2 4 2
3 5 3
4 4 2
5 1 2
6 3 1
6 7 1
7 2 3
9 4 2
```

#### Dữ liệu ra:
```
5
```