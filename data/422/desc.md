Cho một bảng $A$ kích thước $m × n$ ($m$ dòng, $n$ cột), trên đó ghi các số nguyên $a_{ij}$. Một người xuất phát tại ô nào đó của cột $1$, cần sang cột $n$ (tại ô nào cũng được).

**Quy tắc đi:** Từ ô $(i, j)$ chỉ được quyền sang một trong $3$ ô $(i, j + 1); (i - 1, j + 1); (i + 1, j + 1)$.

Hãy tìm một đường đi sao cho tổng tất cả các số trên đường đi đó là lớn nhất.

## Dữ liệu vào:
- Dòng đầu ghi hai số $m, n$ là số hàng và số cột của bảng;
- $m$ dòng tiếp theo, dòng thứ $i$ ghi $n$ số trên hàng $i$ của bảng theo đúng thứ tự từ trái qua phải.

## Dữ liệu ra:
- Gồm một dòng duy nhất ghi tổng lớn nhất tìm được.

## Ví dụ:
#### Dữ liệu vào:
```
5 7
9 -2 6 2 1 3 4
0 -1 6 7 1 3 3
8 -2 8 2 5 3 2
1 -1 6 2 1 6 1
7 -2 6 2 1 3 7
```

#### Dữ liệu ra:
```
41
```

#### Giải thích:
- Đường đi được mô tả là các ô xanh trong hình dưới đây:
<center><img src="/images/problems/422/DPPATHMAX.SVG" width=350px></center>

## Giới hạn:
- $1 ≤ n, m ≤ 100, |a_{ij}| ≤ 100$