**<center>NGUỒN: VOI Training Camp 3H  Task ACM</center>**

Cho ma trận $(a_{ij})$ $n$ dòng, $m$ cột. Các dòng đánh số từ $1$ đến $n$, các cột đánh số từ $1$ đến $m$. Ma trận có điểm đặc biệt:
- Các phần tử trên một dòng là tăng dần
- Các phần tử trên một cột là tăng dần

Có $q$ truy vấn dạng như sau:
- $1\ x$: Cho biết trong ma trận có phần tử $a_{ij}=x$ hay không?
- $2\ r\ c\ y$: tăng tất cả các phần tử của ma trận con có đỉnh trái trên là $(r,c)$ thêm $y$ đơn vị

## Dữ liệu vào:
- Dòng đầu tiên chứa hai số nguyên dương $n,m\ (1≤n,m≤1000)$
- $n$ dòng tiếp theo, mỗi dòng chứa $m$ số nguyên dương $a_{ij}  (1≤a_{ij}≤10^9)$
- Dòng tiếp theo chứa số nguyên dương $q\ (1≤q≤20000)$
- $q$ dòng tiếp theo, mỗi dòng chứa một truy vấn dạng:
    - $1\  x\ (1≤x≤2.10^9)$
    - $2\ r\ c\ y\ (1≤r≤n,1≤c≤m,1≤y≤50000)$

#### Dữ liệu ra:
- Ghi ra nhiều dòng, mỗi dòng theo thứ tự là câu trả lời cho truy vấn loại $1$. Ghi `Y` nếu có phần tử $x$, ngược lại ghi `N`.

## Ví dụ:
#### Dữ liệu vào:
```
3 4
11 13 14 17
13 15 19 21
18 20 23 42
9
1 42
1 27
2 2 2 4
1 27
2 1 3 7
1 20
1 32
1 19
1 42
```

#### Dữ liệu ra:
```
Y
N
Y
N
Y
Y
N
```