**<center>Đề đề xuất DHBB 2017 của TRƯỜNG THPT CHUYÊN NGUYỄN BỈNH KHIÊM - TỈNH QUẢNG NAM</center>**

Công ty sơn Paint Color là một công ty chuyên phân phối sơn cho các đại lý. Công ty có ~n~ thùng sơn với trọng lượng là ~w_1, w_2, …, w_n~ (có thể có những thùng sơn có trọng lượng bằng nhau). Bộ phận kinh doanh của công ty muốn biết những đơn hàng có tổng trọng lượng bằng bao nhiêu thì công ty có thể đáp ứng được (công ty chỉ phân phối nguyên thùng, không phân phối lẻ)?

Chẳng hạn, nếu công ty có các thùng sơn có trọng lượng là ~2, 4, 5~ thì chỉ những đơn hàng có tổng trọng lượng là ~2, 4, 5, 6, 7, 9, 11~ thì công ty mới đáp ứng được.

Cho biết danh sách trọng lượng các thùng sơn của công ty, em hãy giúp bộ phận kinh doanh tính toán xem có bao nhiêu tổng trọng lượng khác nhau của các đơn hàng mà công ty có thể đáp ứng được?

## Dữ liệu vào:
- Dòng đầu tiên chứa số nguyên dương ~n~;
- Dòng tiếp theo ghi ~n~ số nguyên dương ~w_1, …, w_n~, hai số liên tiếp được ghi cách nhau một dấu cách.

## Dữ liệu ra:
- Số trọng lượng khác nhau mà công ty có thể đáp ứng.

## Ví dụ:
#### Dữ liệu vào:
```
3
2 4 5
```

#### Dữ liệu ra:
```
7
```

## Giới hạn:
- **Subtask** ~\#1~: Có ~30\%~ test, với ~0<w_i \le 20~ và ~N\le 10~;
- **Subtask** ~\#2~:	Có ~40\%~ test, với ~0<w_i \le 50~ và ~N\le 500~;
- **Subtask** ~\#3~:	Có ~30\%~ test, với ~0<w_i \le 100~ và ~N\le 1000~.