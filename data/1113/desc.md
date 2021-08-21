<!--
**<center>NGUỒN: VOI Training Camp 3H  (Ngày 02/11/2016)</center>**
-->

Vào ngày sinh nhật của Sutol, The Mastermind muốn tặng cô một chiếc dây chuyền ngọc do anh tự làm. Anh ta dự định sẽ làm nó bằng $N$ viên ngọc. Mặt khác, anh sở hữu $K$ loại ngọc, mỗi loại có vô số viên và có thể biểu thị mỗi loại bởi các con số từ $1$ đến $K$. Chiếc dây chuyền không nhất thiết phải có đủ $K$ loại, tức là được phép có nhiều viên cùng loại trong $N$ viên. The Mastermind tự hỏi là anh ta có thể tạo ra bao nhiêu chiếc dây chuyền khác nhau?
Hai chiếc dây chuyền được coi là giống nhau khi mà xoay đi thì chúng giống nhau. Ví dụ như hai chiếc dây chuyền dưới đây là giống nhau:
<center><img src="/images/problems/1113/necklace1.svg" width=500></center>
Tuy nhiên, nếu lật ngược lại thì vẫn coi là khác nhau. Ví dụ như hai chiếc dây chuyền dưới đây được coi là khác nhau:
<center><img src="/images/problems/1113/necklace2.svg" width=500></center>

**Yêu cầu**: Hãy xác định xem The Mastermind có thể làm được bao nhiêu chiếc vòng khác nhau.

## Dữ liệu vào:
- Dòng đầu chứa số nguyên $T$ là số test $\left(1 ≤ T ≤ 10\right)$.
- $T$ dòng tiếp theo, mỗi dòng chứa $2$ số nguyên $N$ và $K$, các số cách nhau ít nhất một dấu cách $\left(1 ≤ N ≤ 10^5, 1 ≤ K ≤ 10^5\right)$.

#### Dữ liệu ra:
- Ghi ra $T$ dòng, mỗi dòng một số nguyên là số dư của kết quả tìm được tương ứng với mỗi test khi chia cho $10^9 + 7$.

## Ví dụ:
#### Dữ liệu vào:
```
2
3 2
4 2
```

#### Dữ liệu ra:
```
4
6
```

## Giới hạn:
- $\frac{2}{7}$ test có $1 ≤ N, K ≤ 5, T = 1$.
- $\frac{2}{7}$ test có $1 ≤ N, K ≤ 1000$.
- $\frac{3}{7}$ test không có ràng buộc gì thêm