**<center>Nguồn:  Free Contest 02</center>**

Cho một dãy ô dài vô hạn, các ô được đánh số từ trái sang phải bắt đầu từ ~1~. Trên dãy ô này, đặt một số quân tốt sao cho mỗi ô có không quá một quân. Có ~3~ phép biến đổi dãy ô như sau:
- Biến mất: Quân tốt tại ô ~i~ có thể nhảy sang ô ~i-2~ hoặc ~i+2~, Điều kiện để nhảy là ô mục tiêu phải nằm trong dãy ô và là ô trống, ô ~i-1~ (hoặc ô ~i+1~, tùy theo hướng nhảy) phải chứa quân tốt. Sau bước nhảy, quân tốt ở ô ~i-1~ (hoặc ô ~i+1~) biến mất.
- Xuất hiện: Quân tốt tại ô ~i~ có thể nhảy sang ô ~i-2~ hoặc ~i+2~, Điều kiện để nhảy là ô mục tiêu phải nằm trong dãy ô và là ô trống, ô ~i-1~ (hoặc ô ~i+1~, tùy theo hướng nhảy), phải là ô trống. Sau bước nhảy, một quân tốt xuất hiện tại ô ~i-1~ (hoặc ô ~i+1~).
- Nhảy: Quân tốt tại ô ~i~ có thể nhảy sang ô ~i-3~ hoặc ~i+3~. Điều kiện để nhảy là ô mục tiêu phải nằm trong dãy ô và là ô trống. Các ô khác không bị ảnh hưởng bởi bước nhảy này.

Bạn được cho một dãy ô ban đầu, và ~N~ dãy ô cần kiểm tra. Trong các dãy ô cần kiểm tra, đếm xem có bao nhiều dãy có thể đạt được bằng cách biến đổi dãy ô ban đầu.

## Dữ liệu vào:
- Dòng đầu tiên chứa một xâu chứa không quá ~50~ kí tự mô tả dãy ô ban đầu. Kí tự `*` đại diện cho một quân tốt, kí tự `.` đại diện cho một ô trống. Lưu ý rằng xâu này mô tả phần đầu của dãy ô, các ô còn lại của dãy ô đều là ô trống;
- Dòng thứ hai chứa số nguyên dương ~N~, là số dãy ô cần kiểm tra ~(1 ≤ N ≤ 50)~;
- ~N~ dòng tiếp theo, mỗi dòng chứa một xâu mô tả một dãy ô cần kiểm tra. Các xâu này có độ dài không quá ~50~.

## Dữ liệu ra:
- In ra số lượng dãy ô cần kiểm tra đạt được từ dãy ô ban đầu.

## Ví dụ:
#### Dữ liệu vào:
```
**.
3
..*
*.**
.*.*
```

#### Dữ liệu ra:
```
3
```

#### Dữ liệu vào:
```
..***
3
..****..*
..***....
..****
```

#### Dữ liệu ra:
```
2
```
**Nguồn:** [Chuyên Sơn La Online Judge](http://csloj.ddns.net/)

**Group giải đáp thắc mắc:** [Lập trình 24h](https://www.facebook.com/groups/1386904321519984)