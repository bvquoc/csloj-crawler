<!--
**<center>NGUỒN: Ôn HN tháng 11/2017, Thầy Đỗ Đức Đông, Ngày 2</center>**
-->

Cho lưới ô vuông kích thước ~m×n~, các hàng được đánh số từ ~1~ đến ~m~ từ trên xuống dưới, các cột được đánh số từ ~1~ đến ~n~ từ trái sang phải. Ô ở hàng ~i~ cột ~j~ là ô ~(i, j)~. Người ta tô các ô vuông bởi ~n~ màu, mã màu được đánh số từ ~1~ đến ~n~. Ký hiệu ~L_j~ là số lượng các màu khác nhau được dùng để tô các ô trong cột ~j~. Ta gọi độ đa sắc của lưới là giá trị ~\max L_j\ (j = 1..n)~.

Cho phép hoán đổi màu của hai ô bất kỳ trên lưới. Mỗi phép hoán đổi được mô ta bởi bộ ~4~ số nguyên ~(s, u, t, v)~ cho biết hai ô ~(s, u)~ và ~(t, v)~ được hoán đổi màu cho nhau.

**Yêu cầu**: Hãy xác định một dãy các phép hoán đổi để đưa bảng màu về trạng thái có độ đa sắc nhỏ nhất.

## Dữ liệu vào:
- Dòng đầu chứa số ~T~ là số bộ dữ liệu ~(T ≤ 30)~.
- ~T~ nhóm dòng tiếp theo, mỗi nhóm dòng mô ta một bộ dữ liệu theo khuôn dạng sau:
    - Dòng đầu tiên chứa hai số nguyên ~m, n\ (m, n ≤ 50)~
    - Dòng thứ i trong số ~m~ dòng tiếp theo chứa ~n~ số nguyên ~c_{i_1}, c_{i_2}, …, c_{i_n}~ mô ta dòng ~i~ của bảng màu.

## Dữ liệu ra:
Gồm ~T~ nhóm dòng tương ứng với ~T~ bộ dữ liệu ở đầu vào:
- Dòng đầu ghi số nguyên ~p~ là số phép hoán đổi cần thực hiện
- ~p~ dòng tiếp theo, mỗi dòng ghi ~4~ số nguyên ~s, u, t, v~ mô ta một phép hoán đổi.
Nếu có nhiều dãy phép hoán đổi thì chỉ cần ghi ra dãy phép hoán đổi bất kỳ.

## Ví dụ:
#### Dữ liệu vào:
```
1 
2 3
1 2 3
3 1 2
```

## Dữ liệu ra:
```
2
2 1 2 2
2 2 2 3
```
**Nguồn:** [Chuyên Sơn La Online Judge](http://csloj.ddns.net/)

**Group giải đáp thắc mắc:** [Lập trình 24h](https://www.facebook.com/groups/1386904321519984)