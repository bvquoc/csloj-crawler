**<center>NGUỒN: CONTEST LÀO CAI Lần 2 2017</center>**

Cho một bảng vuông kích thước $n×n$, các dòng của bảng được đánh số từ $0$ đến $n-1$, từ trên xuống dưới và các cột của bảng được đánh số từ $0$ đến $n-1$, từ trái qua phải. Ô nằm trên giao của dòng $i$ và cột $j$ được gọi là ô $(i,j)$ và trên ô đó chứa giá trị là $a_{ij}∈\{0;1\}$ $(0≤i,j≤n-1)$.

Bạn cần viết chương trình thực hiện các công việc sau:
- Đếm số lượng hình chữ nhật trong bảng thỏa mãn:
	- Hình chữ nhật chỉ bao gồm các phần tử số $0$;
	- Các cạnh song song với các cạnh của bảng vuông ban đầu.
- Nhận vào $Q$ truy vấn dạng $(u,v)$, sau mỗi truy vấn sẽ đổi giá trị $a_{uv}$ từ $0$ thành $1$ hoặc từ $1$ thành $0$. 
- Sau mỗi truy vấn, bạn hãy đếm lại số lượng hình chữ nhật trong bảng thỏa mãn như trên.

## Dữ liệu vào:
- Dòng đầu tiên chứa hai số nguyên $n,Q$ $(1≤n≤1000, 0≤Q≤10 000)$;
- $n$ dòng tiếp theo, dòng thứ $i$ chứa $1$ xâu ký tự độ dài $n$ chỉ gồm hai ký tự $‘0’$ hoặc $‘1’$ mô tả dòng thứ $i$ của bảng vuông $n×n$;
- $Q$ dòng tiếp theo, dòng thứ $i$ ghi hai số nguyên $u,v$ $(0≤u,v≤n-1)$ mô tả truy vấn $i$.

## Dữ liệu ra:
- Dòng đầu ghi số lượng hình chữ nhật thỏa mãn điều kiện đầu bài trên bảng ban đầu;
- $Q$ dòng tiếp theo, dòng thứ $i$ ghi số lượng hình chữ nhật thỏa mãn điều kiện đầu bài sau truy vấn $i$.

## Ví dụ:
#### Dữ liệu vào:
```
4 3
0001
0100
1000
0010
1 2
1 1
2 0
```

#### Dữ liệu ra:
```
29
23
31
45
```

#### Giải thích:
- Ban đầu có $12$ hình $1×1$, $6$ hình $1×2$, $2$ hình $1×3$, $6$ hình $2×1$, $1$ hình $2×2$, và $2$ hình $3×1$.  Tổng $12+6+2+6+1+2=29$ hình.
- Truy vấn $1$:
```
0001
0110
1000
0010
```

Có $11$ hình $1×1$, $5$ hình $1×2$, $2$ hình $1×3$, $4$ hình $2×1$, và $1$ hình $3×1$. Tổng $11+5+2+4+1=23$ hình.

- Truy vấn $2$:
```
0001
0010
1000
0010
```

Có $12$ hình $1×1$, $6$ hình $1×2$, $2$ hình $1×3$, $6$ hình $2×1$, $1$ hình $2×2$, $3$ hình $3×1$, và $1$ hình $4×1$. Tổng $12+6+2+6+1+3+1 = 31$ hình.

- Truy vấn 3
```
0001
0010
0000
0010
```

Có $13$ hình $1×1$, $7$ hình $1×2$, $3$ hình $1×3$, $1$ hình $1×4$, $8$ hình $2×1$, $3$ hình $2×2$, $5$ hình $3×1$, $2$ hình $3×2$, $2$ hình $4×1$, $1$ hình $4×2$. Tổng $13+7+3+1+8+3+5+2+2+1=45$ hình.

## Ràng buộc:
- *Subtask #$1$* ($20\%$ số điểm): $n≤50,Q≤10$;
- *Subtask #$2$* ($15\%$ số điểm): $n≤400,Q=0$;
- *Subtask #$3$* ($25\%$ số điểm): $n≤400,Q≤1000$;
- *Subtask #$4$* ($20\%$ số điểm): $n≤1 000,Q=0$;
- *Subtask #$5$* ($20\%$ số điểm): $n≤1 000,Q≤10000$.