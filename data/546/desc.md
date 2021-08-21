Một đường đi Hamilton là một đường đi trong đồ thị vô hướng đi qua tất cả các đỉnh của đồ thị, mỗi đỉnh đúng một lần. Một Chu trình Hamilton là một đường đi Hamilton sau khi đi qua tất cả các đỉnh của đồ thị thì trở về đỉnh xuất phát.

**Bài toán:** Cho đơn đồ thị vô hướng liên thông ~G = (V, E)~ gồm ~n~ đỉnh và ~m~ cạnh, các đỉnh được đánh số từ ~1~ tới ~n~ và các cạnh được đánh số từ ~1~ tới ~m~. Hãy tìm một chu trình Hamilton trên ~G~.

## Dữ liệu vào:
- Dòng đầu chứa hai số nguyên ~n~ và ~m~ là số đỉnh và số cạnh của ~G~;
- ~m~ dòng tiếp theo, mỗi dòng chứa một cặp số ~u, v~ cho biết một cạnh nối hai đỉnh ~u~ và ~v~ trong ~G~.

## Dữ liệu ra:
- Gồm một dòng, nếu không tồn tại chu trình Hamilton thì ghi ra ~-1~, ngược lại ghi ra dãy các đỉnh trên chu trình Hamilton tìm được (theo thứ tự đi qua, đỉnh cuối trùng đỉnh đầu), hai số liên tiếp ghi cách nhau một dấu cách.

## Ví dụ:
<center><img src="/images/problems/546/CIRHAMILT.jpg" width="300px" /></center>

#### Dữ liệu vào:
```
5 6
1 2
1 3
2 4
3 5
4 1
5 2
```

#### Dữ liệu ra:
```
1 3 5 2 4 1
```

## Giới hạn:
- ~1 ≤ n ≤ 30; 0 ≤ m ≤ \frac{n(n – 1)}{2}~.