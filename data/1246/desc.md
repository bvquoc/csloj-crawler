**<center>Nguồn: Đề thi chính thức K10 và 11 DHBB 2015-2016</center>**

Hiếu là người thắng cuộc trong một cuộc thi “Tìm hiểu kiến thức vũ trụ” và được nhận các phần thưởng do trung tâm TAS tài trợ. Các phần thưởng được bố trí trên một bảng kích thước ~m × n~, các dòng của bảng được đánh số từ ~1~ đến ~m~, từ trên xuống dưới và các cột của bảng được đánh số từ ~1~ đến ~n~, từ trái qua phải. Ô nằm trên giao của dòng ~i~ và cột ~j~ được gọi là ô ~(i, j)~ và trên ô đó chứa một món quà có giá trị là ~a_{ij}\ (1 ≤ i ≤ m, 1 ≤ j ≤ n)~.

Để nhận phần thưởng, Hiếu cần trả lời các câu hỏi có dạng: “Cho một hình chữ nhật con có ô trái trên là ô ~(x,y)~ và ô phải dưới là ô ~(u,v)~, cần đưa ra tổng giá trị các phần quà trong hình chữ nhật con này”.

**Yêu cầu:** Cho giá trị các phần quà được đặt trên bảng và ~q~ bộ ~x_k, y_k , u_k, v_k\ (k = 1, 2, ..., q)~ tương ứng với ~q~ truy vấn, hãy đưa ra các câu trả lời cho ~q~ truy vấn.

## Dữ liệu vào:
- Dòng thứ nhất chứa ba số nguyên dương ~m, n, q\ (q ≤ m × n)~;
- Dòng thứ ~i~ trong số ~m~ dòng tiếp theo chứa ~n~ số nguyên dương, số thứ ~j~ là ~a_{ij}\ (a_{ij} ≤ 10^6)~;
- Dòng thứ ~k~ trong số ~q~ dòng tiếp theo chứa ~4~ số nguyên dương ~x_k, y_k , u_k, v_k\ (k = 1, 2, \dots, q)~.

Các số trên cùng một dòng được ghi cách nhau ít nhất một dấu cách.

## Dữ liệu ra:
- Ghi ra ~q~ dòng, mỗi dòng chứa một số là câu trả lời cho một truy vấn theo thứ tự xuất hiện trong dữ liệu vào.

## Ví dụ:
#### Dữ liệu vào:
```
4 2 2
2 2
3 0
0 1
4 6
1 1 2 2
1 2 4 2
```

#### Dữ liệu ra:
```
7
9
```

## Giới hạn:
- Có ~25\%~ số test ứng với ~25\%~ số điểm của bài có ~m, n ≤ 50~;
- Có ~25\%~ số test khác ứng với ~25\%~ số điểm của bài có ~m = 1; n ≤ 10^6~;
- Có ~25\%~ số test khác ứng với ~25\%~ số điểm của bài có ~m, n ≤ 1000~;
- Có ~25\%~ số test còn lại với ~25\%~ số điểm của bài có ~m × n ≤ 10^6~.
**Nguồn:** [Chuyên Sơn La Online Judge](http://csloj.ddns.net/)

**Group giải đáp thắc mắc:** [Lập trình 24h](https://www.facebook.com/groups/1386904321519984)