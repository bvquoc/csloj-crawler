Có $N$ thành phố và $M$ đường hàng không hai chiều giữa một số cặp thành phố nào đó, các đường bay được quản lý bởi $16$ hãng hàng không. Các thành phố được đánh số từ $1$ tới $N\ (N ≤ 100)$ và các hãng được đánh số từ $1$ tới $16$.

Được biết chi phí bay trực tiếp giữa hai thành phố $i, j$ bất kỳ (nếu như có đường bay $i \rightarrow j)$ là $C$. Nếu đang đi máy bay của một hãng đến sân bay nào đó rồi chuyển sang máy bay của hãng khác thì sẽ phải mất thêm một khoản phụ phí $A$.

**Yêu cầu:** Cho trước hai thành phố $S$ và $F$, hãy tìm hành trình bay từ thành phố $S$ đến thành phố $F$ với chi phí ít nhất. Với giả thiết rằng luôn luôn tồn tại cách bay từ $S$ tới $F$.

## Dữ liệu vào:
- Dòng đầu ghi sáu số nguyên dương $N, M, C, A, S, F\ (1 ≤ A, C ≤ 100)$;
- $M$ dòng tiếp theo, mỗi dòng có dạng $u, v, k$ cho biết rằng giữa thành phố $u$ và thành phố $v$ có đường bay của hãng $k$.

## Dữ liệu ra:
- Dòng đầu ghi chi phí tối thiểu phải trả;
- Các dòng tiếp theo, mỗi dòng ghi một bộ ba $i, j, k$  thể hiện tại bước đó sẽ bay từ thành phố $i$ đến thành phố $j$ bởi máy bay của hãng $k$. Thứ tự các dòng phải theo đúng thứ tự bay trong hành trình.

Các số trên một dòng được ghi cách nhau ít nhất một dấu cách.

## Ví dụ:
<center><img src="/images/problems/599/AIRLINES.png" width="500px" /></center>

Với mạng lưới đường không như hình trên: cần đi từ thành phố $1$ đến thành phố $5$. Chi phí đường bay trực tiếp giữa hai thành phố bất kỳ $C = 3$, phụ phí chuyển tuyến $A = 2$. Các số ghi bên cạnh các đường bay trực tiếp là tên các hãng sở hữu đường bay đó.

#### Dữ liệu vào:
```
15 20 3 2 1 5
1 2 1
2 3 1
3 4 1
3 4 2
3 9 2
4 9 1
5 10 1
5 10 3
6 7 1
6 11 1
7 8 1
7 13 2
8 9 1
10 15 3
11 12 1
12 13 1
13 14 1
13 14 3
14 15 1
14 15 3
```

#### Dữ liệu ra:
```
37
1 2 1
2 3 1
3 4 1
4 9 1
9 8 1
8 7 1
7 13 2
13 14 3
14 15 3
15 10 3
10 5 3
```