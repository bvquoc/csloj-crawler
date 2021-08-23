**<center>NGUỒN: Bài tập Bồi dưỡng HSGQG, Hải Phòng, T11/2020, Thái BK</center>**

Hệ thống tiền tệ tại một quốc gia nào đó thường đảm bảo việc lưu thông buôn bán một cách thuận tiện nhất. Theo đó nó phải có khả năng thanh toán cho tất cả các mức giá nguyên dương. Tuy vậy, do lạm phát mà mệnh giá tiền ngày càng tăng lên và các mệnh giá hiện tại có thể không giữ được tính chất cố hữu đó nữa. Ví dụ ở một nước phát triển nọ, với các tờ tiền có mệnh giá là $100, 200, 500, 1000, 2000, 5000, 10000, 20000, 50000, 100000, 200000, 500000$ thì rõ ràng là không thể chi trả số tiền $1995$.

Cụ thể hơn, một số tiền $x$ được gọi là thanh toán được bằng hệ thống tiền tệ hiện tại nếu có thể chọn số lượng cho mỗi mệnh giá sao cho tổng giá trị được chọn là $x$. Để đánh giá mức độ thuận tiện của một hệ thống tiền tệ trước hết người ta chọn một số nguyên dương $T$ , thường là giới hạn các giao dịch từng được sử dụng. Sau đó họ tính số lượng các số nguyên $x, 0 ≤ x ≤ T$, có thể thanh toán được. Hãy giúp họ thực hiện nhanh công việc khó khăn này.

## Dữ liệu vào:
- Dòng đầu tiên chứa hai số nguyên dương $n, T$ với $n$ là số lượng mệnh giá.
- Dòng thứ hai chứa $n$ số nguyên dương là các mệnh giá $a_1 a_2, …, a_n$.

## Dữ liệu ra:
- Một số tự nhiên là kết quả bài toán.

## Ví dụ:
### Dữ liệu vào:
```
5 10000
100 200 500 1000 2000
```

### Dữ liệu ra:
```
101
```

## Giới hạn:
- $1 ≤ n, a_i ≤ 2000$;
- Subtask $\#1: T ≤ 2000$;
- Subtask $\#2: T ≤ 20000$;
- Subtask $\#3: T ≤ 200000$;
- Subtask $\#4: T ≤ 10_{18}$.