**<center>Nguồn: Beginner Free Contest 3</center>**

Cho một dãy gồm $n$ số nguyên $a_1, a_2, ..., a_n$, hãy viết chương trình kiểm tra xem dãy có phải là dãy nhân tính hoàn toàn hay không.

Một dãy số $a_1, a_2, ..., a_n$ là một dãy nhân tính hoàn toàn nếu $a_{ij} = a_i × a_j$ với mọi số nguyên $i, j$ sao cho $1 ≤ i, j ≤ n$ và $1 ≤ i×j ≤ n$.

## Dữ liệu vào:
- Dòng đầu tiên gồm một số nguyên $n$ là độ dài của dãy số nguyên cần kiểm tra;
- Dòng thứ hai gồm $n$ số nguyên $a_1, a_2, ..., a_n$ $(0 ≤ a_i ≤ 10^9)$ mô tả dãy số cần kiểm tra.

## Dữ liệu ra:
- Nếu dãy số được cho là dãy nhân tính hoàn toàn, in ra `YES`, ngược lại, in ra `NO`.

## Ví dụ:
### Dữ liệu vào:
```
10
1 2 3 4 5 6 7 8 9 10
```

## Dữ liệu ra:
```
YES
```

### Dữ liệu vào:
```
10
1 1 2 2 4 2 6 4 6 4
```

## Dữ liệu ra:
```
NO
```

## Giới hạn:
- **Subtask** $\#1:$ $\frac{1}{3}$ số điểm của bài có $1 ≤ n ≤ 10^3$.
- **Subtask** $\#2:$ $\frac{2}{3}$ số điểm còn lại của bài có $1 ≤ n ≤ 10^5$.

**Chú ý:** Nếu bài làm của bạn chỉ ghi ra `YES` hoặc chỉ ghi ra `NO` sẽ được $0$ điểm.