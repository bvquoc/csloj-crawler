Tìm kiếm ưu tiên chiều sâu hay tìm kiếm theo chiều sâu (tiếng Anh: Depth-first search - DFS) là một thuật toán duyệt hoặc tìm kiếm trên một cây hoặc một đồ thị.

Thuật toán khởi đầu tại gốc (hoặc chọn một đỉnh nào đó coi như gốc) và phát triển xa nhất có thể theo mỗi nhánh.

Ví dụ:
<center><img src="/images/problems/560/DFSDEMO.JPEG" width="300px" /></center>

Tìm kiếm ưu tiên chiều sâu bắt đầu thăm đỉnh $A$, đi theo cạnh trái, tiếp tục tìm kiếm xong ở cây con trái mới chuyển sang tìm kiếm ở cây con phải. Thứ tự thăm viếng các đỉnh là: $A, B, D, F, E, C, G$.

Quá trình viếng thăm các đỉnh diễn ra như sau: Sau khi thăm đỉnh $A$, vì $B$ chưa được thăm nên theo cạnh $AB$ ta thăm $B$, tiếp tục theo cạnh $BD$ tới viếng thăm $D$. Từ $D$ không thê tiếp tục đi xa hơn, ta quay lại $B$. Từ $B$, theo $BF$ đến thăm $F$, từ $F$ đến thăm $E$. Từ $E$ vì A đã viếng thăm nên ta quay lại $F$, rồi quay lại $B$. Tại $B$ vì tất cả các khả năng từ $B$ đã xem xét nên ta quay lại $A$. Từ $A$, quá trình tiếp tục với các đỉnh $C$ và $G$.
Bài toán đặt ra là:

Cho đơn đồ thị vô hướng $G = (V, E)$ gồm $n$ đỉnh và $m$ cạnh, các đỉnh được đánh số từ $1$ tới $n$ và các cạnh được đánh số từ $1$ tới $m$.

Bằng thuật toán tìm kiếm theo chiều sâu, hãy đưa ra danh sách các đỉnh theo thứ tự tìm kiếm. Biết rằng: Đỉnh nào có chỉ số bé hơn sẽ được ưu tiên thăm trước.

## Dữ liệu vào:
- Dòng đầu ghi hai số nguyên $n, m$;
- $m$ dòng tiếp theo, mỗi dòng gồm hai số nguyên $u, v$ mô tả một cạnh (nối giữa đỉnh $u$ và đỉnh $v$).

## Dữ liệu ra:
- Gồm $n$ dòng, mỗi dòng gồm một số ghi số hiệu đỉnh theo thứ tự duyệt **DFS**.

## Ví dụ:
### Dữ liệu vào:
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

### Dữ liệu ra:
```
1
2
4
6
5
3
7
```

## Giới hạn:
- $1 ≤ n ≤ 100; 1 ≤ m ≤ \frac{n(n-1)}{2}$.