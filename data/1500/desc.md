Giáo sư Y dự định tổ chức các kỳ thi CSLPreVNOI trước các kỳ thi VNOI hàng năm cho các học trò nhằm chuẩn bị tốt nhất cho kỳ thi VNOI. Đặc biệt, sau mỗi kỳ CSLPreVNOI, giáo sư sẽ tổ chức các bữa tiệc mừng cho các học trò. Món ưa thích nhất trong các bữa tiệc này là Cocktail, vì vậy giáo sư cần chuẩn bị nhiều hoa quả cho các bữa tiệc.

Giáo sư có một kế hoạch dài hơi, trước hết là chọn một mảnh vườn để trồng hoa quả. Giáo sư đã chọn được một mảnh vườn hình chữ nhật mà trên đó có thể chia thành $M$ hàng được đánh số từ $1$ đến $M$, $N$ cột được đánh số từ $1$ đến $N$, ô ở hàng $i$, cột $j$ gọi là ô $(i, j)$. Theo đánh giá của giáo sư thì có những ô thuận lợi cho việc trồng cây ăn quả, có những ô thì không (đất cằn, nhiều sâu bọ ...). Giáo xư xem xét những **hình chữ nhật nằm trong mảnh vườn gồm toàn những ô thuận lợi cho việc trồng cây**, giáo sư gọi đó là những **hình chữ nhật tốt**. Theo kinh nghiệm của mình, giáo sư có một cách đánh giá tiềm năng của mảnh vườn rất đặc biệt: Ông gọi tiềm năng của mỗi ô đất là số **hình chữ nhật tốt** chứa nó còn tiềm năng của mảnh vườn là tổng tiềm năng của mỗi ô đất trong mảnh vườn đó.

Giáo sư biết các học trò của mình là những lập trình viên rất giỏi, vì vậy ông nhờ các bạn tính giúp tiềm năng của mảnh vườn mà ông đã chọn.

## Dữ liệu vào:
- Dòng đầu chứa hai số nguyên dương $M, N\ (1\le M, N \le 2000)$ là kích thước mảnh vườn.
- $M$ dòng tiếp theo, dòng thứ $i$ chứa một xâu ký tự độ dài $N$ mô tả một hàng thứ $i$ của mảnh đất. Mỗi ký tự có thể là `.` để chỉ ô đất thuận lợi để trồng cây hoặc `#` để chỉ ô đất không thể trồng cây.

## Dữ liệu ra:
- Ghi ra một số nguyên duy nhất là tiềm năng của mảnh vườn theo cách tính của giáo sư.

## Giới hạn:
- **Subtask** $\#1$: $20\%$ số test tương ứng với $20\%$ số điểm có $1\le N, M \le 10$
- **Subtask** $\#2$: $30\%$ số test khác tương ứng với $30\%$ số điểm có $10\le N, M \le 300$
- **Subtask** $\#3$: $50\%$ số test còn lại tương ứng với $50\%$ số điểm có $300\le N, M \le 2000$

## Ví dụ (Tải test đề bài và 2 test mẫu khác ở "Tệp đính kèm" phía trên đề bài):
#### Dữ liệu vào:
```
2 3
.#.
..#
```

#### Dữ liệu ra:
```
8
```

#### Giải thích:
Trong ví dụ này, ma trận giá trị tiềm năng của các ô đất như sau:
<pre>
2 0 1
3 2 0
</pre>

Do đó, tổng giá trị tiềm năng là $2+0+1+3+2+0=8$