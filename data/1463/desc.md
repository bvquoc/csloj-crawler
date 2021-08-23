**<center>CSP Open Contest 5</center>**

Kì thi cuối kì đang đến rất gần kề nên Thắng đang học tập rất căng thẳng để chuẩn bị cho môn "Nhập môn lập trình". Hôm nay Thắng được thầy cho làm bài tập in ra tất cả các ước của một số nguyên dương bất kì. Thắng cảm thấy đây là một bài vô cùng đòi hỏi tư duy đỉnh cao nên Thắng rất
hứng thú với nó và muốn xin thầy thêm những bài tương tự để thử thách bản thân. Cuối cùng Thắng được thầy cho một bài như sau "Cho $2$ số nguyên dương $L$ và $R\ (L ≤ R)$, hãy tính tổng tất cả các ước của tất cả các số nguyên trong đoạn $[L, R]$."

Tất nhiên vì không giỏi lắm trong việc tính toán nên Thắng không biết giải bài này thế nào. Các bạn hãy giúp Thắng nhé!

## Dữ liệu vào:
- Gồm một dòng chứa hai số nguyên dương $L$ và $R$ được ngăn cách bởi dấu cách. $(1 ≤ L ≤ R ≤ 10^{12})$.

## Dữ liệu ra:
- Gồm số nguyên là đáp án của bài toán. Vì đáp số có thể khá lớn nên bạn chỉ cần in ra đáp án modulo $10^9 + 7$.

## Ví dụ:
### Dữ liệu vào:
```
3 5
```

### Dữ liệu vào:
```
17
```

### Giải thích:
- Số $3$ có $2$ ước: $1, 3$;
- Số $4$ có $3$ ước: $1, 2, 4$;
- Số $5$ có $2$ ước: $1 5$;

Nên đáp số sẽ là $1 + 3 + 1 + 2 + 4 + 1 + 5 = 17$.

## Giới hạn:
- Subtask $\#1: 20\%$ số điểm có $R − L ≤ 10$;
- Subtask $\#2: 30\%$ số điểm khác có $R ≤ 10^7$;
- Subtask $\#3: 50\%$ số điểm còn lại không có điều kiện gì thêm.