Con đường tơ lụa bắt đầu từ Phúc Châu, Hàng Châu, Bắc Kinh (Trung Quốc) qua Mông Cổ, Ấn Độ, Afghanistan, Kazakhstan, Iran, Iraq, Thổ Nhĩ Kỳ, Hy Lạp, xung quanh vùng Địa Trung Hải và đến tận châu Âu. Con đường cũng đi đến cả Hàn Quốc, Nhật Bản.
<center><img src="/images/problems/567/SILKROAD.png" width="500px" /></center>

Mạng lưới giao thông của hệ thống đường này bao gồm ~n~ trạm dừng chân cho ngựa và khách buôn bán (các trạm đánh số từ ~1~ đến ~n~). Giữa một số trạm có các con đường hiểm trở hai chiều (thủy hoặc bộ) nối trực tiếp và tùy theo địa hình, thời gian đi hết mỗi con đường này là khác nhau.

Nữ hoàng Ai Cập Cleopatra rất thích diện đồ tơ luạ ở Bắc Kinh và luôn lập các đoàn thương nhân đến Bắc Kinh để tìm mua loại tơ lụa nổi tiếng này. Đoàn thương nhân của nữ hoàng luôn xuất phát từ trạm dừng chân số ~1~ và đích đến là trạm ~n~ thông qua các đường nối khác nhau của con đường tơ lụa. Để đảm bào sức khỏe cho một cuộc hành trình dài các thương nhân cần phải chọn hành trình sao cho thời gian đi giữa hai trạm dừng chân càng ngắn càng tốt.

Bạn hãy giúp họ tìm con đường đi từ ~1~ đến ~n~ sao cho thời gian đi dài nhất giữa hai trạm dừng chân liên tiếp là ngắn nhất.

## Dữ liệu vào:
- Dòng đầu tiên ghi ~n, m~ là số trạm và số tuyến đường ~(n≤10^3, m ≤10^4)~;
- ~m~ dòng tiếp theo mỗi dòng ghi ba số nguyên ~u, v, w~ thể hiện có một đường nối trực tiếp giữa ~u~ và ~v~ có thời gian đi là ~w\ (1≤w≤10^9)~.

## Dữ liệu ra:
- Một số nguyên duy nhất là thời gian của con đường đi lâu nhất trên hành trình.

## Ví dụ:
#### Dữ liệu vào:
```
4 4
1 3 2
3 4 3
1 2 5
2 4 3
```

#### Dữ liệu ra:
```
3
```