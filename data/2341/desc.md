Trong cuộc thi tuyển sinh, có $N$ bạn tham gia. Ban tổ chức đã quyết định cho các bạn chơi một trò chơi như sau:
- $N$ bạn được sắp xếp thành một hàng dọc, đánh số theo thứ tự từ $1$ đến $N$ (người đầu hàng được đánh số là $1$, người cuối hàng được đánh số là $N$).
- Mỗi bạn được Ban tổ chức phát cho một lá phiếu tương ứng với số hiệu của bạn đó, bạn đứng thứ $i$ trong hàng được ban tổ chức phát lá phiếu có số $A_i$.
- Ban tổ chức chọn một bạn $i$ bất kỳ có $A_i = 1$ để bắt đầu trò chơi, lần lượt các bạn đứng phía sau sẽ nói to số hiệu của mình. Ban tổ chức có thể kết thúc trò chơi bất kỳ lúc nào (kể cả khi bạn $i$ có $A_i = 1$ vừa nói số hiệu của mình xong).
- Gọi $i_1, i_2,\dots, i_k$ là những người đã nói số hiệu của mình từ lúc bắt đầu cho đến khi kết thúc trò chơi. Dãy này cần thỏa mãn các điều kiện sau:
    - $1 ≤ k ≤ N$.
    - $i_1 < i_2 < \dots < i_k$.
    - $A_{i_1} = 1$.
    - $A_{i_j} = A_{i_{j−1}} + 1, ∀2 ≤ j ≤ k$.

Để đánh giá mức độ đa dạng của trò chơi, Ban tổ chức cần phải biết có bao nhiêu dãy $i_1, i_2,\dots,i_k$ khác nhau thỏa mãn các điều kiện trên được tạo ra. Hai dãy $i_1, i_2,\dots, i_{k_1}$ và $j_1, j_2,\dots, j_{k_2}$ được gọi là khác nhau khi $k_1 \ne k_2$ hoặc $∃t : i_t \ne j_t$.

**Yêu cầu:** Bạn hãy giúp Ban tổ chức xác định xem có bao nhiêu dãy khác nhau thoả mãn các điều kiện nêu trên.

## Dữ liệu vào:
- Dòng đầu tiên chứa số nguyên dương $N$;
- Dòng thứ hai chứa $N$ số nguyên dương $A_1, A_2,\dots, A_N$.

## Dữ liệu ra:
- Gọi $S$ là số lượng dãy khác nhau thỏa mãn yêu cầu đề bài, cần in ra $S$ khi lấy phần dư với $10^9 + 7$.

## Ví dụ:
### Dữ liệu vào:
```
3
1 2 3
```

### Dữ liệu ra:
```
3
```

### Dữ liệu vào:
```
6
1 2 3 1 2 3
```

### Dữ liệu ra:
```
9
```

### Dữ liệu vào:
```
5
2 3 4 5 6
```

### Dữ liệu ra:
```
0
```

### Giải thích:

- Trong ví dụ thứ nhất, các dãy thỏa mãn là: $(1), (1, 2), (1, 2, 3)$;
- Trong ví dụ thứ hai, các dãy thỏa mãn là: $(1), (1, 2), (1, 2, 3), (1, 2, 6), (1, 5), (1, 5, 6), (4),(4, 5), (4, 5, 6)$;
- Trong ví dụ thứ ba, không có dãy nào bắt đầu từ $1$.

## Giới hạn:
- $1 ≤ N ≤ 10^6; 1 ≤ A_i ≤ 10^9$.