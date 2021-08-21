Cho đa đồ thị vô hướng ~G = (V, E)~. Một chu trình Euler là một chu trình đi qua tất cả các cạnh của đồ thị, mỗi cạnh đúng một lần; một đường đi Euler là một đường đi qua tất cả các cạnh của đồ thị, mỗi cạnh đúng một lần.

**Bài toán:** Cho đa đồ thị vô hướng liên thông ~G = (V, E)~, hãy tìm chu trình Euler (nếu có) hoặc đường đi Euler nếu có.
## Dữ liệu vào:
- Dòng đầu chứa hai số nguyên ~n~ và ~m~ là số đỉnh và số cạnh của ~G~;
- ~m~ dòng tiếp theo, mỗi dòng chứa một cặp số ~u, v~ cho biết một cạnh nối hai đỉnh ~u~ và ~v~ trong ~G~.

## Dữ liệu ra:
- Dòng đầu ghi một trong ~3~ ký tự: `C` nếu có chu trình Euler, `P` nếu có đường đi Euler và `N` nếu không có chu trình Euler hoặc đường đi Euler;
- Dòng thứ hai: Nếu dòng một là `C` hoặc `P` thì dòng hai ghi ra chu trình hoặc đường đi tìm được (Chu trình hay đừng đi được ghi theo thứ tự các đỉnh đi qua, hai đỉnh liên tiếp cách nhau một dấu cách).

## Ví dụ:
<center><img src="/images/problems/548/EULERCIR.svg" width="300px" /></center>

#### Dữ liệu vào:
```
6 8
1 2
1 4
1 5
1 6
2 3
3 4
3 5
3 6
```

#### Dữ liệu ra:
```
C
1 2 3 4 1 5 3 6 1
```

## Giới hạn:
- ~1 ≤ n ≤ 10^5; 0 ≤ m ≤ 10^6~