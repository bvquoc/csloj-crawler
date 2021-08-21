**<center>Nguồn:  Free Contest 05</center>**

Cho một số nguyên dương $𝑁$ có dạng $𝑁 = 𝑝_1^𝑘 × 𝑝_2^𝑘 × … × 𝑝_𝑚^k\ (𝑝_1, 𝑝_2, …, 𝑝_𝑚$ là số nguyên tố, $𝑚 > 0, 𝑘 > 0)$.

Ta gọi $𝑁 = 𝑥_1 × 𝑥_2 × … × 𝑥_𝑙$ là một cách phân tích của số $𝑁$ ra thừa số nếu $𝑥_1 ≤ 𝑥_2 ≤ ⋯ ≤ 𝑥_𝑙$ là các số nguyên dương và $𝑙 > 1$. Hai cách phân tích $𝑁 = 𝑥_1 × 𝑥_2 × … × 𝑥_𝑙$ và $𝑁 = 𝑦_1 × 𝑦_2 × … × 𝑦_ℎ$ được gọi là khác nhau nếu tồn tại $𝑖$ sao cho $𝑥_𝑖 ≠ 𝑦_𝑖$ với $𝑖 ≤ \min(𝑙, ℎ)$.

**Yêu cầu:** Đếm số cách phân tích khác nhau $𝑁$ thành tích các thừa số.

Ví dụ, $𝑁 = 30 = 2 × 3 × 5$ ta có $4$ cách phân tích như sau: $30 = 2 × 3 × 5 = 2 × 15 = 3 × 10 = 5 × 6$.

## Dữ liệu vào:
- Dòng đầu là số $𝑇\ (𝑇 ≤ 100)$ là số bộ dữ liệu;
- $𝑇$ dòng sau, mỗi dòng chứa một số nguyên dương $𝑁\ (𝑁 ≤ 10^{12})$.

## Dữ liệu ra:
- Gồm $𝑇$ dòng, mỗi dòng chứa một số là số cách phân tích khác nhau của từng bộ dữ liệu tương ứng với dữ liệu vào.

## Ví dụ:
#### Dữ liệu vào:
```
2
30
100
```

#### Dữ liệu ra:
```
4
8
```