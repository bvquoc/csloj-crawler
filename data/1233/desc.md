**<center>Nguồn: Ôn HN tháng 11/2016, Thầy Nguyễn Đức Nghĩa, Ngày 3</center>**

Một dây chuyền sản xuất có $N$ vị trí làm việc đánh số từ $1$ đến $N$. Có $N$ công nhân để xếp vào làm việc trên các vị trí này. Biết $s_{ij}$ là năng suất làm việc của công nhân $i$ trên vị trí làm việc $j$ của dây chuyền $(i, j=1,2,…,N)$. Cho trước một cách bố trí công nhân đứng làm việc trên các vị trí của dây chuyền, ta có thể tính năng suất của dây chuyền theo cách bố trí đã cho như là năng suất nhỏ nhất của công nhân trên dây chuyền.

**Yêu cầu:** Tìm cách bố trí $N$ công nhân vào làm việc trên $N$ vị trí của dây chuyền sản xuất sao cho năng suất của dây chuyền là lớn nhất.

## Dữ liệu vào:
- Dòng đầu chứa số nguyên dương $N\ (N ≤ 1000)$;
- Dòng thứ $i$ trong số $N$ dòng sau chứa $N$ số nguyên dương $s_{i1}, s_{i2}, …, s_{iN}$.

## Dữ liệu ra:
- Ghi ra một số nguyên duy nhất là năng suất lớn nhất của dây chuyền theo cách bố trí tìm được.

## Ví dụ:
#### Dữ liệu vào:
```
4
9 4 4 12
8 7 8 13
2 2 8 3
6 7 3 7
```

#### Dữ liệu ra:
```
7
```