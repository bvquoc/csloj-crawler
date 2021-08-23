**<center>Nguồn: Ôn HN tháng 11/2016, Thầy Nguyễn Đức Nghĩa, Ngày 1</center>**

Bờm rất yêu thích môn toán. Vừa rồi Bờm vừa được nghe bài giảng về ước số chung lớn nhất (viết tắt là gcd) và bội số chung nhỏ nhất (viết tắt là lcm). Ước số chung lớn nhất của hai số nguyên dương $a$ và $b$, ký hiệu là $gcd(a, b)$, là số nguyên lớn nhất chia hết cả $a$ và $b$. Ví dụ, $gcd(24, 18) = 6$. Còn bội số chung nhỏ nhất của hai số nguyên dương $a$ và $b$, ký hiệu là $lcm(a, b)$, là số nguyên dương nhỏ nhất chia hết cho cả $a$ lẫn $b$. Ví dụ, $lcm(24, 18) = 72$.

Bờm nhận thấy rằng có thể có những cặp số có **gcd** và **lcm** là như nhau. Bây giờ Bờm quan tâm đến bài toán sau: Cho hai số nguyên $a$ và $b$, trong số các cặp số có cùng **lcm** và **gcd** như cặp $(a, b)$ hãy tìm cặp có chênh lệch nhỏ nhất.

**Yêu cầu:** Cho hai số nguyên dương $a$ và $b$ cần tìm hai số nguyên $x$ và $y\ (1 ≤ x ≤ y)$ sao cho $gcd(a, b) = gcd(x, y), lcm(a, b) = lcm(x, y)$, và hiệu $y − x$ là nhỏ nhất.

## Dữ liệu vào:
- Gồm một dòng chứa hai số nguyên $a$ và $b\ (1 ≤ a, b ≤ 10^9)$.

## Dữ liệu ra:
- Ghi ra hai số nguyên $x$ và $y\ (1 ≤ x ≤ y)$ thỏa mãn: $gcd(x, y) = gcd(a, b), lcm(x, y) = lcm(a, b)$,và hiệu $y − x$ là nhỏ nhất.

## Ví dụ:
### Dữ liệu vào:
```
3 4
```

### Dữ liệu ra:
```
3 4
```

### Dữ liệu vào:
```
1 12
```

### Dữ liệu ra:
```
3 4
```
