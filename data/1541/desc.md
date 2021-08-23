**<center>NGUỒN : VNU-OI 2020</center>**

Cho một đồ thị vô hướng gồm $n$ đỉnh và $m$ cạnh. Các đỉnh được đánh số từ $1$ tới $n$. Mỗi đỉnh và mỗi cạnh của đồ thị đều có trọng số. Trọng số của đỉnh thứ $i$ là $w_i$. Cạnh thứ $j$ của đồ thị nối hai đỉnh $f_j$ và $t_j$ có trọng số là $c_j$. Đồ thị được đảm bảo là liên thông, nói cách khác, luôn tồn tại đường đi giữa hai đỉnh bất kỳ của đồ thị.

Xét một đường đi bất kỳ trên đồ thị, giả sử đường đi đi qua các đỉnh $v_1, v_2, …, v_k$ và đi qua các cạnh $e_1, e_2, …, e_l$. Khi đó, ta định nghĩa trọng số của đường đi này là $max(w_{v_1}, w_{v_2}, …, w_{v_k}) × max(c_{e_1}, c_{e_2}, …, c_{e_l}). Nói cách khác, trọng số của một đường đi là tích của trọng số lớn nhất của một đỉnh trên đường đi (bao gồm đỉnh xuất phát và đỉnh kết thúc) và trọng số lớn nhất của một cạnh trên đường đi.

Với hai đỉnh $u$ và $v$ trên đồ thị, gọi $d(u, v)$ là trọng số nhỏ nhất của một đường đi từ $u$ đến $v$. Nếu $u = v$, ta có $d(u, v) = 0$. Với mỗi đỉnh $u$ của đồ thị, hãy tính $S(u) = d(u, 1) + d(u, 2) + … + d(u, n)$.

## Dữ liệu vào:
- Dòng đầu tiên chứa số nguyên $t\ (1 ≤ t ≤ 5)$ là số thứ tự của **subtask** chứa test này;
- Dòng thứ hai chứa hai số nguyên $n$ và $m\ (1 ≤ n ≤ 500; n - 1 ≤ m ≤ \frac{n × (n - 1)}{2})$ lần lượt là số đỉnh và số cạnh của đồ thị.
- Dòng thứ ba chứa $n$ số nguyên $w_1, w_2, …, w_n\ (1 ≤ w_i ≤ 10^7)$ lần lượt là trọng số của các đỉnh.
- $m$ dòng cuối cùng, dòng thứ $j$ chứa ba số nguyên $f_j, t_j$ và $c_j\ (1 ≤ f_j, t_j ≤ n, 1 ≤ c_j ≤ 10^7)$ cho biết có một cạnh của đồ thị nối hai đỉnh $f_j, t_j$ và có trọng số là $c_j$. Dữ liệu vào đảm bảo đồ thị này liên thông.

## Dữ liệu ra:
- Một dòng duy nhất với $n$ số nguyên $S(1), S(2), …, S(n)$.

## Ví dụ:
### Dữ liệu vào:
```
4
3 3
5 6 3
1 2 22
2 3 7
3 1 97
```

### Dữ liệu ra:
```
264 174 174
```

### Giải thích:
Trong ví dụ trên, ta có:
- $d(1, 2) = d(2, 1) = 22 * 6 = 132$;
- $d(2, 3) = d(3, 2) = 7 * 6 = 42$;
- $d(3, 1) = d(1, 3) = 22 * 6 = 132.

## Giới hạn:
- Subtask $\#1: 14\%$ số điểm có tất cả các đỉnh và tất cả các cạnh đều có trọng số bằng $1$;
- Subtask $\#2: 20\%$ số điểm có tất cả các đỉnh có trọng số bằng $1$;
- Subtask $\#3: 20\%$ số điểm có tất cả các cạnh có trọng số bằng $1$;
- Subtask $\#4: 20\%$ số điểm có $n ≤ 50$;
- Subtask $\#5: 26\%$ số điểm không có ràng buộc gì thêm.