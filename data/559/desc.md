Tìm kiếm ưu tiên chiều rộng hay tìm kiếm theo chiều rộng (tiếng Anh: Breadth-first search - BFS) là một thuật toán duyệt hoặc tìm kiếm trên một cây hoặc một đồ thị.

Thuật toán khởi đầu tại gốc (hoặc chọn một đỉnh nào đó coi như gốc) và phát triển theo nguyên tắc: gần trước xa sau.

Ví dụ:
<center><img src="/images/problems/559/BFSDEMO.JPEG" width="300px" /></center>

Bài toán đặt ra là:

Cho đơn đồ thị vô hướng liên thông ~G = (V, E)~ gồm ~n~ đỉnh và ~m~ cạnh, các đỉnh được đánh số từ ~1~ tới ~n~ và các cạnh được đánh số từ ~1~ tới ~m~.

Bằng thuật toán tìm kiếm theo chiều rộng, hãy đưa ra danh sách các đỉnh theo thứ tự tìm kiếm (thăm). Biết rằng: Đỉnh nào có chỉ số bé hơn sẽ được ưu tiên thăm trước.

## Dữ liệu vào:
- Dòng đầu ghi hai số nguyên ~n, m~;
- ~m~ dòng tiếp theo, mỗi dòng gồm hai số nguyên ~i, j~ mô tả một cạnh (nối giữa đỉnh ~i~ và đỉnh ~j~).

## Dữ liệu ra:
- Gồm ~n~ dòng, mỗi dòng gồm một số ghi số hiệu đỉnh theo thứ tự duyệt **BFS**.

## Ví dụ
#### Dữ liệu vào:
```
7 7
1 2
1 3
1 5
2 4
2 6
3 7
5 6
```

#### Dữ liệu ra:
```
1
2
3
5
4
6
7
```

## Giới hạn:
- ~1 ≤ n ≤ 100; 1 ≤ m ≤ \frac{n(n-1)}{2}~.