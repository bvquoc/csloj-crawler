Cho số nguyên dương $k$ và hai bộ $k$ số nguyên $α_1, α_2, …, α_k; c_1, c_2, …, c_k$.

Dãy số $(a_n)$ cho bởi:
- $a_i = c_i$ với $1 ≤ i ≤ k$
- $a_i = α_1a_{i – k} + α_2a_{i – k + 1} + … + α_ka_{i – 1}$ với $i > k$

**Yêu cầu:** Cho biết $k, α_1, α_2, …, α_k; c_1, c_2, …, c_k$ và $m$ số nguyên dương $n_1, n_2, …, n_m$. Tính $a_{n_1}, a_{n_2}, …, a_{n_m}$.

## Dữ liệu vào:
- Dòng đầu chứa hai số nguyên dương $k, m$;
- Dòng hai chứa $α_1, α_2, …, α_k$;
- Dòng ba chứa $c_1, c_2, …, c_k$;
- Dòng bốn chứa $n_1, n_2, …, n_m$.

Hai số liên tiếp trên một dòng được ghi cách nhau ít nhất một dấu cách.

## Dữ liệu ra:
- Một dòng duy nhất chứa $m$ số nguyên là phần dư của các số $a_{n_1}, a_{n_2}, …, a_{n_m}$ khi chia cho $10^9 + 7$. Hai số liên tiếp cách nhau một dấu cách.

## Ví dụ:
#### Dữ liệu vào:
```
2 2
1 1
1 1
10 45
```

#### Dữ liệu ra:
```
55 134903163
```

## Giải thích:
- Dãy số $(a_n)$ chính là dãy số Fibonacci.

## Giới hạn:
- $1 ≤ k ≤ 10; 0 ≤ α_i ≤ 10^9; 0 ≤ c_i ≤ 10^9; 1 ≤ m ≤ 100; 1 ≤ n_i ≤ 10^{18}$.