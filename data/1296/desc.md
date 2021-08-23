<!--**<center>CSP Open Contest 1</center>**-->

Cho một đồ thị có hướng có $N$ đỉnh và $M$ cạnh. Các đỉnh được đánh số từ $1$ đến $N$. Đỉnh thứ $i$ của đồ thị có hai giá trị $a_i$ và $b_i$. Ta có quy trình tính $f(u)$ như sau:
- Bước $1:$ Đánh dấu đỉnh $u$;
- Bước $2:$ Tìm một đỉnh $v$ chưa được đánh dấu sao cho tổng các giá trị $a_x$ (với mọi $x$ đã được đánh dấu và có cạnh nối từ $x$ đến $v$) đạt ít nhất $b_v$. Sau đó đánh dấu $v$ và tiếp tục thực hiện bước $2$ cho đến khi không tìm được $v$ thỏa mãn;
- $f(u)$ là số đỉnh được đánh dấu sau khi kết thúc.

Hãy tìm giá trị nhỏ nhất của $f(u)$ và đếm số lượng đỉnh $u$ mà $f(u)$ đạt giá trị nhỏ nhất.

## Dữ liệu vào:
- Dòng đầu tiên bao gồm hai số nguyên dương $N$ và $M$ là số đỉnh và số cạnh của đồ thị;
- Dòng thứ hai bao gồm $N$ số $a_1, a_2, a_3, \dots, a_N$;
- Dòng thứ a bao gồm $N$ số $b_1, b_2, b_3, \dots, b_N$;
- M dòng tiếp theo mỗi dòng gồm hai số $u, v\ (1 ≤ u, v ≤ N)$ miêu tả một cạnh của đồ thị nối từ $u$ đến $v$.

## Dữ liệu ra:
- Gồm hai số nguyên viết trên cùng một dòng ngăn cách bởi một dấu cách, số thứ nhất là giá trị nhỏ nhất của $f(u)$ và số thứ hai là số lượng đỉnh $u$ mà $f(u)$ đạt giá trị nhỏ nhất.

## Ví dụ
### Dữ liệu vào:
```
6 8
1 1 1 1 1 1
1 1 1 1 1 2
1 2
2 3
3 4
4 5
3 6
5 6
6 2
5 2
```

### Dữ liệu ra:
```
5 5
```

### Giải thích:
- Trừ đỉnh $1$ có $f(1) = 6$ ra thì còn lại đều ra $5$

## Giới hạn:
- Yêu cầu in ra cả hai số. Nếu bạn chỉ in ra được đúng giá trị đầu tiên, bạn nhận được $50\%$ số điểm của test đó.
- Trong tất cả các test $a_i, b_i ≤ 10^9$;
- Subtask $\#1: 30\%$ số điểm có $N ≤ 2000$ và $M ≤ 5000$;
- Subtask $\#2: 70\%$ số điểm còn lại có $N ≤ 2 \times 10^5$ và $M ≤ 5 \times 10^5$.