Đất nước ALPHA có $N$ thành phố và $N – 1$ con đường hai chiều nối giữa các cặp thành phố với nhau đảm bảo sự đi lại giữa mọi cặp thanh phố.

Công ty BETA đã thắng trong cuộc đấu thầu để sửa chửa $2$ tuyến đường. Một tuyến đường là một dãy các thành phố khác nhau, liên kết với nhau bởi những con đường. Công ty được phép chọn $2$ tuyến đường bất kỳ để sửa, nhưng họ phải chọn $2$ tuyến đường không được giao nhau (tức là không có một thành phố trên cả $2$ tuyến đường đó).

Cho biết lợi nhuận của việc sửa mỗi con đường luôn bằng $1$, lợi nhuận sửa chữa mỗi tuyến bằng tổng lợi nhuận sửa chữa các con đường trên tuyến đó. Lợi nhuận khi sửa chữa $2$ tuyến đường bằng tích của lợi nhuận mỗi tuyến.

Nhiệm vụ của bạn là giúp công ty BETA tìm $2$ tuyến đường để sửa sao cho lợi nhuận thu được là lớn nhất.

## Dữ liệu vào:
- Dòng đầu chứa số $N\ (2 ≤ N ≤ 2000)$;
- $N – 1$ dòng tiếp theo mỗi dòng chứa hai số nguyên $u, v$ thể hiện một con đường nối giữa $u$ và $v$.

## Dữ liệu ra:
- Lợi nhuận lớn nhất thu được của công ty.

## Ví dụ:
### Dữ liệu vào:
```
6
1 2
2 3
2 4
4 5
4 6
```

### Dữ liệu ra:
```
4
```

### Dữ liệu vào:
```
4
1 2
1 3
1 4
```

### Dữ liệu ra:
```
0
```