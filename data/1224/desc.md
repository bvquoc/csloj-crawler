**<center>Nguồn: Ôn HN tháng 11/2016, Thầy Lê Minh Hoàng, Ngày 2</center>**

Giả thiết $𝐴$ và $𝐵$ là hai ma trận cùng kích thước. Người ta so sánh các phần tử tương ứng của $𝐴$ và $𝐵$ từ trái sang phải theo hàng và theo từng hàng từ trên xuống dưới. Với cặp phần tử đầu tiên khác nhau, nếu phần tử của $𝐴$ lớn hơn phần tử của $𝐵$, ta nói $𝐴$ lớn hơn $𝐵$. Ví dụ:

$$\begin{bmatrix}
1 &4  &7 &10 \\ 
2 &5  &\left [12  \right ]  &11 \\ 
9 &6  &3  &8 
\end{bmatrix}>\begin{bmatrix}
1 &4  &7 &10 \\ 
2 &5  &\left [8 \right ]  &11 \\ 
3 &6  &9  &12 
\end{bmatrix}$$

Cho ma trận $𝐴$ kích thước $𝑚×𝑛$ ($𝑚$ hàng, $𝑛$ cột), các phần tử là hoàn toàn phân biệt, cụ thể là các số nguyên từ $1$ tới $m×n$. Cho phép thực hiện các phép biến đổi thuộc một trong hai dạng:
- Đảo hai hàng của ma trận cho nhau, giữ nguyên thứ tự các phần tử trên cùng hàng;
- Đảo hai cột của ma trận cho nhau, giữ nguyên thứ tự các phần tử trên cùng cột;

**Yêu cầu:** Tìm cách biến đổi từ ma trận $𝐴$ để thu được ma trận $𝐵$ lớn nhất có thể (theo quan hệ “lớn hơn” định nghĩa ở trên).

## Dữ liệu vào:
- Dòng đầu chứa hai số nguyên dương $𝑚, 𝑛 ≤ 500$;
- $𝑚$ dòng tiếp theo, dòng thứ $𝑖$ chứa $𝑛$ số nguyên, số thứ $𝑗$ là số nằm ở hàng $𝑖$, cột $𝑗$ của ma trận $A$.

## Dữ liệu ra:
- Ghi ra $𝑚$ dòng, dòng thứ $𝑖$ ghi $𝑛$ số nguyên, số thứ $𝑗$ là số nằm ở hàng $𝑖$, cột $𝑗$ của ma trận $𝐵$ thu được.
Các số trên một dòng được ghi cách nhau một dấu cách.

## Ví dụ:
#### Dữ liệu vào:
```
3 4
1 4 7 10
2 5 12 11
9 6 3 8
```

#### Dữ liệu ra:
```
12 11 5 2
7 10 4 1
3 8 6 9
```

#### Dữ liệu vào:
```
3 2
4 1
2 6
5 3
```

#### Dữ liệu ra:
```
6 2
3 5
1 4
```

#### Giải thích
**Ví dụ** $1:$ Thực hiện lần lượt các phép biến đổi theo đúng thứ tự:
- Đảo hàng $1$ và hàng $2$;
- Đảo cột $1$ và cột $3$;
- Đảo cột $3$ và cột $4$;
- Đảo cột $2$ và cột $3$.