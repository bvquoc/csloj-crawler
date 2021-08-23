**<center>Nguồn: Beginner Free Contest 11</center>**

Cho dãy số nguyên $A$ độ dài $N$. Đếm xem có bao nhiêu dãy con liên tiếp từ $l$ đến $r$ thỏa mãn điều kiện sau: gọi $k$ là số nhỏ nhất trong dãy từ $l$ đến $r$ thì các số $k, k + 1, k + 2,...,k + r − l$ xuất hiện đúng một lần.

## Dữ liệu vào:
- Dòng đầu tiên chứa số nguyên dương $N$;
- Dòng thứ hai chứa $N$ số nguyên $A_i$.

## Dữ liệu ra:
- In ra một số nguyên duy nhất là kết quả cần tìm.

## Ví dụ:
### Dữ liệu vào:
```
5
1 3 2 4 5
```

### Dữ liệu ra:
```
12
```

### Dữ liệu vào:
```
3
1 1 1
```

### Dữ liệu ra:
```
3
```

### Giải thích:
- Trong test ví dụ đầu tiên, các bộ $(l, r)$ thỏa mãn là: $(1, 1), (1, 3), (1, 4), (1, 5), (2, 2), (2, 3), (2, 4), (2, 5), (3, 3), (4, 4), (4, 5), (5, 5)$.

## Giới hạn:
- **Subtask** $\#1\ (20\%): 1 ≤ N ≤ 500, 1 ≤ A_i ≤ 10^9$:
- **Subtask** $\#2\ (40\%): 1 ≤ N ≤ 10^5, 1 ≤ A_i ≤ 50$;
- **Subtask** $\#3\ (40\%): 1 ≤ N ≤ 5000, 1 ≤ A_i ≤ 10^9$.