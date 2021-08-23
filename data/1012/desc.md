**<center>NGUỒN: CONTEST PRACTICE VNOI20  (WEEK 2 - T11/2019)</center>**
<br>

Cho đồ thị gồm $N$ đỉnh đánh số từ $1$ đến $N$, đỉnh thứ $i$ có màu $c_i$. Người ta thêm lần lượt $m$ cạnh vô hướng vào đồ thị, cạnh thứ $j$ nối hai đỉnh $u_j,v_j$.

**Yêu cầu**: Sau mỗi bước thêm cạnh, đếm số cặp đỉnh $(i,j)$ cùng màu mà từ $i$ có thể đến $j$ qua các cạnh của đồ thị $(i < j)$.

## Dữ liệu vào:
- Dòng đầu chứa hai số nguyên dương $N,M\ (N≤10^5,M≤2.10^5)$
- Dòng thứ hai chứa $N$ số nguyên dương $c_1,c_2,…,c_N\  (c_i≤10^9)$
- $M$ dòng tiếp, dòng thứ $j$ chứa hai số nguyên dương $u_j,v_j$

## Dữ liệu ra:
- Gồm $M$ dòng, mỗi dòng là số cặp $(i,j)$ cùng màu mà từ $i$ có thể đến được $j$ qua các cạnh của đồ thị.

## Ví dụ: 
### Dữ liệu vào:
```
4 4 
1 2 1 2
1 2
3 4
1 3
2 3
```

### Dữ liệu ra:
```
0
0
2
2
```
## Giới hạn:
- $50\%$ số test có $N\le 100, M\le 200$
- $50\%$ số test còn lại không có ràng buộc gì thêm