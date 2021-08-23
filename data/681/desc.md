Cho xâu ký tự $s$ có độ dài $n$. Với mỗi $1 ≤ i ≤ n$ ta gọi $f(i)$ là độ dài của xâu hậu tố chung dài nhất của $s$ và $s[1..i]$, tức là nếu $f(i) = k$ thì $s[i] = s[n], s[i – 1] = s[n – 1], …, s[i – k + 1] = s[n – k + 1]$ và $s[i – k] ≠ s[n – k]$.

Bạn được cho xâu ký tự $s$ chỉ gồm các chữ cái Latinh thường (‘a’, …, ’z’) và $m$ chỉ số $i_1, i_2, …, i_m$. Với mỗi chỉ số $i_k$ hãy cho biết giá trị của $f(i_k)$.

## Dữ liệu vào:
- Dòng đầu chứa xâu $s$;
- Dòng thứ hai chứa số nguyên dương $m$ và theo sau là $m$ số nguyên dương $i_k$, hai số liên tiếp cách nhau một dấu cách.

## Dữ liệu ra:
- Ghi trên một dòng các giá trị $f(i_k)$, hai số liên tiếp được ghi cách nhau một dấu cách.

## Ví dụ:
### Dữ liệu vào:
```
zaaxbaacbaa
11 1 2 3 4 5 6 7 8 9 10 11
```

### Dữ liệu ra:
```
0 1 2 0 0 1 3 0 0 1 11
```

## Giới hạn:
- $1 ≤ |s|, m ≤ 10^6; 1 ≤ i_k ≤ |s|$.