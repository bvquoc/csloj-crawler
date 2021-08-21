**<center>NGUỒN: PreVNOI Ⅶ Lần 2 (ONLINE 2017)</center>**
<br>

Có thể các bạn chưa biết, nhưng ở hầu hết các vị giáo sư, ngoài sở thích sưu tầm những câu chuyện cười, đố vui hay các trò chơi lý thú để phục vụ những giờ lên lớp, họ còn rất yêu thích trồng hoa và cây cảnh. Ngôi nhà của những vị giáo sư, vì thế, luôn là nơi tụ hội của những nàng hoa xinh xắn và quyến rũ, từ nàng hồng kiêu sa, nàng cúc vàng tươi đến nàng dạ lý thơm ngát.

Khu vườn của **GS. PVH** có $N$ cây hoa. Nếu coi khu vườn như hệ trục tọa độ Descartes, cây hoa thứ $i$ được trồng ở điểm có tọa độ $\left(X_i,Y_i\right)$. Ban đầu, vị giáo sư muốn trồng hoa ở khắp khu vườn, để hương thơm ngào ngạt có thể lan tỏa khắp muôn nơi. Nhưng rồi, số lượng hoa quá lớn khiến việc chăm sóc hoa gặp nhiều khó khăn. Do đó, giáo sư cần phải quy hoạch lại vườn hoa của mình.

**GS. PVH** quyết định sẽ di chuyển $N$ cây hoa về hai trục tọa độ $Ox, Oy$ và từ nay chỉ trồng hoa trên đó. Để việc di chuyển được đơn giản, các cây hoa chỉ được di chuyển song song theo một trong hai trục tọa độ. Nói cách khác, nếu ban đầu một cây hoa đang ở vị trí $\left(X,Y\right)$, nó sẽ chỉ được chuyển về một trong hai vị trí $\left(X,0\right)$ hoặc $\left(0,Y\right)$.

Chuyển đổi từ chiến thuật “phân bố rải rác” sang “canh tác tập trung”, vị giáo sư muốn sau khi quy hoạch lại vườn hoa, khoảng cách giữa hai cây hoa xa nhau nhất là nhỏ nhất có thể. Việc lấy thước đo khoảng cách hẳn sẽ tốn rất nhiều mồ hôi và nước mắt, giáo sư muốn bạn tìm ra giá trị tối thiểu này.

## Dữ liệu vào:
- Dòng đầu tiên chứa số nguyên dương $N$, số cây hoa trong vườn.
- $N$ dòng tiếp theo, dòng thứ $i$ chứa hai số nguyên $X_i$ và $Y_i$, là tọa độ ban đầu của cây hoa thứ $i$.

## Dữ liệu ra:
- Gồm một số duy nhất là bình phương khoảng cách tối thiểu có thể đạt được giữa hai cây hoa xa nhau nhất. Dễ dàng thấy được đây là một số nguyên.

## Ví dụ:
#### Dữ liệu vào:
```
3
22 2
7 -1
1 97
```

#### Dữ liệu ra:
```
9
```

#### Giải thích:
- Có $3$ cây hoa ở các vị trí $(22,2)$, $(7,-1)$ và $(1,97)$. Di chuyển chúng về các điểm $(0,2), (0,-1)$ và $(1,0)$. Khi đó khoảng cách giữa hai cây xa nhất là $3$ (giữa cây $1$ và $2$). Đây là giá trị nhỏ nhất có thể đạt được của khoảng cách giữa hai cây xa nhất.
- Chú ý ta cần in ra bình phương của khoảng cách tối thiểu.

#### Dữ liệu vào:
```
2
1 100
2 100
```

#### Dữ liệu ra:
```
0
```

#### Giải thích:
- Di chuyển cả $2$ cây về cùng vị trí $(0,100)$. Khoảng cách giữa $2$ cây khi đó là $0$.

## Giới hạn:
- $N≤200; |X_i|, |Y_i|≤10^8$; Trong $50\%$ số test có $N ≤ 20$.