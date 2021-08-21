**<center>Nguồn: Thầy Thuận, Tập huấn đội tuyển Quảng Ninh, HÀ NỘI, 15/11/2016</center>**

Một người du lịch xuất phát từ thành phố thứ nhất muốn đi thăm quan tất cả ~n − 1~ thành phố khác, mỗi thành phố đúng một lần, rồi quay trở lại thành phố xuất phát.

**Yêu cầu:** Cho biết chi phí đi lại giữa các thành phố, hãy giúp người du lịch tìm hành trình với tổng chi phí là nhỏ nhất.

## Dữ liệu vào:
- Dòng đầu tiên chứa hai số nguyên dương ~n, m~ cách nhau bởi dấu cách ~(n ≤ 20, m < 400)~;
- ~m~ dòng tiếp theo mỗi dòng chứa ba số nguyên dương ~i, j, c\ (i, j ≤ n, c ≤ 10^6)~ biểu thị chi phí đi trực tiếp từ thành phố ~i~ đến thành phố ~j~ là ~c~.

**Lưu ý:** Nếu từ thành phố ~i~ đến thành phố ~j~ nào không mô tả chi phí đi lại thì có nghĩa là không có đường đi trực tiếp từ ~i~ đến ~j~.

## Dữ liệu ra:
- Ghi ra duy nhất một số là tổng chi phí hành trình nhỏ nhất tìm được.

## Ví dụ
#### Dữ liệu vào:
```
2 2
1 2 3
2 1 2
```

#### Dữ liệu ra:
```
5
```