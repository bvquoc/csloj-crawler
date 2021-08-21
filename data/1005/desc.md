*<center>Nguồn: Free Contest</center>*
<br>
Cho dãy số nguyên gồm $N$ phần tử $a_1, a_2, ..., a_N\ \left(N ≤ 1000, |a_i| ≤ 10^9\right)$. Cho trước số nguyên dương $K$, hãy tìm cách thêm bớt mỗi phần tử $a_i\ \left(1 ≤ i ≤ N\right)$ một lượng tối đa là $K$ sao cho dãy số vừa mới được tạo ra có độ dài của dãy con không giảm đơn điệu dài nhất là lớn nhất.

## Dữ liệu vào:
- Dòng đầu chứa hai số nguyên $N$ và $K$
- Dòng sau chứa $N$ số $a_1, a_2, ..., a_N$

## Dữ liệu ra:
- Một số duy nhất là độ dài dãy con không giảm đơn điệu dài nhất.

## Ví dụ:
#### Dữ liệu vào:
```
4 1
6 4 3 2
```

#### Dữ liệu ra:
```
3
```

#### Giải thích:
- Dãy ban đầu là $(6, 4, 3, 2)$ mà có $K = 1$ thì dãy sau khi thêm bớt là $(6, 4 − 1, 3, 2 + 1) = (6, 3, 3, 3)$. Lúc này dãy con không giảm đơn điệu dài nhất có độ dài là $3$.

## Giới hạn:
- $30\%$ số test có $K = 0$.
- $35\%$ số test có $K ≤ 500$.
- $35\%$ số test có $K ≤ 10^9$.