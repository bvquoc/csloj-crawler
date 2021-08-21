Với mỗi dãy số nguyên gồm $m$ phần từ $b_1, b_2, b_m$, ta định nghĩa phần tử trung vị của dãy là số đứng ở vị trí thứ $[\frac{m}{2}]$ sau khi đã sắp xếp lại dãy theo thứ tự không giảm. Ví dụ dãy $1, 3, 5, 4$ sau khi sắp xếp không giảm thành dãy $1, 3, 4, 5$ có phần tử trung vị là số đứng thứ $2$ là $3$, dãy $6, 5, 1, 1, 4$ sau khi sắp xếp không giảm được dãy $1, 1, 4, 5, 6$ có phần tử trung vị đứng thứ $3$ là $4$.

Cho dãy $n$ số nguyên $a_1, a_2, ..., a_n$ được sinh ngẫu nhiên như sau:
- $a_1 = seed$;
- $a_i = (a_{i-1}×\text{mul} + \text{add})\text{ mod }65536$ (chia lấy phần dư).

Với $mul, add, seed$ là các số cho trước.

Cho một số $k$. Dãy đã cho có $n – k + 1$ dãy con độ dài $k$ gồm các phần tử liên tiếp nhau. Hãy tính tổng tất cả các phần tử trung vị của $n – k + 1$ dãy con này.

## Dữ liệu vào:
- Dòng đầu chứa số nguyên dương $T$ là số bộ test.
- $T$ dòng tiếp theo, mỗi dòng chứa $5$ số nguyên $seed, mul, add, n, k$, hai số liên tiếp cách nhau ít nhất một dấu cách.

## Dữ liệu ra:
- Gồm $T$ số nguyên, mỗi số là tổng trung vị tìm được của test tương ứng. Hai số liên tiếp ghi cách nhau một dấu cách.

## Ví dụ:
#### Dữ liệu vào:
```
2
3 1 1 10 3
10 0 13 5 2
```

#### Dữ liệu ra:
```
60 49
```

#### Giải thích:
- Test case $\#1:$ Dãy sinh ra là $3, 4, 5, 6, 7, 8, 9, 10, 11, 12$. Các trung vị tương ứng là $4, 5, 6, 7, 8, 9, 10, 11$ và tổng là $60$.

## Giới hạn:
- $0 ≤ seed, mul, add ≤ 65565; 1 ≤ k ≤ n ≤ 10^5; 1 ≤ T ≤ 30$.