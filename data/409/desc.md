Cho hai dãy số nguyên $a_1, a_2, …, a_n$ và $b_1, b_2, …, b_m$. Với mỗi chỉ số $i$ $(1 ≤ i ≤ m)$ hãy tìm sự xuất hiện của $b_i$ trong dãy $a_1, a_2, …, a_n$.

## Dữ liệu vào:
- Dòng đầu ghi hai số nguyên dương $n$ và $m$;
- Dòng thứ hai ghi $n$ số nguyên $a_1, a_2, …, a_n$;
- Dòng thứ ba ghi $m$ số nguyên $b_1, b_2, …, b_m$.

Hai số liên tiếp trên một dòng được ghi cách nhau một dấu cách.

## Dữ liệu ra:
- Một dòng duy nhất chứa m số nguyên, trong đó số thứ $i$ $(1 ≤ i ≤ m)$ là chỉ số $j$ nhỏ nhất mà $a_j = b_i$ (nếu tồn tại) và là $0$ nếu ngược lại. Hai số liên tiếp được ghi cách nhau một dấu cách.

## Ví dụ:
#### Dữ liệu vào:
```
7 5
6 4 7 2 4 1 3
3 1 5 4 8
```

#### Dữ liệu ra:
```
7 6 0 2 0
```

## Giới hạn:
- $1 ≤ n, m ≤ 10^5; |a_i|, |b_i| ≤ 10^9$.