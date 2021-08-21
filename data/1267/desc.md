**<center>NGUỒN: Bài tập Đội Bắc Giang ôn thầy Đỗ Đức Đông - Tháng 10/2017</center>**

Cho bảng số $A$ kích thước $M × N$ ô, mỗi ô chứa một số nguyên không âm có giá trị không vượt quá $10^9$. Xét hàng $i$ và hàng $j$ của bảng, ta cần xác định $X_{ij}$ nguyên để:
$$S_{ij} = \sum_{k=1}^N|A_{ik}-X_{ij}| + \sum_{k=1}^N|A_{jk}-X_{ij}|$$
đạt giá trị nhỏ nhất.

**Yêu cầu:** Tính
$$W = \sum_{i=1}^{M-1}\sum_{j=i+1}^MS_{ij}$$

## Dữ liệu vào:
- Dòng đầu là hai số nguyên dương $M, N\ (1 < N, M ≤1000$;
- $M$ dòng sau, mỗi dòng chứa $N$ số nguyên mô tả bảng $A$.

## Dữ liệu ra:
- Gồm một dòng chứa số $W$.

## Ví dụ:
#### Dữ liệu vào:
```
2 3
2 3 1
2 3 4
```

#### Dữ liệu ra:
```
5
```