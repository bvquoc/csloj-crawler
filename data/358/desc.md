Cho số nguyên dương $n$. Hãy phân tích $n$ ra thừa số nguyên tố. Tức là tìm các số nguyên tố $p_1, p_2, …, p_k$ đôi một phân biệt và các số nguyên dương $α_1, α_2, …, α_k$ sao cho:
$$n = {p_1}^{{\alpha _1}} \times {p_2}^{{\alpha _2}} \times ... \times {p_k}^{{\alpha _k}}$$

## Dữ liệu vào:
- Gồm một dòng duy nhất chứa số nguyên dương $n$.

## Dữ liệu ra:
- Dòng đầu ghi số nguyên dương $k$
- $k$ dòng sau, dòng thứ $i$ ghi hai số $p_i$ và $α_i$ cách nhau một dấu cách, các số $p_i$ được sắp xếp tăng dần.

## Ví dụ:
#### Dữ liệu vào:
```
10
```

#### Dữ liệu ra:
```
2
2 1
5 1
```

#### Dữ liệu vào:
```
12
```

#### Dữ liệu ra:
```
2
2 2
3 1
```

#### Giải thích:
- $10 = 2^1 × 5^1$
- $12 = 2^2 × 3^1$

## Giới hạn:
- $1 ≤ n ≤ 10^{12}$.