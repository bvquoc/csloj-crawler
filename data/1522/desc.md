**<center>NGUỒN: VOI 2019 - 2020</center>**
**<center>Test không chính thức (thầy Hồ Đắc Phương)</center>**

Thành phố nơi Alice sinh sống có ~n~ toà nhà. Trên bản thiết kế, mặt bằng nền mỗi tòa nhà đều là hình chữ nhật có các cạnh song song với trục tọa độ, với các đỉnh đều có tọa độ nguyên trên hệ trục tọa độ. Hai tòa nhà gọi là ***liền kề*** nếu có hai đường biên của hai hình chữ nhật mặt nền tương ứng hai tòa nhà đó có ít nhất một điểm chung. Để thuận tiện đi lại giữa các tòa nhà, người ta xây dựng một ***lối đi tắt*** hai chiều giữa mỗi cặp tòa nhà liền kề.

Alice rất thích thú với cách thiết kế các tòa nhà của thành phố và thường xuyên đi lại giữa các tòa nhà thông qua các lỗi đi tắt này. Sau một thời gian khám phá, Alice nhận thấy có một số lối đi tắt là ***độc đạo***. Một lối đi tắt giữa hai tòa nhà ~u~ và ~v~ gọi là độc đạo nếu như sau khi đi từ ~u~ sang ~v~ qua lối đi này thì không có cách đi nào quay trở lại ~u~ thông qua các lối đi tắt khác ngoài lối đi tắt từ ~v~ về ~u~.

Với mỗi cặp tòa nhà ~(u,v)~ có lối đi tắt là độc đạo, Alice tiếp tục khám phá nếu như đóng cửa lối đi độc đạo này thì xuất phát từ ~u~ Alice có thể tham quan được tối đa ~d_u~ tòa nhà, và nếu xuất phát từ ~v~ Alice có thể tham quan được tối đa ~d_v~ tòa nhà. Khoảng chênh lệch giữa ~d_u~ và ~d_v~ là giá trị ~|d_u-d_v|~.

**Yêu cầu:** Biết tọa độ các đỉnh hình chữ nhật mặt nền tương ứng của các tòa nhà, hãy giúp Alice tìm cặp tòa nhà ~(u,v)~ có lỗi đi tắt độc đạo sao cho khoảng chênh lệch giữa ~d_u~ và ~d_v~ là nhỏ nhất.

## Dữ liệu vào:
- Dòng thứ nhất chứa một số nguyên dương ~n~ là số lượng tòa nhà cao tầng;
- Dòng thứ ~i~ trong số ~n~ dòng tiếp theo chứa ~4~ số nguyên không âm ~x_i, y_i, p_i, q_i~ với ~(x_i y_i)~ là tọa độ của đỉnh trái trên và ~(p_i, q_i)~ là tọa độ của đỉnh phải dưới của hình chữ nhật biểu thị mặt nền tòa nhà thứ ~i~ trên bản đồ quy hoạch. Dữ liệu đảm bảo ~x_i < p_i~ Và ~y_i > q_i~> và hai hình chữ nhật bất kỳ có thể tiếp xúc nhưng không giao nhau.

Các số trên cùng một dòng cách nhau bởi dấu cách.

## Dữ liệu ra:
- Ghi ra một số nguyên duy nhất là khoảng chênh lệch nhỏ nhất tìm được. Nếu không tổn tại lối đi tắt độc đạo thì in ra số ~-1~.

## Giới hạn:
- Có ~30\%~ số test ứng với ~30\%~ số điểm của bài thỏa mãn điều kiện: ~n≤10^3~, các tọa độ không vượt quá ~10^9~;
- ~30\%~ số test khác ứng với ~30\%~ số điểm của bài thỏa mãn điều kiện: ~n ≤ 10^5~, các tọa độ không vượt quá ~10^3~;
- ~40\%~ số test còn lại ứng với ~40\%~ số điểm của bài thỏa mãn điều kiện: ~n ≤ 10^5~, các tọa độ không vượt quá ~10^9~.

## Vị dụ:
#### Dữ liệu vào:
```
6
1 3 4 1
4 1 8 0
6 2 9 1
4 4 8 2
5 6 7 4
6 7 9 6
```

#### Dữ liệu ra:
```
2
```

#### Giải thích:
- Lối đi độc đạo là lối đi giữa cặp tòa nhà ~(4,5)~ và ~(5,6)~. Nếu đóng cửa lối đi độc đạo qua ~(4,5)~, ta có ~d_4=4~ và ~d_5=2~, do đó ~|d_4-d_5|=2~. Nếu đóng cửa lối đi độc đạo qua ~(5,6)~, ta có ~d_5=5~ và ~d_6=1~, do đó ~|d_5 - d_6| =4~.
**Nguồn:** [Chuyên Sơn La Online Judge](http://csloj.ddns.net/)

**Group giải đáp thắc mắc:** [Lập trình 24h](https://www.facebook.com/groups/1386904321519984)