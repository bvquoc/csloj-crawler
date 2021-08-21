<center><img src="/images/problems/396/BTCANDY.jpg" width=600px></center>

*<center>Trung thu trăng sáng như gương<br>
Chị Hằng lộng lẫy xuống thăm nhi đồng<br>
Trên tay là đĩa kẹo vừng<br>
Mau mau giúp chị chia quà các em</center>*

Có $N$ em thiếu nhi đứng thành một hàng ngay ngắn, người đứng sau không thấp hơn người đứng trước, chị Hằng Nga có $M$ cái kẹo muốn chia hết cho các em sao cho em nào cũng có kẹo và em đứng trên (nhỏ hơn, thấp hơn) được số kẹo không ít hơn em đứng dưới (lớn hơn, cao hơn). Bạn hãy tính xem chị Hằng Nga có bao nhiêu cách chia kẹo và đề xuất một phương án chia kẹo sao cho chênh lệch số kẹo giữa người ít nhất và người nhiều nhất là nhỏ nhất có thể nhé.

## Dữ liệu vào:
- Một dòng duy nhất chứa hai số nguyên $N$ và $M$ tương ứng là số em thiếu nhi và số kẹo.

## Dữ liệu ra:
- Dòng đầu ghi số cách chia thỏa yêu cầu;
- Dòng thứ hai ghi $N$ số nguyên là phương án chia kẹo thỏa mãn yêu cầu và chênh lệch giữa em ít nhất và em nhiều nhất là nhỏ nhất.

## Ví dụ:
#### Dữ liệu vào:
```
3 5
```

#### Dữ liệu ra:
```
2
2 2 1
```

#### Giải thích:
- Có hai cách chia kẹo là $3, 1, 1$ và $2, 2, 1$, phương án chia thứ hai có sự chênh lệch giữa em nhận ít kẹo và em nhận nhiều kẹo là nhỏ nhất ($1$ cái).

## Giới hạn:
- $1 ≤ N ≤ 20, N ≤ M ≤ 50$