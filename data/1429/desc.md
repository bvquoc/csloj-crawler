<!--**<center>NGUỒN: Bài tập thầy Lê Minh Hoàng ôn Hải Phòng T10/2016</center>**-->

Một mạng lưới giao thông gồm $𝑛$ địa điểm đánh số từ $1$ tới $𝑛$ và $𝑚$ con đường một chiều đánh số từ $1$ tới $𝑚$. Con đường thứ $𝑖$ nối từ địa điểm $𝑢_𝑖$ tới địa điểm $𝑣_𝑖$ . Mọi địa điểm đều có thể tới được từ $1$ và có thể đi đến được $𝑛$.

Hành trình tuần tra của một cảnh sát giao thông như sau: Xuất phát từ địa điểm $1$, đi theo các con đường đã cho tới địa điểm $𝑛$. Một con đường có thể đi qua nhiều lần nhưng phải đi đúng chiều đã định.

**Yêu cầu:** Tìm số lượng ít nhất các cảnh sát giao thông $(𝑘)$ thỏa mãn: Có thể vạch hành trình tuần tra cho $𝑘$ cảnh sát đó để con đường nào cũng được một cảnh sát giao thông đi qua.

## Dữ liệu vào:
- Dòng đầu chứa hai số nguyên dương $𝑛 ≤ 10^3; 𝑚 ≤ 10^5$;
- $𝑚$ dòng tiếp theo, dòng thứ $𝑖$ chứa hai số nguyên $𝑢_𝑖 ,𝑣_𝑖$.

## Dữ liệu ra:
- Ghi ra số 𝑘 tìm được.

## Ví dụ:
<center><img src="/images/problems/1429/PATROL.svg" width="300px" /></center>

#### Dữ liệu vào:
```
6 8
1 2
1 3
2 4
2 5
3 5
4 6
5 6
6 4
```

#### Dữ liệu ra:
```
3
```

#### Giải thích:
- CS $1$ đi $1 → 2 → 4 → 6 → 4 → 6$;
- CS $2$ đi $1 → 2 → 5 → 6$
- CS $3$ đi $1 → 3 → 5 → 6$.