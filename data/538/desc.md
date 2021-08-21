Đồ thị vô hướng ~G(V, E)~ được gọi là liên thông (connected) nếu giữa mọi cặp đỉnh của ~G~ luôn tồn tại đường đi. Ví dụ hình dưới đây là một đồ thị liên thông.
<center><img src="/images/problems/538/COMPCONN1.png" width="250px" /></center>

Cho đồ thị vô hướng ~G = (V, E)~, ~U~ là một tập con của ~V~. Ta nói ~U~ là một thành phần liên thông của ~G~ nếu hạn chế của ~G~ trên tập ~U: G_U = (U, E_U)~ là một đồ thị liên thông. Ví dụ hình dưới đây là đồ thị có ~3~ thành phần liên thông.
<center><img src="/images/problems/538/COMPCONN2.jpg" width="350px" /></center>

**Bài toán:** Cho đơn đồ thị vô hướng ~G(V, E)~ có ~n~ đỉnh và ~m~ cạnh. Hãy tìm các thành phần liên thông của ~G~.

## Dữ liệu vào:
- Dòng đầu chứa hai số nguyên ~n~ và ~m~ là số đỉnh và số cạnh của đồ thị ~G~;
- ~m~ dòng tiếp theo, mỗi dòng chứa một cặp số ~u, v~ cho biết một cạnh liên thuộc giữa ~u~ và ~v~ trong ~G~.

## Dữ liệu ra:
- Dòng đầu ghi số nguyên dương ~C~ là số thành phần liên thông trong ~G~;
- ~C~ dòng tiếp theo, mỗi dòng ghi một thành phần liên thông theo khuôn dạng: Số ~v~ đầu là số đỉnh của thành phần liên thông, ~v~ số tiếp theo là danh sách các đỉnh **liệt kê theo thứ tự tăng dần**.

Hai số trên cùng một dòng được ghi cách nhau một dấu cách, **các thành phần liên thông liệt kê theo thứ tự các đỉnh nhỏ nhất tăng dần**.

## Ví dụ:
#### Dữ liệu vào:
```
7 6
1 2
1 3
2 3
5 6
6 7
5 7
```

#### Dữ liệu ra:
```
3
3 1 2 3
1 4
3 5 6 7
```

## Giới hạn:
- ~1 ≤ n ≤ 1000; 0 ≤ m ≤ \frac{n(n – 1)}{2}~.