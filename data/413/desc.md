Cho dãy số ~(a_n)~ xác định bởi:
~~\left\{ \begin{array}{l}
{a_1} = 1;{a_2} = 2;{a_3} = 3\\
{a_n} = {a_{n - 3}} - 2{a_{n - 2}} + 3{a_{n - 1}},\forall n \ge 4
\end{array} \right.~~

**Yêu cầu:** Cho số ~m~ và ~m~ số nguyên dương ~n_1, n_2, …, n_m~. Tính ~a_{n_1}, a_{n_2}, …, a_{n_m}~.

## Dữ liệu vào:
- Dòng đầu chứa số nguyên dương ~m~;
- Dòng hai chứa ~m~ số nguyên dương ~n_1, n_2, …, n_m~. Hai số liên tiếp được ghi cách nhau ít nhất một dấu cách.

## Dữ liệu ra:
- Một dòng duy nhất chứa ~m~ số nguyên là phần dư của các số ~a_{n_1}, a_{n_2}, …, a_{n_m}~ khi chia cho ~10^9 + 7~. Hai số liên tiếp cách nhau một dấu cách.

## Ví dụ:
#### Dữ liệu vào:
```
2
5 15
```

#### Dữ liệu ra:
```
14 65657
```

## Giới hạn:
- ~1 ≤ m ≤ 1000; 1 ≤ n_i ≤ 10^{18}~.