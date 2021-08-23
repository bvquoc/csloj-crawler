**<center>Nguồn:  Free Contest 04</center>**
***<center>APIO 2009</center>***

Thành phố Siruseri có một mạng lưới giao thông dày đặc, gồm $N$ giao điểm và $M$ con đường một chiều. Mỗi giao điểm được đặt một máy rút tiền tự động (ATM), hiện mỗi máy đang có số tiền $M_i$. Ngoài ra, một vài giao điểm có các quán bar (sẽ giải thích sau).

Banditji đang dự tính một vụ trộm ngân hàng. Hắn sẽ xuất phát ở giao điểm $S$, đi qua một số giao điểm theo mạng lưới giao thông trong thành phố, “viếng thăm” và rút hết tiền ở các máy ATM hắn đi qua. Hắn sẽ kết thúc cuộc chơi tại một trong các quán bar trước khi biến mất. Hắn có thể đi qua một giao điểm nhiều lần, nhưng dĩ nhiên, hắn chỉ có thể rút tiền tại lần đầu tiên “viếng thăm” máy ATM tại giao điểm đó.

Xác định số tiền tối đa mà Banditji có thể ăn trộm được. Dữ liệu đảm bảo hắn luôn có cách tẩu thoát về ít nhất một trong các quán bar.

## Dữ liệu vào:
- Dòng đầu tiên chứa hai số nguyên dương $N$ và $M\ (1 ≤ N, M ≤ 5×10^5)$;
- $M$ dòng tiếp theo, mỗi dòng chứa hai số nguyên $x$ và $y$ chỉ ra một con đường một chiều từ $x$ đến $y\ (1 ≤ x, y ≤ N)$;
- $N$ dòng tiếp theo, mỗi dòng chứa một số nguyên $M_i\ (0 ≤ M_i ≤4000)$ là số tiền hiện có trong máy ATM tại giao điểm $i$;
- Dòng tiếp theo chứa hai số nguyên $S$ và $P$ lần lượt giao điểm mà Bandiji xuất phát và số lượng quán bar.

## Dữ liệu ra:
- In ra số tiền tối đa Banditji có thể ăn trộm được.

## Ví dụ:
### Dữ liệu vào:
```
6 7
1 2
2 3
3 5
2 4
4 1
2 6
6 5
10
12
8
16
1
5
1 4
4 3 5 6
```

### Dữ liệu ra:
```
47
```

### Giải thích:
<center><img src="/images/problems/2018/atm.png" width=500px></center>

Mô tả test ví dụ. Banditji xuất phát tại thành phô $1$. Hắn sẽ đi theo tuyến đường $1 ⇨ 2⇨ 4 ⇨ 1 ⇨ 2 ⇨ 3 ⇨ 5$ và lấy được tiền tại tất cả các giao điểm trừ giao điểm 6. Tổng số tiền là $47$.

## Giới hạn:
- Trong $50\%$ số test có $1 ≤ N, M ≤ 3000$.