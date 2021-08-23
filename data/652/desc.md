**<center>Nguồn: Beginner Free Contest 11</center>**

Có một dãy số ban đầu rỗng. Người ta lần lượt thực hiện $Q$ thao tác. Ở thao tác thứ $i$, người ta sẽ chèn thêm $b_i$ số có giá trị $a_i$ vào cuối dãy số.

Sau khi thực hiện xong cả $Q$ thao tác, hãy cho biết số nhỏ thứ K trong dãy có giá trị bao nhiêu.

## Dữ liệu vào:
- Dòng đầu tiên gồm số nguyên $Q\ (1 ≤ Q ≤ 10^5)$ - số thao tác được thực hiện;
- $Q$ dòng tiếp theo, dòng thứ $i$ gồm hai số nguyên $a_i$ và $b_i$ $(1 ≤ a_i, b_i ≤ 10^9)$ - mô tả thao tác
thứ $i$;
- Dòng tiếp theo gồm số nguyên $K\ (1 ≤ K ≤ b_1 + b_2 + . . . + b_Q)$.

## Dữ liệu ra:
- In ra giá trị số nhỏ thứ $K$ sau khi thực hiện $Q$ thao tác.

## Ví dụ:
### Dữ liệu vào:
```
3
5 2
2 3
3 1
4
```

### Dữ liệu ra:
```
3
```

### Dữ liệu vào:
```
4
7 1
1 1
4 1
4 1
3
```

### Dữ liệu ra:
```
4
```

### Dữ liệu vào:
```
1
100 1
1
```

### Dữ liệu ra:
```
100
```

### Giải thích
- Ở ví dụ thứ nhất, dãy số thu được là $[5, 5, 2, 2, 2, 3]$. Giá trị nhỏ thứ 4 trong dãy này là $3$;
- Ở ví dụ thứ hai, dãy số thu được là $[7, 1, 4, 4]$. Giá trị nhỏ thứ $3$ trong dãy này là $4$;
- Ở ví dụ thứ ba, dãy số thu được là $[100]$. Giá trị nhỏ nhất trong dãy này cũng là $100$.

## Giới hạn:
- **Subtask** $\#1\ (50\%\text{ số điểm}): b_i ≤ 10 với 1 ≤ i ≤ Q$;
- **Subtask** $\#2\ (50\%\text{ số điểm}):$ Không có giới hạn gì thêm