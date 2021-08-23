Vua Hùng Vương thứ I (theo truyền thuyết là Hùng Lân Vương) sau khi thống nhất $15$ bộ tộc đã thành lập nhà nước lấy tên là Văn Lang. Nhà vua quản lý thần dân của mình bằng cách cấp cho mỗi người dân một số định danh cá nhân (ID) là một số tự nhiên (Tuy nhiên thời bấy giờ công nghệ còn chưa phát triển nên việc cấp ID chưa được khoa học, có thể có nhiều người có ID giống nhau). Nhà nước Văn Lang lúc bấy giờ có $n$ người dân tương ứng với $n$ số ID là $a_1, a_2, …, a_n$. Các bô lão thời bấy giờ quan niệm rằng độ đoàn kết giữa hai người dân có số định danh $a_i$ và $a_j$ sẽ là $a_i$ ^ $a_j$ (là phép toán xor trong ngôn ngữ lập trình Pascal ngày nay, còn ngôn ngữ C/C++ là ^). Độ đoàn kết của cả đất nước Văn Lang bằng tổng độ đoàn kết của tất cả các cặp người dân của cả nước.

Vua Hùng rất muốn biết độ đoàn kết của đất nước Văn Lang thời bấy giờ, em hãy giúp Vua Hùng tính toán nhé.

## Dữ liệu vào:
- Dòng đầu chứa số nguyên dương $n$.
- Dòng sau ghi $n$ số tự nhiên $a_1, a_2, …, a_n$, hai số liên tiếp cách nhau bởi một dấu cách.
## Dữ liệu ra:
- Ghi ra một số nguyên duy nhất là độ đoàn kết của đất nước Văn Lang.

## Ví dụ:
### Dữ liệu vào:
```
3
1 2 3
```

### Dữ liệu ra:
```
6
```

### Giải thích:
- Ta có đáp số là 1 ^ 2 + 2 ^ 3 + 3 ^ 1 = 3 + 1 + 2 = 6.

## Giới hạn:
- Có $40\%$ số test ứng với $40\%$ số điểm của bài có $1 ≤ n ≤ 1000, 0 ≤ a_i ≤ 1000$ 
- Có $10\%$ số test ứng với $10\%$ số điểm của bài có $1 ≤ n ≤ 1000, 0 ≤ a_i ≤ 10^7$
- Có $10\%$ số test ứng với $10\%$ số điểm của bài có $1 ≤ n ≤ 10^5, 0 ≤ a_i ≤ 1$ 
- Có $40\%$ số test ứng với $40\%$ số điểm của bài có $1 ≤ n ≤ 10^5, 0 ≤ a_i ≤ 10^7$