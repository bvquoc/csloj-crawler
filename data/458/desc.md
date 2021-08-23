Cho số nguyên dương $n$ và dãy $n$ số nguyên dương $a_1, a_2, …, a_n$. Ta gọi một số $a_i$ là có bạn nếu $∃j ≠ i ,a_i = a_j$. Hãy đếm số lượng số có bạn trong dãy số trên.

## Dữ liệu vào:
- Dòng đầu ghi số nguyên dương $n$.
- Dòng thứ hai chứa $n$ số nguyên dương $a_1, a_2, …, a_n$. Hai số liên tiếp được ghi cách nhau một dấu cách.

## Dữ liệu ra:
- Một dòng duy nhất ghi số nguyên là số lượng số có bạn tìm được.

## Ví dụ:
### Dữ liệu vào:
```
6
1 2 2 3 1 2
```

### Dữ liệu ra:
```
5
```

### Giải thích:
- Có $5$ số có bạn bao gồm hai số $1$ và ba số $2$.

## Giới hạn:
- **Subtask** $\#1:$ $80\%$ số điểm có $n ≤ 10^3$ và $1 ≤ a_i ≤ 10^6$;
- **Subtask** $\#2:$ $20\%$ số điểm có $10^3 < n ≤ 10^6$ và $1 ≤ a_i ≤ 10^6$.