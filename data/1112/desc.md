<!--
**<center>NGUỒN: VOI Training Camp 3H  (Ngày 02/11/2016)</center>**
-->

Bạn được cho trước một cây (đồ thị liên thông không chu trình) gồm $N$ nút đã được tô màu. Mỗi màu được đại diện bởi một số nguyên thuộc khoảng $\left[1,10^9\right]$. Hãy tìm số lượng màu phân biệt trong cây con gốc $S$?

## Dữ liệu vào:
- Dòng đầu chứa ba số nguyên $N$ $\left(1 ≤ N ≤ 10^5\right)$ là số nút trên cây, $M$ $\left(1 ≤ M ≤ 10^5\right)$ là số lượng truy vấn và $R$ $\left(1 ≤ R ≤ N\right)$ là gốc của cây. 
- Trong $N - 1$ dòng tiếp theo, mỗi dòng chứa $2$ số nguyên phân biệt miêu tả một cạnh trên cây.
- $N$ dòng tiếp theo, dòng thứ $i$ chứa một số nguyên thuộc khoảng $\left[1,10^9\right]$ là màu của nút thứ $i$.
- $M$ dòng tiếp theo, dòng thứ $i$ chứa một số nguyên là đỉnh tương ứng với truy vấn thứ $i$.
Các số trong dữ liệu đầu vào được viết cách nhau ít nhất một khoảng trắng.

## Dữ liệu ra:
- Ghi ra $M$ dòng, dòng thứ $i$ chứa một số nguyên là kết quả tương ứng với truy vấn thứ $i$.

## Ví dụ:
#### Dữ liệu vào:
```
4 2 1
1 2
2 4
2 3
10
20
20
30
1
2
```

#### Dữ liệu ra:
```
3
2
```

## Giới hạn:
- $20\%$ số điểm có $1 ≤ N, M ≤ 1000$.
- $80\%$ số điểm không có ràng buộc gì thêm