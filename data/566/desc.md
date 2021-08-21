Xe đạp một bánh là hình ảnh quen thuộc trong các tiết mục biểu diễn xiếc. Để tăng tính hấp dẫn cho tiết mục, đạo diễn quyết định "tin học hoá" nó: chia bánh xe đạp đặc (không có nan hoa) thành ~5~ sector, mỗi sector ~72^0~ và sơn ~1~ trong ~5~ màu khác nhau đánh số từ ~1~ đến ~5~. Sàn diễn được chia thành lưới ~M × N~ ô vuông, mỗi ô vuông có cạnh bằng ~1/5~ chu vi của bánh xe. Như vậy khi bánh xe tiếp xúc với sàn tại tâm của ô vuông theo một màu nào đó, thì sang ô bên cạnh - màu khác sẽ tiếp xúc với nó (Màu ~5~ thành ~4~, ~4~ thành ~3~, ~3~ thành ~2~, ~2~ thành ~1~, ~1~ thành ~5~).
<center><img src="/images/problems/566/CIRCUS.svg" width="500px" /></center>

Diễn viên phải xuất phát từ ô ban đầu ~S~ tiến tới ô đích ~T~ sau khoảng thời gian ngắn nhất theo các qui tắc sau:
- Quay mặt về phía nào thì phải theo hướng đó;
- Chỉ được phép đi qua các ô trống;
- Tại tâm một ô có thể xoay ~90^0~ về phía phải hay trái;
- Xuất phát ở trạng thái màu ~c_S~ tiếp xúc với sàn và kết thúc ở ~T~ với màu ~c_T~ tiếp xúc với sàn;
- Mỗi thao tác xoay hoặc chuyển sang ô mới mất ~1~ giây;
- Ban đầu, diễn viên quay mặt về phía Bắc (Các dòng được đánh số từ ~1~ đến ~M~ theo chiều **Bắc** ~→~ **Nam** và các cột được đánh số từ ~1~ đến ~N~ theo chiều **Tây** ~→~ **Đông**).

## Dữ liệu vào:
- Dòng đầu tiên chứa ~4~ số nguyên ~M, N, c_S, c_T\ (0<M,N≤50)~;
- ~M~ dòng sau, mỗi dòng chứa một xâu ~N~ ký tự mô tả trạng thái của các dòng tương ứng với ~S~ - ô xuất phát, ~T~ - ô đích, ~\#~ - ô có vật cản, dấu chấm ~.~ - ô trống.

## Dữ liệu ra:
- Thời gian nhanh nhất hoặc ~-1~, nếu không thể đi được.

## Ví dụ:
#### Dữ liệu vào:
```
10 10 1 1
#S.......#
#..#.##.##
#.##.##.##
.#....##.#
##.##..#.#
#..#.##...
#......##.
..##.##...
#.###...#.
#.....###T
```

#### Dữ liệu ra:
```
49
```