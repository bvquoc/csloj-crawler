Địa bàn hoạt động của một điệp viên là một khu phố mà ở đó chỉ có các đường phố ngang, dọc tạo thành một lưới ô vuông. Với mục đích bảo mật, thay vì tên đường phố, điệp viên đánh số các phố ngang (dòng) từ $0$ đến $m$ và các phố dọc (cột) từ $0$ đến $n$. Ở một số ngã ba hoặc ngã tư có các trạm kiểm soát (có $k$ trậm kiểm soát). Anh ta đang đứng ở nút giao của hai đường $(i_1, j_1)$ ($i_1$ - đường ngang; $j_1$ - đường dọc) và cần tới điểm hẹn ở giao của hai đường $(i_2, j_2)$. Để tránh bị theo dõi,  đường đi phải không qua các trạm kiểm soát và cứ tới chỗ rẽ thì nhất thiết phải đổi hướng đi, thậm chí có thể sang đường và đi ngược trở lại. Việc đổi hướng chỉ được thực hiện ở ngã ba hoặc ngã tư. Hãy xác định đường đi ngắn nhất tới điểm hẹn hoặc cho biết không có đường đi đáp ứng được yêu cầu đã nêu.

## Dữ liệu vào:
- Dòng đầu chứa $6$ số nguyên $m, n, i_1, j_1, i_2, j_2\ ( 0 ≤ m, n ≤ 100)$;
- $k$ dòng tiếp theo, mỗi dòng chứa $2$ số $i, j$ (toạ độ trạm kiểm soát).

## Dữ liệu ra:
- Dòng đầu ghi độ dài đường đi ngắn nhất hoặc thông báo `NO` nếu không có đường đi.
- Các dòng sau, mỗi dòng ghi $2$ số $i, j$ chỉ các nút lần lượt đi qua theo đường đi tìm được, bắt đầu là $i_1, j_1$ và kết thúc là $i_2, j_2$.

## Ví dụ:
<center><img src="/images/problems/572/SPY.svg" width="300px" /></center>

### Dữ liệu vào:
```
5 4 0 0 5 4
0 1
0 4
2 2
2 3
4 0
5 2
5 3
```

### Dữ liệu ra:
```
13
0 0
1 0
1 1
1 0
2 0
2 1
3 1
3 2
4 2
4 3
3 3
4 3
4 4
5 4
```