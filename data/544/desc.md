Xét đơn đồ thị vô hướng ~G = (V, E)~ có ~n~ đỉnh và ~m~ cạnh. Người ta định nghĩa một đỉnh gọi là **khớp** nếu như xoá đỉnh đó và tất cả các cạnh liên thuộc với nó sẽ làm tăng số thành phần liên thông của đồ thị. Tương tự như vậy, một cạnh được gọi là **cầu** nếu xoá cạnh đó sẽ làm tăng số thành phần liên thông của đồ thị.
<center><img src="/images/problems/544/CUTBRIDGES.jpg" width="500px" /></center>

**Bài toán:** Cho đơn đồ thị vô hướng ~G = (V, E)~, hãy liệt kê các khớp và cầu của đồ thị.

## Dữ liệu vào:
- Dòng đầu chứa hai số nguyên ~n~ và ~m~ là số đỉnh và số cạnh của ~G~;
- ~m~ dòng tiếp theo, mỗi dòng chứa một cặp số ~u, v~ cho biết một cạnh nối hai đỉnh ~u~ và ~v~ trong ~G~.

## Dữ liệu ra:
- Dòng đầu ghi hai số nguyên ~K~ và ~C~ là số khớp và số cầu của đồ thị;
- Dòng thứ hai (nếu ~K > 0~) ghi ~K~ số nguyên dương là chỉ số các đỉnh khớp;
- ~C~ dòng tiếp theo, mỗi dòng ghi một cặp số nguyên là hai đỉnh liên thuộc một cầu.

## Ví dụ:
#### Dữ liệu vào:
```
10 12
1 10
10 2
10 3
2 4
4 5
5 2
3 6
6 7
7 3
7 8
8 9
9 7
```

#### Dữ liệu ra:
```
4 3
2 3 7 10
1 10
2 10
3 10
```

## Giới hạn:
- ~1 ≤ n ≤ 1000; 0 ≤ m ≤ \frac{n(n – 1)}{2}~.