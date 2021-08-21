Cho lưới ô vuông kích thước ~n×n~ ô vuông ~(1≤n≤1000)~, các hàng đánh số từ ~1~ đến ~n~ từ trên xuống dưới và các cột đánh số từ ~1~ đến ~n~ từ trái qua phải. Ô vuông nằm ở hàng ~i~ và cột ~j~ có chứa số nguyên ~a_{ij}~ và được ký hiệu là ~(i,j)~. Khoảng cách Mahatan giữa hai ô ~(i,j)~ và ~(r,c)~ được tính bởi công thức ~|r-i|+|c-j|~.

**Yêu cầu:** Cho trước số ~k~, hãy tìm ô ~(i,j)~ mà tổng giá trị của các ô trong bảng có khoảng cách đến ~(i,j)~ không lớn hơn ~k~ là lớn nhất. Bạn cũng chỉ cần in ra giá trị lớn nhất này.

Ví dụ dưới đây, khi ~k=2~ Thì ô ~(3,3)~ là ô phải tìm với các ô màu xám có khoảng cách không lớn hơn ~2~:
<center><img src="/images/problems/250/MAHATAN.svg" width="300px" /></center>

## Dữ liệu vào:
- Dòng đầu tiên ghi hai số nguyên dương ~n, k~;
- ~n~ dòng tiếp theo, dòng thứ ~i~ ghi ~n~ số nguyên, số thứ ~j~ là ~a_{ij}~.

## Dữ liệu ra:
- Một số nguyên duy nhất là giá trị tổng lớn nhất tìm được.

## Ví dụ:
#### Dữ liệu vào:
```
5 2
50 5 25 6 17
14 3 2 7 21
99 10 1 2 80
8 7 5 23 11
10 0 78 1 9
```

#### Dữ liệu ra:
```
342
```
**Nguồn:** [Chuyên Sơn La Online Judge](http://csloj.ddns.net/)

**Group giải đáp thắc mắc:** [Lập trình 24h](https://www.facebook.com/groups/1386904321519984)