<!--**<center>NGUỒN: Bài tập thầy Lê Minh Hoàng ôn Hải Phòng T10/2016</center>**-->

Bản đồ công viên DisneyLand là một hình chữ nhật kích thước $𝑚 × 𝑛$ được chia thành lưới ô vuông đơn vị $𝑚$ hàng $𝑛$ cột. Các hàng của lưới được đánh số từ $1$ tới $𝑚$ và các cột của lưới được đánh số từ $1$ tới $𝑛$, ô nằm ở hàng $𝑖$, cột $𝑗$ được gọi là ô $(𝑖, 𝑗)$. Người ta đặt $𝑘$ khu vui chơi vào một số ô của lưới, mỗi khu vui chơi nằm hoàn toàn trong một ô và có thể có nhiều khu vui chơi nằm trong cùng một ô.

Hệ thống chiếu sáng của công viên gồm có $𝑚$ đèn loại $𝐴$: $𝑎_1, 𝑎_2, … , 𝑎_𝑚$ và $𝑛$ đèn loại $𝐵$: $𝑏_1, 𝑏_2, …, 𝑏_𝑛$. Đèn $𝑎_𝑖$ có thể chiếu sáng tất cả các ô trên hàng $𝑖$ và đèn $𝑏_𝑗$ có thể chiếu sáng tất cả các ô trên cột $𝑗\ (1 ≤ 𝑖 ≤𝑚; 1 ≤ 𝑗 ≤ 𝑛)$.

**Yêu cầu:** Hãy bật sáng một số ít nhất các đèn để chiếu sáng toàn bộ các ô có khu vui chơi.

## Dữ liệu vào:
- Dòng đầu chứa ba số nguyên dương $𝑚, 𝑛, 𝑘 ≤ 10^5$;
- $𝑘$ dòng tiếp theo, dòng thứ $𝑖$ ghi chỉ số hàng và chỉ số cột của khu vui chơi thứ $𝑖$.

## Dữ liệu ra:
- Dòng đầu ghi số đèn loại $𝐴 (𝑝)$ và số đèn loại $𝐵 (𝑞)$ cần bật sáng;
- Dòng thứ hai ghi chỉ số của $𝑝$ đèn loại $𝐴$ được bật sáng, tiếp theo là chỉ số của $𝑞$ đèn loại $𝐵$ được bật sáng.

Các số trên một dòng được ghi cách nhau ít nhất một dấu cách.

## Ví dụ:
<center><img src="/images/problems/1243/LIGHTING.svg" width="280px" /></center>

#### Dữ liệu vào:
```
5 5 8
1 1
1 2
1 3
2 3
3 3
4 4
4 5
5 4
```

#### Dữ liệu ra:
```
2 2
1 4
3 4
```