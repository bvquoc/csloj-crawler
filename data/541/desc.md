Cho đồ thị có hướng không chu trình (Directed Acyclic Graph - DAG) $G(V, E)$. Hãy đánh số lại các đỉnh của $G$ sao cho chỉ có cung nối từ đỉnh có chỉ số nhỏ đến đỉnh có chỉ số lớn hơn.
<center><img src="/images/problems/541/TOPOSORT.jpg" width="400px" /></center>

## Dữ liệu vào:
- Dòng đầu chứa hai số nguyên $n$ và $m$ là số đỉnh và số cung của đồ thị $G$;
- $m$ dòng tiếp theo, mỗi dòng chứa một cặp số $u, v$ cho biết một cung nối từ $u$ tới $v$ trong $G$.

## Dữ liệu ra:
- Ghi ra $n$ số nguyên dương, số thứ $i$ là chỉ số của đỉnh thứ $i$ sau khi đánh số lại. Hai số trên cùng một dòng được ghi cách nhau một dấu cách.

## Ví dụ:
#### Dữ liệu vào:
```
7 7
1 2
1 4
2 3
4 5
6 5
5 3
7 4
```

#### Dữ liệu ra:
```
1 2 7 5 6 3 4
```

## Giới hạn:
- $1 ≤ n ≤ 100; 0 ≤ m ≤ \frac{n(n – 1)}{2}$.