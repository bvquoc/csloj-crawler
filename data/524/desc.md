Cho dãy số nguyên gồm $n$ phần tử $a_1, a_2, …, a_n$. Ta gọi:
$$q\left( {x,y} \right) = \mathop {\max }\limits_{x \le i \le j \le y} \left( {{a_i} + {a_{i + 1}} + ... + {a_j}} \right)$$

Cho $m$ truy vấn dạng $x, y$. Hãy đưa ra giá trị $q(x, y)$ cho mỗi truy vấn.

## Dữ liệu vào:
- Dòng đầu chứa hai số nguyên dương $n$ và $m$;
- Dòng thứ hai chứa $n$ số nguyên $a_1, a_2, …, a_n$;
- $m$ dòng tiếp theo, mỗi dòng chứa hai số nguyên dương $x, y$.

## Dữ liệu ra:
- Gồm $m$ dòng, dòng thứ $i$ là kết quả của truy vấn $i$.

## Ví dụ:
#### Dữ liệu vào:
```
3 1
-1 2 3
1 2
```

#### Dữ liệu ra:
```
2
```

## Giới hạn:
- $1 ≤ n, m ≤ 10^5, |a_i| ≤ 10^4, 1 ≤ x ≤ y ≤ n$.