**<center>NGUỒN: Bài tập Đội Bắc Giang ôn thầy Đỗ Đức Đông - Tháng 10/2017</center>**

Cho bảng $A$ là lưới ô vuông gồm $m$ dòng và $n$ cột. Các dòng của lưới được đánh số từ $1$ đến $m$, từ trên xuống dưới. Các cột của lưới được đánh số từ $1$ đến $n$, từ trái sang phải. Ô nằm trên giao của dòng $i$ và cột $j$ của lưới gọi là ô $(i, j)$ được điền số $a_{ij}$.

Một đường đi tăng trên bảng số là một dãy liên tiếp các ô chung cạnh mà các số điền trong các ô theo thứ tự tăng dần.

**Yêu cầu:** Cho bảng số $A$, hãy tìm đường đi tăng trên bảng số gồm nhiều ô nhất.

## Dữ liệu vào:
- Dòng đầu tiên chứa hai số nguyên $m, n$;
- $m$ dòng tiếp theo, dòng thứ $i$ chứa $n$ số $a_{i1}, a_{i2}, \dots, a_{in}$;


## Dữ liệu ra:
- Gồm một dòng chứa một số là số ô trên đường đi tìm được.

## Ví dụ:
#### Dữ liệu vào:
```
3 3
1 1 0
1 2 3
2 2 5
```

#### Dữ liệu ra:
```
5
```