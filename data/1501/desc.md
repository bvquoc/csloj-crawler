Giáo sư `Y` đã mua được rất nhiều mảnh vườn, các mảnh vườn của giáo sư mua được là những mảnh đất thẳng hàng nhau chạy dọc trên một trục đường thẳng. Giáo sư chọn ra $2^k$ mảnh vườn đầu tiên để trồng cây, các mảnh vườn này được đánh số theo thứ tự từ $0$ đến $2^k - 1$. Hiện tại đây đều là những mảnh đất trống. Kế hoạch trồng cây trên các mảnh vườn của giáo sư là một dãy $n$ cặp số $(c_i, m_i)\ i=1\ldots n,\sum_{i=1}^{n}c_i = 2^k$. Theo kế hoạch này thì giáo sư sẽ trồng $m_1$ cây trên mỗi mảnh vườn trong $c_1$ mảng vườn đâu tiên, $m_2$ cây trên mỗi mảnh vườn trong $c_2$ mảnh vườn tiếp theo, $\ldots$

**Ví dụ:** Với $k=3,n=3,(c_1,m_1)=(1,1), (c_2,m_2)=(2,2),(c_3,m_3)=(5,1)$ thì số lượng cây trên các mảnh vườn giáo sư sẽ trồng là $1, 2, 2, 1, 1, 1, 1, 1$.

Do kế hoạch trồng cây là rất lớn nên giáo sư đã đầu tư mua một cái máy có thể trồng cây hàng loạt một cách tự động. Tuy là tự động nhưng cũng có những quy tắc nhất định. Cụ thể là mỗi lần vận hành, máy chỉ có thể trồng trên **một đoạn liên tiếp các mảnh vườn hợp lệ**, mỗi mảnh vườn trồng $x$ cây ($x \le m$), những cây đã có trước đó trên các mảnh vườn này sẽ bị loại bỏ (những lần vận hành khác nhau thì con số $x$ này có thể khác nhau).

**Một đoạn liên tiếp các mảnh vườn hợp lệ** là một đoạn các mảnh vườn có chỉ số từ $L$ đến $R$ mà $R-L+1$ là lũy thừa của $2$ (giả sử là $2^i$) và $L$ phải là bội của $2^i$.

Chẳng hạn với $k=3$ thì ta có các đoạn hợp lệ là $[0, 0], [0, 1], [0,3],[0,7],[1,1],[2,2],[2,3],[3,3],[4,4],[4,5],[4,7],[5,5],[6,6],[6,7],[7,7]$.

Vườn đã mua, máy đã sắm, kế hoạch trồng cây đã lập, nhưng chi phí mỗi lần vận hành máy khá tốn kém nên giáo sư nhờ các bạn lập kế hoạch vận hành máy để trồng số lượng cây theo kế hoạch của giáo sư sao cho số lần phải vận hành máy là ít nhất. Giáo sư hứa sẽ mời các bạn dự tiệc nếu các bạn giúp được giáo sư.

## Dữ liệu vào:
- Dòng đầu chứa ba số nguyên $k,n,m\ (0 ≤ k ≤ 30,$ $1 ≤ n ≤ 10^5,$ $1 ≤ m ≤ 10^9)$.
- $n$ dòng tiếp theo, dòng thứ $i$ chứa hai số nguyên $c_i, m_i$ $(1 ≤ c_i ≤ 2^k, 1 ≤ m_i ≤ m, \sum_{i=1}^{n}c_i = 2^k)$.

## Dữ liệu ra:
- Ghi ra một số nguyên duy nhất là số lần vận hành máy ít nhất.

## Giới hạn:
- **Subtask** $\#1$: $15\%$ số điểm có $k\le 3, n\le 8, m \le 8$
- **Subtask** $\#2$: $15\%$ số điểm có $k\le 19, m \le 10$
- **Subtask** $\#3$: $15\%$ số điểm có $m \le 10$
- **Subtask** $\#4$: $10\%$ số điểm có $m \le 50$
- **Subtask** $\#5$: $15\%$ số điểm có $k \le 19$
- **Subtask** $\#6$: $30\%$ số điểm không có ràng buộc gì thêm.

## Ví dụ:
### Dữ liệu vào:
```
3 3 2
1 1
2 2
5 1
```

### Dữ liệu ra:
```
3
```

### Giải thích:
- Kế hoạch trồng cây của giáo sư là: $[1, 2, 2, 1, 1, 1, 1, 1]$  
- Vận hành lần $\#1$: trồng $1$ cây trên đoạn $[0, 7]$, số cây tương ứng là $[1, 1, 1, 1, 1, 1, 1, 1]$
- Vận hành lần $\#2$: trồng $2$ cây trên đoạn $[1, 1]$, số cây tương ứng là $[1, 2, 1, 1, 1, 1, 1, 1]$
- Vận hành lần $\#3$: trồng $2$ cây trên đoạn $[2, 2]$, số cây tương ứng là $[1, 2, 2, 1, 1, 1, 1, 1]$