Cho đồ thị vô hướng có trọng số $G = (V, E, w)$ có $n$ đỉnh, $m$ cạnh, cạnh $(u, v)$ có trọng số $w(u, v)$ và hai đỉnh $s, t$. Hãy tìm đường đi ngắn nhất từ $s$ đến $t$.

## Dữ liệu vào:
- Dòng đầu chứa hai số nguyên $n$ và $m$ là số đỉnh và số cạnh của $G$;
- $m$ dòng tiếp theo, mỗi dòng chứa ba số số $u, v, c$ cho biết một cạnh nối hai đỉnh $u$ và $v$ trong $G$ và trọng số $c = w(u, v)$ tương ứng.

## Dữ liệu ra:
- Dòng đâu ghi số nguyên là độ dài đường đi ngắn nhất;
- Dòng thứ hai ghi ra một đường đi từ $s$ tới $t$ có độ dài ngắn nhất.

## Ví dụ:
#### Dữ liệu vào:
```
3 3 1 3
1 2 3
2 3 1
1 3 5
```

#### Dữ liệu ra:
```
4
1 2 3
```

## Giới hạn:
- $1 ≤ n ≤ 100; n - 1 ≤ m ≤ \frac{n(n – 1)}{2}; 0 ≤ c ≤ 10000$.