**<center>Nguồn: Đề đề xuất PreVNOI 2013 của Hải Dương</center>**
<br>

Làng BT có ~n~ ngôi nhà. Mỗi ngôi nhà có thể xem như là một điểm trên mặt phẳng tọa độ. Người dân trong làng sống rất hòa thuận và họ thường hay đến thăm nhau trong những lúc rỗi rãi.
Cùng với sự phát triển kinh tế, nhà nước muốn xây dựng một đường cao tốc đi qua vùng đất của làng. Có ~m~ dự án xây dựng đường cao tốc được đưa ra. Mỗi dự án có thể xem như một đường thẳng trên mặt phẳng tọa độ. Chính quyền thông báo công khai các dự án này ở cổng làng để mọi người đóng góp ý. Sau khi thảo luận, tất cả dân làng đều nhất trí rằng các dự án mà đường cao tốc chia các ngôi nhà thành hai phần khác rỗng (mỗi phần thuộc một nửa mặt phằng có biên là đường cao tốc) là các dự án tồi vì một số người không thể đến thăm những người khác (do phải vượt đường - dễ gây tai nạn). Các dự án còn lại đều là tốt.

**Yêu cầu**: Viết chương trình xác định xem với mỗi dự án đó là tốt (**GOOD**) hay là tồi (**BAD**)

## Dữ liệu vào:
- Dòng đầu tiên ghi số nguyên dương ~n ≤10^5~ là số ngôi nhà trong làng  BT
- ~n~ dòng tiếp theo, mỗi dòng chứa hai số thực ~x_i, y_i\ (-10^9 ≤x_i, y_i ≤10^9)~
- Các dòng tiếp theo, mỗi dòng ghi bốn số thực ~X_1, Y_1, X_2, Y_2~ mô tả một dự án là đường cao tốc đi qua điểm ~(X_1, Y_1)~ và điểm ~(X_2, Y_2)~ trên mặt phẳng. Dữ liệu đảm bảo rằng đường cao tốc không đi qua một ngôi nhà nào. Số lượng các dự án không vượt quá ~10^5~

## Dữ liệu ra:
- Với mỗi dự án (theo thứ tự trong input) in ra **GOOD** nếu nó là dự án tốt và in ra **BAD** nếu nó là dự án tồi.

## Ví dụ:
<center><img src="/images/problems/1139/expressway.png", width=250px></center>
<center>Hình minh họa</center>

#### Dữ liệu vào:
```
4
0.0 0
6.00 -0.001
3.125 4.747
4.747 0.47
5 3 7 0
4 -4.7 7 4.7
4 47 4 94
```

#### Dữ liệu ra:
```
GOOD
BAD
BAD
```

**Chú ý**: Bạn phải hết sức cẩn thận khi sử dụng kiểu **double** (trong C++ và Pascal) để biểu diễn số thực vì nói chung chúng có sai số. Khi đó để kiểm tra ~x~ có bằng ~y~ hay không không viết ~x==y~ (C++) hay ~x=y~ (Pascal) mà phải viết ~|x - y|<ε~  (với ~ε~ là hằng số đủ nhỏ, thường thì ~10^{-6}~ là đủ)
**Nguồn:** [Chuyên Sơn La Online Judge](http://csloj.ddns.net/)

**Group giải đáp thắc mắc:** [Lập trình 24h](https://www.facebook.com/groups/1386904321519984)