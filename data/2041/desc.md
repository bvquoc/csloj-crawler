**<center>Nguồn:  Free Contest 06</center>**
***<center>COCI, Contest 1 – October 28, 2006</center>***

Cho một bảng chữ nhật gồm $M$ hàng và $N$ cột, mỗi ô trong bảng chứa một kí tự $0$ hoặc $1$. Một bảng con được gọi là bảng vuông con đẹp nếu:
- Bảng con này có dạng hình vuông và chứa nhiều hơn một kí tự.
- Khi xoay bảng con này $180°$ thì bảng mới trông giống hệt bảng ban đầu.

Ví dụ, bảng sau đây chứa $3$ bảng vuông con đẹp:
<center><img src="/images/problems/2041/debug.svg" width=800px /></center>

Nhiệm vụ của bạn là tìm bảng vuông con đẹp có kích thước lớn nhất.

## Dữ liệu vào:
- Dòng đầu tiên chứa hai số nguyên dương $M$ và $N\ (1 ≤ M, N ≤ 300)$;
- $M$ dòng tiếp theo, mỗi dòng chứa $N$ kí tự $0$ hoặc $1$.

## Dữ liệu ra:
- In ra kích thước của bảng vuông con lớn nhất tìm được. Nếu không tồn tại bảng vuông con đẹp, in ra $-1$.

## Ví dụ:
#### Dữ liệu vào:
```
3 6
101010
111001
101001
```

#### Dữ liệu ra:
```
3
```

#### Dữ liệu vào:
```
4 5
10010
01010
10101
01001
```

#### Dữ liệu ra:
```
3
```

#### Dữ liệu vào:
```
3 3
101
111
100
```

#### Dữ liệu ra:
```
-1
```