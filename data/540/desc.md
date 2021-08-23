Đồ thị có hướng $G(V, E)$ được gọi là liên thông (strongly connected) nếu giữa mọi cặp đỉnh của $G$ luôn tồn tại đường đi (định hướng).

Cho đồ thị có hướng $G = (V, E)$, $U$ là một tập con của $V$. Ta nói $U$ là một thành phần liên thông mạnh của $G$ nếu hạn chế của $G$ trên tập $U$: $G_U = (U, E_U)$ là một đồ thị liên thông mạnh.

**Bài toán:** Cho đồ thị có hướng $G(V, E)$ có $n$ đỉnh và $m$ cung. Hãy tìm các thành phần liên thông mạnh của $G$.

## Dữ liệu vào:
- Dòng đầu chứa hai số nguyên $n$ và $m$ là số đỉnh và số cung của đồ thị $G$;
- $m$ dòng tiếp theo, mỗi dòng chứa một cặp số $u, v$ cho biết một cung nối từ $u$ tới $v$ trong $G$.

## Dữ liệu ra:
- Dòng đầu ghi số nguyên dương $C$ là số thành phần liên thông mạnh trong $G$;
- $C$ dòng tiếp theo, mỗi dòng ghi một thành phần liên thông mạnh theo khuôn dạng: Số $v$ đầu là số đỉnh của thành phần liên thông mạnh, $v$ số tiếp theo là danh sách các đỉnh của thành phần liên thông đó.

Hai số trên cùng một dòng được ghi cách nhau một dấu cách.

## Ví dụ:
<center><img src="/images/problems/540/STROCONN.svg" width="400px" /></center>

### Dữ liệu vào:
```
6 8
1 2
2 3
2 5
3 1
3 4
4 6
5 4
6 5
```

### Dữ liệu ra:
```
2
3 1 2 3
3 4 5 6
```

## Giới hạn:
- $1 ≤ n ≤ 1000; 0 ≤ m ≤ \frac{n(n – 1)}{2}$.