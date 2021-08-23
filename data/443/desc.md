Cho một dãy số nguyên gồm $N$ phần tử $a_1, a_2, …, a_N$. Một dãy con đơn điệu tăng của dãy trên là dãy $a_{i_1}, a_{i_2}, …, a_{i_k}$ sao cho: $i_1 < i_2 < … < i_k$ và $a_{i_1} < a_{i_2} < … < a_{i_k}$. Hãy tìm một dãy con tăng của dãy $a_1, a_2, …, a_N$ có nhiều phần tử nhất (dài nhât)?

## Dữ liệu vào:
- Chứa số nguyên $N$;
- Dòng thứ hai chứa $N$ số nguyên dương $a_1, a_2, …, a_N$, mỗi số cách nhau bởi một dấu cách.

## Dữ liệu ra:
- Dòng đầu ghi ra số phần tử của dãy con tăng dài nhất của dãy $a_1, a_2, …, a_N$
- Dòng thứ hai ghi ra một dãy con tăng dài nhất của dãy $a_1, a_2, …, a_N$. Nếu có nhiều dãy con tăng có cùng số phần tử (nhiều nhất) thì ghi ra một dãy bất kỳ.

## Ví dụ:
### Dữ liệu vào:
```
6
1 2 5 4 6 2
```

## Dữ liệu ra:
```
4
1 2 4 6
```

### Giải thích:
- Dãy con tăng dài nhất là dãy $1, 2, 4, 6$ độ dài dãy này là $4$.

## Giới hạn:
- $1 ≤ n ≤ 1000, -10^9 ≤ a_i ≤ 10^9$.