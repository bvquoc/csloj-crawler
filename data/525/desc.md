Cho bảng vuông $n × n$, các dòng được đánh số từ $1$ đến $n$, các cột được đánh số từ $1$ đến $n$. Ô ở dòng $i$, cột $j$ được gọi là ô $(i, j)$. Ban đầu các ô trên bảng đều chứa số $0$.

Cho $m$ truy vấn, mỗi truy vấn có một trong hai dạng:
- $0\ r\ c\ d:$ cộng giá trị $d$ vào ô $(r, c)$;
- $1\ y\ x\ r\ c:$ Tìm tổng các số ở các ô $(i, j)$ trong bảng với $y ≤ i ≤ r, x ≤ j ≤ c$.

## Dữ liệu vào:
- Dòng đầu chứa hai số nguyên dương $n, m$;
- $m$ dòng sau, mỗi dòng chứa một truy vấn (thuộc một trong hai loại trên).

## Dữ liệu ra:
- Với mỗi truy vấn loại hai, ghi ra trên một dòng đáp án của truy vấn đó.

## Ví dụ:
#### Dữ liệu vào:
```
4 5
0 2 3 3
1 1 1 3 3
0 2 2 2
0 2 3 -1
1 2 2 3 4
```

#### Dữ liệu ra:
```
3
4
```

## Giới hạn:
- $1 ≤ n ≤ 1024, 1 ≤ m ≤ 10^5; 1 ≤ x, y, r, c ≤ n; x ≤ c; y ≤ r; |d| ≤ 1000$.