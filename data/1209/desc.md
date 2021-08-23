**<center>Nguồn: Ôn Thầy Hiếu Hưng Yên - T11/2019</center>**

Cho bảng vuông kích thước $m×n$. Các hàng được đánh số $1,2,…,m$ từ trên xuống dưới. Các cột được đánh số $1,2,…,n$ từ trái qua phải. Tại mỗi ô của bảng có thể là một ô cấm.

**Yêu cầu:** Cho $Q$ vị trí ô trên bảng. Với mỗi ô, xác định hình vuông lớn nhất chứa ô đó và không chứa ô cấm.

## Dữ liệu vào:
- Dòng đầu chứa hai số nguyên dương $m,n\ (m,n≤2000)$;
- $m$ dòng tiếp theo, dòng thứ $i$ chứa $n$ ký tự biểu thị dòng $i$ của bảng. Ký tự thứ $j$ biểu diễn ô $(i,j)$. Giá trị `#` biểu diễn ô cấm;
- Dòng tiếp theo ghi số nguyên $Q$ – số vị trí truy vấn;
- $Q$ dòng tiếp, mỗi dòng chứa hai số nguyên $(x,y)$ xác định tọa độ ô truy vấn.

## Dữ liệu ra:
- Ghi ra $Q$ dòng, dòng thứ $i$ ghi tương ứng diện tích hình vuông lớn nhất tìm được, chứa ô trong truy vấn thứ $i$.

## Ví dụ:
### Dữ liệu vào:
```
5 5
#...#
..#..
.....
#...#
#....
5
3 2
2 5
5 4
4 5
1 3
```

### Dữ liệu ra:
```
9
4
9
0
1
```

## Giới hạn:
Gọi $K$ là số ô cấm:
- $15\%$ số test tương ứng $15\%$ số điểm có $n,m≤50; Q≤1000$;
- $15\%$ số test khác tương ứng $15\%$ số điểm có $n≤10; m≤2000; Q≤10^5$;
- $30\%$ số test khác tương ứng $30\%$ số điểm có $n,m≤800; K≤10^5;Q≤10^5$;
- $40\%$ số test còn lại tương ứng $40\%$ số điểm có $n,m≤2000; K≤10^5; Q≤10^5$.