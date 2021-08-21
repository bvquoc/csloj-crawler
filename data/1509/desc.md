**<center>NGUỒN: VOI 2017 - 2018</center>**
**<center>Test không chính thức (thầy Hồ Đắc Phương)</center>**

Vinh là người thắng cuộc trong một cuộc thi “Tìm hiểu kiến thức vũ trụ” và được nhận các phần thưởng do công ty AZ tài trợ. Trên mỗi ô của một lưới kích thước ~n×n~ ô vuông có cạnh độ dài đơn vị, Ban tổ chức xếp một món quà. Các dòng của bảng được đánh số từ ~1~ đến ~n~, từ trên xuống dưới và các cột của bảng được đánh số từ ~1~ đến ~n~, từ trái qua phải. Ô nằm trên giao của dòng ~i~ và cột ~j~ được gọi là ô ~(i, j)~ và món quà trên ô đó có giá trị là ~a_{ij}\ (1 ≤i, j≤n)~.

Ban tổ chức cho phép Vinh chọn một trong ~k~ phương án nhận phần thưởng. Phần thưởng trong phương án thứ ~s\ (s = l, 2,…, k)~ được xác định như sau: Vinh được nhận các món quà trên các ô của lưới thuộc một trong ~p~ hình vuông kích thước ~r × r~, trong đó hình thứ ~h~ xác định bởi ô góc trên trái có tọa độ ~(x_{sh}, y_{sh}), h = 1, 2, … p~. Chú ý là các hình vuông này nằm trọn vẹn trong lưới và có thể có các hình vuông là giao nhau.

**Yêu cầu:** Hãy giúp Vinh chọn phương án nhận phần thưởng với tổng giá trị của các món quà nhận được là lớn nhất.

## Dữ liệu vào:
- Dòng thứ nhất chứa bốn số nguyên dương ~n, k, r, p~;
- Dòng thứ ~i~ trong số ~n~ dòng tiếp theo chứa ~n~ số nguyên dương, số thứ ~j~ là ~a_{ij}\ (a_{ij}≤10^6), (i=1,2,…n;j= 1,2,…,n)~;
- Dòng thứ ~s~ trong số ~k~ dòng tiếp theo chứa ~2×p~ số nguyên dương ~x_{s1},x_{s2},…,x_{sp}~ xác định ~p~ hình vuông trong phương án thứ ~s\ (s = 1, 2,…, k)~.

Hai số liên tiếp trên cùng dòng được ghi cách nhau bởi dấu cách.

## Dữ iệu ra:
- Ghi ra một số nguyên duy nhất là giá trị lớn nhất của tổng giá trị các món quà mà Vinh có thể nhận được.

## Giới hạn:
- Có ~25\%~ số test ứng với ~25\%~ số điểm của bài có ~n ≤ 50; k ≤ 50;p≤5~;
- Có ~25\%~ số test khác ứng với ~25\%~ số điểm của bài có ~n ≤ 500; k≤ 10^5;p=2~;
- Có ~25\%~ số test khác ứng với ~25\%~ số điểm của bài có ~n ≤ 500; k≤ 10^5; p=3~;
- ~25\%~ số tes còn lại ứng với ~25\%~ số điểm của bài có ~n ≤ 500; k≤ 10^5;p ≤5~.

## Vị dụ:
#### Dữ liệu vào:
```
4 2 2 3
1 1 1 1
1 1 1 1
1 1 1 1
1 1 1 1
1 1 2 2 3 3
1 1 1 3 3 1
```

#### Dữ liệu ra:
```
12
```

#### Giải thích:
<center><img src="/images/problems/1509/bonus.png" width=900px></center>