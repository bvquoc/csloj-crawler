**<center>NGUỒN: Bài tập Đội Bắc Giang ôn thầy Đỗ Đức Đông - Tháng 10/2017</center>**

Cho một bảng $M ×N$ ô, các dòng được đánh số từ $1$ đến $M$ từ trên xuống dưới, các cột được đánh số từ $1$ đến $N$ từ trái sang phải, mỗi ô chứa một số $0$ hoặc $1$ hoặc $2$. Ta được phép bắn một viên bi vào bảng theo một dòng hoặc cột từ một trong bốn cạnh của bảng. Viên bi sẽ chuyển động 
theo cách thức như sau:
- Nếu bi gặp ô chứa số $0$ bi sẽ tiếp tục đi thẳng sang ô tiếp theo;
- Nếu bi gặp ô chứa số $1$ bi sẽ chuyển hướng và đi sang ô bên phải;
- Nếu bi gặp ô chứa số $2$ bi sẽ chuyển hướng và đi sang ô bên trái;
- Nếu bi di chuyển ra ngoài bảng thì dừng.

**Yêu cầu:** Cho trạng thái của bảng, tìm cách bắn bi sao cho bi di chuyển trong bảng qua nhiều ô nhất.

## Dữ liệu vào:
- Dòng đầu là $M, N\ (M, N ≤ 1000)$;
- $M$ dòng tiếp theo, mỗi dòng $1$ xâu $N$ ký tự gồm các ký tự “0”, “1”, “2” mô tả bảng.
 
## Dữ liệu ra:
- Gồm hai số $P$ và $K$, trong đó $P$ là số $1$ (nếu bắn theo dòng từ trái qua phải) hoặc $2$ (nếu bắn theo dòng từ phải qua trái) hoặc $3$ (nếu bắn theo cột từ trên xuống) hoặc $4$ (nếu bắn theo cột từ dưới lên trên), còn $K$ là chỉ số dòng hoặc chỉ số cột. Nếu có nhiều phương án đưa ra phương án có giá trị $P×1001+K$ nhỏ nhất.

## Ví dụ:
#### Dữ liệu vào:
```
3 4
0000
0001
0000
```

#### Dữ liệu ra:
```
1 2
```