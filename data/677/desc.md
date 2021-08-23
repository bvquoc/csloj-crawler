**<center>Nguồn: Beginner Free Contest 16</center>**

Một hệ thống máy tính hiện đang lưu trữ $N$ tập tin, tập tin thứ $i$ được đặt tên là $S_i$.

Nhận thấy rằng có nhiều tập tin không cần thiết, người ta đã xóa đi một số tập tin của hệ thống máy tính. Cụ thể, người ta đã thực hiện $Q$ thao tác xóa tập tin. Mỗi thao tác được biểu diễn bởi một kí tự $c$, cho biết thao tác này xóa đi các tập tin có tên chứa ít nhất một kí tự $c$.

Sau mỗi thao tác xóa, hãy cho biết còn lại bao nhiêu tập tin trong hệ thống máy tính.

## Dữ liệu vào:
- Dòng đầu tiên gồm hai số nguyên $N$ và $Q\ (1 ≤ N, Q ≤ 100000)$;
- $N$ dòng tiếp theo, dòng thứ $i$ gồm xâu kí tự $S_i$ độ dài không vượt quá $8$, chỉ gồm các kí tự latin in thường - tên của tập tin thứ $i$.
- $Q$ dòng tiếp theo, mỗi dòng gồm một kí tự latin in thường $c$ - mô tả một thao tác xóa.

## Dữ liệu ra:
- In ra $Q$ dòng, dòng thứ $i$ gồm số tập tin còn lại trong hệ thống máy tính sau khi thực hiện thao tác xóa thứ $i$.

## Ví dụ:
### Dữ liệu vào:
```
6 3
shoes
split
rect
line
vision
walk
o
z
s
```

### Dữ liệu ra:
```
4
4
3
```

### Dữ liệu vào:
```
1 3
abc
a
a
a
```

### Dữ liệu ra:
```
0
```

### Giải thích:
- Ở ví dụ thứ nhất:
    - Sau thao tác xóa thứ nhất, các tập tin còn lại là `split`, `rect`, `line` và `walk`;
    - Thao tác xóa thứ hai không xóa đi tập tin nào;
    - Sau thao tác xóa thứ ba, các tập tin còn lại là `rect`, `line` và `walk`.

## Giới hạn:
- **Subtask** $\#1\ (50\%\text{ số test}): N, Q ≤ 100$;
- **Subtask** $\#2\ (50\%\text{ số test}):$ Không có ràng buộc gì thêm.