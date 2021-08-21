<!--**<center>CSP Open Contest 2</center>**-->

Dubu được một người bạn tặng cho một mảnh vải siêu to khổng lồ và Dubu muốn sử dụng nó trong việc may vá quần áo. Mảnh vải đấy có thể miêu tả là một hình chữ nhật $N$ hàng, $M$ cột và có $N × M$ ô, mỗi ô có thể là một màu đen hoặc trắng. Dubu muốn cắt ra từ mảnh vải ban đầu một mảnh vải con hình chữ nhật sao cho trong mảnh vải con đó không có $2$ ô chung cạnh nào có cùng màu. Các bạn hãy giúp Dubu tính xem số ô nhiều nhất trong mảnh vải mà Dubu có thế cắt ra là bao nhiêu nhé!

## Dữ liệu vào:
- Dòng đầu tiên bao gồm hai số nguyên dương $N, M$;
- $N$ dòng tiếp theo, dòng thứ $i$ bao gồm $M$ số nguyên $a_{i1}, a_{i2}, …, a_{iM}$ . Trong đó $a_{ij} = 0$ có nghĩa là ô ở hàng $i$ cột $j$ của hình ban đầu là có màu trắng, $a_{ij} = 1$ nghĩa là ô đó có màu đen.

## Dữ liệu ra:
- Gồm một số nguyên duy nhất là diện tích của hình chữ nhật mà Dubu có thể cắt được.

## Ví dụ:
#### Dữ liệu vào:
```
4 4
0 0 0 0
0 1 0 0
0 0 1 0
0 0 0 0
```

#### Dữ liệu ra:
```
4
```

## Giới hạn:
- Subtask $\#1: 30\%$ số điểm có $N, M ≤ 10$;
- Subtask $\#2: 30\%$ số điểm khác có $N = 1, M ≤ 10^5$;
- Subtask $\#3: 40\%$ số điểm có còn lại $N, M ≤ 10^3$.