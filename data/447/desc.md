Nhà Bờm có $n$ máy tính xếp thẳng hàng (cố định) được đánh số từ $1$ đến $n$. Bờm muốn nối các máy tính lại với nhau sao cho mỗi máy tính được nối với ít nhất một máy tính khác. Biết khoảng cách giữa hai máy liên tiếp thứ $i$ và thứ $i + 1$ là $d_i$ $(i = 1, 2, …, n – 1)$. Em hãy giúp Bờm tính xem tổng độ dài dây cáp ít nhất Bờm cần phải sử dụng nhé.

## Dữ liệu vào:
- Dòng đầu chứa số nguyên dương $n$;
- Dòng thứ hai chứa $n - 1$ số nguyên dương $d_1, d_2, …, d_{n - 1}$.

## Dữ liệu ra:
- Một số nguyên duy nhất là tổng độ dài dây cáp Bờm cần dùng.

## Ví dụ:
### Dữ liệu vào:
```
6
2 2 3 2 2
```

### Dữ liệu ra:
```
7
```

### Giải thích:
<center><img src="/images/problems/447/DPCABLE.svg" width=500px></center>
<center>Cách nối máy của Bờm</center>

## Giới hạn:
- $1 ≤ N ≤ 25000; 1 ≤ d_i < 10^4$.