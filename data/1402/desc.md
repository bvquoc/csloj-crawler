Bạn được cho một dãy $A$ gồm $N$ phần tử có giá trị trong đoạn $[1, 10^9]$. Bạn cần phải trả lời $M$ câu hỏi có dạng: Có bao nhiêu cặp nghịch thế của dãy $A$, nếu ta đổi chỗ hai phần tử $i$ và $j$ của dãy. Cặp nghịch thế là cặp $u, v$ sao cho $u < v$ và $A[u] > A[v]$. Lưu ý rằng các câu hỏi là độc lập, có nghĩa là đây chỉ là các giả thiết và không làm thay đổi dãy số đã cho.

## Dữ liệu vào:
- Dòng đầu chứa hai số nguyên dương $N, M\ (2≤N,M≤2×10^5)$;
- Dòng thứ hai là $N$ số của dãy số $A$;
- $M$ dòng sau, mỗi dòng là một truy vấn, gồm hai số nguyên dương $i$ và $j$.

## Dữ liệu ra:
- Gồm $M$ câu trả lời tương ứng với $M$ truy vấn đã cho.

## Ví dụ:
### Dữ liệu vào:
```
6 3
1 4 3 3 2 5
1 1
1 3
2 5
```

### Dữ liệu ra:
```
5
6
0
```

## Giới hạn:
- $60\%$ có $N,M≤2000$.