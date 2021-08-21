**<center>Nguồn:  Free Contest 05</center>**

Trò chơi Errant Knight có hai quân mã, Trắng và Đen, trên một bàn cờ kích thước vô hạn. Hai người luân phiên điều khiển Mã Trắng và Mã Đen, người chơi Trắng được bắt đầu trước. Quân Mã di chuyển theo luật cờ vua (di chuyển theo hình chữ ~L~ và không bị cản). Tuy nhiên, trò chơi này có một số ngoại lệ: Ở mỗi bước, người chơi có thể thực hiện liên tục một loạt các nước đi, nhưng phải thỏa mãn hai điều kiện:
- Tất cả các nước đều đi theo ~1~ hướng;
- Khoảng cách Euclide giữa hai quân Mã phải được giảm xuống sau mỗi bước đi.

Ví dụ, mã Đen ở ô ~(0,0)~ và mã Trắng ở ô ~(9,5)~. Người cầm Trắng có thể đưa nó đến một trong các ô: ~(7,4), (5,3), (3,2), (1,1), (-1,0)~, tuy nhiên không được đưa nó đi xa hơn do vi phạm luật khoảng cách Euclide.

Trong trò chơi này, các ô vuông trên bàn cờ đủ lớn để chứa được cả hai quân mã, nên việc bắt quân được coi như không xảy ra (tức là nếu đi vào ô trùng nhau thì ô đó chứa cả hai quân Mã). Thay vào đó, người chơi sẽ chiến thắng nếu đối phương không thể thực hiện được nước đi hợp lệ.

Hãy xác định kết quả của trò chơi nếu cả hai chơi tối ưu.

## Dữ liệu vào:
Trò chơi sẽ được diễn ra nhiều ván, trong đó, mã Đen nằm tại ~(0,0)~ và mã Trắng nằm tại ~(x_k,y_k)~
- Dòng đầu tiên chứa số ~N\ (0 < N ≤ 50)~ là số lần diễn ra trò chơi;
- Dòng thứ hai chứa ~N~ số nguyên ~x_i~;
- Dòng thứ ba chứa ~N~ số nguyên ~y_i~;
- Các giá trị ~x_i~ và ~y_i~ nằm trong khoảng ~[-4000,4000]~ và không có cặp ~(x_i,y_i)~ nào bằng ~(0,0)~.

## Dữ liệu ra:
- Ghi ra trên một dòng ~N~ kí tự mô tả kết quả của ~N~ ván. Kí tự `W` ứng với chiến thắng thuộc về bên Trắng, và `B` là thuộc về Đen.

## Ví dụ:
#### Dữ liệu vào:
```
6
1 1 2 2 9 3
0 1 0 1 5 3
```

#### Dữ liệu ra:
```
BWWWWB
```

#### Giải thích:
- Trong ván ~1~, Trắng không có nước đi hợp lệ (Đen thắng);
- Trong ván ~2~, Trắng di chuyển đến ~(-1,0)~ hoặc ~(0,-1)~ và Đen không có bước đi hợp lệ (Trắng thắng);
- Trong ván ~3~, Trắng di chuyển đến ~(0,-1)~;
- Trong ván ~4~, Trắng di chuyển đến ~(0,0)~;
- Trong ván ~5~, Trắng di chuyển đến ~(-1,0)~;
**Nguồn:** [Chuyên Sơn La Online Judge](http://csloj.ddns.net/)

**Group giải đáp thắc mắc:** [Lập trình 24h](https://www.facebook.com/groups/1386904321519984)