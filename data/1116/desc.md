**<center>NGUỒN: VOI Training Camp 3H  Task ACM</center>**
<br>

Cho $n$ số nguyên dương $a_1,a_2,…,a_n\  (1≤a_i≤10^6,1≤i≤n)$. Hãy tìm bộ ba số $a_i,a_j,a_k$ sao cho:
- $i < j < k$
- $a_i < a_j < a_k$
- $a_i\times a_j\times a_k$ đạt giá trị lớn nhất

## Dữ liệu vào:
- Gồm một dòng chứa $n$ số nguyên dương $a_1,a_2,…,a_n\ (n≤200000)$

#### Dữ liệu ra:
- Ghi ra một số nguyên duy nhất là tích lớn nhất thu được. Nếu không tìm được bộ ba số thỏa mãn thì ghi $0$

## Ví dụ:
#### Dữ liệu vào:
```
7 2 10 8 3 6 9 12 4 11
```

#### Dữ liệu ra:
```
864
```
---

#### Giải thích:
- $a_4×a_7×a_8=8\times 9 \times 12 = 864$